
## Attributes and Properties

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
