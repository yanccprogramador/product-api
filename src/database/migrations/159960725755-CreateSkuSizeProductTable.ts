import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class CreateSkuSizeProductTable1599607257511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: 'skuSizeProduct',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'stock',
                    type: 'varchar',
                    length: '25',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'skuSizeId',
                    type: 'int',
                    isPrimary: false,
                    isNullable: false,
                }
                , {
                    name: 'productId',
                    type: 'int',
                    isPrimary: false,
                    isNullable: false,
                },
            ],
        });
        await queryRunner.createTable(table);
        await queryRunner.createForeignKey('skuSizeProduct', new TableForeignKey({
            columnNames: ['skuSizeId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'skuSize',
        }));
        await queryRunner.createForeignKey('skuSizeProduct', new TableForeignKey({
            columnNames: ['productId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'product',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('skuSizeProduct');
    }

}
