# Question 1:

> Hello, I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
>
> * Records
> * Indexing
>
> I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
>
> Cheers, George

----

Hey George,

My name’s Leland, I’m a Senior Demo Engineer here at Algolia. Let me be the first to say: welcome to the world of search engines, we’re happy to have you!

Learning new systems can always feel a little daunting, but I’m sure we can get you there – let’s start with those Algolia concepts:

**Records:**

A record is Algolia’s term for the data associated with a searchable item. Let’s say you have an online t-shirt store. In that case, Algolia’s “record” for a single shirt might contain the shirt’s name, its color, categories, price, and so on.

**Indexing:**

Algolia’s “indices” are, to put it simply, where your records live on our side! When your users start using your blazing fast Algolia search, we’re looking through the index to find a match against saved records. Index–_ing_, then, is the process of getting those records into an index. It’s the process that will initially create the index, and it’s also what will keep the index up to date as you change or add new records in the future.

Understanding how to load data into Algolia can seem tricky, but thankfully there is great documentation around it. I’d start here: https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/

There’s also a brilliant tutorial that covers these concepts on the coding side. You might want to send this link to your engineer working on it: https://www.algolia.com/doc/onboarding/#/pick-dataset 

Alright, let’s talk about your **Custom Ranking** question.

It seems like you already have a good handle on what Custom Ranking is, but to recap: Custom Ranking allows you to tweak the default search ranking to something specific to your customers’ needs. The way you do this is by choosing metrics that live inside your records which Algolia can then order the search results on.

I took a quick look at your account and didn’t see any likely candidates for Custom Ranking metrics. Some common ones we see are sales, ratings, views, and so on. Be sure to check out the [great documentation on this](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/) as well.

I’d be happy to set you up on a call with one of our customer support reps who could talk over your business’s needs and help you discover metrics to use here, just let me know!

Thanks very much – if there’s any other questions you might have, don’t hesitate to reach out!

Thanks,<br>Leland Clemmons<br>Principal Fake Email Writer

# Question 2:

> Hello,
>
> Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
>
> Regards, Matt

----

Hey Matt,

My name’s Leland, I’m a Senior Demo Engineer here at Algolia. We’re always looking for feedback – so thank you for sending this. I’m sorry to hear that you’re not enjoying our new design, and I’ve gone ahead and shared your concerns with the Algolia product team.

If you’re performing these functions frequently, though, it may help to use our API directly and cut out the clicks entirely. Check out the links below for more on that, and shoot me an email if you want some more direction on it.

- Deleting index: https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/delete-multiple-indices/ 
- Clearing index: https://www.algolia.com/doc/api-reference/api-methods/clear-objects/ 

Take care,<br>Leland Clemmons<br>CEO, Fictitious Correspondence Inc.

# Question 3:

> Hi,
>
> I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
>
> Regards, Leo

----

Hey Leo,

Great to meet you – my name’s Leland, I’m a Senior Demo Engineer here at Algolia.

I’m happy to report that Algolia has (mercifully) made it quite easy to get going with their service!

For instance, if you’re using WordPress, Shopify, Magento 2, Netlify, or Salesforce to sell, you can get up and running in minutes with hardly any code required. If your store is on any of those platforms, head on over to [Algolia’s Extensions list](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/ecosystem/#extensions).

Otherwise, at a high level, you’re going to be setting up a sync between your store and Algolia that sends us your products’ data and stores them in an Algolia “index.” After that, it’s a matter of adding our InstantSearch.js library to your site so that your users can start searching that index! To learn more, check out the [Quick Start guide](https://www.algolia.com/doc/guides/getting-started/quick-start/).

Finally, there are more tailored approaches if your business needs it. We can set you up on a call to cover that in-depth if you want, just let me know.

Hope that all helps!

Take care,<br>Leland Clemmons<br>VP of Manuscription viz. Interviews
