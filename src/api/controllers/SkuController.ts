import {
  Get, JsonController,
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { SkuService } from '../services/SkuService';
import { Sku } from '../models/Sku';
import { SkuResponse } from './responses/SkuResponse';

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
