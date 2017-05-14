
## Array.filter()

### Replicating `filter()`

```javascript
function filter(arr, fn) {
  const results = [];

  arr.forEach((a) => {
    if (fn(a)) {
      result.push(a);
    }
  });

  return results;
}
```