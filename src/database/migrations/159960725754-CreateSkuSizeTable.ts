import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class CreateSkuSizeTable1599607257511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: 'skuSize',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'size',
                    type: 'varchar',
                    length: '25',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'skuId',
                    type: 'int',
                    isPrimary: false,
                    isNullable: true,
                },
            ],
        });
        await queryRunner.createTable(table);
        await queryRunner.createForeignKey('skuSize', new TableForeignKey({
            columnNames: ['skuId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'sku',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('skuSize');
    }

}
