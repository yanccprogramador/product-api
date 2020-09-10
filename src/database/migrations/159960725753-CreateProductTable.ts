import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class CreateProductTable1599607257511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: 'product',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'name',
                    type: 'varchar',
                    length: '50',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'value',
                    type: 'double',
                    isPrimary: false,
                    isNullable: false,
                }
                , {
                    name: 'skuId',
                    type: 'int',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'description',
                    type: 'text',
                    isPrimary: false,
                    isNullable: true,
                },
            ],
        });
        await queryRunner.createTable(table);
        await queryRunner.createForeignKey('product', new TableForeignKey({
            columnNames: ['skuId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'sku',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }

}
