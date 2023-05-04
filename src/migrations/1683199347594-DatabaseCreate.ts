import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseCreate1683199347594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('rentacat', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('rentacat', true);
  }
}
