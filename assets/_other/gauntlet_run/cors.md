
## CORS

**What is it?**

Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the `XMLHttpRequest` and `fetch` objects, CORS allows developers to work with the same idioms as same-domain requests.

The use-case for CORS is simple. Imagine the site alice.com has some data that the site bob.com wants to access. This type of request traditionally wouldn't be allowed under the browser's same origin policy. However, by supporting CORS requests, alice.com can add a few special response headers that allows bob.com to access the data.

As you can see from this example, CORS support requires coordination between both the server and client. Luckily, if you are a client-side developer you are shielded from most of these details. The rest of this article shows how clients can make cross-origin requests, and how servers can configure themselves to support CORS.

**Adding CORS support to the server**

Most of the heavy lifting for CORS is handled between the browser and the server. The browser adds some additional headers, and sometimes makes additional requests, during a CORS request on behalf of the client. These additions are hidden from the client.

<img src="images/cors_flow.png" />

**Types of CORS requests**

Cross-origin requests come in two flavors:

1. simple requests
2. "not-so-simple requests" (a term I just made up)

Simple requests are requests that meet the following criteria:

* HTTP Method matches (case-sensitive) one of:
  * HEAD
  * GET
  * POST

* HTTP Headers matches (case-insensitive):
  * Accept
  * Accept-Language
  * Content-Language
  * Last-Event-ID
  * Content-Type, but only if the value is one of:
    * application/x-www-form-urlencoded
    * multipart/form-data
    * text/plain

Simple requests are characterized as such because they can already be made from a browser without using CORS. For example, a JSON-P request can issue a cross-domain GET request. Or HTML could be used to do a form POST.

Any request that does not meet the criteria above is a not-so-simple request, and requires a little extra communication between the browser and the server (called a preflight request), which we’ll get into below.

**CORS vs JSONP**

CORS can be used as a modern alternative to the JSONP pattern. While JSONP supports only the GET request method, CORS also supports other types of HTTP requests. CORS is supported by most modern web browsers. Also, while JSONP can cause cross-site scripting (XSS) issues where the external site is compromised, CORS allows websites to manually parse responses to ensure security.

**References**

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
* [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/cors/)
* [The CORS Spec](https://www.w3.org/TR/cors/)
* [Nicholas Zakas](https://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/)
