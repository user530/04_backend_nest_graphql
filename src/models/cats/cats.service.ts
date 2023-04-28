import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCatInput } from '../dataToObject/new-cat.input';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}

  public async getAllCats(): Promise<Cat[]> {
    return await this.catRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCat(newCatData: NewCatInput): Promise<Cat> {
    const newCat = this.catRepository.create(newCatData);

    await this.catRepository.save(newCat).catch((err) => {
      throw new InternalServerErrorException();
    });

    return newCat;
  }
}
