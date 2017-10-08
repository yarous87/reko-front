'use strict';

export default function() {
    try {
        console.log(a);
        console.log(b);
        console.log(c);
    
        var a = 'var';
        const b = 'const';
        let c = 'let';
    } catch (e) {
        console.log(e);
    }
}

export function diff1() {
    try {
        console.log(a);
        console.log(b);
        console.log(c);
    
        var a = 'var';
        const b = 'const';
        let c = 'let';
    } catch (e) {
        console.log(e);
    }
}

export function diff2() {
    try {
        a = 1;
        b = 2;
        c = 3;
    
        var a = 'var';
        const b = 'const';
        let c = 'let';
    } catch (e) {
        console.log(e);
    }
}

export function diff3() {
    let a = 'test';

    a = {
        foo: 'bar'
    };

    a.foo = 'baz';
    
    const b = {
        foo: 'bar1'
    };


    try {
        b = 'test1';
    } catch (e) {
        console.log(e);
    }
    
    b.foo = 'baz1';

    console.log('a:', a);
    console.log('b:', b);
}

export function diff4() {
    var test = [1,2,3,5];

    for (var i = 0; i < test.length; i++) {
        console.log('i:', i);
    }

    for (let j = 0; j < test.length; j++) {
        console.log('j:', j);
    }

    try {
        console.log('i_fin:', i);
        console.log('j_fin:', j);
    } catch (e) {
        console.log(e);
    }
}