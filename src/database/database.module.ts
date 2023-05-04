import { Module } from '@nestjs/common';
import { DataSource, getConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(
          await getConnectionOptions(
            process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
          ),
        ),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) {
    if (dataSource.isInitialized) console.log('DB Connection Established!');
  }
}

// {
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'rentacat',
//       entities: ['dist/**/entities/*{.ts,.js}'],
//       synchronize: true,
//       migrations: ['src/migrations/*{.ts,.js}'],
//     }
