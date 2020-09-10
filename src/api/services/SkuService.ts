import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Sku } from '../models/Sku';
import { SkuRepository } from '../repositories/SkuRepository';

@Service()
export class SkuService {

    constructor(
        @OrmRepository() private skuRepository: SkuRepository
    ) { }

    public find(): Promise<Sku[]> {
        return this.skuRepository.find({ relations: ['sizes'] });
    }

}
