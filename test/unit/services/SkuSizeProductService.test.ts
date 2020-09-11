import { RepositoryMock } from '../lib/RepositoryMock';
import { SkuSizeProduct } from '../../../src/api/models/SkuSizeProduct';
import { SkuSizeProductService } from '../../../src/api/services/SkuSizeProductService';

describe('SkuSizeProductService', () => {
        const repo = new RepositoryMock();
        let sizeProducts: SkuSizeProduct[];
        const productService = new SkuSizeProductService(repo as any);
    beforeAll(async () => {
        sizeProducts = [];
        sizeProducts[0] = new SkuSizeProduct();
        sizeProducts[0].productId = 1;
        repo.list = [];
    });

    test('Find should return a list of products', async (done) => {
        const list = await productService.saveAll(sizeProducts);
        expect(list[0].productId).toBe(sizeProducts[0].productId);
        done();
    });
});
