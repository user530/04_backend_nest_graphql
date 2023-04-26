import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rentacat',
      entities: ['dist/**/entities/*{.ts,.js}'],
      synchronize: true,
      migrations: ['src/migrations/*{.ts,.js}'],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) {
    if (dataSource.isInitialized) console.log('DB Connection Established!');
  }
}
