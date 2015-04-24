'use strict';

var test = require('tape');
var toHTML = require('../lib').toHTML;

test('toHTML', function(t) {
    t.equal(typeof toHTML, 'function', 'toHTML should be a function');

    t.equal(
        toHTML(['ul', ['li', {
                    'style': 'color:red'
                },
                'First Item'
            ],
            ['li', {
                    'title': 'Some hover text.',
                    'style': 'color:green'
                },
                'Second Item'
            ],
            ['li', ['span', {
                        'class': 'code-example-third'
                    },
                    'Third'
                ],
                ' Item'
            ]
        ]),
        '<ul><li style="color:red">First Item</li><li title="Some hover text." style="color:green">Second Item</li><li><span class="code-example-third">Third</span> Item</li></ul>'
    );

    t.end();
});
