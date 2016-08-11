
// XMLHttpRequest

// To make a simple request, we create a request object with the
// XMLHttpRequest constructor and call its open and send methods.

var req = new XMLHttpRequest();
req.open("GET", "example/data.txt", false);
req.send(null);
console.log(req.responseText);
// → This is the content of data.txt

// Abstracting requests
function getURL(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(req.responseText);
    else
      callback(null, new Error("Request failed: " +
                               req.statusText));
  });
  req.addEventListener("error", function() {
    callback(null, new Error("Network error"));
  });
  req.send(null);
}

// Promises
function get(url) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}

get("example/data.txt").then(function(text) {
  console.log("data.txt: " + text);
}, function(error) {
  console.log("Failed to fetch data.txt: " + error);
});

// get('http://jsonplaceholder.typicode.com/posts/1')
// .then(function(text) {
//   const main = document.querySelector('.js-main');
//   const user = JSON.parse(text);
//   const node = document.createElement('LI');
//   const textnode = document.createTextNode(user.title);
//   node.appendChild(textnode);
//   main.appendChild(node);
// }, function(error) {
//   console.log(error);
// });




// const list = document.querySelector('.js-list');
//
// get('http://jsonplaceholder.typicode.com/posts/')
// .then(function(data) {
//   const posts = JSON.parse(data);
//   const user1 = posts.filter(function(item) {
//     return item.userId === 1;
//   });
//
//   user1.forEach(function(item) {
//     const node = document.createElement('LI');
//     node.innerHTML = item.title;
//     list.appendChild(node);
//   });
// }, function(error) {
//   console.log(error);
// });




