import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { SkuSizeProductRepository } from '../repositories/SkuSizeProductRepository';
import { SkuSizeProduct } from '../models/SkuSizeProduct';

@Service()
export class SkuSizeProductService {

    constructor(
        @OrmRepository() private skuSizeProductRepository: SkuSizeProductRepository
    ) { }

    public saveAll(body: SkuSizeProduct[]): Promise<SkuSizeProduct[]> {
        return this.skuSizeProductRepository.save(body);
    }

}
