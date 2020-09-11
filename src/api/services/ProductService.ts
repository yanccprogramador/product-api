import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';
import { SkuSizeProductRepository } from '../repositories/SkuSizeProductRepository';

@Service()
export class ProductService {

    constructor(
        @OrmRepository() private productRepository: ProductRepository,
        @OrmRepository() private skuSizeProductRepository: SkuSizeProductRepository
    ) { }

    public find(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['sizes', 'sizes.skuSize'] });
    }

    public findOne(id: number): Promise<Product | undefined> {
        return this.productRepository.findOne({ id },
            { relations: ['sizes', 'sizes.skuSize'] });
    }

    public async create(product: Product): Promise<Product> {
        const newProduct = await this.productRepository.save(product);
        return newProduct;
    }

    public update(id: number, product: Product): Promise<Product> {
        product.id = id;
        return this.productRepository.save(product);
    }

    public async delete(id: number): Promise<any> {
        await this.skuSizeProductRepository.delete({productId: id});
        return await this.productRepository.delete(id);
    }

}
