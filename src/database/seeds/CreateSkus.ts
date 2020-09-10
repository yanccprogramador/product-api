import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';

import { Sku } from '../../api/models/Sku';
import { SkuSize } from '../../api/models/SkuSize';

export class CreateSkus implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        const sku = new Sku();
        sku.name = 'Roupa';
        const skuSaved = await em.save(sku);
        const skuSizeM = new SkuSize();
        skuSizeM.size = 'M';
        skuSizeM.skuId = skuSaved.id;
        await em.save(skuSizeM);
        const skuSizeP = new SkuSize();
        skuSizeP.size = 'P';
        skuSizeP.skuId = skuSaved.id;
        await em.save(skuSizeP);
        const skuSizeG = new SkuSize();
        skuSizeG.size = 'M';
        skuSizeG.skuId = skuSaved.id;
        await em.save(skuSizeG);
        const sku2 = new Sku();
        sku2.name = 'Tenis';
        const skuSaved2 = await em.save(sku2);
        const skuSize35 = new SkuSize();
        skuSize35.size = '35';
        skuSize35.skuId = skuSaved2.id;
        await em.save(skuSize35);
        const skuSize40 = new SkuSize();
        skuSize40.size = '40';
        skuSize40.skuId = skuSaved2.id;
        await em.save(skuSize40);
        const skuSize42 = new SkuSize();
        skuSize42.size = 'M';
        skuSize42.skuId = skuSaved2.id;
        await em.save(skuSize42);
        return skuSaved;
    }

}
