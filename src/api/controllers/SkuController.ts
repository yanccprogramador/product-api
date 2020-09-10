import {  IsNumber, ValidateNested, IsNotEmpty } from 'class-validator';
import {
  Get, JsonController,
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { SkuSize } from '../models/SkuSize';
import { SkuService } from '../services/SkuService';
import { Sku } from '../models/Sku';

export class SkuResponse  {
    @IsNumber()
    public id: number;
    @IsNotEmpty()
    public name: string;

    @ValidateNested()
    public sizes: SkuSize[];
}

@JsonController('/sku')
@OpenAPI({ })
export class SkuController {

    constructor(
        private skuService: SkuService
    ) { }

    @Get()
    @ResponseSchema(SkuResponse, { isArray: true })
    public find(): Promise<Sku[]> {
        return this.skuService.find();
    }

}
