
## Image Replacement Techniques

In this modern age, if you are still looking to do so, there are many image replacement techniques that still work today. It is important to note that these usually come with SEO complications, even being
penalised by Google. So, you should use sparingly and look for alternatives first.

In general, these aren’t likely to be good for SEO in the near future and if you can avoid using them entirely.

Along with this, the use of image replacement has slowly evaporated too: in fact, HTML5 Boilerplate dropped their image replacement support altogether two years ago, citing that there weren't "enough use cases within modern web development."

Even though we no longer use img tags for text, it's not as if we stopped representing text with images: instead of using JPEGs for our logos, we've moved onto using SVGs. Instead of using GIFs for our button icons, we use icon fonts.

All in all, it looks like there is still a place, albeit a minor one, for image replacement techniques in the modern web landscape: specifically, SVGs standing in place for text can still benefit from the use of image replacement.

Furthermore, image replacement-style techniques can also be useful in the use of icon fonts without accompanying text, although aria-label will likely meet your needs.

Here are some of the techniques you can use:

**Negative Text Indent**

This is the most common technique that most web developers have used at one point or another. The idea here is to move the text far outside the browser window by setting a large negative text-indent. Setting overflow to hidden hides the text and whitespace: nowrap keeps it from moving onto the next line. The text will still be read by screen readers in this method.

```css
.replace-indent {
  height: 106px;
  background: url("assets/logo.png");
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```

**Small Font**

Another way to hide text is make it very small and set its color to the background of your logo. This works without affecting accessibility but you might face SEO penalties because of the tiny font size and camouflaged color.

```css
.replace-font {
  width: 264px;
  height: 106px;
  background: url("assets/logo.png");
  font-size: 1px;
  color: white;
}
```

**Using Clip-path**

The clip-path property hides everything that is outside the path specified by you. We can use it to clip our text and hide it. The text will still be accessible to screen readers but would be hidden visually. The only problem with this technique is that browser support is not good enough just yet. Here is the markup:

```html
<h1 class="replace-clip-path">
  <span>SitePoint</span>
</h1>
```

This is the CSS that you need to apply:

```css
.replace-clip-path {
  width: 264px;
  height: 106px;
  background: url("assets/logo.png");
}

.replace-clip-path span {
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
}
```

**Using Pseudo Element**

This technique uses a pseudo element to push the text aside.  The text then overflows and is hidden by using the overflow: hidden property. One issue with this technique is that it only works with Internet Explorer 8 and above.

```css
.replace-pseudo {
  width: 264px;
  height: 106px;
  overflow: hidden;
}

.replace-pseudo:before {
  content: url("assets/logo.png");
}
```
