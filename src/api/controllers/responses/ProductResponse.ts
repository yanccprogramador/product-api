import { IsUUID, IsNotEmpty, IsNumber } from 'class-validator';
import { SkuSizeProduct } from 'src/api/models/SkuSizeProduct';
class BaseProduct {
    @IsNotEmpty()
    public name: string;

    @IsNumber()
    public value: number;

    public description: string;
}

export class CreateProductBody extends BaseProduct {
    @IsNotEmpty()
    public skuSizes: SkuSizeProduct[];
    @IsNotEmpty()
    public skuId: number;
}
export class ProductResponse extends BaseProduct {
    @IsUUID()
    public id: string;

    public skuSizes: string;
}
