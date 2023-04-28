import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'cats',
})
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  imgSrc: string;

  @Column()
  @Field()
  age: number;

  @Column()
  @Field()
  color: string;

  @Column()
  @Field()
  favoriteFood: string;

  @Column()
  @Field()
  dailyPrice: number;

  @Column()
  @Field()
  monthlyPrice: number;
}
