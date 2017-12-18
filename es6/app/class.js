class Test {
    constructor(param1, param2) {
        console.log(param1, param2);

        this.p1 = param1;
        this.p2 = param2;
    }

    showAlert1() {
        console.log(this);
        //alert(this.p1);
    }

    showAlert2 = () => {
        console.log(this);
        //alert(this.p2);
    }
}

export { Test };