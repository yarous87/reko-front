import { List } from './list.component';
import { Create } from './create.component';

class App {
    constructor() {
        this.list = new List();
        this.create = new Create();
    }
}

export { App };