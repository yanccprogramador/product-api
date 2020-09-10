import { EntityRepository, Repository } from 'typeorm';

import { SkuSize } from '../models/SkuSize';

@EntityRepository(SkuSize)
export class SkuSizeRepository extends Repository<SkuSize> {
}
