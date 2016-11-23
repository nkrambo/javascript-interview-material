
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


## What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

---

## Talk about your preferred development environment.

---

## Which version control systems are you familiar with?

---

## Can you describe your workflow when you create a web page?


---

## If you have 5 different stylesheets, how would you best integrate them into the site?

---

## Can you describe the difference between progressive enhancement and graceful degradation?

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

---

### Explain what ARIA and screenreaders are, and how to make a website accessible.

---

### Explain some of the pros and cons for CSS animations versus JavaScript animations.

---

### What does CORS stand for and what issue does it address?

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

### What is the difference between classes and IDs in CSS?

---

### What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?

---

### Describe Floats and how they work.

---

### Describe z-index and how stacking context is formed.

---

### Describe BFC(Block Formatting Context) and how it works.

---

### What are the various clearing techniques and which is appropriate for what context?

---

### Explain CSS sprites, and how you would implement them on a page or site.

---

### What are your favourite image replacement techniques and which do you use when?

In this modern age, if you are still looking to do so, there are many image replacement techniques that still work today. It is important to note that these usually come with SEO complications, even being
penalised by Google. So, you should use sparingly and look for alternatives first.

In general, these aren’t likely to be good for SEO in the near future and if you can avoid using them entirely.

Along with this, the use of image replacement has slowly evaporated too: in fact, HTML5 Boilerplate dropped their image replacement support altogether two years ago, citing that there weren't "enough use cases within modern web development."

Even though we no longer use img tags for text, it's not as if we stopped representing text with images: instead of using JPEGs for our logos, we’ve moved onto using SVGs. Instead of using GIFs for our button icons, we use icon fonts.

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

---

### How do you optimize your webpages for print?

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

### Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

---

### What does ```### { box-sizing: border-box; }``` do? What are its advantages?

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

Inline elements:

1. respect left & right margins and padding, but **not** top and bottom
2. **cannot** have a width and height set
3. allow other elements to sit to their left and right.

Block elements:

1. respect all of those
2. force a line break after the block element

Inline-block elements:

1. allow other elements to sit to their left and right
2. respect top and bottom margins and padding
3. respect height and width

---

### What's the difference between a relative, fixed, absolute and statically positioned element?

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

References:
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

References:
* [Mozilla - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

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

References:
* [Mozilla Docs - Global Objects] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

---

### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

  ---

### What's the difference between `.call`, `.bind` and `.apply`?

---

### When would you use `document.write()`?

---

### What's the difference between feature detection, feature inference, and using the UA string?

---

### Explain Ajax in as much detail as possible.

---

### What are the advantages and disadvantages of using Ajax?

---

### Explain how JSONP works (and how it's not really Ajax).

---

### Explain 'hoisting'.

In javascript there is only function scoping. Variable declarations in a function are moved to the top of the function at run-time.

``` javascript
function() {
  // some code
  // some code

  var myVariable = 0; // this will get hoisted to the top of the function.
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

References:
* https://www.youtube.com/watch?v=sjyJBL5fkp8

---

### Describe event bubbling.

---

### What's the difference between an 'attribute' and a 'property'?.

---

### Why is extending built-in JavaScript objects not a good idea?

---

### Difference between document load event and document DOMContentLoaded event?

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

References:
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

References:

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

References:
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
