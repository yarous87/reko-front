'use strict';

export function e1() {
    let a = [1, 2, 3];
    let b = a;
    let c = [...a];
    let d = a.slice(0);

    console.log(a, b, c, d);

    console.log('a == b', a == b);
    console.log('a == c', a == c);
    console.log('a == c', a == d);
}

export function e2() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(Math.max(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9]));

    console.log(
        a.reduce(function (previous, next) {
            return next > previous ? next : previous;
        })
    );

    console.log(
        a.reduce((previous, next) => next > previous ? next : previous)
    );

    console.log(Math.max(...a));
}

export function e3() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let b = a.slice(3);
    let [, , , ...c] = a;

    console.log('b:', b);
    console.log('c:', c);
}

export function e4() {
    const boys = ['Seba', 'Janusz'];
    const girls = ['Jesika', 'Karina', 'Grażyna'];

    console.log(boys.concat(girls));
    console.log([...boys, ...girls]);
}

export function e5() {
    const a = {
        foo: 1,
        bar: 2,
        baz: 3
    };

    let b = {...a, foo: 7};

    console.log(b);
}