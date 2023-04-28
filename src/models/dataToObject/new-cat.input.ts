import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewCatInput {
  @Field()
  name: string;

  @Field()
  imgSrc: string;

  @Field((type) => Int)
  age: number;

  @Field()
  color: string;

  @Field()
  favoriteFood: string;

  @Field((type) => Int)
  dailyPrice: number;

  @Field((type) => Int)
  monthlyPrice: number;
}
