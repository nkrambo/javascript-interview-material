
## SVG

Scalable vector graphics (SVG) is an XML-based vector image format for two-dimensional graphics, with support for interactivity and animation. In other words, SVGs are XML tags that render shapes and graphics, and these shapes and graphics can be interacted with and animated much like HTML elements can be using CSS.

There are many reasons why SVGs are great and why you should be using them today:

* SVG graphics are scalable and resolution-independent. They look great everywhere, from high-resolution “Retina” screens to printed media.

* SVGs have very good browser support. Fallbacks for non-supporting browsers are easy to implement, too, as we’ll see later in the article.

* Because SVGs are basically text, they can be gzipped, making the files smaller that their bitmap counterparts (JPEG and PNG).

* SVGs are interactive and styleable with CSS and JavaScript.

* SVG comes with built-in graphics effects such as clipping and masking operations, background blend modes, and filters. This is basically the equivalent of having Photoshop photo-editing capabilities right in the browser.

* SVGs are accessible. In one sense, they have a very accessible DOM API, which makes them a perfect tool for infographics and data visualizations and which gives them an advantage over HTML5 Canvas because the content of the latter is not accessible. In another sense, you can inspect each and every element in an SVG using your favorite browser’s developer tools, just like you can inspect HTML elements. And SVGs are accessible to screen readers if you make them so. We’ll go over accessibility a little more in the last section of this article.

**Styling SVGs With CSS**

The line between HTML and CSS is clear: HTML is about content and structure, and CSS is about the look. SVG blurs this line, to say the least. SVG 1.1 did not require CSS to style SVG nodes — styles were applied to SVG elements using attributes known as "presentation attributes."

Presentation attributes are a shorthand for setting a CSS property on an element. Think of them as special style properties.

The following example shows an SVG snippet that uses presentation attributes to style the "border" (stroke) and "background color" (fill) of a star-shaped polygon:

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px" viewBox="0 0 300 300">
  <polygon
fill = "#FF931E"
stroke = "#ED1C24"
stroke-width = "5"
points = "279.1,160.8 195.2,193.3 174.4,280.8   117.6,211.1 27.9,218.3 76.7,142.7 42.1,59.6 129.1,82.7 197.4,24.1 202.3,114 "/>
</svg>
```

The fill, stroke and stroke-width attributes are presentation attributes.

In SVG, a subset of all CSS properties may be set by SVG attributes, and vice versa. The SVG specification lists the SVG attributes that may be set as CSS properties. Some of these attributes are shared with CSS, such as opacity and transform, among others, while some are not, such as fill, stroke and stroke-width, among others.

In SVG 2, this list will include x, y, width, height, cx, cy and a few other presentation attributes that were not possible to set via CSS in SVG 1.1. The new list of attributes can be found in the SVG 2 specification.

Another way to set the styles of an SVG element is to use CSS properties. Just like in HTML, styles may be set on an element using inline style attributes:

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 300px; height: 300px;" viewBox="0 0 300 300">
<polygon
  style = "fill: #FF931E; stroke: #ED1C24; stroke-width: 5;"
  points = "279.1,160.8 195.2,193.3 174.4,280.8   117.6,211.1 27.9,218.3 76.7,142.7 42.1,59.6 129.1,82.7 197.4,24.1 202.3,114 "/>
</svg>
```

Styles may also be set in rule sets in a `<style>` tag. The `<style>` tag can be placed in the `<svg>` tag:

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px" viewBox="0 0 300 300">
  <style type="text/css">
  <![CDATA[
  selector {/* styles */}
  ]]>
  </style>
  <g id=".."> </g>
</svg>
```

And if you want to completely separate style from markup, then you could always link to an external style sheet from the SVG file, using the `<?xml-stylesheet>` tag, as shown below:

```html
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width=".." height=".." viewBox="..">
  <!-- SVG content -->
