import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';

@Module({
  imports: [],
  providers: [CatsService, CatsResolver],
  exports: [CatsService],
})
export class CatsModule {}
