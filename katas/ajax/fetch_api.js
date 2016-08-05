
// The fetch API uses JavaScript Promises to handle results/callbacks:

// Simple response handling
fetch('https://davidwalsh.name/some/url').then(function(response) {

}).catch(function(err) {
	// Error :(
});

// Chaining for more "advanced" handling
fetch('https://davidwalsh.name/some/url').then(function(response) {
	return //...
}).then(function(returnedValue) {
	// ...
}).catch(function(err) {
	// Error :(
});

// A Request instance represents the request piece of a fetch call.
// By passing fetch a Request you can make advanced and customized requests:
// A sample Request usage may look like:

var request = new Request('https://davidwalsh.name/users.json', {
	method: 'POST',
	mode: 'cors',
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
});

// Now use it!
fetch(request).then(function() { /* handle response */ });

https://davidwalsh.name/fetch

