
# System Design

These types of questions require the interviewee to design a high-level architecture for some sort of a software system.

A few examples of such questions:

- Design a URL shortening service like bit.ly.
- How would you implement the Google search?
- Design a client-server application which allows people to play chess with one another.
- How would you store the relations in a social network like Facebook and implement a feature where one user receives notifications when their friends like the same things as they do?

The idea of these questions is to have a discussion about the problem at hand. What's important for the interviewer is the process, which you use to tackle the problem.

The typical outcome of such a discussion is a high-level architecture addressing the goals and constraints in the question. Perhaps the interviewer will choose one or more areas where they will want to discuss bottlenecks and other common problems.

Remember that there is no one right answer. A system can be built in different ways. The important thing is to be able to justify your ideas. This is somewhat different from the algorithm design questions that we looked at in a previous chapter.

Finally, keep in mind that the discussion about the same system design problem could go in different directions depending on the goals of the interviewer. They may be willing to see how you create a high-level architecture covering all aspects of the system. Or rather, they could be more interested in looking at a few specific areas and diving deeper into them. In any case, you should have a strategy for how to approach the different situations.

## Approach

Similar to the algorithmic questions, system design questions require a combination of the right strategy and knowledge. By strategy we mean a way to approach the problem at an interview. Good candidates can fail not because they lack the knowledge but because they cannot focus on the right things while discussing a problem.

- The 'System Design Process' gives you steps to follow to solve system design problems.
- Designing scalable architectures is key to solving these types of questions. It is the 4th step in the above process, however it requires a disproportionate amount of knowledge and time to answer a question successfully.

## The Systems Design Process

#### Step 1: Constraints and Use Cases

Just like algorithm design, system design questions will also most likely be weakly defined. Consider the question... "Design a URL shortening service like bit.ly". There are so many things that are unclear about it! Without knowing more, it will be impossible to design an appropriate solution.

**The first step!**

The very first thing you should do with any system design question is to clarify the system's constraints and to identify what use cases the system needs to satisfy. Spend a few minutes questioning your interviewer and agreeing on the scope of the system.

Usually, part of what the interviewer wants to see is if you can gather the requirements about the problem at hand, and design a solution that covers them well. Never assume things that were not explicitly stated.

For example, the URL-shortening service could be meant to serve just a few thousand users, but each could be sharing millions of URLs. It could be meant to handle millions of clicks on the shortened URLs, or dozens. The service may have to provide extensive statistics about each shortened URL (which will increase your data size), or statistics may not be a requirement at all.

You will also have to think about the use cases that are expected to occur. Your system will be designed based on what it's expected to do.

Use cases example:

