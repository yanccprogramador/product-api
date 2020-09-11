import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';
import * as uuid from 'uuid';

import { User } from '../../api/models/User';

export class CreateBruceAndAlfred implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<User> {
        // const userFactory = factory<User, { role: string }>(User as any);
        // const adminUserFactory = userFactory({ role: 'admin' });

        // const bruce = await adminUserFactory.make();
        // console.log(bruce);

        // const bruce2 = await adminUserFactory.seed();
        // console.log(bruce2);

        // const bruce3 = await adminUserFactory
        //     .map(async (e: User) => {
        //         e.firstName = 'Bruce';
        //         return e;
        //     })
        //     .seed();
        // console.log(bruce3);

        // return bruce;

        // const connection = await factory.getConnection();
        const em = connection.createEntityManager();
        const userAlfred = new User();
        userAlfred.id = uuid.v1();
        userAlfred.firstName = 'Alfred';
        userAlfred.lastName = 'Pennyworth';
        userAlfred.email = 'alfred@wayne-enterprises.com';
        userAlfred.username = 'alfred';
        userAlfred.password = '1234';
        userAlfred.admin = false;
        await em.save(userAlfred);

        const user = new User();
        user.id = uuid.v1();
        user.firstName = 'Bruce';
        user.lastName = 'Wayne';
        user.email = 'bruce.wayne@wayne-enterprises.com';
        user.username = 'bruce';
        user.password = '1234';
        user.admin = true;
        return await em.save(user);
    }

}
