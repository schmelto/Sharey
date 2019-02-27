/*
 BoxFit v1.2.4 - jQuery Plugin
 (c) 2012 Michi Kono (michikono.com); https://github.com/michikono/boxfit
 License: http://www.opensource.org/licenses/mit-license.php
 To use: $('#target-div').boxFit()
 Will make the *text* content inside the div (or whatever tag) scale to fit that tag
 */

!function (a, b) {
    'use strict'
    'function' == typeof define && define.amd ? define(['jquery'], function (c) {
        return b(a, c)
    }) : 'object' == typeof exports ? module.exports = b(a, require('jquery')) : b(a, jQuery)
}(this, function (a, b) {
    'use strict';
    var c = function (c, d) {
        return c.each(function () {
            var c, e, f, g, h, i, j, k
            if (j = {
                width: null,
                height: null,
                step_size: 1,
                step_limit: 200,
                align_middle: !0,
                align_center: !0,
                multiline: !1,
                minimum_font_size: 5,
                maximum_font_size: null,
                line_height: '100%'
            }, b.extend(j, d), j.width ? (i = j.width, b(this).width(i + 'px')) : i = b(this).width(), j.height ? (g = j.height, b(this).height(g + 'px')) : g = b(this).height(), i && g) {
                for (j.multiline || b(this).css('white-space', 'nowrap'), h = b(this).html(), 0 === b('<div>' + h + '</div>').find('span.boxfitted').length ? (k = b(b('<span></span>').addClass('boxfitted').html(h)), b(this).html(k)) : k = b(b(this).find('span.boxfitted')[0]), c = 0, e = k, b(this).css('display', 'table'), e.css('display', 'table-cell'), j.align_middle && e.css('vertical-align', 'middle'), j.align_center && (b(this).css('text-align', 'center'), e.css('text-align', 'center')), e.css('line-height', j.line_height), e.css('font-size', j.minimum_font_size); b(this).width() <= i && b(this).height() <= g && !(c++ > j.step_limit) && (f = parseInt(e.css('font-size'), 10), !(j.maximum_font_size && f > j.maximum_font_size));) e.css('font-size', f + j.step_size);
                return e.css('font-size', parseInt(e.css('font-size'), 10) - j.step_size), b(this)
            }
            return null !== a.console ? console.info('Set static height/width on target DIV before using boxfit! Detected width: ' + i + ' height: ' + g) : void 0
        })
    }
    return b.fn.boxfit = function (a) {
        return c(this, a)
    }, c
})