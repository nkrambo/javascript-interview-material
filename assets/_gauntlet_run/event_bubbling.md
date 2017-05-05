
## Event Bubbling

Event bubbling occurs when a user interacts with a nested element and the event propagates up ("bubbles") through all of the ancestor elements.

```html
<div class="ancestor">
  <div class="parent">
    <button>Click me!</button>
  </div>
</div>
```

When a user clicks the button the event first fires on the button itself, then bubbles up to the parent div, and then up to the ancestor div. The event would continue to bubble up through all the ancestors, until it finally reaches the `document`.

```javascript
document.querySelector('button').addEventListener('click', (e) => {
  console.log('button was clicked!');
});

document.querySelector('.parent').addEventListener('click', (e) => {
  console.log('child element was clicked!');
});

document.querySelector('.ancestor').addEventListener('click', (e) => {
  console.log('descendant element was clicked!');
});
```

When the user clicks the button the events starts at the button element, so `button was clicked!` is logged to the console. Then `child element was clicked!` and finally `descendant element was clicked!` are logged as well.

### Stopping Event Bubbling

You have to explicitly stop event propagation (bubbling) if you don't want it.

```javascript
document.querySelector('button').addEventListener('click', () => {
  event.stopPropagation(); // this line here!
  console.log('button was clicked!');
});
```

Now the event propagation stops on the first element of the bubbling sequence. You can also stop the bubbling later on if you'd like, it doesn’t have to be on the first element.

### Related

The reverse of events that bubble up are events that trickle down. Originally some browsers thought events should trickle down from the ancestors to the element that was interacted with. Now all browsers implement bubble up events, and some support trickle down.


