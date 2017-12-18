import { Test } from './class';

class Test2 extends Test {
    constructor(param1, param2, param3) {
        console.log(arguments);
        super(...arguments);

        this.p3 = param3;
    }

    showAlert1() {
        alert(this.p1 + ' ' + this.p3);
    }

    showAlert3() {
        super.showAlert1();
    }
}

export { Test2 };