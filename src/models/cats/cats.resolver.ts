import { Resolver, Query } from '@nestjs/graphql';
import { CatsService } from './cats.service';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query((returns) => String)
  public async testQuery() {
    return 'Hello Kitty!';
  }
}
