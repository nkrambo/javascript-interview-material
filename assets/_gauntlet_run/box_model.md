
## Box Model

**Strange Default Behaviour For The Box Model**

When we set the width of an HTML element in our CSS, we want it to stay that width, plain and simple. The majority of modern browsers, for some reason, totally ignores our needs though if we apply a padding or border to our element. Instead of adding the padding or border to the inside of the element, the padding/border actually gets added to the outside, increasing the width/height of your element by the padding/border value. Nuts. This can totally convolute our natural logical thought process, and make for lots of needless mathematical calculations. And if we want to change the padding or border width on our element without breaking the layout, what then? We’d have to re-calculate the width of the element to compensate for the change in the padding/border.

**What It Should Be**

I say "should", because really, intuitively speaking, the default set up should be that when you set your width/height of your element, it should remain that width and height no matter if you add a padding or border to it. Strangely enough, IE6 and below, when operating in "quirks mode", took on this behaviour. Kudos to early Internet Explorers for getting this one right.

**The Box Sizing Property**

The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

This CSS property can take on 3 different values.

* **content-box** – This is the default style as specified by the CSS standard. The width and height properties are measured including only the content, but not the border, margin, or padding.

* **padding-box** (experimental) – The width and height properties include the padding size, and do not include the border or margin.

* **border-box** – The width and height properties include the padding and border, but not the margin. This is the box model used by Internet Explorer when the document is in quirks mode.

The default property is content-box, hereby leading to the weird, unintuitive CSS box model. Luckily though, we’re presented with an option to fix all of our problems.

**Resetting Box Sizing to Border Box**

We can (and should) reset the box-sizing property to border-box so that our elements don't have any widths and heights being added to them because of borders and paddings. This was one of those "oh snap" CSS moments for me, and I've never looked back since. I suggest applying it across your entire CSS style sheet.

```css
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

**Problems (Mostly) Solved**

This will solve all your problems, and save you a lot of stress. Before you get too excited, you should take note of the global support for the box-sizing property, and the border-box value. IE7 and below don’t support it, but there are many polyfills out there to take care of that.
