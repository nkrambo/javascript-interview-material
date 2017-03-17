
## `document.write()`

**What is it?**

`document.write()` writes to the document. It takes the content you want to write as a parameter. An invocation could look like this:

```javascript
document.write("<h1>JS is awesome!</h1>");
```

**Problems With `document.write()`**

document.write() shouldn't be used after the page has loaded to change the content as it will overwrite the entire page (probably not what you wanted to happen...).

document.write() doesn't work for XHTML pages. I've only been concerned with HTML so far, so I'm not too fussed about this one. But it might be more relevant in your case.

Some people think document.write() is a good solution for loading more files (JS or CSS) into the dom after the initial load. Turns out this is not the case, as this is slower than creating a new element (script or a css link) and inserting it into the page.

**Possible Situations to Use `document.write()`**

It seems that the only "approved" time to use `document.write()` is for third party code to be included (such as ads or Google Analytics). Since `document.write()` is always available (mostly) it is a good choice for third party vendors to use it to add their scripts. They don't know what environment you're using, if jQuery is or isn't available, or what your onload events are. And with `document.write()` they don't have to.

It can also be used as a fallback to include a local script file if a CDN inclusion or some other type of inclusion fails. For example, you see this in practice with the HTML5 Boilerplate. It checks for a global `jQuery` object, if it's
not there then jQuery has not been successfully included so it writes a local script inclusion and grabs a copy from the 'vendor' directory.

```html
<script>window.jQuery || document.write('<script src="js/vendor/jquery-{{JQUERY_VERSION}}.min.js"><\/script>')</script>
```
