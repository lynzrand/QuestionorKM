// ==UserScript==
// @name         Questionor Keyboard Listener
// @namespace    https://01010101lzy.github.io
// @version      0.27
// @description  Faster practice with keyboard!
// @author       Lynz Rand
// @match        *questionor.cn/*/practice
// @grant        none
// ==/UserScript==

/*
This script maps keys to certain options so that faster practice is possible.
3 or 4 options:
         [A]        [B]       [C]         [D]
    `   1   2   3 \ 4   5 \ 6   7   8 / 9   0   -   =   | BKSP
  TAB |  Q   W   E | R   T | Y   U | I   O   P   [   ]  | \
  CAPS \ A   S   D | F   G | H   J | K   L   ;   '      | ENTER
  SHIFT \ Z   X   C \ V   B \ N   M \ ,   .   /        / SHIFT

2 options:
               [A]                    [B]
    `   1   2   3   4   5 \ 6   7   8   9   0   -   =   | BKSP
  TAB |  Q   W   E   R   T | Y   U   I   O   P   [   ]  | \
  CAPS \ A   S   D   F   G | H   J   K   L   ;   '      | ENTER
  SHIFT \ Z   X   C   V   B \ N   M   ,   .   /        / SHIFT

more than 4 options:
      `   1   2   3   4   5   6   7   8   9   0   -   =   | BKSP
  TAB |  Q   W   E   R   T   Y   U   I   O   P   [   ]  | \
  CAPS \[a] [b] [c] [d]  G   H  [e] [f] [g] [h]  '      | ENTER
  SHIFT \ Z   X   C   V   B   N   M   ,   .   /        / SHIFT

  Above all that, special functions are binded to following keys:
  [Check/Next]:   ENTER, SPACE
  [Skip]:         TAB
  [Clear All]:    ESC, BKSP, DEL, \
*/

(function () {
  'use strict';
  var unchecked = 1;
  // 1 to -3 are for selecting options
  // -1 is auto-check 
  // -2 is force skip
  // -3 is clear all
  var a = new Array(new Array(
      // 1 ops
      0, 0, 0, 0, 0, 0, 0, 0, -2, -1, 0, 0, -2, -1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, -2, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, -2, 0, // 2-1
      // numbers
      1, 1, 1, 1, 1,
      2, 2, 2, 2, 2, // 5-1

      0, 0, 0, 0, 0, 0, 0,
      // letters
      1, 1, 1, 1, 1, 1, 1, 2,
      2, 2, 2, 2, 2, 2, 2, 2,
      1, 1, 1, 1, 2, 1, 1, 1,
      2, 1,
      0, 0, 0, 0, 0,
      // keypad
      -2, 1, 1, 2, 2,
      0, 0, 0, 0, 0, -1, -1, 0, -1, -1, -1, -1,
      // Fn
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      // symbols
      0, 0,
      0, 2, 2, 2, -2, 0, 0, 0
    ),
    new Array(
      0, 0, 0, 0, 0, 0, 0, 0, -3, -2, 0, 0, -3, -1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, -3, 0, 0, 0, 0, -1, 0, -2, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, -3, 0, // 4-2
      // numbers
      1, 1, 1, 2, 2,
      3, 3, 3, 4, 4, // 5-2

      0, 0, 0, 0, 0, 0, 0,
      // letters
      1, 2, 1, 1, 1, 2, 2, 3,
      4, 3, 4, 4, 4, 3, 4, 4,
      1, 2, 1, 2, 3, 2, 1, 1,
      3, 1,
      0, 0, 0, 0, 0,
      // keypad
      -3, 1, 2, 3, 4,
      0, 0, 0, 0, 0, -2, -1, 0, -2, -2, -1, -2,
      // Fn
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      // symbols
      0, 0,
      0, 4, 4, 4, -3, 0, 0, 0
    ),
    new Array(
      0, 0, 0, 0, 0, 0, 0, 0, -3, -2, 0, 0, -3, -1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, -3, 0, 0, 0, 0, -1, 0, -2, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, -3, 0, // 4-2
      // numbers
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 5-2

      0, 0, 0, 0, 0, 0, 0,
      // letters
      1, 0, 0, 3, 0, 4, 0, 0,
      0, 5, 6, 7, 0, 0, 0, 0,
      0, 0, 2, 0, 0, 0, 0, 0,
      0, 0,
      0, 0, 0, 0, 0,
      // keypad
      -3, 1, 2, 3, 4,
      5, 6, 7, 8, 0, -2, -1, 0, -2, -2, -1, -2,
      // Fn
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      // symbols
      0, 0,
      0, 0, 0, 0, -3, 0, 0, 0
    ));
  a[0][251] = 2; // too far away.
  a[1][254] = 4; // too far away.
  a[2][186] = 8; // too far away.
  $(document).keydown(function (event) {
    var b = event.keyCode;
    var l = $("label input").length;
    var c;
    switch (l) {
      case 2:
        c = a[0][b];
        break;
      case 3:
      case 4:
        c = a[1][b];
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        c = a[2][b];
        break;
      default:
        c = a[2][b];
        break;
    }
    // console.log("KeyCode", b, "->", c);
    if (c !== undefined && c !== 0) {
      if (c > 0) {
        // clicks option
        try {
          $("label input")[c - 1].click();
        } catch (e) {
          // console.log(e);
        }
      } else if (c == -1) {
        // auto check & skip
        if (unchecked) {
          unchecked = 0;
          $(".qs-practice-btn-check").click();
        } else {
          unchecked = 1;
          $(".qs-practice-btn-next").click();
        }
      } else if (c == -2) {
        // skip
        unchecked = 1;
        $(".qs-practice-btn-next").click();
      } else if (c == -3) {
        // clear all
        var options = $("label input").each(function (i, e) {
          e.checked = false;
        });
      }
    }
  });
})();