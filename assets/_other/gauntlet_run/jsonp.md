
## JSONP

JSONP (JSON with Padding or JSON-P) is a JSON extension used by web developers to overcome the cross-domain restrictions imposed by browsers' same-origin policy that limits access to resources retrieved from origins other than the one the page was served by. In layman's terms, one website cannot just simply access the data from another website.

It was developed because handling a browsers' same origin policy can be difficult, so using JSONP abstracts the difficulties and makes it easier.

Say you're on domain example.com, and you want to make a request to domain example.net. To do so, you need to cross domain boundaries, a no-no in most of browserland.

The one item that bypasses this limitation is `<script>` tags. When you use a script tag, the domain limitation is ignored, but under normal circumstances, you can't really do anything with the results, the script just gets evaluated.

Enter JSONP. When you make your request to a server that is JSONP enabled, you pass a special parameter that tells the server a little bit about your page. That way, the server is able to nicely wrap up its response in a way that your page can handle.

For example, say the server expects a parameter called "callback" to enable its JSONP capabilities. Then your request would look like:

```html
http://www.example.net/sample.aspx?callback=mycallback
```

Without JSONP, this might return some basic JavaScript object, like so:

```javascript
{ foo: 'bar' }
```

However, with JSONP, when the server receives the "callback" parameter, it wraps up the result a little differently, returning something like this:

```javascript
mycallback({ foo: 'bar' });
```

As you can see, it will now invoke the method you specified. So, in your page, you define the callback function:

```javascript
mycallback = function(data){
  alert(data.foo);
};
```

And now, when the script is loaded, it'll be evaluated, and your function will be executed. Voila, cross-domain requests!

It's also worth noting the one major issue with JSONP: you lose a lot of control of the request. For example, there is no "nice" way to get proper failure codes back. As a result, you end up using timers to monitor the request, etc, which is always a bit suspect. The proposition for JSONRequest is a great solution to allowing cross domain scripting, maintaining security, and allowing proper control of the request.

These days (2016), CORS is the recommended approach vs. JSONRequest. JSONP is still useful for older browser support, but given the security implications, unless you have no choice CORS is the better choice.
