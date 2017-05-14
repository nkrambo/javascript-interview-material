
## Normalizing CSS

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
