// ==UserScript==
// @name         Questionor Keyboard Listener
// @namespace    https://01010101lzy.github.io
// @version      0.1
// @description  Faster practice with keyboard!
// @author       Lynz Rand
// @match        *questionor.cn/*/practice
// @grant        none
// ==/UserScript==

/*
This script divides the keyboard into four main sections,
which controls the four options:

         [A]        [B]       [C]         [D]
   `   1   2   3 \ 4   5 \ 6   7   8 / 9   0   -   =   \ BKSP
  TAB |  Q   W   E \ R   T \ Y   U | I   O   P   [   ]  | \
  CAPS \ A   S   D \ F   G \ H   J \ K   L   ;   '      | ENTER
  SHIFT \ Z   X   C \ V   B \ N   M | ,   .   /        / SHIFT

  Above all that, special functions are binded to following keys:
  [Check/Next]:   ENTER, SPACE
  [Skip]:         TAB
  [Clear All]:    ESC, BKSP, DEL, \

  *Note: Avoid triggering [Clear All] from BKSP.

*/

(function () {
  'use strict';
  var unchecked = 1;
  // 1 to 4 are for selecting options
  // 6 is auto-check 
  // 7 is force skip
  // 8 is clear all
  var a = new Array(
    0, 0, 0, 0, 0, 0, 0, 0,
    8, 7, 0, 0, 8, 6, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 8, 0, 0, 0, 0,
    6, 0, 7, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 8, 0, // 47
    // numbers
    1, 1, 1, 2, 2,
    3, 3, 3, 4, 4, // 57

    0, 0, 0, 0, 0, 0, 0,
    // letters
    1, 2, 1, 1, 1, 2, 2, 3,
    4, 3, 4, 4, 4, 3, 4, 4,
    1, 2, 1, 2, 3, 2, 1, 1,
    3, 1,
    0, 0, 0, 0, 0,
    // keypad
    8, 1, 2, 3, 4,
    0, 0, 0, 0, 0,
    7, 6, 0, 7, 7, 6, 7,
    // Fn
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    // symbols
    0, 0,
    0, 4, 4, 4, 8, 0, 0, 0
  );
  a[251] = 4; // too far away.
  $(document).keydown(function (event) {
    var b = event.keyCode;
    var c = a[b];
    console.log("KeyCode", b, "->", c);
    if (c !== undefined && c != 0) {
      if (c < 5 && c > 0)
        $("label input")[c - 1].click();
      else if (c == 6) {
        if (unchecked) {
          unchecked = 0;
          $(".qs-practice-btn-check").click();
        } else {
          unchecked = 1;
          $(".qs-practice-btn-next").click();
        }
      } else if (c == 7) {
        unchecked = 1;
        $(".qs-practice-btn-next").click();
      } else if (c == 8) {
        var options = $("label input").each(function (i, e) {
          e.checked = false;
        });
      }
    }
  });
})();
