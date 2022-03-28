const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'G536CNR030',
  '6172dacfd1fed56ea6d64f0e63556a63'
);

const search = instantsearch({
  indexName: 'TEDbiz',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article class="ais-Hits-item__content">
  <div class="ais-Hits-item__image-wrap">
    <img class="ais-Hits-item__image" src="{{#helpers.highlight}}{ "attribute": "image_url" }{{/helpers.highlight}}">
  </div>
  <h1 class="ais-Hits-item__header">{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <div class="ais-Hits-item__description">{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</div>
  <p class="ais-Hits-item__speakers">{{#helpers.highlight}}{ "attribute": "speakers" }{{/helpers.highlight}}</p>
  <p class="ais-Hits-item__event"><span>{{#helpers.highlight}}{ "attribute": "event_name" }{{/helpers.highlight}}</span></p>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    facets: ['*'],
    maxValuesPerFacet: 20,
  }),
  instantsearch.widgets.dynamicWidgets({
    container: '#dynamic-widgets',
    fallbackWidget({ container, attribute }) {
      return instantsearch.widgets.refinementList({
        container,
        attribute,
      });
    },
    widgets: [
      container =>
        instantsearch.widgets.refinementList({
          container,
          attribute: 'tags',
        }),
      container =>
        instantsearch.widgets.refinementList({
          container,
          attribute: 'speakers',
        }),
      container =>
        instantsearch.widgets.refinementList({
          container,
          attribute: 'salePrice',
        }),
      container =>
        instantsearch.widgets.refinementList({
          container,
          attribute: 'bestSellingRank',
        }),
    ],
  }),
  instantsearch.widgets.menu({
    container: '#menu',
    attribute: 'tags',
  }),
  instantsearch.widgets.rangeSlider({
    container: '#range-slider',
    attribute: 'salePrice',
    min: 40,
    max: 200,
    pips: false,
  }),
]);

search.start();
