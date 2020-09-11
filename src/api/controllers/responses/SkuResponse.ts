import { IsNumber, IsNotEmpty, ValidateNested } from 'class-validator';
import { SkuSize } from 'src/api/models/SkuSize';

export class SkuResponse  {
    @IsNumber()
    public id: number;
    @IsNotEmpty()
    public name: string;

    @ValidateNested()
    public sizes: SkuSize[];
}
