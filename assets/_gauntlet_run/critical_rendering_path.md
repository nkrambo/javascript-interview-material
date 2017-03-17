
## Critical Rendering Path (CRP).

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

Similarly, the critical path length is a function of the dependency graph between the critical resources and their byte size: some resource downloads can only be initiated after a previous resource has been processed, and the larger the resource the more roundtrips it takes to download.

Finally, the fewer critical bytes the browser has to download, the faster it can process content and render it visible on the screen. To reduce the number of bytes, we can reduce the number of resources (eliminate them or make them non-critical) and ensure that we minimize the transfer size by compressing and optimizing each resource.

The general sequence of steps to optimize the critical rendering path is:

1. Analyze and characterize your critical path: number of resources, bytes, length.
2. Minimize number of critical resources: eliminate them, defer their download, mark them as async, and so on.
3. Optimize the number of critical bytes to reduce the download time (number of roundtrips).
4. Optimize the order in which the remaining critical resources are loaded: download all critical assets as early as possible to shorten the critical path length.

**References**

* [Web Fundamentals](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
* [Varvy](https://varvy.com/pagespeed/critical-render-path.html)
* [Medium](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a#.6pkbwmb6w)
