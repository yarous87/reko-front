'use strict';

//import test from './diff';
//import { diff1, diff4 } from './diff';
//import * as diffs from './diff';

//test();

//diff1();
//diff4();

//diffs.diff1();
//diffs.diff2();
//diffs.diff3();
//diffs.diff4();

/*import arrow from './arrow';
import * as deconstruct from './deconstruct';
import * as spread from './spread';
import * as rest from './rest';*/

//arrow();

//deconstruct.e1();
//deconstruct.e2();
//deconstruct.e3();
//deconstruct.e4();
//deconstruct.e5();
//deconstruct.e6();
//deconstruct.e7();
//deconstruct.e8();

//spread.e1();
//spread.e2();
//spread.e3();
//spread.e4();
//spread.e5();

/*console.log(rest.e1(1, 2, 3, 4));
console.log(rest.e2(1, 2, 3, 4));
rest.e3(1, 2, 3, 4);
rest.e3();*/

import { Test } from './class';
//import { Test2 } from './class2';

window.Test = Test;
//window.Test2 = Test2;

window.test = new Test(1, 2);
//window.test2 = new Test2(1, 2, 3);

/*document.addEventListener('click', e => console.log(e));

Array.from(document.querySelectorAll('button')).forEach((btn, i) => {
    btn.addEventListener('click', e => {
        if (i == 2) {
            e.stopImmediatePropagation();
        }

        console.log('btn2:' + e.target);
    });
});

Array.from(document.querySelectorAll('button')).forEach((btn, i) => {
    btn.addEventListener('click', e => {
        if (i == 1) {
            e.stopPropagation();
        }

        console.log('btn:' + e.target);
    });
});*/

document.getElementById('test1').addEventListener('click', () => {
    window.test.showAlert1();
});
document.getElementById('test2').addEventListener('click', window.test.showAlert2);