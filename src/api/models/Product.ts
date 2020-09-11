import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Sku } from './Sku';
import { SkuSizeProduct } from './SkuSizeProduct';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public name: string;

    @Column()
    public description: string;

    @IsNotEmpty()
    @Column()
    public value: number;

    @IsNotEmpty()
    @Column()
    public skuId: number;

    @OneToOne(type => Sku, sku => sku.id)
    @JoinColumn({ name: 'skuId' })
    public sku: Sku;

    @OneToMany(type => SkuSizeProduct, size => size.product)
    public sizes: SkuSizeProduct[];

    public toString(): string {
        return `${this.name}`;
    }

}
