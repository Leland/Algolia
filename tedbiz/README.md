# tedbiz

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

# Conceptualizaion

A fake landing page for TEDbiz. This is a spinoff of TED that focuses on licensing purpose-built videos to organizations. The root idea is taking a leaf from the American Management Association, with videos that would ideally center on development of employees that exclusive to this division.

Algolia's search here provides a window to peek into the offerings, and would ultimately be the interface for the service as well. I intended to have greater substance around the search but ran into various roadblocks.

- Faced difficulty when adding data source's `image_url` to hits
- Pagination's `hitsPerPage` values did not appear to be respected when hardcoded as a property
- Couldn't hack meaningfully visualizing tags

I generally tried to adhere to TED's own styles, using their brand font Inter (which I subsetted and preloaded to improve performance), their SVG logo, and their overall color palette.

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.
