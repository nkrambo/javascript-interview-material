
## Internationalisation

Internationalization is a big problem. If you want your application to make a worldwide impact, you have to deal with language barriers.

Before your application can succeed outside the English-speaking world, you'll have to adapt all your strings, dates, and numbers to the conventions of different cultures.

Developers call this practice internationalization (which is often abbreviated to "i18n", because there are 18 letters between the 'I' and the 'n' in the word Internationalization.)

**Getting Translated**

When you offer content in several languages, it's best not to rely on translation software, such as Google Translate. Accuracy of these tools varies quite a bit. For this reason it's best to get a human translator to ensure high quality and reliable translations.

**Presenting Language Options**

A multilingual website is useless without the ability to change languages. Oftentimes you'll find multilingual websites use a dropdown, placed top-right or in the footer. Whichever pattern you go for, make sure that the dropdown is easy to see and access.

**Flags**

Flags are very often used to indicate a language. Using flags for language switchers has a few downsides. Consider the following reasons:

* Flags represent countries, not languages.
* A country can have more than one official language.
* A language can be spoken in more than one country.
* Visitors might not recognize a flag (because of the icon size) or they might be confused by similar flags.

It's best to refer to a language in its own language, for example 'Deutsch' instead of 'German'. Ordering languages alphabetically will also help, so users can easily find the right version.

**Redirecting**

Certain websites redirect users to the homepage when they switch languages. This can be confusing, because users then have to find the page again. To keep your visitors happy, wherever possible make sure that they’re presented with the same (translated) page when they switch languages.

**Detecting Default Language**

It's possible to detect the user's default language and automatically show the page in the user's preferred language. However, don't hide the other options, in case the user wants to switch.

The best way to detect a user's preferred language is to analyze the `Accept-Language` header, which is based on the preferred languages set in the user's browser settings or their operating system.

Here's a simple JavaScript function for parsing the Accept-Language header. It uses a regular expression to return an ordered array of the user's preferred languages.

```javascript
const acceptLanguage = 'Accept-Language: en;q=0.8,es;q=0.6,fr;q=0.4';

const languages = acceptLanguage.split(':')[1].match(/[a-zA-z\-]{2,10}/g) || [];
console.log(languages); // ['en', 'es', 'fr']
```
The language identifier is also set in the base HTML template in order to tell the browser and search engines what language the document is in. This is simply defined in the "lang" attribute of the opening HTML tag in the document:

```html
<html lang="en">
```

**Encoding and Fonts**

Your content needs to be readable, so make sure the character encoding in the head of the page is set correctly:

```html
<meta charset="utf-8">
```

From the W3C:

"A Unicode-based encoding such as UTF-8 can support many languages and can accommodate pages and forms in any mixture of those languages."

Then consider the actual fonts: your web font needs to be compatible with all the languages you support, especially for non-Latin based languages. This means that the font used must contain all the characters and glyphs you commonly need. Some languages comprise hundreds of characters, making the font files themselves very heavy. Consider therefore refining the character groups that you include in the files.

**Left to Right and Right to Left**

Most languages use scripts which are written and read from left to right, but where that’s not the case it's helpful to mirror the layout of the whole web page. Yes, the entire layout. Text, images, navigation, sidebars, buttons, dropdowns, scroll bars etc... should all be mirrored.

For content, specify the direction of the text via the `dir="rtl"` attribute. This attribute is supported by all major browsers. Here’s an HTML example:

```html
<body dir="rtl">
```

```css
.content {
  direction: rtl;  /* Right to Left */
}
```

**URL Structure**

There are several ways to structure the URLs of multilingual websites. Each option has advantages and disadvantages.

**ccTLD**

A country code top-level domain (ccTLD) is linked to a specific country, such as .fr for France and .es for Spain.

ccTLDs are a clear signal for search engines that a website is targeting users in that country. The server location is irrelevant and it’s easy to separate websites. The biggest disadvantages are the availability of domains and the extra costs.

**Subdomain + gTLD**

Certain domain extensions are not tied to a country or region. The most popular is .com, but there are other frequently-used generic top-level domains, such as .net and .org.

These gTLDs can be used in combination with a subdomain, for example fr.website.com. It's easy to set up and most search engines understand this type of geotargeting. However, users might not always recognize the language of the content based on the URL.

**Subdirectory + gTLD**

Subdirectories are subdomains' counterpart. They are often used to structure content (for example website.com/blog or website.com/tshirts), but can also be used for geotargeting purposes. In this case we use website.com/fr to structure our URLs.

With this technique, everything can be hosted on the same server. Set-up is very easy and you can use Google Search Console to identify the different languages. One disadvantage is that users might not recognize the geotargeting from the URL alone (e.g. is webshop.com/de/ in German or not?)

**URL parameters**

Finally, there are URL parameters, for example website.com?country=it. URL parameters are not recommended, because they are difficult for search engines to interpret.

Personally, I like to use subdirectories in combination with a gTLD. Subdomains are mostly used to separate out content that is completely different. Because multilingual websites are basically translations of the same content (most of the time), subdirectories are an obvious solution.

**Other Considerations**

When designing multilingual websites, there are several other things to consider, such as:

* **Dates** - Not every country uses the same date format. Sometimes you'll have to convert dates from the Gregorian calendar to, for example, the Persian calendar.

* **Captchas** - If you using a captcha on your website make sure that it's in the same language as the page content. As a UK visitor, it's unlikely you'll want to solve a Russian captcha.

* **Phone Numbers** - Help your visitors with phone numbers on your website by including the country code

**React Intl**

