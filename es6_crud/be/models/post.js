import Sequelize from 'sequelize';

import { db } from '../db';

const PostTable = db.define('Post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
});
/*
PostTable.sync().then(() => {
    PostTable.findOrCreate(
        {
            where: {
                id: 1
            }, 
            defaults: {
                title: 'Testowy wpis',
                content: 'Testowa treść'
            }
        }
    );
});
*/
class Post {
    findAll() {
        return PostTable.findAll();
    }

    find(id) {
        return PostTable.findById(id);
    } 

    create(data) {
        return PostTable.create(data);
    }

    update(id, data) {
        return this.find(id).then(product => {
            if (product) {
                return product.update(data);
            }

            return product;
        });
    }

    delete(id) {
        return this.find(id).then(product => {
            if (product) {
                return product.destroy();
            }

            return product;
        });
    }
}

const PostInstance = new Post();

export { PostInstance as Post };