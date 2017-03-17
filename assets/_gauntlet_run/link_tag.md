
## Link Tag

### Why is it generally a good idea to position CSS `<link>`s between `<head></head>`?

According to the WC3 Spec, placing `<style>` and `<link>` tags within the `<body>` is not allowed in valid HTML. Inline styles such as, `<div style="color: red;">` are allowed but are considered bad practice.

In addition, once the DOM has been built the next step toward rendering a page is to build the CSS object model(CSSOM). The browser can then move onto the render tree, where the browser combines the DOM and CSSOM.

This allows users to see the content on your site load fast. Users won't find themselves staring at a blank white page.

If you put your JavaScript at the top of the page and CSS at the bottom, users will have to stare at a blank white page until the JavaScript finishes loading because `<script>` tags block parallel downloads. This means the visual elements of your site won't show up until the JavaScript finishes downloading first. When it does finish, users will experience a brief flash of styleless content and a shifting of elements on the screen.

References:

* [Medium](https://medium.com/@schizdazzle/whats-with-putting-the-css-in-the-head-24888fbbd2e2#.tvuweqq8x)
* [UX Movement](http://uxmovement.com/content/why-you-should-place-style-sheets-before-scripts/)
