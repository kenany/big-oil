# big-oil

[![Build Status](https://travis-ci.org/KenanY/big-oil.svg)](https://travis-ci.org/KenanY/big-oil)
[![Dependency Status](https://gemnasium.com/KenanY/big-oil.svg)](https://gemnasium.com/KenanY/big-oil)

Fusion engine picker for PAYDAY 2's Big Oil heist.

## Example

``` javascript
var bigOil = require('big-oil');

bigOil('nitrogen', 1, false);
// => [1]
```

## Installation

``` bash
$ npm install big-oil
```

## API

``` javascript
var bigOil = require('big-oil');
```

### `bigOil([element, ][tubes, ][psiGreaterThan5783])`

Returns an _Array_ of possibly correct fusion engines based on the information
that you managed to find in the lab. Each parameter is optional, but the more
you pass the smaller the returned _Array_ will be. _String_ `element` is the
element that is written down on the spiral notebook. _Number_ `tubes` is written
down on the clipboard. Finally, _Boolean_ `psiGreaterThan5783` should be `true`
if the psi recorded on the computer is greater than 5783, otherwise it should be
`false`.