
## `data-` Attributes

Before HTML5, working with arbitrary data sucked. To keep things valid, you had to stuff things into rel or class attributes.

But that all changed with the introduction of HTML5 custom data attributes. Now you can store arbitrary data in an easy, standards-compliant way.

A data attribute is exactly that: a custom attribute that stores data. They are always prefixed with `data-` followed by something descriptive (according to the spec, only lower case letters and hyphens are allowed). An element can have any number of data attributes you want.

Of course, this data isn't very useful to a visitor because they can't actually see it, but it's wildly useful for building web applications.

**HTML Syntax**

The syntax is simple. Any attribute on any element whose attribute name starts with data- is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation. Just use data attributes for that:

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

**JavaScript Access**

Reading the values of these attributes out in JavaScript is also very simple. You could use `getAttribute()` with their full HTML name to read them, but the standard defines a simpler way: a `DOMStringMap` you can read out via a dataset property.

To get a data attribute through the dataset object, get the property by the part of the attribute name after data- (note that dashes are converted to camelCase).

```javascript
const article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

**CSS Access**

Note that, as data attributes are plain HTML attributes, you can even access them from CSS. For example to show the parent data on the article you can use generated content in CSS with the attr() function:

```css
article::before {
  content: attr(data-parent);
}
```

You can also use the attribute selectors in CSS to change styles according to the data:

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

Data attributes can also be stored to contain information that is constantly changing, like scores in a game. Using the CSS selectors and JavaScript access here this allows you to build some nifty effects without having to write your own display routines.

**Things you can do with data attributes**

Custom data attributes are widely used all over the web. The nice thing is that they work fine in older browsers, and they adhere to web standards moving forward.

**Filtering**

Say you have a list of things and you want to filter them by keyword. Just put the keywords into a data attribute and write a short script to loop through and show/hide them accordingly.

```html
<input type="text" id="filter">
<ul class="cars">
    <li data-models="mustang, f150, 500, fusion">Ford</li>
    <li data-models="corvette, silverado, impala, cavalier">Chevrolet</li>
    ...
</ul>
```

**Styling**

It's arguably better to use classes, but you can style things against data attributes too. Here's how to apply a style if the element has a certain data attribute (regardless of its value). First, the HTML:

```html
<span class="label" data-warning>
```

Now the CSS:

```css
[data-warning] {
    background: red;
}
```

**Configuring**

Bootstrap uses data attributes as an HTML alternative to configuring plugins via JavaScript. Here's an example of a popover:

```html
<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on top
</button>
```

**Issues**

Do not store content that should be visible and accessible in data attributes, because assistive technology may not access them. In addition, search crawlers may not index data attributes' values.

The performance of reading data-attributes compared to storing this data in a JS data warehouse is poor. Using dataset is even slower than reading the data out with `getAttribute()`. For custom element-associated metadata, they are a great solution.

References:

* [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes)
* [A beuatiful Site](https://www.abeautifulsite.net/working-with-html5-data-attributes)
