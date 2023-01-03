# vite-plugin-ssr-example-src

This is the source for a simple example with mdx, react and vite-plugin-ssr. Other than the 3 pages, it is all necessary. I edited `renderer/PageLayout.jsx` to add the contact nav item. I also tested this on the current lts version of node (18) as I got here because another simple SSR was broken by dependency on webpack 4. For development:

```
yarn
yarn dev
```

or

```
npm install
npm run dev
```

To publish on gh-pages:

```
yarn preview
```

Upload `dist/client` to a github repository. Turn on pages.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-fgrmsw)
