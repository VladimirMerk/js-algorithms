Everything with everyone

input:
['first', 'second', 'last']

output deep 1:
[
  ['first'],
  ['second'],
  ['last']
]

output deep 2:
[
  [ 'first', 'second' ],
  [ 'first', 'third' ],
  [ 'second', 'third' ],
  [ 'third', 'first' ],
  [ 'third', 'second' ]
]


output deep 3:
[
  [ 'first', 'second', 'third' ],
  [ 'first', 'third', 'second' ],
  [ 'second', 'first', 'third' ],
  [ 'second', 'third', 'first' ],
  [ 'third', 'first', 'second' ],
  [ 'third', 'second', 'first' ]
]

etc
