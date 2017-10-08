'use strict';

export function e1() {
    return Array.prototype.reduce.call(arguments, (previous, next) => previous += next);
}

export function e2(...numbers) {
    return numbers.reduce((previous, next) => previous += next);
}

export function e3 (a = 2, b = 4, ...rest) {
    console.log(a, b, rest);
}