---
path: metatag
date: 2020-05-22T21:09:06.123Z
title: Adding meta tag to enable monetization
description: Learn how to make your blog monetized.
---
To enable web monetization on our website, we have to add a special `<meta>` tag inside `<head>`.  It contains an Interledger Payment Pointer, that can be obtained on Uphold website (according to [this tutorial](https://webmonetization.org/docs/uphold)).

```html
<html>
  <head>
    <title>My Monetized Website</title>
    <meta name="monetization" content="$wallet.example.com/yourcode">
  </head>
</html>
```

Adding new tag to `<head>` in Gatsby is not as straightforward as with normal html pages. We have to use [React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) plugin. On any page you want to enable web monetization, add 

```jsx
<Helmet>
    <meta name="monetization" content="$wallet.example.com/yourcode">
</Helmet>
```

as part of the rendered component.

When you visit the page with enabled monetization, you can see the status in the Chrome extension.

![chrome coil extension showing paying status](./coil-extension.png)

Another option is to add 
```js
wallet: `$wallet.example.com/yourcode`
```
inside `gatsby-config.js`.

After that, find the `SEO` component. It renders `<Helmet>` component which has a property `meta`.
Add the following to the `meta` array.
```jsx
{
  name: `monetization`,
  content: site.siteMetadata.wallet,
}
```
Don't forget to adjust the query by adding **wallet**
```jsx
const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            wallet
          }
        }
      }
    `
  )
```
Now all your blog posts have web monetization enabled.
