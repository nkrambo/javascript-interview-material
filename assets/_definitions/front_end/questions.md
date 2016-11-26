
# Table of Contents

  1. [General Questions](#general-questions)
  1. [HTML Questions](#html-questions)
  1. [CSS Questions](#css-questions)
  1. [JS Questions](#js-questions)
  1. [Testing Questions](#testing-questions)
  1. [Performance Questions](#performance-questions)
  1. [Network Questions](#network-questions)
  1. [Coding Questions](#coding-questions)
  1. [Fun Questions](#fun-questions)

## General Questions:


### What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

---

### Talk about your preferred development environment.

---

### Which version control systems are you familiar with?

---

### Can you describe your workflow when you create a web page?

---

### If you have 5 different stylesheets, how would you best integrate them into the site?

---

### Can you describe the difference between progressive enhancement and graceful degradation?

Graceful degradation and progressive enhancement are two often confused concepts. Many people (developers, designers, other web professionals and not so savvy people) either fail to understand or decline to acknowledge the difference between the two.

Both concepts are useful. Both are good practice. The subtle differences that people often ignore between these two concepts are also the reasons why progressive enhancement is a superior concept and a superior practice.

**Graceful Degradation**

Graceful degradation states that we should implement our new tricky features and then provide a graceful degradation for less sophisticated browsers/clients. The concept comes from computer science originally and states that a system or network should be able to remain functional even when a large portion of it is destroyed.

**Progressive Enhancement**

Progressive enhancement is a concept that essentially works as the reverse of graceful degradation. Rather than modifying our system to degrade for older browsers, we build it initially for those older browsers and then progressively enhance the experience to make use of newer technology.

This approach encourages designers and developers to produce a product that functions well in older technology, where there is a tendency with graceful degradation to compromise on the solution for older browsers.

---

### How would you optimize a website's assets/resources?

---

### How many resources will a browser download from a given domain at a time? What are the exceptions?

---

### Name 3 ways to decrease page load (perceived or actual load time).

---

### If you jumped on a project and they used tabs and you used spaces, what would you do?

---

### Describe how you would create a simple slideshow page.

---

### If you could master one technology this year, what would it be?

---

### Explain the importance of standards and standards bodies.

---

### What is Flash of Unstyled Content? How do you avoid FOUC?

**A Brief History**

A flash of unstyled content (FOUC) is an instance where a web page appears briefly with the browser's default styles prior to loading an external CSS stylesheet, due to the web browser engine rendering the page before all information is retrieved. The page corrects itself as soon as the style rules are loaded and applied; however, the shift may be distracting.

When FOUC was first documented in the 2001 article Flash of Unstyled Content, the problem appeared to be unique to Internet Explorer. Then the glitch found its way into Safari in 2006, and it was described in the article The FOUC Problem. Both articles exposed the nature of the irregularity inherent with CSS rendering properly within these two browsers and their inability to render styled content on a consistent basis. Recent indications show that FOUC also occurs with certain JavaScript and jQuery implementations where the scripts are used for styling, images, typically content that takes longer or hangs after the page loads.

FOUC is indifferent to changes in CSS or HTML versions. The problem originates from a set of priorities programmed into the browser. As the browser collects HTML and all the ancillary files referenced in the markup, the browser builds the Document Object Model on-the-fly. The browser may choose to first display the text, which it can parse the quickest.

FOUC is more prevalent now that HTML pages are more apt to reference multiple style sheets. Web pages often include style references to media other than the browser screen, such as CSS rules for printers and mobile devices. Web pages may import layers of style files, and reference alternative style sheets. Online advertisements and other inserted offsite content, like videos and search engines, often dictate their own style rules within their code block. The cascading nature of CSS rules encourages some browsers to wait until all the style data is collected before applying it.

**Techniques to Minimize FOUC**

**Hide Content Until Loaded**
A simple method for minimizing FOUC is to hide all or part of the web page until all styles and JavaScript are finished by applying a class name "js" as the selector that hides all content within a container that has an `id="fouc"`. The "fouc" element is unhidden using a JavaScript getElementById function setting the display value to "block" level.

**no-js**
Another solution is to add a `class="no-js"` to the html tag, and a `<script>` within the `<head>` that changes it back to 'js'. The no-js class is provided in order to easily and explicitly add custom styles based on whether JavaScript is disabled (.no-js) or enabled (.js) all with a single hook.

```html
<html class="no-js">
<head>
  <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
```

The markup has a no-js class on HTML by default but we’ll very safely change that to ‘js’ inside the head. That compressed line of javascript is basically:

```javascript
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');
```

**Header Style Tags**
A technique that is a no-brainer for most web developers is that you must include your link tag(s) to stylesheets within the <head> of your web page documents.

---

### Explain what ARIA and screenreaders are, and how to make a website accessible.

**What is ARIA**

Accessible Rich Internet Applications (ARIA) defines ways to make Web content and Web applications (especially those developed with Ajax and JavaScript) more accessible to people with disabilities.

ARIA is a set of special accessibility attributes which can be added to any markup, but is especially suited to HTML. The role attribute defines what the general type of object is (such as an article, alert, or slider). Additional ARIA attributes provide other useful properties, such as a description for a form or the current value of a progressbar.

ARIA provides additional semantics to describe the role, state, and functionality of many familiar user interface controls, such as menus, sliders, trees, and dialogs. It also provides additional structural information, helping authors identify landmarks, regions, and grids on their pages. ARIA enables dynamic, JavaScript-driven applications and widgets to interoperate with a variety of desktop-based assistive technologies.

ARIA is implemented in most popular browsers and screen readers.

**Where is it Supported**
ARIA is a relatively new specification, but support for it is growing. A wide variety of commonly-used browsers, assistive technologies, JavaScript toolkits, and applications now support ARIA. However, many users may still be using older versions of these technologies. You may want to consider implementing ARIA using progressive enhancement techniques—such as adding ARIA using JavaScript, not directly to your markup—in order to more gracefully support older browsers and assistive technologies.

**ARIA in Action**

Here's the markup for a progress bar widget:

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
```

This progress bar is built using a <div>, which is not very descriptive. Unfortunately, there isn't a more semantic tag available to developers in HTML 4, so we need to include ARIA roles and properties. These are specified by adding attributes to the element. In this example, the `role="progressbar"` attribute informs the browser that this element is actually a JavaScript-powered progress bar widget. The `aria-valuemin` and `aria-valuemax` attributes specify the minimum and maximum values for the progress bar, and the `aria-valuenow` describes the current state of it.

**ARIA is Non-Obtrusive**

ARIA is only made available to assistive technology APIs, and doesn't affect native browser functionality with respect to the DOM or styling. From the browser's point of view, the native HTML defines the semantic meaning and behavior of an element, with ARIA attributes acting as a layer on top to help support the AT API. Though on its own ARIA will not change any styles, as with any HTML attributes, CSS can take advantage of ARIA attributes as element selectors. This may provide a convenient mechanism to style ARIA-enabled widgets.

**How Assistive Technologies Work**
Assistive technologies use an API built into each operating system specifically designed to describe the roles, states, and structure of an application's user interface. For example, a screen reader uses this API to read the user interface with a text-to-speech engine, a magnifier uses it to highlight important or active areas of the screen, and an onscreen keyboard might use it to provide the most efficient keyboard layout for a given context or UI control. Assitive technologies often access a page's DOM as well through this API in order to understand the semantics and attributes of the page.

ARIA provides a bridge between the world of the DOM and the desktop. Browsers expose ARIA-enabled elements to the assistive technology API as if they were native widgets. As a result, the user potentially gets a more consistent user experience, where dynamic JavaScript-driven widgets on the web are comparable to their equivalents on the desktop.

**Accessible Website Best Practices**

* Clear and logical UI design, such as consistent navigation, typography, text clarity, color contrast, explanatory links and text
* Meet web standards and validate your code
* Keyboard access and navigation, focus order, form labels, alt tags, page titles and so on

**References**
* [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
* [Accessibility Checklist](https://www.webaccessibility.com/best_practices.php)

---

### Explain some of the pros and cons for CSS animations versus JavaScript animations.

---

### What does CORS stand for and what issue does it address?

APIs are the threads that let you stitch together a rich web experience. But this experience has a hard time translating to the browser, where the options for cross-domain requests are limited to techniques like JSON-P (which has limited use due to security concerns) or setting up a custom proxy (which can be a pain to set up and maintain).

Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object, CORS allows developers to work with the same idioms as same-domain requests.

The use-case for CORS is simple. Imagine the site alice.com has some data that the site bob.com wants to access. This type of request traditionally wouldn’t be allowed under the browser's same origin policy. However, by supporting CORS requests, alice.com can add a few special response headers that allows bob.com to access the data.

As you can see from this example, CORS support requires coordination between both the server and client. Luckily, if you are a client-side developer you are shielded from most of these details. The rest of this article shows how clients can make cross-origin requests, and how servers can configure themselves to support CORS.

**Types of CORS requests**

Cross-origin requests come in two flavors:

1. simple requests
2. "not-so-simple requests" (a term I just made up)

Simple requests are requests that meet the following criteria:

1. HTTP Method matches (case-sensitive) one of:
  * HEAD
  * GET
  * POST

2. HTTP Headers matches (case-insensitive):
  * Accept
  * Accept-Language
  * Content-Language
  * Last-Event-ID
  * Content-Type, but only if the value is one of:
    * application/x-www-form-urlencoded
    * multipart/form-data
    * text/plain

Simple requests are characterized as such because they can already be made from a browser without using CORS. For example, a JSON-P request can issue a cross-domain GET request. Or HTML could be used to do a form POST.

Any request that does not meet the criteria above is a not-so-simple request, and requires a little extra communication between the browser and the server (called a preflight request), which we’ll get into below.

**CORS vs JSONP**

CORS can be used as a modern alternative to the JSONP pattern. While JSONP supports only the GET request method, CORS also supports other types of HTTP requests. CORS is supported by most modern web browsers. Also, while JSONP can cause cross-site scripting (XSS) issues where the external site is compromised, CORS allows websites to manually parse responses to ensure security.

**References**
* [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/cors/)

---

## HTML Questions:

### What does a `doctype` do?

---

### What's the difference between full standards mode, almost standards mode and quirks mode?

---

### What's the difference between HTML and XHTML?

---

### Are there any problems with serving pages as `application/xhtml+xml`?

---

### How do you serve a page with content in multiple languages?

---

### What kind of things must you be wary of when design or developing for multilingual sites?

---

### What are `data-` attributes good for?

---

### Consider HTML5 as an open web platform. What are the building blocks of HTML5?

---

### Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

---

### Describe the difference between `<script>`, `<script async>` and `<script defer>`.

---

### Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

---

### What is progressive rendering?

---

### Have you used different HTML templating languages before?

---

## CSS Questions:

http://cssreference.io/

### What is the difference between classes and IDs in CSS?

---

### What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?

They are both used for cross-browser consistency.

Basically, each browser provides its own user-agent stylesheet that acts as the default one if no stylesheet is present. So you have default font-sizes, margins, colors, padding... They're all slightly different for each browser. So instead of fighting with these differences when writing your own CSS, you can "reset" or normalize them. Both will give you a solid foundation on which you can define your own styles, however they are different.


In short, a reset.css will remove all the default styling applied by the browser to give you a blank canvas where as normalize.css is a base stylesheet meaning its the starting point for your website styles and it styles the default elements to be consistent across the browsers.

normalize.css is usually preferred for the following reasons.

* Normalize.css preserves useful defaults rather than "unstyling" everything. For example, elements like sup or sub "just work" after including normalize.css (and are actually made more robust) whereas they are visually indistinguishable from normal text after including reset.css. So, normalize.css does not impose a visual starting point (homogeny) upon you. This may not be to everyone's taste. The best thing to do is experiment with both and see which gels with your preferences.

* Normalize.css corrects some common bugs that are out of scope for reset.css. It has a wider scope than reset.css, and also provides bug fixes for common problems like: display settings for HTML5 elements, the lack of font inheritance by form elements, correcting font-size rendering for pre, SVG overflow in IE9, and the button styling bug in iOS.

* Normalize.css doesn't clutter your dev tools. A common irritation when using reset.css is the large inheritance chain that is displayed in browser CSS debugging tools. This is not such an issue with normalize.css because of the targeted stylings.

* Normalize.css is more modular. The project is broken down into relatively independent sections, making it easy for you to potentially remove sections (like the form normalizations) if you know they will never be needed by your website.

* Normalize.css has better documentation. The normalize.css code is documented inline as well as more comprehensively in the GitHub Wiki. This means you can find out what each line of code is doing, why it was included, what the differences are between browsers, and more easily run your own tests. The project aims to help educate people on how browsers render elements by default, and make it easier for them to be involved in submitting improvements.

---

### Describe floats and how they work.

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

---

### Describe z-index and how stacking context is formed.

z-index is for visual depth. Some elements overlap and some are nested within each other, so there's a natural visual depth that builds, where you can see some elements on top or behind other ones. They stack on top of each other.

The natural depth depends upon a couple of things:

* if an element is nested within another one, then it shows up on top of its parent
* if a sibling comes after another sibling, it's on top as well

Position 'absolute' or position 'fixed' will place elements on top of their stacks.

You can use the z-index property to implicitly ensure how elements should 'stack' upon each other. By the way, you need an element to be positioned (relative, absolute, fixed) for the z-index to work.

The z-index value is relative. So you can have one element with z-index: 1 and another with 2, and the latter will show up on top. Same thing would happen with values of 1000 and 4875.

I like to keep a z-index master reference and use variable names that indicate the level z-index it represents. This way it's easy to keep track of what z-index variables you have and where you want a particular element to appear. I also separate values by increments of 100 so not to get cluttered.

---

### Describe BFC (Block Formatting Context) and how it works.

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

---

### What are the various clearing techniques and which is appropriate for what context?

---

### Explain CSS sprites, and how you would implement them on a page or site.

A CSS sprite is a single image containing several background images separated by white space. It's a collection of images combined in one big image. You can then expose different parts of the sprite using background position on certain elements, which acts like a viewport.

This is an old technique that helps you reduce the number of HTTP requests for fetching many images by combining them all into one image (and one request) that is often lighter than separate images combined. As soon as the sprite is called and displayed once (and even cached), you can re-use it with other elements, rendering immediately.

For example, changing the color of an icon on hover can be achieved with a sprite. You have different icon states 'stacked' horizontally or vertically within the sprite, with a 'default' and a 'hover' state. You expose the 'default' state with background positioning, by default, and when the icon is hovered you update the background position to expose the hover state. This is done with a :hover pseudo css selector.

This technique is used less and less and we've now got superior techniques that have replaced its need in many use cases, such as icon fonts etc...

---

### What are your favourite image replacement techniques and which do you use when?

In this modern age, if you are still looking to do so, there are many image replacement techniques that still work today. It is important to note that these usually come with SEO complications, even being
penalised by Google. So, you should use sparingly and look for alternatives first.

In general, these aren’t likely to be good for SEO in the near future and if you can avoid using them entirely.

Along with this, the use of image replacement has slowly evaporated too: in fact, HTML5 Boilerplate dropped their image replacement support altogether two years ago, citing that there weren't "enough use cases within modern web development."

Even though we no longer use img tags for text, it's not as if we stopped representing text with images: instead of using JPEGs for our logos, we've moved onto using SVGs. Instead of using GIFs for our button icons, we use icon fonts.

All in all, it looks like there is still a place, albeit a minor one, for image replacement techniques in the modern web landscape: specifically, SVGs standing in place for text can still benefit from the use of image replacement.

Furthermore, image replacement-style techniques can also be useful in the use of icon fonts without accompanying text, although aria-label will likely meet your needs.

Here are some of the techniques you can use:

**Negative Text Indent**

This is the most common technique that most web developers have used at one point or another. The idea here is to move the text far outside the browser window by setting a large negative text-indent. Setting overflow to hidden hides the text and whitespace: nowrap keeps it from moving onto the next line. The text will still be read by screen readers in this method.

```css
.replace-indent {
  height: 106px;
  background: url("assets/logo.png");
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```

**Small Font**

Another way to hide text is make it very small and set its color to the background of your logo. This works without affecting accessibility but you might face SEO penalties because of the tiny font size and camouflaged color.

```css
.replace-font {
  width: 264px;
  height: 106px;
  background: url("assets/logo.png");
  font-size: 1px;
  color: white;
}
```

**Using Clip-path**
The clip-path property hides everything that is outside the path specified by you. We can use it to clip our text and hide it. The text will still be accessible to screen readers but would be hidden visually. The only problem with this technique is that browser support is not good enough just yet. Here is the markup:

```html
<h1 class="replace-clip-path">
  <span>SitePoint</span>
</h1>
```

This is the CSS that you need to apply:

```css
.replace-clip-path {
  width: 264px;
  height: 106px;
  background: url("assets/logo.png");
}

.replace-clip-path span {
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
}
```

**Using Pseudo Element**

This technique uses a pseudo element to push the text aside.  The text then overflows and is hidden by using the overflow: hidden property. One issue with this technique is that it only works with Internet Explorer 8 and above.

```css
.replace-pseudo {
  width: 264px;
  height: 106px;
  overflow: hidden;
}

.replace-pseudo:before {
  content: url("assets/logo.png");
}
```

---

### How would you approach fixing browser-specific styling issues?

---

### How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?

---

### What are the different ways to visually hide content (and make it available only for screen readers)?

---

### Have you ever used a grid system, and if so, what do you prefer?

---

### Have you used or implemented media queries or mobile specific layouts/CSS?

---

### Are you familiar with styling SVG?

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

---

### How do you optimize your webpages for print?

**Create A Stylesheet For Print**

Adding a print style sheet, with the media attribute set to "print", at the end of the list of stylesheets in the header is the best way to approach this. This will allow you to create custom CSS classes applied only at the time of print.

```html
<!-- main -->
<link rel="stylesheet" type="text/css" href="/global.css" media="all" />

<!-- print -->
<link rel="stylesheet" type="text/css" href="/print.css" media="print" />
```

**General Tips**

Mostly, you will want to hide parts of a page that don't add any print value to the user. Things like, the header, footer, sidebars, ads etc... A user is really only after the essential content of a page. You could create a class called `.no-print` and add that class declaration to DIVS, images, and other elements. Or you can select individual elements to hide, if you don't want to include the `.no-print` class to your markup.

```css
.no-print {
  display: none;
}

header nav, footer {
  display: none;
}
```
Other things...

Links obviously do not work on paper so it may be useful to remove their styles for print all together. Alternatively,
to put the links to use, you could display the URL after each string of anchor text. But text littered with URLs can be distracting and can impair the reading experience; and sparing the reader excessive information where possible is advisable.

The best solution is the :after pseudo-element. It displays the URL after each anchor text, surrounded by brackets. And the font size is reduced to make it less intrusive. You will probably still want to hide internal links and look at formatting really long external links.

To define page margins, you can use `@page` rule to simply apply a margin all the way around the page. For example:

```css
@page {
  margin: 0.5cm;
}
```

Finally, text font sizes and images may need to be reduced so that they're more print friendly.

**References**
* [Smashing Magazine](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)

---

### What are some of the 'gotchas' for writing efficient CSS?

---

### What are the advantages/disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.

---

### How would you implement a web design comp that uses non-standard fonts?

---

### Explain how a browser determines what elements match a CSS selector.

---

### Describe pseudo-elements and discuss what they are used for.

---

### Explain your understanding of the box model. What does ```### { box-sizing: border-box; }``` do? What are its advantages?

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

---

### List as many values for the display property that you can remember.

The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet.

In addition to the many different display box types, the value none lets you turn off the display of an element; when you use none, all descendant elements also have their display turned off. The document is rendered as though the element doesn't exist in the document tree.

```html

// basic values
display: none;
display: inline;
display: block;
display: inline-block;
display: contents;
display: list-item;

// table values
display: table;
display: inline-table;
display: table-cell;
display: table-column;
display: table-column-group;
display: table-footer-group;
display: table-header-group;
display: table-row;
display: table-row-group;
display: table-caption;

// css3 values
display: inline-list-item;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: subgrid;
display: ruby;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

// experimental
display: run-in;

// global values
display: inherit;
display: initial;
display: unset;
```
---

### What's the difference between inline and inline-block?

**Inline elements**

1. respect left & right margins and padding, but **not** top and bottom
2. **cannot** have a width and height set
3. allow other elements to sit to their left and right.

**Block elements**

1. respect all of those
2. force a line break after the block element

**Inline-block elements**

1. allow other elements to sit to their left and right
2. respect top and bottom margins and padding
3. respect height and width

---

### What's the difference between a relative, fixed, absolute and statically positioned element?

An important concept to understand first is that every single element on a web page is a block. Literally a rectangle of pixels. This is easy to understand when when you set the element to display: block; or if that element is by default display: block; This means you can set a width and a height and that element will respect that. But elements that are display: inline, like a span by default, are also rectangles, they just flow onto the page different, lining up horizontally as they can.

**Static**

This is the default for every single page element. Different elements don't have different default values for positioning, they all start out as static. Static doesn't mean much, it just means that the element will flow into the page as it normally would. The only reason you would ever set an element to position: static is to forcefully-remove some positioning that got applied to an element outside of your control. This is fairly rare, as positioning doesn't cascade.

**Relative**

This type of positioning is probably the most confusing and misused. What it really means is "relative to itself". If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all, it will be exactly as it would be if you left it as position: static; But if you DO give it some other positioning attribute, say, top: 10px;, it will shift it's position 10 pixels DOWN from where it would NORMALLY be. The ability to shift an element around based on it's regular position is pretty useful.

There are two other things that happen when you set position: relative; on an element that you should be aware of. One is that it introduces the ability to use z-index on that element, which doesn't really work with statically positioned elements. Even if you don't set a z-index value, this element will now appear on top of any other statically positioned element. You can't fight it by setting a higher z-index value on a statically positioned element. The other thing that happens is it limits the scope of absolutely positioned child elements. Any element that is a child of the relatively positioned element can be absolutely positioned within that block.

**Absolute**

This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes top, left bottom and right to set the location. Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

The trade-off, and most important thing to remember, about absolute positioning is that these elements are removed from the flow of elements on the page. An element with this type of positioning is not affected by other elements and it doesn't affect other elements. This is a serious thing to consider every time you use absolute positioning. It's overuse or improper use can limit the flexibility of your site.

**Fixed**

This type of positioning is fairly rare but certainly has its uses. A fixed position element is positioned relative to the viewport, or the browser window itself. The viewport doesn't change when the window is scrolled, so a fixed positioned element will stay right where it is when the page is scrolled, creating an effect a bit like the old school "frames" days. It's often used in fixed sidebars and footers that keeps desired elements present at all times to the user.

---

### The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?

---

### What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

---

### Have you played around with the new CSS Flexbox or Grid specs?

**Flexbox**

The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

Note: Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.

Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as "flex container") whereas the others are meant to be set on the children (said "flex items").

If regular layout is based on both block and inline flow directions, the flex layout is based on "flex-flow directions". Please have a look at this figure from the specification, explaining the main idea behind the flex layout.

Basically, items will be laid out following either the main axis (from main-start to main-end) or the cross axis (from cross-start to cross-end).

* **main axis** - The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).

* **main-start | main-end** - The flex items are placed within the container starting from main-start and going to main-end.

* **main size** - A flex item's width or height, whichever is in the main dimension, is the item's main size. The flex item's main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.

* **cross axis** - The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.

* **cross-start | cross-end** - Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.

* **cross size** - The width or height of a flex item, whichever is in the cross dimension, is the item's cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

**Properties for the Parent (flex container)**

**display**

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
.container {
  display: flex; /* or inline-flex */
}
```

**flex-direction**

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

* row (default): left to right in ltr; right to left in rtl
* row-reverse: right to left in ltr; left to right in rtl
* column: same as row but top to bottom
* column-reverse: same as row-reverse but bottom to top

**flex-wrap**

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* nowrap (default): single-line / left to right in ltr; right to left in rtl
* wrap: multi-line / left to right in ltr; right to left in rtl
* wrap-reverse: multi-line / right to left in ltr; left to right in rtl

**flex-flow (Applies to: parent flex container element)**

This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. Default is row nowrap.

```css
.container {
  flex-flow: <'flex-direction'> || <'flex-wrap'>;  
}
```

**justify-content**

This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

* flex-start (default): items are packed toward the start line
* flex-end: items are packed toward to end line
* center: items are centered along the line
* space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
* space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.

**align-items**

This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

* flex-start: cross-start margin edge of the items is placed on the cross-start line
* flex-end: cross-end margin edge of the items is placed on the cross-end line
* center: items are centered in the cross-axis
* baseline: items are aligned such as their baselines align
* stretch (default): stretch to fill the container (still respect min-width/max-width)

**align-content**

This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

Note: this property has no effect when there is only one line of flex items.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

* flex-start: lines packed to the start of the container
* flex-end: lines packed to the end of the container
* center: lines packed to the center of the container
* space-between: lines evenly distributed; the first line is at the start of the container while the last one is at the end
* space-around: lines evenly distributed with equal space around each line
* stretch (default): lines stretch to take up the remaining space

**Properties for the Children (flex items)**

**order**

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

```css
.item {
  order: <integer>;
}
```

**flex-grow**

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

**flex-shrink**

This defines the ability for a flex item to shrink if necessary.

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

**flex-basis**

This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated). The content keyword means "size it based on the item's content" - this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do.

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value.

**flex**

This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. It is recommended that you use this shorthand property rather than set the individual properties. The short hand sets the other values intelligently.

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

**align-self**

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

Please see the align-items explanation to understand the available values.

Note that float, clear and vertical-align have no effect on a flex item.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

**Grid Layout**

CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it's never done a very good job of it. First we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.

Getting started with Grid is easy. You just define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, and then place its child elements into the grid with grid-column and grid-row. Similarly to flexbox, the source order of the grid items doesn't matter. Your CSS can place them in any order, which makes it super easy to rearrange your grid with media queries. Imagine defining the layout of your entire page, and then completely rearranging it to accommodate a different screen width all with only a couple lines of CSS. Grid is one of the most powerful CSS modules ever introduced.

An important thing to understand about Grid is that it's not ready to be used in production yet. It's currently a W3C Working Draft and isn't supported correctly in any browsers yet by default. Internet Explorer 10 and 11 support it, but it's an old implementation with an outdated syntax. In order to experiment with Grid today, your best bet is to use Chrome, Opera or Firefox with special flags enabled. In Chrome, navigate to chrome://flags and enable "experimental web platform features". That method also works in Opera (opera://flags). In Firefox, enable the layout.css.grid.enabled flag.

**References**
* [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Tricks - Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

### How is responsive design different from adaptive design?

---

### Have you ever worked with retina graphics? If so, when and what techniques did you use?

---

### Is there any reason you'd want to use `translate()` instead of ###absolute positioning###, or vice-versa? And why?

---

## JS Questions:

### Explain event delegation

Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

Imagine that we had an unordered list element with 500 children list item elements. Attaching an event listener to each child element is inefficient and unnecessary. We only attach one event listener to the parent and listen for events on children nodes.

An additional advantage is that any dynamically created elements will still be bound to the event handler, which would not be the case if we assigned to event listener to each child node.

```html
<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
</ul>
```

```javascript
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
  // e.target is the clicked element!
  // If it was a list item
  if(e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    console.log(e.target.innerHTML + ' was clicked');
  }
});

list.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    if (e.target.style.background === 'red') {
      e.target.style.background = 'none';
    } else {
      e.target.style.background = 'red'
    }
  }
});
```

Start by adding a click event listener to the parent element. When the event listener is triggered, check the event element to ensure it's the type of element to react to. If it is an LI element, boom: we have what we need! If it's not an element that we want, the event can be ignored.

---

### Explain how `this` works in JavaScript

---

### Explain how prototypal inheritance works

---

### What is a closure, and how/why would you use one?

Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

**Lexical Scoping**

```javascript
function init() {
  const name = "Mozilla"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}

init();
```

The function ```init()``` creates a local variable name and then a function called ```displayName(). displayName()``` is an inner function that is defined inside ```init()``` and is only available within the body of that function. ```displayName()``` has no local variables of its own, however it has access to the variables of outer functions and so can use the variable name declared in the parent function.

This is an example of lexical scoping: in JavaScript, the scope of a variable is defined by its location within the source code (it is apparent lexically) and nested functions have access to variables declared in their outer scope.

**Closure**

Now consider the following example:

```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    alert(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

If you run this code it will have exactly the same effect as the previous init() example: the string "Mozilla" will be displayed in a JavaScript alert box. What's different — and interesting — is that the displayName() inner function was returned from the outer function before being executed.

That the code still works may seem unintuitive. Normally, the local variables within a function only exist for the duration of that function's execution. Once makeFunc() has finished executing, it is reasonable to expect that the name variable will no longer be accessible. Since the code still works as expected, this is obviously not the case.

The solution to this puzzle is that myFunc has become a closure. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created. In this case, myFunc is a closure that incorporates both the displayName function and the "Mozilla" string that existed when the closure was created.

Here's a slightly more interesting example — a makeAdder function:

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

In this example, we have defined a function makeAdder(x) which takes a single argument x and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument. In the above example we use our function factory to create two new functions — one that adds 5 to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different environments. In add5's environment, x is 5. As far as add10 is concerned, x is 10.

**Practical Closures**

That's the theory of closures — but are closures actually useful? Let's consider their practical implications. A closure lets you associate some data (the environment) with a function that operates on that data. This has obvious parallels to object oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Situations where you might want to do this are particularly common on the web. Much of the code we write in web JavaScript is event-based — we define some behavior, then attach it to an event that is triggered by the user (such as a click or a keypress). Our code is generally attached as a callback: a single function which is executed in response to the event.

**Emulating private methods with closures**

Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

Here's how to define some public functions that can access private functions and variables, using closures which is also known as the module pattern:

```javascript
const counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();
```

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


// Creating a module
// First we start using a anonymous closure. Anonymous closures are just functions
// that wrap our code and create an enclosed scope around it. Closures help keep any
// state or privacy within that function. Closures are one of the best and most
// powerful features of JavaScript.

(function() {
    'use strict';
    // Your code here
    // All function and variables are scoped to this function
}());

// This pattern is well known as a Immediately Invoked Function Expression or IIFE.
// The function is evaluated then immediately invoked. Its also a good practice to
// run your modules in ES5 strict mode. Strict mode will protect you from some of
// the more dangerous parts in JavaScript.

**References**
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

### What's a typical use case for anonymous functions?

Anonymous functions are typically used as callbacks, as in to pass them as arguments to other functions. Take the setTimeout function for example:

```javascript
setTimeout(function() {
  alert('hello');
}, 1000);
```

Or the Array.prototype.map function:

```javascript
const numbers = [2, 4, 6];
const numbersHalf = numbers.map((item) => {
  return item / 2;
});
```

Another popular use case (especially for frameworks) is to create closures with anonymous functions, such as Immediately-invoked function expression (IIFE).

```javascript
(function() {
  alert('foo');
})();
```

Another callback example:

```javascript
function takesACallback(callback) {
  // do some interesting things here
  return 'The callback says: ' + callback();
}

// returns 'The callback says: I'm the callback!'
takesACallback(function() {
  return 'I\'m the callback!';
});
```

However, you can still have a reference to an anonymous function, just because it is unnamed it doesn't mean it's unreferenced. We can use a function expression as assign our anonymous function to a variable.

The function itself is still anonymous (it doesn't have a name directly attached to it), but you can call the function by the named reference.

```javascript
const reference = function() {
  return 'I\'m still an anonymous function';
}

reference(); // returns "I'm still an anonymous function"
```
Declared functions are not anonymous. They have a name directly attached to the function, with no need for a named reference.

```javascript
function declared() {
  return "I'm not anonymous function";
}

declared(); // returns "I'm not anonymous function"
```

Writing a named function like this results in a function declaration.

Anonymous functions are created at runtime ... Function declarations are different. They are run before any of the other code is executed so the functions do not have to be declared before the code that calls them.

---

### How do you organize your code? (module pattern, classical inheritance?)

---

### What's the difference between host objects and native objects?

Host Objects are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. For example, the browser environment supplies objects such as window, XMLHttpRequest, document, setTimeout, location. While a node.js environment supplies objects such as NodeList and Global.

Native Objects or Built-in Objects are standard built-in objects provided by Javascript. Native objects is sometimes referred to as 'Global Objects' since they are objects Javascript has provided natively available for use. Native objects: Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods etc...

User objects are anything the user defines. When you create a new object that is not directly a native object, you've made a user object. So if you create a new string ("Hello world") you created a native object, but if you create an instance of an object you've defined (new Cat()) then it’s a user object.

**References**
* [MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

---

### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

  ---

### What's the difference between `.call`, `.bind` and `.apply`?

---

### When would you use `document.write()`?

`document.write()` writes to the document. It takes the content you want to write as a parameter. An invocation could look like this:

```javascript
document.write("<h1>JS is awesome!</h1>");
```

**Problems With `document.write()`**

document.write() shouldn't be used after the page has loaded to change the content as it will overwrite the entire page (probably not what you wanted to happen...).

document.write() doesn't work for XHTML pages. I've only been concerned with HTML so far, so I'm not too fussed about this one. But it might be more relevant in your case.

Some people think document.write() is a good solution for loading more files (JS or CSS) into the dom after the initial load. Turns out this is not the case, as this is slower than creating a new element (script or a css link) and inserting it into the page.

**Possible Situations to Use `document.write()`**

It seems that the only "approved" time to use `document.write()` is for third party code to be included (such as ads or Google Analytics). Since `document.write()` is always available (mostly) it is a good choice for third party vendors to use it to add their scripts. They don't know what environment you're using, if jQuery is or isn't available, or what your onload events are. And with `document.write()` they don't have to.

It can also be used as a fallback to include a local script file if a CDN inclusion or some other type of inclusion fails. For example, you see this in practice with the HTML5 Boilerplate. It checks for a global `jQuery` object, if it's
not there then jQuery has not been successfully included so it writes a local script inclusion and grabs a copy from the 'vendor' directory.

```html
<script>window.jQuery || document.write('<script src="js/vendor/jquery-{{JQUERY_VERSION}}.min.js"><\/script>')</script>
```

---

### What's the difference between feature detection, feature inference, and using the UA string?

---

### Explain Ajax in as much detail as possible.

---

### What are the advantages and disadvantages of using Ajax?

---

### Explain how JSONP works (and how it's not really Ajax).

JSONP (JSON with Padding or JSON-P) is a JSON extension used by web developers to overcome the cross-domain restrictions imposed by browsers' same-origin policy that limits access to resources retrieved from origins other than the one the page was served by. In layman's terms, one website cannot just simply access the data from another website.

It was developed because handling a browsers' same origin policy can be difficult, so using JSONP abstracts the difficulties and makes it easier.

Say you're on domain example.com, and you want to make a request to domain example.net. To do so, you need to cross domain boundaries, a no-no in most of browserland.

The one item that bypasses this limitation is <script> tags. When you use a script tag, the domain limitation is ignored, but under normal circumstances, you can't really do anything with the results, the script just gets evaluated.

Enter JSONP. When you make your request to a server that is JSONP enabled, you pass a special parameter that tells the server a little bit about your page. That way, the server is able to nicely wrap up its response in a way that your page can handle.

For example, say the server expects a parameter called "callback" to enable its JSONP capabilities. Then your request would look like:

```html
http://www.example.net/sample.aspx?callback=mycallback
```

Without JSONP, this might return some basic JavaScript object, like so:

```javascript
{ foo: 'bar' }
```

However, with JSONP, when the server receives the "callback" parameter, it wraps up the result a little differently, returning something like this:

```javascript
mycallback({ foo: 'bar' });
```

As you can see, it will now invoke the method you specified. So, in your page, you define the callback function:

```javascript
mycallback = function(data){
  alert(data.foo);
};
```

And now, when the script is loaded, it'll be evaluated, and your function will be executed. Voila, cross-domain requests!

It's also worth noting the one major issue with JSONP: you lose a lot of control of the request. For example, there is no "nice" way to get proper failure codes back. As a result, you end up using timers to monitor the request, etc, which is always a bit suspect. The proposition for JSONRequest is a great solution to allowing cross domain scripting, maintaining security, and allowing proper control of the request.

These days (2016), CORS is the recommended approach vs. JSONRequest. JSONP is still useful for older browser support, but given the security implications, unless you have no choice CORS is the better choice.

---

### Explain 'hoisting'.

In javascript there is only function scoping. Variable declarations in a function are moved to the top of the function at run-time.

``` javascript
function() {
  // some code
  // some code

  let myVariable = 0; // this will get hoisted to the top of the function.
}
```

However, if you don't declare your variables correctly. You can declare global variables by accident.

```javascript
function() {
  // some code
  // some code

  myVariable = 0; // this will get hoisted to global!!
}
```
This is one of the reasons that we use 'use strict'. It will throw an error if your code globally hoists a variable.

**References**
* https://www.youtube.com/watch?v=sjyJBL5fkp8

---

### Describe event bubbling.

---

### What's the difference between an 'attribute' and a 'property'?.

In short... Attributes are defined by HTML. Properties are defined by the DOM.

Everything in JavaScript is an object. These objects are categorized in different types (functions, boolean, string, number, etc) and can also contain properties and methods. Objects dont just exist in the language itself (JavaScript), but in Browser Object Model (BOM) and Document Object Model (DOM) as well.

Every element in the DOM is an object and these objects have properties as well. These properties are mapped to a set of attributes from html markup. An attribute is just a string in an element (usually a, `label='value'` pair).

Some of the element's properties get their initial values from attributes with the same or similar names. Some examples below:

* **href** property gets its initial value from the `href` attribute, but there is an interpretation involved.
* **className** property gets its value from `class` attribute.
* other properties get their initial values in other ways.
* an element always has a style property, whether it has a style attribute or not.
* a number of properties write back to the attribute they derived from if you set them, but some may have an interpretation involved. Example: href

Notice some HTML attributes have 1:1 mapping onto properties, such as `id` and `href`. Some do not (e.g. the value attribute specifies the initial value of an input, but the value property specifies the current value).

```
// html element markup
<a href='foo.html' class='test one' name='fooAnchor' id='fooAnchor'>Hi</a>

// element object
+-------------------------------------------+
| a                                         |
+-------------------------------------------+
| href:      "http://example.com/foo.html"  |
| name:      "fooAnchor"                    |
| id:        "fooAnchor"                    |
| className: "test one"                     |
| attributes:                               |
|    href:  "foo.html"                      |
|    name:  "fooAnchor"                     |
|    id:    "fooAnchor"                     |
|    class: "test one"                      |
+-------------------------------------------+
```

Most of the time, its better to work with properties. Their values and names tend to be consistent across browsers. We'll only work with attributes when there is no properties set, example is custom attributes data-foobar.

```javascript
const element = getElementById('fooAnchor');

// getting 'class' by attribute
const elementClass = element.getAttribute(class);

// getting 'class' by property (recommended)
const elementClass = element.className;
```

---

### Why is extending built-in JavaScript objects not a good idea?

**How to Extend a Built-In Object**

Extending built-in JavaScript objects is easily done through attaching functionality to an object's `prototype`. For example:

```javascript
Array.prototype.first = function() {
  return this[0];
}

const temp = [1, 2, 3];
temp.first(); // returns 1
```

At first glance, this might seem like a great feature, but it is not a recommended practice.

**Why Extending is a Bad Practice**

It depends on who you ask. This is one of those "JS standards" - unlike most of the questions that have a clear answer, this one has a bit more opinion.

The main argument against doing this is: if, in future, a browser decides to implement its own version of your method, your method might get overridden (silently) and the browser’s implementation (which is probably different from yours) would take over. So not extending in the first place is future proofing your code.

On the flip side, if you decide to overwrite the browsers definition, any future developer working on your code won’t know about the change. They'll have a harder time getting up to speed.

Generally it’s safer to move your particular changes into a library (as with underscore.js). That way your particular methods are clearly marked and there’s no chance of conflict.

**But...**

It might be a good idea to add an extension for functionality that became available in later versions, but isn’t guaranteed to be available in your particular browser. You can read more about this kind of polyfill on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill).

**References**
* [Perfection Kills](http://perfectionkills.com/extending-native-builtins/)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill)
* [More on what extending objects is](https://www.kirupa.com/html5/extending_built_in_objects_javascript.htm)

---

### Explain the critical rendering path.

---

### Difference between document load event and document DOMContentLoaded event?

Both `load` and `DOMContentLoaded` are native events recognized by Javascript that allow the developer to throw a hook into the loading of a web page to attach callbacks or other logic. The difference between the two is related to at what stage of page load they are called. It is an incredibly popular mistake to use `load` where `DOMContentLoaded` would be much more appropriate, so be cautious.

**DOMContentLoaded**

The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

That is, it marks the point when both the DOM and CSSOM is ready and there are no stylesheets that are blocking JavaScript execution - meaning we can now (potentially) construct the render tree.

This event is useful in optimizing the critical rendering path by measuring the affect of parser blocking javascript. Trying to render our tree as quickly as possible means knowing when our page gets to this point is helpful.

Many JavaScript frameworks wait for this event before they start executing their own logic.

Adding hooks to the `DOMContentLoaded` event can improve user experience by showing messages or content dynamically and much sooner than it would take for the entire page to load.

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});
```

**load**

The `load` event, as distinct from `DOMContentLoaded`, only fires once the DOM and all associated resources (like CSS files, JS files, images, external resources, etc.) have all finished loading. This would be the measure of your apps page speed when using Google Insights for example.

```javascript
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});
```

---

### Why is it called a Ternary expression, what does the word 'Ternary' indicate?

In mathematics, a ternary operation is an n-ary operation with n = 3. In computer science, a ternary operator is an operator that takes three arguments. The term springs from words like unary, binary, ternary, etc. Ternary, therefore meaning 3-ary.

The arguments and result can be of different types. Many programming languages that use C-like syntax feature a ternary operator, ?:, which defines a conditional expression. Often, a simple if-else statement can be used to achieve the same result.

For example:

```javascript
if (fooTrue) {
  bar();
} else {
  fuzz();
}
```

Above code can be shortened with ?:
```javascript
fooTrue ? bar() : fuzz();
```

In JavaScript, conditional operators can be evaluated to an Expression, not just statement.
```javascript
// assigned to a variable
const isFoo = fooTrue ? "yes" : "no";

// passed as an argument in a function
getFoo(fooTrue ? "yes" : "no");
```

---

### What is `"use strict";`? what are the advantages and disadvantages to using it?

---

### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

---

### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

---

### Explain what a single page app is and how to make one SEO-friendly.

---

### What is the extent of your experience with Promises and/or their polyfills?

---

### What are the pros and cons of using Promises instead of callbacks?

The main advantage a callback has over a promise is locality. With a callback you're asking for work to be performed in one place, and a result to be given very near the same so you can operate on it. In situations where there is no actual data being handed back (think GCD's primitives) a callback is the only appropriate way to handle such an API. Anything more would add needless complexity to a simple interface.

That said a promise's advantage is flexibility. You have much more liberty about where, when, and how work is done because you're dealing with a proper data type rather than a function. That freedom allows one to express higher-order operations like batching, chaining, coalescing, etc., but it can also introduce a small amount of uncertainty into any piece of code that relies on the locality mentioned above.

It all depends on what you need to do and how you need it done. For code that relies on short local reactions to asynchronous events go with a callback. For more complex interactions and data flows promises bring order to what could potentially be callback hell.

---

### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

---

### What tools and techniques do you use debugging JavaScript code?

---

### What language constructions do you use for iterating over object properties and array items?

---

### Explain the difference between synchronous and asynchronous functions.

---

### Explain the difference between mutable and immutable objects.

---

### What is an example of an immutable object in JavaScript?

---

### What are the pros and cons of immutability?

---

### How can you achieve immutability in your own code?

---

### What is event loop?

---

### What is the difference between call stack and task queue?

---

### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

---

### Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?

``` javascript
function foo(){ }();
```

What does 'IIFE' even stand for?

IIFE stands for Immediately Invoked Function Expressions

Great, so what are IIFEs?

An IIFE is an anonymous function that is created and then immediately invoked. It's not called from anywhere else (hence why it's anonymous), but runs just after being created.

``` javascript
(function() {
  return 5;
} ());
// returns 5 right away
```

They can be used to guard against unintended effects of hoisting:

The following code snip-it is from Wikipedia. I didn't understand how it worked right away, but I wrote the explanation following the snip-it to clear up my confusion.

``` javascript
let v = 1;
const getValue = (function(x) {
  return function() { return x; };
} (v));

v = 2;

getValue(); // returns 1
```

I can't even read that, what do all the nested functions mean?

Let's investigate the IIFE assigned to getValue by rewriting it with a helper function:

``` javascript
let v = 1;

function helperFunction(x) {
  return function() {
    return x;
  };
}
const getValue = helperFunction(v); // returns an anonymous function

v = 2;

getValue(); // invokes that function
```

What happens when the ```var getValue = helperFunction(v)``` line is called?

1. ```helperFunction(v)``` gets called with the current value of ```v```, which is 1
2. ```helperFunction``` gets executed, with the param ```x``` set to 1
3. The anonymous function returned by ```helperFunction``` gets created, still with ```x``` set to 1
4. ```getValue``` is set to the result of ```helperFunction```, which is

``` javascript
function() {
  return 1;
};
```

So now things look like this:

``` javascript
let v = 1;
const getValue = function() {
  return 1;
};

v = 2;

getValue();
```

And from here it is hardly surprising that ```getValue()``` returns 1.

What would have happened without the IIFE?

``` javascript
let v = 1;
const getValue = function() {
  return v;
};

v = 2;

getValue(); // returns 2
```

Although the ```return v``` is written when ```v``` is 1, by the time ```getValue``` is called ```v``` has been set to 2. Thus ```getValue()``` actually returns 2.

IIFEs can also be used to enforce private variables and methods:

``` javascript
const counter = (function() {
  let i = 0;

  return {
    get: function() {
      return i;
    },
    set: function(val) {
      i = val;
    }
  };
} ());

counter.get(); // returns 0
counter.set(3);
counter.get(); // returns 3
counter.i; // returns undefined
```

Again with the confusing nested functions! Can I have a rewrite?

``` javascript
function helperFunction() {
  let i = 0;

  return {
    get: function() {
      return i;
    },
    set: function(val) {
      i = val;
    }
  };
};

var counter = helperFunction();

counter.get(); // returns 0
counter.set(3);
counter.get(); // returns 3
counter.i; // returns undefined
```

Ok, that's a bit clearer, but what is ```counter``` actually set to?

```counter``` is set to the return value of ```helperFunction```, that is just this bit:

``` javascript
{
  get: function() {
    return i;
  },
  set: function(val) {
    i = val;
  }
};
```

You'll notice ```let i``` doesn't appear anywhere in there. ```i``` is defined elsewhere in the helperFunction / IIFE. Since the return value of ```helperFunction``` doesn't give explicit access to ```i```, counter doesn't have access.

Fine, so if that's all that ```counter``` has access to, how does ```counter.get()``` return a value?

Scopes! The scope from ```helperFunction``` has access to ```i```. The object returned by ```helperFunction``` (a.k.a counter) has access to all the variables defined in ```helperFunction```. It works like this:

1. Call to ```counter.get()``` goes and looks at the get function defined in ```helperFunction...```

``` javascript
get: function() {
  return i;
}
```

2. The ```get``` function looks for its local scope, which is ```helperFunction ...```

``` javascript
function helperFunction() {
  let i = 0;

  return {
    get: function() {
      return i;
    },
    set: function(val) {
      i = val;
    }
  };
};
```

3. In ```helperFunction``` is a definition for ```i...```

``` javascript
  let i = 0;
```

4. So ```get``` can return 0!

With all that explanation behind us, let's go back to the original question:

Explain why the following doesn’t work as an IIFE: ```function foo(){ }();```

Because ```foo``` isn't being called! Here's a rewrite:

``` javascript
function foo() {
} ();
```

This is a function definition, it defines ```foo```. But it's not a function expression - that is, it's not understood by the JS parser to actually call a function.

For the parser, things look like this:

``` javascript
function foo() {
} // ok, done with that function definition
  // (silly human left off the semicolon, how embarrassing!)

(); // Are they trying to call something? What’s the function’s name?
    // PARSE ERROR
```

In order to prep the parser that we're actually dealing with a function expression we have to wrap things up in ```()``` like so:

``` javascript
(
  function foo() {
  } ()
);
```

Now the parser reads this as:

``` javascript
( // oh goody, we're going to call some function expressions!
  function foo() { // here's the function definition
  }() // and here's where the function is actually called
);
```

And to finish it all off with a return statement and everything:

``` javascript
(function foo() {
  return 'bar';
} ());
```

**References**
* [immediately-invoked-function-expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

---

### What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?

---

### Have you ever used JavaScript templating? If so, what libraries have you used?

---

### What is the difference between `==` and `===`?

JavaScript has two sets of equality operators archived under comparison operators:

equality == & inequality != strict equality === & strict inequality !== We use these operators when comparing 2 operands. They differ on what type of operands are being compared to against.

For example, equality == or inequality != signs compares 2 values without type conversion. While strict equality === or strict inequality !== signs compares 2 values with type conversion.

```javascript
'1' == 1      // true < all it matters is the value
'1' === 1     // false < they are not the same type

1 == true     // true
'1' == true   // true

1 === true    // false
'1' === true  // false
```

**References**
 * [Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?](http://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)
 * [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

---

### Explain the same-origin policy with regards to JavaScript.

Same-origin policy restricts scripts from other websites to be executed on your website. It is an important security measure as it isolates known malicious attacks such as Cross Site Scripting.

In two pages with url, an origin is defined if its protocol, host, and port are the same for both pages.

An example via MDN - Same-origin policy:
Compare http://store.company.com/dir/page.html to the table below.

URL | Outcome | Reason
--- | --- | ---
http://store.company.com/dir2/other.html |	Success |	-
http://store.company.com/dir/inner/another.html |	Success |	-
https://store.company.com/secure.html |	Failure |	Different protocol
http://store.company.com:81/dir/etc.html |	Failure |	Different port
http://news.company.com/dir/other.html |	Failure |	Different host

There is also a work around for subdomains. The last example above http://news.company.com/dir/other.html can be a Success by setting document.domain to our parent domain company.com.

```javascript
document.domain = "company.com";
```

**References**
* [MDN - Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
[Same-origin Policy in layman terms](http://stackoverflow.com/questions/11474336/same-origin-policy-in-layman-terms)

---

### Make this work:
```javascript
duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

---

## Testing Questions:

### What are some advantages/disadvantages to testing your code?

---

### What tools would you use to test your code's functionality?

---

### What is the difference between a unit test and a functional/integration test?

---

### What is the purpose of a code style linting tool?

---

## Performance Questions:

### What tools would you use to find a performance bug in your code?

---

### What are some ways you may improve your website's scrolling performance?

---

### Explain the difference between layout, painting and compositing.

---

## Network Questions:

### Traditionally, why has it been better to serve site assets from multiple domains?

---

### Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.

---

### What are the differences between Long-Polling, Websockets and Server-Sent Events?

---

### Explain the following request and response headers:

* Diff. between Expires, Date, Age and If-Modified-...
* Do Not Track
* Cache-Control
* Transfer-Encoding
* ETag
* X-Frame-Options

---

### What are HTTP methods? List all HTTP methods that you know, and explain them.

---

## Coding Questions:

### Question: What is the value of `foo`?

```javascript
var foo = 10 + '20';
```

---

### Question: How would you make this work?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

---

### Question: What value is returned from the following statement?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

---

### Question: What is the value of `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

---

### Question: What is the outcome of the two alerts below?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

---

### Question: What is the value of `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

---

### Question: What is the value of `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

---

### Question: What does the following code print?

```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

---

## Fun Questions:

### What's a cool project that you've recently worked on?

---

### What are some things you like about the developer tools you use?

---

### Who inspires you in the front-end community?

---

### Do you have any pet projects? What kind?

---

### What's your favorite feature of Internet Explorer?