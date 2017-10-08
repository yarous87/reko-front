'use strict';

export function e1() {
    const test = [1, 2, 3];

    let x = test[0];
    let y = test[1];
    let z = test[2];

    console.log(x, y, z);
}

export function e2()  {
    const test = [1, 2, 3];

    let [x, y, z] = test;

    console.log(x, y, z);
}

export function e3()  {
    const test = [1, 2, 3];

    let [x, , z] = test;

    console.log(x, z);
}

export function e4() {
    let a = 'foo';
    let b = 'bar';

    let tmp = b;

    b = a;
    a = tmp;

    console.log(a, b);
}

export function e5() {
    let a = 'foo';
    let b = 'bar';

    [b, a] = [a, b];

    console.log(a, b);
}

export function e6() {
    const test = { 
        foo: 1,
        bar: 2,
        baz: 3
    };

    let { baz, foo, bar } = test;

    console.log(foo, bar, baz);
}

export function e7() {
    const test = { 
        bar: 2,
        baz: 3
    };

    let { baz, foo, bar } = test;

    console.log(foo, bar, baz);
}

export function e8() {
    const test = {
        a: {
            b: 1,
            c: 2
        }
    };

    let { a: { b: value } } = test;

    console.log(value);
}