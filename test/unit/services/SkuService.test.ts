import { RepositoryMock } from '../lib/RepositoryMock';
import { Sku } from '../../../src/api/models/Sku';
import { SkuService } from '../../../src/api/services/SkuService';

describe('SkuService', () => {
        const repo = new RepositoryMock();
        const sku = new Sku();
        const skuService = new SkuService(repo as any);
    beforeAll(async () => {
        sku.name = 'Clothes';
        repo.list = [sku];
    });

    test('Find should return a list of products', async (done) => {
        const list = await skuService.find();
        expect(list[0].name).toBe(sku.name);
        done();
    });
});
