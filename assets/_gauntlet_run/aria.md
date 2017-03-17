
## ARIA

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

This progress bar is built using a `<div>`, which is not very descriptive. Unfortunately, there isn't a more semantic tag available to developers in HTML 4, so we need to include ARIA roles and properties. These are specified by adding attributes to the element. In this example, the `role="progressbar"` attribute informs the browser that this element is actually a JavaScript-powered progress bar widget. The `aria-valuemin` and `aria-valuemax` attributes specify the minimum and maximum values for the progress bar, and the `aria-valuenow` describes the current state of it.

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
