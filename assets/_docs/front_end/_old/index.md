

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

This depends on the browser. On average, browsers can handle about **6 connections** per hostname, but range from 2-24. Maximum connections vary a lot more, anywhere from 1-60. More modern browsers are more likely to support more concurrent downloads.

References:

[Browser Scope](http://www.browserscope.org/?category=network&v=1)

---

### Name 3 ways to decrease page load (perceived or actual load time).


### Describe how you would create a simple slideshow page.


### Explain the importance of standards and standards bodies.


### Explain some of the pros and cons for CSS animations versus JavaScript animations.

There are two primary ways to create animations on the web: with CSS and with JavaScript. Which one you choose really depends on the other dependencies of your project, and what kinds of effects you're trying to achieve.

In general:

* Use CSS animations for simpler "one-shot" transitions, like toggling UI element states.
* Use JavaScript animations when you want to have advanced effects like bouncing, stop, pause, rewind, or slow down.
* If you choose to animate with JavaScript, use the Web Animations API or a modern framework that you're comfortable with.

Most basic animations can be created with either CSS or JavaScript, but the amount of effort and time differs . Each has its pros and cons, but these are good guidelines:

Use CSS when you have smaller, self-contained states for UI elements. CSS transitions and animations are ideal for bringing a navigation menu in from the side, or showing a tooltip. You may end up using JavaScript to control the states, but the animations themselves will be in your CSS.

Use JavaScript when you need significant control over your animations. The Web Animations API is the standards-based approach, available today in Chrome and Opera. This provides real objects, ideal for complex object-oriented applications. JavaScript is also useful when you need to stop, pause, slow down, or reverse.

**Animate with CSS**

Animating with CSS is the simplest way to get something moving on screen. This approach is described as declarative, because you specify what you'd like to happen.

Below is some CSS that moves an element 100px in both the X and Y axes. It's done by using a CSS transition that's set to take 500ms. When the move class is added, the transform value is changed and the transition begins.

```css
.box {
  -webkit-transform: translate(0, 0);
  -webkit-transition: -webkit-transform 500ms;

  transform: translate(0, 0);
  transition: transform 500ms;
}

.box.move {
  -webkit-transform: translate(100px, 100px);
  transform: translate(100px, 100px);
}
```

If, as in the above snippet, you create separate CSS classes to manage your animations, you can then use JavaScript to toggle each animation on and off:

```javascript
box.classList.add('move');
```

Doing this provides a nice balance to your apps. You can focus on managing state with JavaScript, and simply set the appropriate classes on the target elements, leaving the browser to handle the animations.

In addition to using CSS transitions, you can also use CSS animations, which allow you to have much more control over individual animation keyframes, durations, and iterations.

You can, for example, animate the box in the same way with transitions, but have it animate without any user interactions like clicking, and with infinite repetitions. You can also change multiple properties at the same time:

```css
/**
 * This is a simplified version without
 * vendor prefixes. With them included
 * (which you will need), things get far
 * more verbose!
 */
.box {
  /* Choose the animation */
  animation-name: movingBox;

  /* The animation’s duration */
  animation-duration: 1300ms;

  /* The number of times we want
      the animation to run */
  animation-iteration-count: infinite;

  /* Causes the animation to reverse
      on every odd iteration */
  animation-direction: alternate;
}

@keyframes movingBox {
  0% {
    transform: translate(0, 0);
    opacity: 0.3;
  }

  25% {
    opacity: 0.9;
  }

  50% {
    transform: translate(100px, 100px);
    opacity: 0.2;
  }

  100% {
    transform: translate(30px, 30px);
    opacity: 0.8;
  }
}
```

**Animate with JavaScript and the Web Animations API**

Creating animations with JavaScript is, by comparison, more complex than writing CSS transitions or animations, but it typically provides developers significantly more power. You can use the Web Animations API to either animate specific CSS properties or build composable effect objects.

JavaScript animations are imperative, as you write them inline as part of your code. You can also encapsulate them inside other objects. Below is the JavaScript that you would need to write to re-create the CSS transition described earlier:

```javascript
const target = document.querySelector('.box');
const player = target.animate([
  {transform: 'translate(0)'},
  {transform: 'translate(100px, 100px)'}
], 500);
player.addEventListener('finish', function() {
  target.style.transform = 'translate(100px, 100px)';
});
```

With JavaScript animations, you're in total control of an element's styles at every step. This means you can slow down animations, pause them, stop them, reverse them, and manipulate elements as you see fit. This is especially useful if you're building complex, object-oriented applications, because you can properly encapsulate your behavior.

**CSS vs JavaScript Performance**

There are many pages and comments threads around the web that discuss the relative merits of CSS and JavaScript animations from a performance perspective. Here are a few points to keep in mind:

* CSS-based animations, and Web Animations where supported natively, are typically handled on a thread known as the "compositor thread." This is different from the browser's "main thread", where styling, layout, painting, and JavaScript are executed. This means that if the browser is running some expensive tasks on the main thread, these animations can keep going without being interrupted.

* Other changes to transforms and opacity can, in many cases, also be handled by the compositor thread.

* If any animation triggers paint, layout, or both, the "main thread" will be required to do work. This is true for both CSS- and JavaScript-based animations, and the overhead of layout or paint will likely dwarf any work associated with CSS or JavaScript execution, rendering the question moot.

No matter which approach you use you should maintain 60fps whenever you are animating, because any less results in stutters or stalls that will be noticeable to your users and negatively impact their experiences.

References:

* [Web Fundamentals](https://developers.google.com/web/fundamentals/design-and-ui/animations/)


### What's the difference between HTML and XHTML? Are there any problems with serving pages as `application/xhtml+xml`?

HTML5 has two parsing modes or syntaxes: HTML and XML. The difference depends on whether the document is served with a `Content-type: text/html` header or a `Content-type: application/xml+xhtml header`.

**HTML Syntax**

If it's served as text/html, the following rules apply:

* Start tags are not required for every element.
* End tags are not required for every element.
* Only **void elements** such as `br`, `img`, and `link` may be "self-closed" with `/>`.
* Tags and attributes are case-insensitive.
* Attributes do not need to be quoted.
* Some attributes may be empty (such as `checked` and `disabled`).
* Special characters, or entities, do not have to be escaped.
* The document must include an HTML5 DOCTYPE.

```html
<!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8>
      <title>Hi</title>
      <!--
      This is an example of a comment.
      The lines below show how to include CSS
      -->
      <link rel=stylesheet href=style.css type=text/css>
    </head>
    <body>
     <p>
        <img src=flower.jpg alt=Flower>
        Isn't this a lovely flower?

      <p>
        Yes, that is a lovely flower. What kind is it?

      <script src=foo.js></script>
    </body>
</html>
```

Again, our first line is a DOCTYPE declaration. As with all HTML5 tags, it's case-insensitive. If you don't like reaching for Shift, you could type `<!doctype html>` instead. If you really enjoy using Caps Lock, you could also type `<!DOCTYPE HTML>` instead.

Next is the `head` element. The `head` element typically contains information about the document, such as its title or character set. In this example, our `head` element contains a `meta` element that defines the character set for this document. Including a character set is optional, but you should always set one and it's recommended that you use UTF-8.

Our `head` element also contains our document title `()`. In most browsers, the text between the `title` tags is displayed at the top of the browser window or tab.

Comments in HTML are bits of text that aren't rendered in the browser. They're only viewable in the source code, and are typically used to leave notes to yourself or a coworker about the document. Some software programs that generate HTML code may also include comments. Comments may appear just about anywhere in an HTML document. Each one must start with.

A document head may also contain `link` elements that point to external resources, as shown here. Resources may include style sheets, favicon images, or RSS feeds. We use the `rel` attribute to describe the relationship between our document and the one we're linking to. In this case, we're linking to a cascading style sheet, or CSS file. CSS is the stylesheet language that we use to describe the way a document looks rather than its structure.

By the way, both `meta` and `link`, are examples of void HTML elements; we could also self-close them using `/>`. For example, would become, but it isn't necessary to do this.

**"XHTML5": HTML5's XML Syntax**

HTML5 can also be written using a stricter, XML-like syntax. XHTML5 is best understood as HTML5 that's written and parsed using the syntax rules of XML and served with a `Content-type: application/xml+xhtml` response header.

The following rules apply to "XHTML5":

* All elements must have a start tag.
* Non-void elements with a start tag must have an end tag (`p` and `li`, for example).
* Any element may be "self-closed" using `/>`.
* Tags and attributes are case sensitive, typically lowercase.
* Attribute values must be enclosed in quotes.
* Empty attributes are forbidden (`checked` must instead be `checked="checked"` or `checked="true"`).
* Special characters must be escaped using character entities.

Our `html` start tag also needs an `xmlns` (XML name space) attribute. If we rewrite our document from above to use XML syntax, it would look like the example below.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="utf-8" />
      <title>Hi</title>
    </head>
    <body>
      <p>
        <img src="flower.jpg" alt="Flower" />
        Isn't this a lovely flower?
      </p>
      <script src="foo.js" />
    </body>
</html>
```

Here we've added the XML name space with the `xmlns` attribute, to let the browser know that we're using the stricter syntax. We've also self-closed the tags for our **empty** or **void** elements, `meta` and `img`. According to the rules of XML and XHTML, all elements must be closed either with an end tag or by self-closing with a space, slash, and a right-pointing angle bracket (`/>`).

In this example, we have also self-closed our `script` tag. We could also have used a normal tag, as we've done with our other elements. The `script` element is a little bit of an oddball. You can embed scripting within your documents by placing it between `script` start and end tags. When you do this, you must include an end tag.

However, you can also link to an external `script` file using a `script` tag and the `src` attribute. If you do so, and serve your pages as `text/html`, you must use a closing tag. If you serve your pages as `application/xml+xhtml`, you may also use the self-closing syntax.

Don't forget: in order for the browser to parse this document according to XML/XHTML rules, our document must be sent from the server with a `Content-type: application/xml+xhtml` response header. In fact, including this header will trigger XHTML5 parsing in conforming browsers even if the DOCTYPE is missing.

As you may have realized, XML parsing rules are more persnickety. It's much easier to use the `text/html` MIME type and its looser HTML syntax.

### Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

---

### Describe the difference between `<script>`, `<script async>` and `<script defer>`. Why is it good practice to place JS `<script>`s just before `</body>`? Do you know any exceptions?

**Normal Execution** `<script>`

This is the default behavior of the `<script>` element. Parsing of the HTML code pauses while the script is executing. For slow servers and heavy scripts this means that displaying the webpage will be delayed. Here the procession the browser takes:

1. Pause pars­ing the document.
2. Make a request to fetch the file.
3. Exe­cute the script after it has been downloaded.
4. Resume pars­ing the document.

This can lead to a bad user expe­ri­ence since the browser hangs while the script file is down­load­ing. To avoid this, 'best practice' says to place these types of script tags at the bot­tom of the html page, just before the `</body>` tag. This means the entire DOM can render, showing the user, before the browser fetches any render blocking scripts. They must also be ordered in in-place of execution dependencies. That is, if a script inclusion depends on jQuery then jQuery must be included first. For example:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="local/scripts/main-jquery.min.js"></script>
```

**Asynchronous Execution** `<script async>`

If it doesn't matter when scripts will be available then asynchronous is the best of both worlds: HTML parsing may continue and the script will be executed as soon as it's ready. It looks like this:

```html
<script src="myfile1.js" async></script>
<script src="myfile2.js" async></script>
```

1. Make par­al­lel requests to fetch the files.
2. Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
3. Exe­cute the indi­vid­ual scripts the moment the files are downloaded.

The great thing of this flow is that scripts can down­load in par­al­lel while the doc­u­ment is being parsed. But there's a caveat to this and thats the third point — the script will be exe­cuted the moment it is down­loaded. This can be a non-issue if a script is com­pletely self con­tained. How­ever, in many sit­u­a­tions, scripts may depend on other scripts to have done some ini­tial­iza­tion before they can exe­cute. e.g. jquery plu­g­ins require the jquery vari­able to already exist on the page.

This type of script is useful for scripts that are not included in the Critical Rendering Path (CRP), such as Google Analytics scripts etc...

**Deferred Execution** `<script defer>`

Simply put: delaying script execution until the HTML parser has finished. A positive effect of this attribute is that the DOM will be available for your script. However, you have to take into account legacy browsers that do not support this feature.

```html
<script src="myfile1.js" defer></script>
<script src="myfile2.js" defer></script>
```

1. Make par­al­lel requests to fetch the indi­vid­ual files.
2. Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
3. Fin­ish pars­ing the doc­u­ment even if the script files have downloaded.
4. Exe­cute each script in the order they were encoun­tered in the document.

As you can tell, defer is pretty much a great solution for most needs. However, it is still un-supported in many browsers so, in most cases, ordering your scripts at the bottom of the document is usually the best approach.

Again, this approach could be used for scripts not in the CRP of a documents, such as Google Analytics.

---

### Why is it generally a good idea to position CSS `<link>`s between `<head></head>`?

According to the WC3 Spec, placing `<style>` and `<link>` tags within the `<body>` is not allowed in valid HTML. Inline styles such as, `<div style="color: red;">` are allowed but are considered bad practice.

In addition, once the DOM has been built the next step toward rendering a page is to build the CSS object model(CSSOM). The browser can then move onto the render tree, where the browser combines the DOM and CSSOM.

This allows users to see the content on your site load fast. Users won't find themselves staring at a blank white page.

If you put your JavaScript at the top of the page and CSS at the bottom, users will have to stare at a blank white page until the JavaScript finishes loading because `<script>` tags block parallel downloads. This means the visual elements of your site won't show up until the JavaScript finishes downloading first. When it does finish, users will experience a brief flash of styleless content and a shifting of elements on the screen.

References:

* [Medium](https://medium.com/@schizdazzle/whats-with-putting-the-css-in-the-head-24888fbbd2e2#.tvuweqq8x)
* [UX Movement](http://uxmovement.com/content/why-you-should-place-style-sheets-before-scripts/)


### Have you used different HTML templating languages before?

* Handle bars
* Jade

---

## CSS Questions:

**References**

* http://cssreference.io/

### What is the difference between classes and IDs in CSS?

**ID's and Classes are "hooks"**

We need ways to describe content in an HTML document. The basic elements like `<h1>`, `<p>`, and `<ul>` will often do the job, but our basic set of tags doesn't cover every possible type of page element or layout choice. For this we need ID's and Classes. These ID's and Classes the "hooks" we need to build into markup to get our hands on them. CSS obviously needs these so that we may build selectors and do our styling, but other web languages like Javascript depend on them too.

There is nothing stopping you from having both an ID and a Class on a single element. Adding a class name or ID to an element does nothing to that element by default. Classes and ID's don't have any styling information to them all by themselves. They require CSS to target them and apply styling.

**ID's**

* ID's are **unique**. Each element can only have 1 ID and each page can have only one element with that ID.

* ID's offer the "hash value" in the URL. If you have a URL like http://yourdomain.com#comments, the browser will attempt to locate the element with an ID of "comments" and will automatically scroll the page to show that element.

**Classes**

* Classes are not unique. You can use the same class on multiple elements. You can use multiple classes on the same element.

* Classes have no special abilities in the browser, like the ID's "hash value".

Most modern approaches and methodologies for reducing CSS codebases and organizing clean code actually take the opinion that ID's are almost an anti-pattern. Some of these include OOCSS, BEM and SMACSS. They often favor developing styles with classes only.

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

```css
/* Block component */
.btn {}

/* Element that depends upon the block */
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {}
.btn--big {}
```

In this CSS methodology a **block** is a top-level abstraction of a new component, for example a button: `.btn { }`. This block should be thought of as a parent. Child items, or **elements**, can be placed inside and these are denoted by two underscores following the name of the block like `.btn__price { }`. Finally, **modifiers** can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like `btn--orange`.

As you can see, such an approach does away with the use of CSS targetting via ID's.

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


### What are the various clearing techniques and which is appropriate for what context?


### How would you approach fixing browser-specific styling issues?

---

### How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?

---

### What are the different ways to visually hide content (and make it available only for screen readers)?

---

### Have you used or implemented media queries or mobile specific layouts/CSS?


### What are some of the 'gotchas' for writing efficient CSS?

---

### What are the advantages/disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.

---

### How would you implement a web design comp that uses non-standard fonts?

---

### Explain how a browser determines what elements match a CSS selector.

---

### Describe pseudo-elements and discuss what they are used for.


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


### How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?

---

### How is responsive design different from adaptive design?

---

### Have you ever worked with retina graphics? If so, when and what techniques did you use?

---

### Is there any reason you'd want to use `translate()` instead of ###absolute positioning###, or vice-versa? And why?

---

### Explain how prototypal inheritance works

### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?


### What's the difference between feature detection, feature inference, and using the UA string?

---

### Explain Ajax in as much detail as possible. What are the advantages and disadvantages of using Ajax?


### Describe event bubbling.


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

### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

### Explain what a single page app is and how to make one SEO-friendly.

### What is the extent of your experience with Promises and/or their polyfills?

### What are the pros and cons of using Promises instead of callbacks?

The main advantage a callback has over a promise is locality. With a callback you're asking for work to be performed in one place, and a result to be given very near the same so you can operate on it. In situations where there is no actual data being handed back (think GCD's primitives) a callback is the only appropriate way to handle such an API. Anything more would add needless complexity to a simple interface.

That said a promise's advantage is flexibility. You have much more liberty about where, when, and how work is done because you're dealing with a proper data type rather than a function. That freedom allows one to express higher-order operations like batching, chaining, coalescing, etc., but it can also introduce a small amount of uncertainty into any piece of code that relies on the locality mentioned above.

It all depends on what you need to do and how you need it done. For code that relies on short local reactions to asynchronous events go with a callback. For more complex interactions and data flows promises bring order to what could potentially be callback hell.

### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

### What tools and techniques do you use debugging JavaScript code?

### What language constructions do you use for iterating over object properties and array items?

### Explain the difference between synchronous and asynchronous functions.


### What is the difference between call stack and task queue?

---

### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`


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


### Make this work:
```javascript
duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

### What are some advantages/disadvantages to testing your code?

---

### What tools would you use to test your code's functionality?

---

### What is the difference between a unit test and a functional/integration test?


### What tools would you use to find a performance bug in your code?

---

### What are some ways you may improve your website's scrolling performance?


### Traditionally, why has it been better to serve site assets from multiple domains?

---

### Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.

---

### What are the differences between Long-Polling, Websockets and Server-Sent Events?

---

### Explain HTTP request and response headers:

HTTP headers allow the client and the server to pass additional information with the request or the response. A request header consists of its case-insensitive name followed by a colon ':', then by its value (without line breaks). Leading white space before the value is ignored.

Headers can be grouped according to their contexts:

* **General header**: Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.

* **Request header**: Headers containing more information about the resource to be fetched or about the client itself.

* **Response header**: Headers with additional information about the response, like its location or about the server itself (name and version etc.).

* **Entity header**: Headers containing more information about the body of the entity, like its content length or its MIME-type.

The following list summaries HTTP headers by their usage category.

**Caching**

* **Age**: The time in seconds the object has been in a proxy cache.
* **Cache-Control**: Specifies directives for caching mechanisms in both, requests and responses.
* **Expires**: The date/time after which the response is considered stale.
* **Pragma**: Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.
* **Warning**: A general warning field containing information about possible problems.

**Conditionals**

* **Last-Modified**: It is a validator, the last modification date of the resource, used to compare several versions of the same resource. It is less accurate than ETag, but easier to calculate in some environments. Conditional requests using If-Modified-Since and If-Unmodified-Since use this value to change the behavior of the request.
* **ETag**: It is a validator, a unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.
* **If-Match**: Makes the request conditional and applies the method only if the stored resource matches one of the given ETags.
* **If-None-Match**: Makes the request conditional and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches (for safe requests), or to prevent to upload a new resource when one is already existing.
* **If-Modified-Since**: Makes the request conditional and expects the entity to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.
* **If-Unmodified-Since**: Makes the request conditional and expects the entity to be transmitted only if it has not been modified after the given date. This is used to ensure the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

**Connection Management**

* **Connection**: Controls whether or not the network connection stays open after the current transaction finishes.
* **Keep-Alive**: Controls how long a persistent connection should stay open.

**Content Negotiation**

* **Accept**: Informs the server about the types of data that can be sent back. It is MIME-type.
* **Accept-Charset**: Informs the server about which character set the client is able to understand.
* **Accept-Encoding**: Informs the server about the encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.
* **Accept-Language**: Informs the server about the language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language in a drop down list).

**Cookies**

* **Cookie**: Contains stored HTTP cookies previously sent by the server with the Set-Cookie header.
* **Set-Cookie**: Send cookies from the server to the user agent.

**CORS**

* **Access-Control-Allow-Origin**: Indicates whether the response can be shared.
* **Access-Control-Allow-Credentials**: Indicates whether or not the response to the request can be exposed when the credentials flag is true.
* **Access-Control-Allow-Headers**: Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
* **Access-Control-Allow-Methods**: Specifies the method or methods allowed when accessing the resource in response to a preflight request.
* **Access-Control-Expose-Headers**: Indicates which headers can be exposed as part of the response by listing their names.
* **Access-Control-Max-Age**: Indicates how long the results of a preflight request can be cached.
* **Access-Control-Request-Headers**: Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
* **Access-Control-Request-Method**: Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.
* **Origin**: Indicates where a fetch originates from.

**Message Body Information**

* **Content-Length**: indicates the size of the entity-body, in decimal number of octets, sent to the recipient.
* **Content-Type**: Indicates the media type of the resource.
* **Content-Encoding**: Used to specify the compression algorithm.
* **Content-Language**: Describes the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.
* **Content-Location**: Indicates an alternate location for the returned data.

**Message Routing**

* **Via**: Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

**Redirects**

* **Location**: Indicates the URL to redirect a page to

**Request Context**

* **From**: Contains an Internet email address for a human user who controls the requesting user agent.
* **Host**: Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.
* **Referrer**: The address of the previous web page from which a link to the currently requested page was followed.
* **Referrer-Policy**: Governs which referrer information sent in the Referer header should be included with requests made.
* **User-Agent**: Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the Firefox user agent string reference.

**Security**

* **Content-Security-Policy (CSP)**: Controls resources the user agent is allowed to load for a given page.
* **Content-Security-Policy-Report-Only**: Allows web developers to experiment with policies by monitoring (but not enforcing) their effects. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.
* **Public-Key-Pins (HPKP)**: Associates a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates.
* **Public-Key-Pins-Report-Only**: Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.
* **Strict-Transport-Security (HSTS)**: Force communication using HTTPS instead of HTTP.
* **Upgrade-Insecure-Requests**: Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests directive.
* **X-Content-Type-Options**: Disables MIME sniffing and forces browser to use the type given in Content-Type.
* **X-Frame-Options (XFO)**: Indicates whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>` or `<object>`
* **X-XSS-Protection**: Enables cross-site scripting filtering.

References:

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

### What are HTTP methods? List all HTTP methods that you know, and explain them.

References:

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
