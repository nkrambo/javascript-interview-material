
## Event Delegation

Event delegation allows you to avoid adding event listeners to specific nodes;  instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

Let's say that we have a parent UL element with several child elements:

```html
<ul class="post-list">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
	<li>Item 5</li>
	<li>Item 6</li>
</ul>
```

Let's also say that something needs to happen when each child element is clicked. You could add a separate event listener to each individual LI element. Adding and removing event listeners to each LI would be a nightmare. The better solution is to add an event listener to the parent UL element. But if you add the event listener to the parent, how will you know which element was clicked?

Simple: when the event bubbles up to the UL element, you check the event object's target property to gain a reference to the actual clicked node. This is event delegation.

Start by adding a click event listener to the parent element. When the event listener is triggered, check the event element to ensure it's the type of element to react to. If it is an LI element, boom:  we have what we need! If it's not an element that we want, the event can be ignored.

```javascript
document.querySelector('.post-list').addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    console.log(`${e.target.innerHTML} was clicked!`);
	}
});
```

**A more complicated example...**

Let's have a parent DIV with many children but all we care about is an A tag with the 'some-class' CSS class:

Using the Element.matches API, we can see if the element matches our desired target.

```html
<div class="panel">
  <h1>Bacon ipsum dolor amet</h1>
  <p>Biltong pork chop doner t-bone kielbasa ball tip turkey leberkas meatball ribeye. Drumstick cow meatloaf short ribs venison jerky.</p>

  <a href="#" class="some-class">Delegate 1</a>
  <a href="#" class="different-class">Normal 1</a>
  <a href="#" class="some-class">Delegate 2</a>
  <a href="#" class="different-class">Normal 2</a>
</div>
```

```javascript
document.querySelector('.panel').addEventListener('click', (e) => {
  if (e.target && e.target.matches('a.some-class')) {
    console.log(`${e.target.innerHTML} was clicked!`);
	}
});
```

**References**

* [MDN - Matches API](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
