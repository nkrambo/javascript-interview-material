
## Sprites

A CSS sprite is a single image containing several background images separated by white space. It's a collection of images combined in one big image. You can then expose different parts of the sprite using background position on certain elements, which acts like a viewport.

This is an old technique that helps you reduce the number of HTTP requests for fetching many images by combining them all into one image (and one request) that is often lighter than separate images combined. As soon as the sprite is called and displayed once (and even cached), you can re-use it with other elements, rendering immediately.

For example, changing the color of an icon on hover can be achieved with a sprite. You have different icon states 'stacked' horizontally or vertically within the sprite, with a 'default' and a 'hover' state. You expose the 'default' state with background positioning, by default, and when the icon is hovered you update the background position to expose the hover state. This is done with a :hover pseudo css selector.

This technique is used less and less and we've now got superior techniques that have replaced its need in many use cases, such as icon fonts etc...