</svg>
```

**Selectors**

Most CSS selectors can be used to select SVG elements. In addition to the general type, class and ID selectors, SVGs can be styled using CSS2's dynamic pseudo-classes (:hover, :active and :focus) and pseudo-classes (:first-child, :visited, :link and :lang. The remaining CSS2 pseudo-classes, including those having to do with generated content (such as ::before and ::after), are not part of the SVG language definition and, hence, have no effect on the style of SVGs.

The following is a simple animation of the fill color of a circle from deep pink to green when it is hovered over using the tag selector and the :hover pseudo-class:

```html
<style>
circle {
  fill: deepPink;
  transition: fill .3s ease-out;
}

circle:hover {
  fill: #009966;
}
</style>
```

**Animating SVGs With CSS**

SVGs can be animated the same way that HTML elements can, using CSS keyframes and animation properties or using CSS transitions.

In most cases, complex animations will usually contain some kind of transformation — a translation, a rotation, scaling and/or skewing.

In most respects, SVG elements respond to transform and transform-origin in the same way that HTML elements do. However, a few inevitable differences result from the fact that, unlike HTML elements, SVG elements aren't governed by a box model and, hence, have no margin, border, padding or content boxes.

By default, the transform origin of an HTML element is at (50%, 50%), which is the element's center. By contrast, an SVG element's transform origin is positioned at the origin of the user’s current coordinate system, which is the (0, 0) point, in the top-left corner of the canvas.

Suppose we have an HTML `<div>` and an SVG `<rect>` element:

<img src="images/svg_1.png" />

```html
<!DOCTYPE html>
…
<div style="width: 100px; height: 100px; background-color: orange"> </div>
<svg style="width: 150px; height: 150px; background-color: #eee">
  <rect width="100" height="100" x="25" y="25" fill="orange" />
</svg>
```

If were were to rotate both of them by 45 degrees, without changing the default transform origin, we would get the following result (the red circle indicates the position of the transform origin):

What if we wanted to rotate the SVG element around its own center, rather than the top-left corner of the SVG canvas? We would need to explicitly set the transform origin using the transform-origin property.

Setting the transform origin on an HTML element is straightforward: Any value you specify will be set relative to the element's border box.

In SVG, the transform origin can be set using either a percentage value or an absolute value (for example, pixels). If you specify a transform-origin value in percentages, then the value will be set relative to the element’s bounding box, which includes the stroke used to draw its border. If you specify the transform origin in absolute values, then it will be set relative to the SVG canvas' current coordinate system of the user.

If we were to set the transform origin of the `<div>` and `<rect>` from the previous example to the center using percentage values, we would do this:

```html
<!DOCTYPE html>
<style>
  div, rect {
  transform-origin: 50% 50%;
}
</style>
```

The resulting transformation would look like so:

<img src="images/svg_2.png" />

**Making SVGs Responsive**

After embedding an SVG, you need to make sure it is responsive.

Depending on the embedding technique you choose, you might need to apply certain hacks and fixes to get your SVG to be cross-browser responsive. The reason for this is that the way browsers determine the dimensions of an SVG differs for some embedding techniques, and SVG implementations among browsers also differ. Therefore, the way SVG is handled is different and requires some style tweaking to make it behave consistently across all browsers.

**Using CSS Media Queries**

SVG accepts and responds to CSS media queries as well. You can use media queries to change the styles of an SVG at different viewport sizes.

However, one important note here is that the viewport that the SVG responds to is the viewport of the SVG itself, not the page's viewport, unless you are embedding the SVG inline in the document (using <svg>).

An SVG embedded with an `<img>`, `<object>` or `<iframe>` will respond to the viewport established by these elements. That is, the dimensions of these elements will form the viewport inside of which the SVG is to be drawn and, hence, will form the viewport to which the CSS media-query conditions will be applied. This is very similar in concept to element queries.

The following example includes a set of media queries inside an SVG that is then referenced using an `<img>` tag:

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186">
  <style>
    @media all and (max-width: 50em) {
      /* select SVG elements and style them */
    }
    @media all and (max-width: 30em) {
      /* styles  */
    }
  </style>
  <!-- SVG elements here -->
</svg>
```

When the SVG is referenced, it will get the styles specified in the media queries above when the `<img>` has a max-width of 50em or 30em, respectively.

```html
<img src="my-logo.svg" alt="Page Logo." />
```
