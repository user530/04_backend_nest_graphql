import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat';
import { NewCatInput } from '../dataToObject/new-cat.input';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query((returns) => [Cat])
  public async getAllCats(): Promise<Cat[]> {
    return await this.catsService.getAllCats().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Cat)
  public async addNewCat(
    @Args('newCatData') newCatData: NewCatInput,
  ): Promise<Cat> {
    return await this.catsService.addCat(newCatData).catch((err) => {
      throw err;
    });
  }
}
