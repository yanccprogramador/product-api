import { EntityRepository, Repository } from 'typeorm';

import { Sku } from '../models/Sku';

@EntityRepository(Sku)
export class SkuRepository extends Repository<Sku> {
}
