
## Load Event

### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

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
