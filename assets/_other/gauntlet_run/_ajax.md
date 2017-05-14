
## AJAX

The **XMLHttpRequest** object is the interface through which browser JavaScript can
make HTTP requests.

To make a simple request, we create a request object with the XMLHttpRequest constructor
and call its open and send methods.

```javascript
const req = new XMLHttpRequest();
req.open('GET', 'example/data.txt', false);
req.send(null);

console.log(req.responseText); // This is the content of data.txt
```

**open()**

`XMLHttpRequest.open(method, url, [async], [user], [password])`

The open method configures the request. In this case, we choose to make a GET request for the example/data.txt file. URLs that don't start with a protocol name (such as http:) are relative, which means that they are interpreted relative to the current document.

**send()**

Get request
`XMLHttpRequest.send(null)`

Post request
`XMLHttpRequest.send(requestBody)`

After opening the request, we can send it with the send method. The argument to send is the request body.

For GET requests, we can pass null.

If the third argument to open was false, send will return only after the response to our request was received. We can read the request object's responseText property to get the response body.

### Abstracting Requests

```javascript
function getURL(url, callback) {
  const req = new XMLHttpRequest();
  req.open('GET', url, true);

  req.addEventListener('load', () => {
    if (req.status < 400) {
      callback(req.responseText);
    } else {
      callback(null, new Error(`Request failed: ${req.statusText}`));
    }
  });

  req.addEventListener('error', () => {
    callback(null, new Error(`Network error`));
  });

  req.send(null);
}
```

### Using Promises

```javascript
function get(url) {
  return new Promise((succeed, fail) => {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.addEventListener('load', () => {
      if (req.status < 400) {
        succeed(req.responseText);
      } else {
        fail(new Error(`Request failed: ${req.statusText}`));
      }
    });

    req.addEventListener('error', () => {
      fail(new Error('Network error'));
    });

    req.send(null);
  });
}
```

### Fetch




