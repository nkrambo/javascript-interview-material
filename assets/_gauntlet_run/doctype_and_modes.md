
## `doctype` and Modes

**In a Nutshell**

Browsers use doctype sniffing in order to decide the engine mode for text/html documents. This means that the mode is picked based on the document type declaration (DTD) (or the lack thereof) at the beginning of an HTML document. (This does not apply to documents served with an XML content type.)

You should start all your HTML documents (i.e. anything that gets served as text/html) with `<!DOCTYPE html>` as the first thing in the source. This will ensure "standards mode", essentially HTML5, and you can validate new features such as <video>, <canvas> and ARIA, for example.

So what are these modes about then?

**Standards Mode**

In the Standards mode the browsers try to give documents the specification-wise correct treatment to the extent implemented in a particular browser.

Since different browsers are at different stages of compliance, the Standards mode isn't a single target, either.

The HTML specification calls this mode the "no quirks mode".

```html
<!-- Standards mode, cutting edge validation -->
<!DOCTYPE html>

<!-- Standards mode, legacy validation target -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

The latter doctype also triggers the Standards mode, but lets you stick to less precise legacy validation that doesn't know about new features in case your organization has silly policies that require targeting legacy validation. But you really should be using <!DOCTYPE html> and get the policies of your organization revised.

**Almost Standards Mode**

Firefox, Safari, Chrome, Opera (since 7.5), IE8, IE9 and IE10 also have a mode known as "the Almost Standards mode", which implements the vertical sizing of table cells traditionally and not according to the CSS2 specification. Mac IE 5, Windows IE 6 and 7, Opera prior to 7.5 and Konqueror did not need an Almost Standards mode, because they didn't implement the vertical sizing of table cells according to the CSS2 specification in their respective Standards modes anyway. In fact, their Standards modes are closer to the Almost Standards mode than to the Standards mode of newer browsers.

In retrospect, the Web would have been better off by not having the distintion between Standards and Almost Standards, having the Almost Standards behavior as the default and having a CSS property for opting into the behavior that is the default in the Standards mode. Still, you should use the Standards mode—not the Almost Standard mode.

The HTML specification calls this mode the "limited quirks mode".

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

**Quirks Mode**

In the Quirks mode the browsers violate contemporary Web format specifications in order to avoid "breaking" pages authored according to practices that were prevalent in the late 1990s. Previously, different browsers implemented different quirks. In particular, in Internet Explorer 6, 7, 8 and 9, the Quirks mode is effectively frozen IE 5.5, while in other browsers the Quirks mode has been a handful of deviations from the Almost Standards mode. Recently, browsers have been converging on common behavior in their Quirks modes. Most notably, the primary Quirks mode of IE10 is no longer an imitation of IE 5.5 but seeks to be interoperable with Quirks modes of other browsers. The interoperable quirks are being standardized at the WHATWG.

The primary Quirks mode of IE10 that is like the Quirks modes of other browsers is sometimes referred to as the "interoperable Quirks mode" to distinguish it from the IE 5.5-imitating "Internet Explorer 5 Quirks" mode that IE10 also has.

If you are authoring a new page, don't use the Quirks mode. Just don't. Use the Standards mode.

```html
<!-- no doctype... -->
```

No doctype will mean browsers will use Quirks mode. Not recommended at all.

**Enforcing Standards Mode**

If you want to take extra care to make sure that users of IE8, IE9 or IE10 cannot press a button that makes your site regress as if it was being viewed in IE7, either configure your server to send the HTTP header X-UA-Compatible: IE=Edge for text/html or put `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` in the head of your HTML documents (before any scripts). This will, however, make the HTML document invalid and if you don't include these IE-specific incantations, the default behavior of IE is reasonable in most cases, so you don’t really need to jump through these IE-specific hoops.


### The Effects of Modes

**Layout**

Except in IE, the modes for text/html mainly affect CSS layout and the style system. For example, not inheriting styles into tables is a quirk. In old versions of IE and Opera, the box model changes to the IE 5.5 box model in the Quirks mode. This document does not enumerate all the layout quirks. For a list, please refer to Mozilla’s documentation and the Quirks Mode specification.

In the Almost Standards mode (in browsers that have one and all the current ones do), the height of table cells containing only images is computed differently compared to the Standards mode.

**Parsing**

There are also some quirks that affect HTML and CSS parsing and would cause conforming pages to be misparsed. These quirks are toggled on and off with quirky layout. However, it is important to realize that the Quirks mode vs. Standards mode is predominantly about CSS layout and CSS parsing—not HTML parsing. In browsers that have an HTML5-compliant HTML parser, there is exactly one HTML parsing quirk.

**Scripting**

Although the Quirks mode is primarily about CSS, there are some scripting quirks as well. Until Firefox 14, the HTML id attribute didn't establish object references from the global scripting scope in the Standards and Almost Standards modes. In Firefox, document.all is partially available in the Quirks mode but not in the other modes. The effects on scripting are more dramatic in IE when falling into a mode that emulates an old version of IE.
