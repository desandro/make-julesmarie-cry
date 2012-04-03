#!/bin/bash

OUT=REAMDE.mdown

echo -n "<h1><a href='javascript:" > $OUT
uglifyjs -nc make-julesmarie-cry.js >> $OUT
echo "'>make @julesmarie cry</a></h1>" >> $OUT

echo '
## &uarr; Drag link above to your bookmarks toolbar

> Linking copy that says "Click here" makes me want to cry.

[Click here](https://twitter.com/julesmarie/status/186989361391349760) to view the original tweet.' >> $OUT