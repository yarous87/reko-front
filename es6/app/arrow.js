'use strict';

import $ from 'jquery';

export default function() {
    $('#test1').on('click', function() {
        setTimeout(function() {
            console.log(this);
            alert($(this).text());
        });
    });

    $('#test2').on('click', function() {
        let el = this;

        setTimeout(function() {
            console.log(this);
            alert($(el).text());
        });
    });

    $('#test3').on('click', function() {
        setTimeout(() => {
            console.log(this);
            alert($(this).text());
        });
    });

    $('#test4').on('click', () => {
        setTimeout(() => {
            console.log(this);
            alert($(this).text());
        });
    });
}