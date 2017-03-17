
## CSS Selectors

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

**References**

* http://cssreference.io/

### Explain how a browser determines what elements match a CSS selector.

### How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?

### What are some of the 'gotchas' for writing efficient CSS?
