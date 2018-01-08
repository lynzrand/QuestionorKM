# QuestionorKM

This is a script for creating faster practice environment on [Questionor][Q]. 
With this script, you can practice on Questionor without having your hands leaving 
the keyboard. The key map is showed below.

```
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
```
*Note: Avoid triggering [Clear All] from BKSP.

## Download and installation

This script is released in GreasyFork: [Click here][G]

Or you can directly copy the .js script into a new Tampermonkey script.

## Licensing

This script is created by Lynz Rand, and licensed under GPLv3 License.

## Changelog

### 0.27

- Add support for multiple option configurations

### 0.25

- Fixed some bug;
- improved Readme

### 0.1

- Initial release

[Q]: http://questionor.cn
[G]: https://greasyfork.org/scripts/36731-questionor-keyboard-listener
