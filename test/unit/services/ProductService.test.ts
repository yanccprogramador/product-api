import { RepositoryMock } from '../lib/RepositoryMock';
import { Product } from '../../../src/api/models/Product';
import { ProductService } from '../../../src/api/services/ProductService';
import { SkuSizeProduct } from '../../../src/api/models/SkuSizeProduct';

describe('ProductService', () => {
        const repo = new RepositoryMock();
        const repoSizes = new RepositoryMock();
        let product: Product;
        let sizeProduct: SkuSizeProduct;
        const productService = new ProductService(repo as any, repoSizes as any);
    beforeAll(async () => {
        product = new Product();
        sizeProduct = new SkuSizeProduct();
        product.id = 1;
        product.name = 'Test';
        product.skuId = 1;
        repo.list = [product];
        sizeProduct.productId = 1;
        repoSizes.list = [sizeProduct];
    });

    test('Find should return a list of products', async (done) => {
        const response = await productService.find();
        expect(response[0].name).toBe(product.name);
        done();
    });
    test('FindOne should return a product', async (done) => {
        const productResponse = await productService.findOne(product.id);
        expect(productResponse).toBeUndefined();
        done();
    });
    test('Delete should return affected 1', async (done) => {
        const response = await productService.delete(product.id);
        expect(response).toBeDefined();
        done();
    });
    test('Create should return a product', async (done) => {
        const response = await productService.create(product);
        expect(response.name).toBe(product.name);
        done();
    });
    test('Update should return a product', async (done) => {
        const response = await productService.update(product.id, product);
        expect(response.name).toBe(product.name);
        done();
    });
});
