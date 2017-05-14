
## Array.map()

### Replicating `map()`

```javascript
function map(arr, fn) {
  const results = [];
  arr.forEach((a) => {
    results.push(fn(a));
  });

  return results;
}
```