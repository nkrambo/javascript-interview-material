
## Z Indexing

z-index is for visual depth. Some elements overlap and some are nested within each other, so there's a natural visual depth that builds, where you can see some elements on top or behind other ones. They stack on top of each other.

The natural depth depends upon a couple of things:

* if an element is nested within another one, then it shows up on top of its parent
* if a sibling comes after another sibling, it's on top as well

Position 'absolute' or position 'fixed' will place elements on top of their stacks.

You can use the z-index property to implicitly ensure how elements should 'stack' upon each other. By the way, you need an element to be positioned (relative, absolute, fixed) for the z-index to work.

The z-index value is relative. So you can have one element with z-index: 1 and another with 2, and the latter will show up on top. Same thing would happen with values of 1000 and 4875.

I like to keep a z-index master reference and use variable names that indicate the level z-index it represents. This way it's easy to keep track of what z-index variables you have and where you want a particular element to appear. I also separate values by increments of 100 so not to get cluttered.
