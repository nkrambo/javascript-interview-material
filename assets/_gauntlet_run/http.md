
## HTTP

### Explain HTTP request and response headers:

HTTP headers allow the client and the server to pass additional information with the request or the response. A request header consists of its case-insensitive name followed by a colon ':', then by its value (without line breaks). Leading white space before the value is ignored.

Headers can be grouped according to their contexts:

* **General header**: Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.

* **Request header**: Headers containing more information about the resource to be fetched or about the client itself.

* **Response header**: Headers with additional information about the response, like its location or about the server itself (name and version etc.).

* **Entity header**: Headers containing more information about the body of the entity, like its content length or its MIME-type.

The following list summaries HTTP headers by their usage category.

**Caching**

* **Age**: The time in seconds the object has been in a proxy cache.
* **Cache-Control**: Specifies directives for caching mechanisms in both, requests and responses.
* **Expires**: The date/time after which the response is considered stale.
* **Pragma**: Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.
* **Warning**: A general warning field containing information about possible problems.

**Conditionals**

* **Last-Modified**: It is a validator, the last modification date of the resource, used to compare several versions of the same resource. It is less accurate than ETag, but easier to calculate in some environments. Conditional requests using If-Modified-Since and If-Unmodified-Since use this value to change the behavior of the request.
* **ETag**: It is a validator, a unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.
* **If-Match**: Makes the request conditional and applies the method only if the stored resource matches one of the given ETags.
* **If-None-Match**: Makes the request conditional and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches (for safe requests), or to prevent to upload a new resource when one is already existing.
* **If-Modified-Since**: Makes the request conditional and expects the entity to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.
* **If-Unmodified-Since**: Makes the request conditional and expects the entity to be transmitted only if it has not been modified after the given date. This is used to ensure the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

**Connection Management**

* **Connection**: Controls whether or not the network connection stays open after the current transaction finishes.
* **Keep-Alive**: Controls how long a persistent connection should stay open.

**Content Negotiation**

* **Accept**: Informs the server about the types of data that can be sent back. It is MIME-type.
* **Accept-Charset**: Informs the server about which character set the client is able to understand.
* **Accept-Encoding**: Informs the server about the encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.
* **Accept-Language**: Informs the server about the language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language in a drop down list).

**Cookies**

* **Cookie**: Contains stored HTTP cookies previously sent by the server with the Set-Cookie header.
* **Set-Cookie**: Send cookies from the server to the user agent.

**CORS**

* **Access-Control-Allow-Origin**: Indicates whether the response can be shared.
* **Access-Control-Allow-Credentials**: Indicates whether or not the response to the request can be exposed when the credentials flag is true.
* **Access-Control-Allow-Headers**: Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
* **Access-Control-Allow-Methods**: Specifies the method or methods allowed when accessing the resource in response to a preflight request.
* **Access-Control-Expose-Headers**: Indicates which headers can be exposed as part of the response by listing their names.
* **Access-Control-Max-Age**: Indicates how long the results of a preflight request can be cached.
* **Access-Control-Request-Headers**: Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
* **Access-Control-Request-Method**: Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.
* **Origin**: Indicates where a fetch originates from.

**Message Body Information**

* **Content-Length**: indicates the size of the entity-body, in decimal number of octets, sent to the recipient.
* **Content-Type**: Indicates the media type of the resource.
* **Content-Encoding**: Used to specify the compression algorithm.
* **Content-Language**: Describes the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.
* **Content-Location**: Indicates an alternate location for the returned data.

**Message Routing**

* **Via**: Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

**Redirects**

* **Location**: Indicates the URL to redirect a page to

**Request Context**

* **From**: Contains an Internet email address for a human user who controls the requesting user agent.
* **Host**: Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.
* **Referrer**: The address of the previous web page from which a link to the currently requested page was followed.
* **Referrer-Policy**: Governs which referrer information sent in the Referer header should be included with requests made.
* **User-Agent**: Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the Firefox user agent string reference.

**Security**

* **Content-Security-Policy (CSP)**: Controls resources the user agent is allowed to load for a given page.
* **Content-Security-Policy-Report-Only**: Allows web developers to experiment with policies by monitoring (but not enforcing) their effects. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.
* **Public-Key-Pins (HPKP)**: Associates a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates.
* **Public-Key-Pins-Report-Only**: Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.
* **Strict-Transport-Security (HSTS)**: Force communication using HTTPS instead of HTTP.
* **Upgrade-Insecure-Requests**: Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests directive.
* **X-Content-Type-Options**: Disables MIME sniffing and forces browser to use the type given in Content-Type.
* **X-Frame-Options (XFO)**: Indicates whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>` or `<object>`
* **X-XSS-Protection**: Enables cross-site scripting filtering.

References:

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

### What are HTTP methods? List all HTTP methods that you know, and explain them.

References:

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
