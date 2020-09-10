import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SkuSize } from './SkuSize';

@Entity()
export class Sku {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column()
    public name: string;

    @OneToMany(type => SkuSize, size => size.sku)
    public sizes: SkuSize[];

    public toString(): string {
        return `${this.name}`;
    }

}
