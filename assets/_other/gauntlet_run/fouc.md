
## Flash of Unstyled Content (FOUC)

**A Brief History**

A flash of unstyled content (FOUC) is an instance where a web page appears briefly with the browser's default styles prior to loading an external CSS stylesheet, due to the web browser engine rendering the page before all information is retrieved. The page corrects itself as soon as the style rules are loaded and applied; however, the shift may be distracting.

When FOUC was first documented in the 2001 article Flash of Unstyled Content, the problem appeared to be unique to Internet Explorer. Then the glitch found its way into Safari in 2006, and it was described in the article The FOUC Problem. Both articles exposed the nature of the irregularity inherent with CSS rendering properly within these two browsers and their inability to render styled content on a consistent basis. Recent indications show that FOUC also occurs with certain JavaScript and jQuery implementations where the scripts are used for styling, images, typically content that takes longer or hangs after the page loads.

FOUC is indifferent to changes in CSS or HTML versions. The problem originates from a set of priorities programmed into the browser. As the browser collects HTML and all the ancillary files referenced in the markup, the browser builds the Document Object Model on-the-fly. The browser may choose to first display the text, which it can parse the quickest.

FOUC is more prevalent now that HTML pages are more apt to reference multiple style sheets. Web pages often include style references to media other than the browser screen, such as CSS rules for printers and mobile devices. Web pages may import layers of style files, and reference alternative style sheets. Online advertisements and other inserted offsite content, like videos and search engines, often dictate their own style rules within their code block. The cascading nature of CSS rules encourages some browsers to wait until all the style data is collected before applying it.

## Techniques to Minimize FOUC

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