[![Use cases](https://i.vimeocdn.com/video/464074186.webp?mw=2880&mh=1800&q=70)](https://vimeo.com/86413525)

Constraints example:

[![Constraints](https://i.vimeocdn.com/video/464074269.webp?mw=1200&mh=800&q=70](https://vimeo.com/86413528)

#### Step 2: Abstract Design

Once you've scoped the system you're about to design, you should continue by outlining a high-level abstract design. The goal of this is to outline all the important components that your architecture will need.

You can tell the interviewer that you would like to do that and draw a simple diagram of your ideas. Sketch your main components and the connections between them. If you do this, very quickly you will be able to get feedback if you are moving in the right direction. Of course, you must be able to justify the high-level design that you just drew.

Don’t get lured to dive deep into some particular aspect of the abstract design. Not yet. Rather, make sure you sketch the important components and the connections between them. Justify your ideas in front of the interviewer and try to address every constraint and use case.

Usually, this sort of high-level design is a combination of well-known techniques, which people have developed. You have to make sure you are familiar with what's out there and feel comfortable using this knowledge. In this chapter we will assume that you have enough experience to design such a high-level system. Our goal is to focus more on the next steps, where we will talk mainly about scalability and about removing bottlenecks.

[![Abstract Design](https://i.vimeocdn.com/video/464074193.webp?mw=1200&mh=800&q=70](https://vimeo.com/86413527)

#### Step 3: Understanding Bottlenecks

Most likely your high-level design will have one or more bottlenecks given the constraints of the problem. This is perfectly ok. You are not expected to design a system from the ground up, which immediately handles all the load in the world. It just needs to be scalable, in order for you to be able to improve it using some standard tools and techniques.

Now that you have your high-level design, start thinking about what bottlenecks it has. Perhaps your system needs a load balancer and many machines behind it to handle the user requests. Or maybe the data is so huge that you need to distribute your database on multiple machines. What are some of the downsides that occur from doing that? Is the database too slow and does it need some in-memory caching?

These are just examples of questions that you may have to answer in order to make your solution complete. It may be the case that the interviewer wants to direct the discussion in one particular direction. Then, maybe you won't need to address all the bottlenecks but rather talk in more depth about one particular area. In any case, you need to be able to identify the weak spots in a system and be able to resolve them.

Remember, usually each solution is a trade-off of some kind. Changing something will worsen something else. However, the important thing is to be able to talk about these trade-offs, and to measure their impact on the system given the constraints and use cases defined.

[![Bottlenecks](https://i.vimeocdn.com/video/464074183.webp?mw=1200&mh=800&q=70](https://vimeo.com/86413531)

#### Step 4: Scaling Your Abstract Design

Once you're ready with your high-level design and have made sure that the interviewer is ok with it, you can dive into making it more detailed. Usually, this means making your system scale.

We've devoted the next section of this course to the topic of scalability. We will first cover some theoretical fundamentals, and then look at many real-life examples of scalable architectures. Finally, we'll wrap things up with several of the core principles for discussing scalability at interviews.

## Scalability

#### Fundamentals

Now that you've designed a solid abstract architecture, the next step is to take it to scale. If you've never built a large-scale system, this task may seem a little daunting.

There is a common set of scalability principles that you need to know. Knowing what they are, understanding how they are used, and being able to discuss their pros and cons is what scalability at interviews is all about.

[![Scalability](http://img.youtube.com/vi/-W9F__D3oY4/0.jpg)](http://www.youtube.com/watch?v=-W9F__D3oY4 "Scalability")

Vertical scaling
Horizontal scaling
Caching
Load balancing
Database replication
Database partitioning

http://tutorials.jenkov.com/software-architecture/scalable-architectures.html

http://tutorials.jenkov.com/software-architecture/load-balancing.html

http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html

## Examples

## How to Practice

Look at the massive systems you use every day developed by the companies you are interviewing for. What systems did these companies have to design? Create a list of the fundamental system design questions that bubble up in your brain.

Here are a few to get you started:

- Twitter: real time feed of the tweets by the people you're following
- Google: instantly returning the pages matching any search query (Search); Storing and serving massive amounts of video data (YouTube); Aggregating the world's news by topic (Google news)
- Facebook: serving massive amounts of photos
- Start by compiling a list of 10 to 20 of these questions. Then, pick one and try to come up with an efficient design. - Make sure you follow the process discussed in the previous sections.

Once you're ready, find a knowledgeable friend or coworker, go to a meeting room and start discussing ideas. It'd be tons of fun and you'll learn a lot from the process.

Don't spend hours: initially, limit your time per question to one hour and ultimately try to fit every question in 20 to 30 minutes.

If you can’t find a friend/coworker, go to a site like HighScalability that contains tons of examples of real-life architectures and compare what you conjured up to what these companies actually did. You’d be surprised how many of the top websites’ architectures are widely available. Keep in mind that these systems were designed by multiple people over multiple months, so don’t expect to be able to come up with every low-level decision they made. Focus on the high-level stuff.

https://www.hiredintech.com/classrooms/system-design/lesson/61

https://www.youtube.com/watch?v=CZ3wIuvmHeM



