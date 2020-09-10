import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn,  OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { SkuSize } from './SkuSize';
import { Product } from './Product';

@Entity({name: 'skuSizeProduct'})
export class SkuSizeProduct {

    @PrimaryGeneratedColumn()
    public id: string;

    @IsNotEmpty()
    @Column()
    public stock: number;

    @IsNotEmpty()
    @Column()
    public productId: number;

    @IsNotEmpty()
    @Column()
    public skuSizeId: number;

    @OneToOne(type => SkuSize, skuSize => skuSize.id)
    @JoinColumn({ name: 'skuSizeId' })
    public skuSize: SkuSize;

    @OneToOne(type => Product, product => product.id)
    @JoinColumn({ name: 'productId' })
    public product: Product;

}
