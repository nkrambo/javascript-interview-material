
## Design Tiny URL

Tags: System Design
Leetcode: 534

How would you design a URL shortening service that is similar to TinyURL?

Background:

TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Requirements:

1. For instance, "http://tinyurl.com/4e9iAk" is the tiny url for the page "https://leetcode.com/problems/design-tinyurl". The identifier (the highlighted part) can be any string with 6 alphanumeric characters containing 0-9, a-z, A-Z.

2. Each shortened URL must be unique; that is, no two different URLs can be shortened to the same URL.

Note about Questions:

Below are just a small subset of questions to get you started. In real world, there could be many follow ups and questions possible and the discussion is open-ended (No one true or correct way to solve a problem). If you have more ideas or questions, please ask in Discuss and we may compile it here!

Questions:

1. How many unique identifiers possible? Will you run out of unique URLs?
2. Should the identifier be increment or not? Which is easier to design? Pros and cons?
3. Mapping an identifier to an URL and its reversal - Does this problem ring a bell to you?
4. How do you store the URLs? Does a simple flat file database work?
5. What is the bottleneck of the system? Is it read-heavy or write-heavy?
6. Estimate the maximum number of URLs a single machine can store.
7. Estimate the maximum number of queries per second (QPS) for decoding a shortened URL in a single machine.
8. How would you scale the service? For example, a viral link which is shared in social media could result in a peak QPS at a moment's notice.
9. How could you handle redundancy? i,e, if a server is down, how could you ensure the service is still operational?
10. Keep URLs forever or prune, pros/cons? How we do pruning?
11. What API would you provide to a third-party developer?
12. If you can enable caching, what would you cache and what's the expiry time?
