
## BFC (Block Formatting Context)

MDN definition - A block formatting context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other.

In other words, a block formatting context is an area where block boxes and floats go. It's a containing element that has flow rules (so the block boxes are, well, block-y) and hard boundaries (so the floats don't leave the container). Ultimately the page is a block formatting context, but you can have a bunch in a page. Actually, you can have BFCs in BFCs and that's what most of HTML and CSS is (divs within divs).

BFCs are essentially normal CSS but they have some handy features that are worth understanding at a deeper level.

Block formatting contexts:
* stops margins from collapsing
* restrains floats
* contains floats

**Stops margins from collapsing**

<img src="images/bfc_1.png" />

Since both of those divs have 20px of margin around them you'd expect to see 20px of margin at the top and bottom as well. But actually there's no margin there, that's because CSS automatically collapses margins.

Now let's check it in a block formatting context:

<img src="images/bfc_2.png" />

Now, all that extra margin at the top and bottom. That's because of the block formatting context, by setting `overflow: hidden;`.

**Restrains Floats**

Here's what it looks like normally:

<img src="images/bfc_3.png" />

That's probably not what you want your two column layout to look like.

Here it is with block formatting context properly enabled. As you an see, this ability makes BFCs really handy for doing column layouts. Again, by setting `overflow: hidden;`.

<img src="images/bfc_4.png" />

**Contains Floats**

Here's what it looks like normally:

<img src="images/bfc_5.png" />

This time we're trying to wrap two floated elements in a border. Obviously it didn't work as expected. It's actually worse than that. I had to add an invisible `div` with `clear: both;` (typically called a "clearfix") before this paragraph to make sure the line breaks work properly. We shouldn't need to do that!

Now we'll add block formatting context:

<img src="images/bfc_6.png" />

Two boxes floating next to each other with a border around them and without using a clearfix. Again, by setting `overflow: hidden;`.

**References**
* [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
* [VG Tech](http://tech.vg.no/2013/09/26/css-block-formatting-context/)
* [Max Design](http://maxdesign.com.au/jobs/sample-block-formatting-context/index.htm)
