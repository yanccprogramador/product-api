import { EntityRepository, Repository } from 'typeorm';

import { SkuSizeProduct } from '../models/SkuSizeProduct';

@EntityRepository(SkuSizeProduct)
export class SkuSizeProductRepository extends Repository<SkuSizeProduct> {

}
