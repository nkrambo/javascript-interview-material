
## Animations

There are two primary ways to create animations on the web: with CSS and with JavaScript. Which one you choose really depends on the other dependencies of your project, and what kinds of effects you're trying to achieve.

In general:

* Use CSS animations for simpler "one-shot" transitions, like toggling UI element states.
* Use JavaScript animations when you want to have advanced effects like bouncing, stop, pause, rewind, or slow down.
* If you choose to animate with JavaScript, use the Web Animations API or a modern framework that you're comfortable with.

Most basic animations can be created with either CSS or JavaScript, but the amount of effort and time differs . Each has its pros and cons, but these are good guidelines:

Use CSS when you have smaller, self-contained states for UI elements. CSS transitions and animations are ideal for bringing a navigation menu in from the side, or showing a tooltip. You may end up using JavaScript to control the states, but the animations themselves will be in your CSS.

Use JavaScript when you need significant control over your animations. The Web Animations API is the standards-based approach, available today in Chrome and Opera. This provides real objects, ideal for complex object-oriented applications. JavaScript is also useful when you need to stop, pause, slow down, or reverse.

**Animate with CSS**

Animating with CSS is the simplest way to get something moving on screen. This approach is described as declarative, because you specify what you'd like to happen.

Below is some CSS that moves an element 100px in both the X and Y axes. It's done by using a CSS transition that's set to take 500ms. When the move class is added, the transform value is changed and the transition begins.

```css
.box {
  -webkit-transform: translate(0, 0);
  -webkit-transition: -webkit-transform 500ms;

  transform: translate(0, 0);
  transition: transform 500ms;
}

.box.move {
  -webkit-transform: translate(100px, 100px);
  transform: translate(100px, 100px);
}
```

If, as in the above snippet, you create separate CSS classes to manage your animations, you can then use JavaScript to toggle each animation on and off:

```javascript
box.classList.add('move');
```

Doing this provides a nice balance to your apps. You can focus on managing state with JavaScript, and simply set the appropriate classes on the target elements, leaving the browser to handle the animations.

In addition to using CSS transitions, you can also use CSS animations, which allow you to have much more control over individual animation keyframes, durations, and iterations.

You can, for example, animate the box in the same way with transitions, but have it animate without any user interactions like clicking, and with infinite repetitions. You can also change multiple properties at the same time:

```css
/**
 * This is a simplified version without
 * vendor prefixes. With them included
 * (which you will need), things get far
 * more verbose!
 */
.box {
  /* Choose the animation */
  animation-name: movingBox;

  /* The animation’s duration */
  animation-duration: 1300ms;

  /* The number of times we want
      the animation to run */
  animation-iteration-count: infinite;

  /* Causes the animation to reverse
      on every odd iteration */
  animation-direction: alternate;
}

@keyframes movingBox {
  0% {
    transform: translate(0, 0);
    opacity: 0.3;
  }

  25% {
    opacity: 0.9;
  }

  50% {
    transform: translate(100px, 100px);
    opacity: 0.2;
  }

  100% {
    transform: translate(30px, 30px);
    opacity: 0.8;
  }
}
```

**Animate with JavaScript and the Web Animations API**

Creating animations with JavaScript is, by comparison, more complex than writing CSS transitions or animations, but it typically provides developers significantly more power. You can use the Web Animations API to either animate specific CSS properties or build composable effect objects.

JavaScript animations are imperative, as you write them inline as part of your code. You can also encapsulate them inside other objects. Below is the JavaScript that you would need to write to re-create the CSS transition described earlier:

```javascript
const target = document.querySelector('.box');
const player = target.animate([
  {transform: 'translate(0)'},
  {transform: 'translate(100px, 100px)'}
], 500);
player.addEventListener('finish', function() {
  target.style.transform = 'translate(100px, 100px)';
});
```

With JavaScript animations, you're in total control of an element's styles at every step. This means you can slow down animations, pause them, stop them, reverse them, and manipulate elements as you see fit. This is especially useful if you're building complex, object-oriented applications, because you can properly encapsulate your behavior.

**CSS vs JavaScript Performance**

There are many pages and comments threads around the web that discuss the relative merits of CSS and JavaScript animations from a performance perspective. Here are a few points to keep in mind:

* CSS-based animations, and Web Animations where supported natively, are typically handled on a thread known as the "compositor thread." This is different from the browser's "main thread", where styling, layout, painting, and JavaScript are executed. This means that if the browser is running some expensive tasks on the main thread, these animations can keep going without being interrupted.

* Other changes to transforms and opacity can, in many cases, also be handled by the compositor thread.

* If any animation triggers paint, layout, or both, the "main thread" will be required to do work. This is true for both CSS- and JavaScript-based animations, and the overhead of layout or paint will likely dwarf any work associated with CSS or JavaScript execution, rendering the question moot.

No matter which approach you use you should maintain 60fps whenever you are animating, because any less results in stutters or stalls that will be noticeable to your users and negatively impact their experiences.

References:

* [Web Fundamentals](https://developers.google.com/web/fundamentals/design-and-ui/animations/)