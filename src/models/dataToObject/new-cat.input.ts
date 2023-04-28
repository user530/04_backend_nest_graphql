import { Field, InputType, Int } from '@nestjs/graphql';
import { Min, Max } from 'class-validator';

@InputType()
export class NewCatInput {
  @Field()
  name: string;

  @Field()
  imgSrc: string;

  @Field((type) => Int)
  @Min(1)
  @Max(30)
  age: number;

  @Field()
  color: string;

  @Field()
  favoriteFood: string;

  @Field((type) => Int)
  @Min(50)
  @Max(100)
  dailyPrice: number;

  @Field((type) => Int)
  @Min(1000)
  @Max(2000)
  monthlyPrice: number;
}
