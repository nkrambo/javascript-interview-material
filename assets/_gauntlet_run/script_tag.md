
## Script Tag

### Describe the difference between `<script>`, `<script async>` and `<script defer>`. Why is it good practice to place JS `<script>`s just before `</body>`? Do you know any exceptions?

**Normal Execution** `<script>`

This is the default behavior of the `<script>` element. Parsing of the HTML code pauses while the script is executing. For slow servers and heavy scripts this means that displaying the webpage will be delayed. Here the procession the browser takes:

1. Pause pars­ing the document.
2. Make a request to fetch the file.
3. Exe­cute the script after it has been downloaded.
4. Resume pars­ing the document.

This can lead to a bad user expe­ri­ence since the browser hangs while the script file is down­load­ing. To avoid this, 'best practice' says to place these types of script tags at the bot­tom of the html page, just before the `</body>` tag. This means the entire DOM can render, showing the user, before the browser fetches any render blocking scripts. They must also be ordered in in-place of execution dependencies. That is, if a script inclusion depends on jQuery then jQuery must be included first. For example:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="local/scripts/main-jquery.min.js"></script>
```

**Asynchronous Execution** `<script async>`

If it doesn't matter when scripts will be available then asynchronous is the best of both worlds: HTML parsing may continue and the script will be executed as soon as it's ready. It looks like this:

```html
<script src="myfile1.js" async></script>
<script src="myfile2.js" async></script>
```

1. Make par­al­lel requests to fetch the files.
2. Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
3. Exe­cute the indi­vid­ual scripts the moment the files are downloaded.

The great thing of this flow is that scripts can down­load in par­al­lel while the doc­u­ment is being parsed. But there's a caveat to this and thats the third point — the script will be exe­cuted the moment it is down­loaded. This can be a non-issue if a script is com­pletely self con­tained. How­ever, in many sit­u­a­tions, scripts may depend on other scripts to have done some ini­tial­iza­tion before they can exe­cute. e.g. jquery plu­g­ins require the jquery vari­able to already exist on the page.

This type of script is useful for scripts that are not included in the Critical Rendering Path (CRP), such as Google Analytics scripts etc...

**Deferred Execution** `<script defer>`

Simply put: delaying script execution until the HTML parser has finished. A positive effect of this attribute is that the DOM will be available for your script. However, you have to take into account legacy browsers that do not support this feature.

```html
<script src="myfile1.js" defer></script>
<script src="myfile2.js" defer></script>
```

1. Make par­al­lel requests to fetch the indi­vid­ual files.
2. Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
3. Fin­ish pars­ing the doc­u­ment even if the script files have downloaded.
4. Exe­cute each script in the order they were encoun­tered in the document.

As you can tell, defer is pretty much a great solution for most needs. However, it is still un-supported in many browsers so, in most cases, ordering your scripts at the bottom of the document is usually the best approach.

Again, this approach could be used for scripts not in the CRP of a documents, such as Google Analytics.