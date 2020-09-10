import { IsNotEmpty, IsNumber, IsUUID, ValidateNested } from 'class-validator';
import {
    Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import { ProductNotFoundError } from '../errors/ProductNotFoundError';
import { Product } from '../models/Product';
import { ProductService } from '../services/ProductService';
import { UserResponse } from './UserController';
import { SkuSizeProduct } from '../models/SkuSizeProduct';
import { SkuSizeProductService } from '../services/SkuSizeProductService';

class BaseProduct {
    @IsNotEmpty()
    public name: string;

    @IsNumber()
    public value: number;
}

export class ProductResponse extends BaseProduct {
    @IsUUID()
    public id: string;

    @ValidateNested()
    public user: UserResponse;
}

class CreateProductBody extends BaseProduct {
    @IsNotEmpty()
    public skuSizes: SkuSizeProduct[];
    @IsNotEmpty()
    public skuId: number;
}

@Authorized()
@JsonController('/products')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class ProductController {

    constructor(
        private productService: ProductService,
        private skuSizeProductService: SkuSizeProductService
    ) { }

    @Get()
    @ResponseSchema(ProductResponse, { isArray: true })
    public find(): Promise<Product[]> {
        return this.productService.find();
    }

    @Get('/:id')
    @OnUndefined(ProductNotFoundError)
    @ResponseSchema(ProductResponse)
    public one(@Param('id') id: number): Promise<Product | undefined> {
        return this.productService.findOne(id);
    }

    @Post()
    @ResponseSchema(ProductResponse)
    public async create(@Body({ required: true }) body: CreateProductBody): Promise<Product> {
        const product = new Product();
        // product.description = body.description;
        product.name = body.name;
        product.value = body.value;
        product.skuId = body.skuId;

        const createdProduct = await this.productService.create(product);
        body.skuSizes.map(el => el.productId = createdProduct.id);
        this.skuSizeProductService.saveAll(body.skuSizes);
        return createdProduct;
    }

    @Put('/:id')
    @ResponseSchema(ProductResponse)
    public async update(@Param('id') id: number, @Body() body: CreateProductBody): Promise<Product> {
        const product = new Product();
        product.value = body.value;
        // product. description = body.description;
        product.name = body.name;

        const createdProduct =  await this.productService.update(id, product);
        body.skuSizes.map(el => el.productId = createdProduct.id);
        return createdProduct;
    }

    @Delete('/:id')
    public delete(@Param('id') id: number): Promise<void> {
        return this.productService.delete(id);
    }

}
