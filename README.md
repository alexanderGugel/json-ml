# json-ml

## Installation

`npm i json-ml --save`

## Usage

```javascript
var jml = require('json-ml');

var html = jml.toHTML(['ul',
    ['li', { 'style': 'color:red' }, 'First Item'],
    ['li', { 'title': 'Some hover text.', 'style': 'color:green' }, 'Second Item']
]);
```
