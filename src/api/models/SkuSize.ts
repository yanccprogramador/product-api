import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne,  PrimaryGeneratedColumn } from 'typeorm';

import { Sku } from './Sku';

@Entity({name: 'skuSize'})
export class SkuSize {

    @PrimaryGeneratedColumn()
    public id: string;

    @IsNotEmpty()
    @Column()
    public size: string;

    @IsNotEmpty()
    @Column()
    public skuId: number;

    @ManyToOne(type => Sku, sku => sku.id)
    @JoinColumn({ name: 'skuId' })
    public sku: Sku;

    public toString(): string {
        return `${this.size}`;
    }

}
