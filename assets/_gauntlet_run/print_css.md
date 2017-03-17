
## Print CSS

**Create A Stylesheet For Print**

Adding a print style sheet, with the media attribute set to "print", at the end of the list of stylesheets in the header is the best way to approach this. This will allow you to create custom CSS classes applied only at the time of print.

```html
<!-- main -->
<link rel="stylesheet" type="text/css" href="/global.css" media="all" />

<!-- print -->
<link rel="stylesheet" type="text/css" href="/print.css" media="print" />
```

**General Tips**

Mostly, you will want to hide parts of a page that don't add any print value to the user. Things like, the header, footer, sidebars, ads etc... A user is really only after the essential content of a page. You could create a class called `.no-print` and add that class declaration to DIVS, images, and other elements. Or you can select individual elements to hide, if you don't want to include the `.no-print` class to your markup.

```css
.no-print {
  display: none;
}

header nav, footer {
  display: none;
}
```
Other things...

Links obviously do not work on paper so it may be useful to remove their styles for print all together. Alternatively,
to put the links to use, you could display the URL after each string of anchor text. But text littered with URLs can be distracting and can impair the reading experience; and sparing the reader excessive information where possible is advisable.

The best solution is the :after pseudo-element. It displays the URL after each anchor text, surrounded by brackets. And the font size is reduced to make it less intrusive. You will probably still want to hide internal links and look at formatting really long external links.

To define page margins, you can use `@page` rule to simply apply a margin all the way around the page. For example:

```css
@page {
  margin: 0.5cm;
}
```

Finally, text font sizes and images may need to be reduced so that they're more print friendly.

**References**

* [Smashing Magazine](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)
