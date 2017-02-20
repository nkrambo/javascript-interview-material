
# Table of Contents

  1. [General Questions](#general-questions)
    * [Progressive enhancement and graceful degradation](#can-you-describe-the-difference-between-progressive-enhancement-and-graceful-degradation)
  2. [HTML Questions](#html-questions)
  3. [CSS Questions](#css-questions)
  4. [JS Questions](#js-questions)
  5. [Testing Questions](#testing-questions)
  6. [Performance Questions](#performance-questions)
  7. [Network Questions](#network-questions)
  8. [Coding Questions](#coding-questions)
  9. [Fun Questions](#fun-questions)

## General Questions:

### What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

---

### Talk about your preferred development environment.

Atom editor, with only some basic plugins
Node.js with Express
Sequelize ORM and PostGres
Webpack, Nodemon, Babel, NPM, NPM scripts
React with Redux, React Router, CSS Modules
RXJS (Observables) for side effects
Mocha, Chai, Enzyme
Git for version control
eslint with Airbnb config
Flow
Passport for Authentication, usually a local (bcrypt) and OAuth strategy

---

### Which version control systems are you familiar with?

Git with Git Flow

References:

* [Make School](https://www.youtube.com/watch?v=cgDRpayIsYo)


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

---

### If you jumped on a project and they used tabs and you used spaces, what would you do?

---

### Describe how you would create a simple slideshow page.

---

### If you could master one technology this year, what would it be?

---

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

### Consider HTML5 as an open web platform. What are the building blocks of HTML5?

---

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

---

### What is progressive rendering?

Progressive rendering is the name given to techniques used to render content for display as quickly as possible.

It used to be much more prevalent in the days before broadband internet but it's still useful in modern development as mobile data connections are becoming increasingly popular (and unreliable!).

Examples of such techniques :

* Lazy loading of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.

* Prioritizing visible content (or above the fold rendering) where you include only the minimum css/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred javascript (domready/load) to load in other resources and content.

---

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
---

### How is responsive design different from adaptive design?

---

### Have you ever worked with retina graphics? If so, when and what techniques did you use?

---

### Is there any reason you'd want to use `translate()` instead of ###absolute positioning###, or vice-versa? And why?

---

### Explain how prototypal inheritance works


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

The one item that bypasses this limitation is `<script>` tags. When you use a script tag, the domain limitation is ignored, but under normal circumstances, you can't really do anything with the results, the script just gets evaluated.

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


### Describe event bubbling.

---

### What's the difference between an 'attribute' and a 'property'?.

In short... Attributes are defined by HTML. Properties are defined by the DOM.

Everything in JavaScript is an object. These objects are categorized in different types (functions, boolean, string, number, etc) and can also contain properties and methods. Objects don't just exist in the language itself (JavaScript), but in Browser Object Model (BOM) and Document Object Model (DOM) as well.

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

### Explain the critical rendering path (CRP).

A popular metric commonly used in performance measurement and evaluation, is the total page load time. But from a user's point of view, more important benchmarks arise, despite the fact that the full download time of a page is still important, the user is much more aware of the time it takes for the page to become usable. This is the critical rendering path. In other words, it is the series of events that must take place to render (display) the initial view of a webpage.

In a modern website or application, loading a page in one second, a common benchmark, seems like a daunting and impossible task.

But we don't need to fully load a page in one second, what we need to do, is to get to the most important content, to get some usable piece of information to the user in one second, in order to maintain flow and give a feel of instant execution, an instant experience. This is also known as perceived performance.

In order to achieve this, we first need to fully understand what’s needed for a browser to render content to the screen.

**How the Rendering Engine Works**

In order to render content the browser has to go through a series of steps:

1. Document Object Model(DOM)
2. CSS object model(CSSOM)
3. Render Tree
4. Layout
5. Paint.

**Document Object Model**
To process a html file and get to the document object model event(DOM) the browser has to go through 4 steps:

As an example, let's start with the simplest possible case: a plain HTML page with some text and a single image.

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <title>Critical Path</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
  </body>
</html>
```

1. **Conversion**: The browser reads the raw bytes of HTML off the disk or network, and translates them to individual characters based on specified encoding of the file (for example, UTF-8).

2. **Tokenizing**: The browser converts strings of characters into distinct tokens—as specified by the W3C HTML5 standard; for example, `<html>`, `<body>` — and other strings within angle brackets. Each token has a special meaning and its own set of rules.

3. **Lexing**: The emitted tokens are converted into "objects", which define their properties and rules.

4. **DOM Construction**: Finally, because the HTML markup defines relationships between different tags (some tags are contained within other tags) the created objects are linked in a tree data structure that also captures the parent-child relationships defined in the original markup: the HTML object is a parent of the body object, the body is a parent of the paragraph object, and so on.

<img src="images/dom.png" />

The final output of this entire process is the Document Object Model (DOM) of our simple page, which the browser uses for all further processing of the page.

Every time the browser processes HTML markup, it goes through all of the steps above: convert bytes to characters, identify tokens, convert tokens to nodes, and build the DOM tree. This entire process can take some time, especially if we have a large amount of HTML to process.

<img src="images/dom-timeline.png" />

**CSS Object Model**

While the browser was constructing the DOM of our simple page, it encountered a link tag in the head section of the document referencing an external CSS stylesheet: style.css. Anticipating that it needs this resource to render the page, it immediately dispatches a request for this resource, which comes back with the following content:

```css
body { font-size: 16px }
p { font-weight: bold }
span { color: red }
p span { display: none }
img { float: right }
```

As with HTML, we need to convert the received CSS rules into something that the browser can understand and work with. Hence, we repeat the HTML process, but for CSS instead of HTML:

<img src="images/cssom-construction.png" />

The CSS bytes are converted into characters, then tokens, then nodes, and finally they are linked into a tree structure known as the "CSS Object Model" (CSSOM):

<img src="images/cssom-tree.png" />

When computing the final set of styles for any object on the page, the browser starts with the most general rule applicable to that node (for example, if it is a child of a body element, then all body styles apply) and then recursively refines the computed styles by applying more specific rules; that is, the rules "cascade down."

Consider the CSSOM tree above. Any text contained within the span tag that is placed within the body element, has a font size of 16 pixels and has red text—the font-size directive cascades down from the body to the span. However, if a span tag is child of a paragraph (p) tag, then its contents are not displayed.

Also, note that the above tree is not the complete CSSOM tree and only shows the styles we decided to override in our stylesheet. Every browser provides a default set of styles also known as "user agent styles"

To find out how long the CSS processing takes you can record a timeline in DevTools and look for "Recalculate Style" event: unlike DOM parsing, the timeline doesn’t show a separate "Parse CSS" entry, and instead captures parsing and CSSOM tree construction, plus the recursive calculation of computed styles under this one event.

<img src="images/cssom-timeline.png" />

Next, lets talk about the render tree that links the DOM and CSSOM together.

**The Render Tree, Layout and Paint**

The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.

In the previous section on constructing the object model, we built the DOM and the CSSOM trees based on the HTML and CSS input. However, both of these are independent objects that capture different aspects of the document: one describes the content, and the other describes the style rules that need to be applied to the document.

First, the browser combines the DOM and CSSOM into a "render tree", which captures all the visible DOM content on the page and all the CSSOM style information for each node.

<img src="images/render-tree-construction.png" />

To construct the render tree, the browser roughly does the following:

1. Starting at the root of the DOM tree, traverse each visible node.

  * Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.

  * Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node, in the example above, is missing from the render tree because we have an explicit rule that sets the "display: none" property on it.

2. For each visible node, find the appropriate matching CSSOM rules and apply them.

3. Emit visible nodes with content and their computed styles.

The final output is a render that contains both the content and style information of all the visible content on the screen. With the render tree in place, we can proceed to the **"layout"** stage.

Up to this point we've calculated which nodes should be visible and their computed styles, but we have not calculated their exact position and size within the viewport of the device, that's the "layout" stage, also known as "reflow".

To figure out the exact size and position of each object on the page, the browser begins at the root of the render tree and traverses it. Let's consider a simple, hands-on example:

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Critial Path: Hello world!</title>
  </head>
  <body>
    <div style="width: 50%">
      <div style="width: 50%">Hello world!</div>
    </div>
  </body>
</html>
```

The body of the above page contains two nested div's: the first (parent) div sets the display size of the node to 50% of the viewport width, and the second div, contained by the parent, sets its width to be 50% of its parent; that is, 25% of the viewport width.

<img src="images/layout-viewport.png" />

The output of the layout process is a "box model," which precisely captures the exact position and size of each element within the viewport: all of the relative measurements are converted to absolute pixels on the screen.

Finally, now that we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as **"painting"** or **"rasterizing"**.

This can take some time because the browser has to do quite a bit of work.

<img src="images/layout-timeline.png" />

* The "Layout" event captures the render tree construction, position, and size calculation in the Timeline.

* When layout is complete, the browser issues "Paint Setup" and "Paint" events, which convert the render tree to pixels on the screen.

The time required to perform render tree construction, layout and paint varies based on the size of the document, the applied styles, and the device it is running on: the larger the document, the more work the browser has; the more complicated the styles, the more time taken for painting also (for example, a solid color is "cheap" to paint, while a drop shadow is "expensive" to compute and render).

**Render Blocking CSS**

By default, CSS is treated as a render blocking resource, which means that the browser won't render any processed content until the CSSOM is constructed. Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering.

In the render tree construction we saw that the critical rendering path requires both the DOM and the CSSOM to construct the render tree. This creates an important performance implication: both HTML and CSS are render blocking resources. The HTML is obvious, since without the DOM we would not have anything to render, but the CSS requirement may be less obvious.

If we have some CSS styles that are only used under certain conditions, for example, when the page is being printed or being projected onto a large monitor then we shouldn't have to block rendering on these resources.

CSS "media types" and "media queries" allow us to address these use cases.

By using media queries, we can tailor our presentation to specific use cases, such as display versus print, and also to dynamic conditions such as changes in screen orientation, resize events, and more. When declaring your style sheet assets, pay close attention to the media type and queries; they greatly impact critical rendering path performance.

```html
<link href="style.css"    rel="stylesheet">
<link href="style.css"    rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css"    rel="stylesheet" media="print">
```

* The first declaration is render blocking and matches in all conditions.

* The second declaration is also render blocking: "all" is the default type so if you don't specify any type, it’s
 implicitly set to "all". Hence, the first and second declarations are actually equivalent.

* The third declaration has a dynamic media query, which is evaluated when the page is loaded. Depending on the orientation of the device while the page is loading, portrait.css may or may not be render blocking.

* The last declaration is only applied when the page is being printed so it is not render blocking when the page is first loaded in the browser.

**Adding Javascript**

JavaScript is a dynamic language that runs in a browser and allows us to alter just about every aspect of how the page behaves: we can modify content by adding and removing elements from the DOM tree; we can modify the CSSOM properties of each element; we can handle user input; and much more.

JavaScript can also block DOM construction and delay when the page is rendered. By default all JavaScript is parser blocking. Because the browser does not know what the script is planning to do on the page, it assumes the worst case scenario and blocks the parser. To deliver optimal performance, make your JavaScript async and eliminate any unnecessary JavaScript from the critical rendering path.

Script tags are executed at the exact point where it is inserted in the document. When the HTML parser encounters a script tag, it pauses its process of constructing the DOM and yields control to the JavaScript engine; after the JavaScript engine finishes running, the browser then picks up where it left off and resumes DOM construction.

To a large degree, "optimizing the critical rendering path" refers to understanding and optimizing the dependency graph between HTML, CSS, and JavaScript.

Script tags can be declared as asynchronous or can be deferred to ensure that DOM and CSSOM construction is not bloacked.

To summarise:

* JavaScript can query and modify the DOM and the CSSOM.
* JavaScript execution blocks on the CSSOM.
* JavaScript blocks DOM construction unless explicitly declared as async.
* The location of the script in the document is significant.

**Measuring the Critical Rendering Path**

The foundation of every solid performance strategy is good measurement and instrumentation. You can't optimize what you can't measure. Here are the different approaches for measuring CRP performance.

* The Lighthouse approach runs a series of automated tests against a page, and then generates a report on the page's CRP performance. This approach provides a quick and easy high-level overview of CRP performance of a particular page loaded in your browser, allowing you to rapidly test, iterate, and improve its performance.

* The Navigation Timing API approach captures Real User Monitoring (RUM) metrics. As the name implies, these metrics are captured from real user interactions with your site and provide an accurate view into real-world CRP performance, as experienced by your users across a variety of devices and network conditions.

In general, a good approach is to use Lighthouse to identify obvious CRP optimization opportunities, and then to instrument your code with the Navigation Timing API to monitor how your app performs out in the wild.

DevTools is currently not well-suited for CRP measurements because it does not have a built-in mechanism for isolating critical resources. Run a Lighthouse audit to help identify such resources.

**Analyzing Critical Rendering Path Performance**

Let's define the vocabulary we use to describe the critical rendering path:

* **Critical Resource**: Resource that could block initial rendering of the page.

* **Critical Path Length**: Number of roundtrips, or the total time required to fetch all of the critical resources.

* **Critical Bytes**: Total number of bytes required to get to first render of the page, which is the sum of the transfer filesizes of all critical resources. Our first example, with a single HTML page, contained a single critical resource (the HTML document); the critical path length was also equal to one network roundtrip (assuming file was small), and the total critical bytes was just the transfer size of the HTML document itself.

Let's also look at an example, say we have:

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
    <script src="app.js"></script>
  </body>
</html>
```

<img src="images/analysis-dom-css-js.png" />

If we look at this page's "network waterfall", you'll see that both the CSS and JavaScript requests are initiated at about the same time; the browser gets the HTML, discovers both resources, and initiates both requests. As a result, the above page has the following critical path characteristics:

* **3** critical resources
* **2** or more roundtrips for the minimum critical path length
* **11** KB of critical bytes

Let's say that we wanted to add in some print styles to our application and also an analytics script. Our example would then look like this:

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <link href="print.css" rel="stylesheet" media="print">
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
    <script src="app.js"></script>
    <script src="analytics.js" async></script>
  </body>
</html>
```

Notice on our print.css we have the `media="print"`. This media type means that this resource will not block parsing, it is essentially "deferred", which means it is not a critical resource.

Notice also that our analytics.js script has the `async` attribute. This means that this is also not a render blocking resource and is not a critical resource. So after these inclusions, our CRP metrics remain unchanged.

For illustration purposes, let's say that we actually only need a print stylesheet and we can also make our app.js `async`.

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="print.css" rel="stylesheet" media="print">
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
    <script src="app.js" async></script>
    <script src="analytics.js" async></script>
  </body>
</html>
```

 Our "network waterfall" will look like this:

<img src="images/analysis-dom-css-nb-js-async.png" />

An asynchronous script has several advantages:

* The script is no longer parser blocking and is not part of the critical rendering path.
* Because there are no other critical scripts, the CSS doesn't need to block the `domContentLoaded` event.
* The sooner the `domContentLoaded` event fires, the sooner other application logic can begin executing

Also, because the style.css resource is only used for print, the browser doesn't need to block on it to render the page. Hence, as soon as DOM construction is complete, the browser has enough information to render the page. As a result, this page has only a single critical resource (the HTML document), and the minimum critical rendering path length is one roundtrip.

* **1** critical resources
* **1** or more roundtrips for the minimum critical path length
* **5** KB of critical bytes

**Optimizing the Critical Rendering Path**

To deliver the fastest possible time to first render, we need to minimize three variables:

* The number of critical resources.
* The critical path length.
* The number of critical bytes.

A critical resource is a resource that could block initial rendering of the page. The fewer of these resources, the less work for the browser, the CPU, and other resources.

Similarly, the critical path length is a function of the dependency graph between the critical resources and their bytesize: some resource downloads can only be initiated after a previous resource has been processed, and the larger the resource the more roundtrips it takes to download.

Finally, the fewer critical bytes the browser has to download, the faster it can process content and render it visible on the screen. To reduce the number of bytes, we can reduce the number of resources (eliminate them or make them non-critical) and ensure that we minimize the transfer size by compressing and optimizing each resource.

The general sequence of steps to optimize the critical rendering path is:

1. Analyze and characterize your critical path: number of resources, bytes, length.
2. Minimize number of critical resources: eliminate them, defer their download, mark them as async, and so on.
3. Optimize the number of critical bytes to reduce the download time (number of roundtrips).
4. Optimize the order in which the remaining critical resources are loaded: download all critical assets as early as possible to shorten the critical path length.

References:

* [Web Fundamentals](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
* [Varvy](https://varvy.com/pagespeed/critical-render-path.html)
* [Medium](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a#.6pkbwmb6w)

---

## Network Questions:

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
