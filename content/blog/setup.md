---
path: setup
date: 2020-05-22T19:20:24.988Z
title: Setup
description: Getting everything ready
---
## Gatsby
First, I needed a website to experiment on.
Recently, I started with React, and I have heard a lot of good things about GatsbyJS.
It also provides easy integration with Netlify CMS, so I am able to write new blog posts from the browser without having to add Markdown files to the repo manually.
Let's go with Gatsby blog then!
The setup is extremely simple. Just follow the [instructions](https://www.gatsbyjs.org/tutorial/blog-netlify-cms-tutorial/) on how to get stated with [gatsby-personal-starter-blog](https://www.gatsbyjs.org/tutorial/blog-netlify-cms-tutorial/).

## Coil
To be able to test my work, I need to be able to send payments. Currently, only provider of this service is [Coil](https://coil.com/). So the choice is pretty obvious.
Coil generously provides all hackathon participants with [3 months free trial](https://dev.to/devteam/free-coil-trial-for-all-gftwhackathon-participants-3n7m).
After registration, all what is left is installation of the [Chrome plugin]
(https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca).

## Uphold
To be able to receive payments, I need to have an ILP-enabled wallet. ILP stands for Interledger Protocol.
I have chosen [Uphold](https://uphold.com/) as it does not have any fees and supports many withdrawal currencies.

With all this set-up, let's start building the app!
