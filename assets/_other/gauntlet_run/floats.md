
## Floats

The float rule not only affects your target element, but also it's surrounding elements; such as it's parent, siblings, and children.

There are basically 3 commonly used, self explanatory, float values: left, right and none.

**Positioning**

When an element is floated it is taken out of the normal flow of the document. It is shifted to the left or right until it touches the edge of its containing box or another floated element, pretty simple.

Additional floated elements continue to stack to the right or left until they filled the containing box, after which they would wrap to the next line. Therefore, the width of floated elements play a role in how they, and other elements, are positioned.

This includes text, which wraps around a floated element.

**Clearing**

Float's sister property is clear. An element that has the clear property set on it will not move up adjacent to the float like the float desires, but will move itself down past the float.

Regular divs in HTML normally grow to fit their contents.

A side effect of floating elements within a non-floated container is called a 'collapsed container'. As the name suggests, the containing parent element collapses with a height set to 0, and will not expand to fit the contents of it's children.

This is easily fixed in a few different way.

**Easy clearfix**

This is the most common and recommended approach. This solution is usually implemented within CSS frameworks for easy layout or at the least as a utility class.

```html
<div class="clearfix">
  <div style="float: left;">Div 1</div>
  <div style="float: left;">Div 2</div>
</div>​
```

```css
.clearfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
}
```

**Clearing div**

Append a "clearing" element inside the parent element This is not semantic markup and really adds unnecessary markup. This was quite common practice years ago.

```html
<div>
  <div style="float: left;">Div 1</div>
  <div style="float: left;">Div 2</div>
  <div class="spacer" style="clear: both;"></div>
</div>​
```

**Float the parent**

This is obviously not always desirable or possible.

**Set height on parent**

Give the parent an explicit height. Again, not always desirable or possible.

Setting the overflow CSS property on a parent element to auto or hidden, the parent will expand to contain the floats, effectively clearing it for succeeding elements.