React Intl is an open-source project from Yahoo, and part of Format.js, a collection of JavaScript libraries for internationalization that builds on Javascript's built-in Intl API.

The React Intl library makes internalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization.

JavaScript has an Internationalization API specification which defines the Intl object as a standard built-in global object.

React Intl essentially uses and builds on this API. As long as the browser supports these APIs, React Intl will continue to work its magic.

React Intl distributes its package via ES6, CommonJS, and UMD modules. Hence, it works really well with bundlers like Webpack, Browserify and Rollup.

**Setting Up**

First, you'll need to install the React Intl package.

```
npm install —-save react-intl
```

Next, we'll need to install the babel plugin for React Intl:

```
npm install --save-dev babel-plugin-react-intl
```

To actually have the babel plugin do its magic, we need to set up our .babelrc file to include this plugin. Here's what my .babelrc looks like with the react-intl plugin added.

```json
{
  "presets": ["es2015", "react", "stage-0"],
  "plugins": [
    "transform-object-rest-spread",
    "transform-runtime",
    [
      "react-intl", {
        "messagesDir": "./build/messages",
        "enforceDescriptions": false
      }
    ]
  ],
  "env": {
     "development": {
      "presets": ["react-hmre"]
     }
  }
}
```

What this babel plugin does is it extract all the string messages in your application that are defined using either defineMessages, <FormattedMessage>, or <FormattedHTMLMessage>.

Once extracted, it generates JSON files which contain the string messages and places them in the directory you defined in the messagesDir path above.

**Loading data**

Next, let's load the appropriate locale data for the languages that we need to support.

In the root component file, we add the locale data using the addLocaleData API. The data will then be passed the contents of the locale data module, which will then be registered in its locale data registry.

For this sample project, I'm going to assume we’re supporting 4 languages: English, Spanish, French and Italian.

```javascript
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';

addLocaleData([...en, ...es, ...fr, ...it]);
```

**Create the i18n context**

So far, we've installed the React Intl package, set up our .babelrc plugin, and loaded the appropriate locale data.

One final step is to create an i18n context for all our React components so that the current user's locale and translated message (based on the user’s locale) can be loaded into the React Intl Components that you define in your app.

One final step is to create an i18n context for all our React components so that the current user's locale and translated message (based on the user’s locale) can be loaded into the React Intl Components that you define in your app.

To do this, we first define the messages to pass to IntlProvider based on the user's locale. Then we wrap the root React component with IntlProvider, which is a named export provided by React-Intl:

```javascript
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';

// Our translated strings
import localeData from './../../build/locales/data.json';

addLocaleData([...en, ...es, ...fr, ...it]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

// Render our root component into the div with id "root"
// We select the messages to pass to IntlProvider based on the user's locale
render(
  <IntlProvider locale={language} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
```

In this setup, we're assuming that our translated data will live in build/locales/data.json and that the data is grouped by language, like so:

```json
{
  "en": {
    "...English version of strings"
  },
  "fr": {
    "...French version of strings"
  },
  "es": {
    "...Spanish version of strings"
  },
}
```

**Formatted Message Component Example**

First, we'll look at the header which says: "Welcome to your dashboard, Nick!"

To convert this, we'll use the FormattedMessage component:

```javascript
<FormattedMessage
  id={ 'Header.greeting' }
  defaultMessage={ 'Welcome to your dashboard, {name}!' }
  values={{ name: this.props.name }}
/>
```

The FormattedMessage component has props that correspond something called a "Message Descriptor" in React Intl. The Message Descriptor is the format used to define default messages/strings, and is useful for providing the data necessary for having the strings/messages translated. It contains the following properties:

* **id:** A unique, stable identifier for the message
* **description:** Context for the translator about how it's used in the UI (optional)
* **defaultMessage:** The default message (in English)

The id prop must be unique for every message defined in your app. What's awesome is that the defaultMessage can be passed data from the props, as is the case in name above. (Note that the values that are passed as data won't get translated — they’re simply inserted into the final translated string as-is.)

That's how to use the Formatted* Components to define strings, numbers, dates, and pluralization. However, there are plenty of instances where it’s necessary to pass formatted strings as props or use formatted strings to name an HTML component. The FormattedMessage component doesn't well work in cases like this.

Luckily, React Intl's defineMessages API lets us imperatively define all of a component's strings, then pass them as props to the component.

Let's try this approach for the widget headers and body. First, we use defineMessages to define our strings:

```javascript
const messages = defineMessages({
  widget1Header: {
    id: 'Widgets.widget1.header',
    defaultMessage: 'Creative header',
  },
  widget1Body: {
    id: 'Widgets.widget1.body',
    defaultMessage: 'Mark todays date: {date}',
  },
  widget2Header: {
    id: 'Widgets.widget2.header',
    defaultMessage: 'Here is another widget',
  },
  widget2Body: {
    id: 'Widgets.widget2.body',
    defaultMessage: 'Hello. How is your day going?',
  }
});
```

Then, assuming we have a Widget component that expects header and body props, we can continue like so:

```javascript
<Widget
  header={ formatMessage(messages.widget1Header) }
  body={ formatMessage(messages.widget1Body, {
    date: formatDate(this.props.currentDate, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }) }
/>

<Widget
  header={ formatMessage(messages.widget2Header) }
  body={ formatMessage(messages.widget2Body) }
/>
```

References:

* [W3C](https://w3c.github.io/bp-i18n-specdev/)
* [React Internationalization](https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.ptr11hilz)
* [React Intl](https://github.com/yahoo/react-intl)
* [Javascript Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
