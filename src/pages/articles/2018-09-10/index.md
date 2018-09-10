---
title: Lessons Learned While Setting Up A Gatsby Site
date: "2018-09-10"
layout: post
path: "/lessons-learned-while-setting-up-a-gatsby-site/"
abstract: While I did get a rough site up, it was not exactly full of the wow factor. What I did come away with was a desire to make it better. Faster rendering, better Lighthouse audit, more automation, and some little eye candy here and there. 
thumbnail: "./images/main.jpg"
---
![](./images/main.jpg)

Roughly 10 months ago, I started a little side project to move my website away from being a WordPress based site and make it modern. While I did get a rough site up, it was not exactly full of the wow factor. What I did come away with was a desire to make it better. Better Lighthouse audit, more automation, and some little eye candy here and there. 

I have been working with an AngularJS project for the past 6 months. It is difficult to change your development approach when switching between AngularJS and React. When you don't use something for a while and keep your skills sharp, it is easy to forget the lifecycle of each framework. 

In order to improve the Lighthouse audit score of this site, Gatsby does a lot of optimizations for you. Right out of the box, most sites will score in the 95+ range. There were just a couple things I had to do to really improve things. 

__Set up your site as a PWA__: Add the `gatsby-plugin-manifest` and `gatsby-plugin-offline` plugins to make your site a PWA. They must be in your `gatsby-config.js` file in that order. Doing this step will prompt mobile users with an option to save your site to their home screens.

__Learn and use GraphQL like a champ__: With your development environment running, you can access an in-browser tool to write, validate, test, and run any GraphQL query. I learned a few things here and there that made things more automated for me. Each blog and portfolio post has its own image in my `/pages` folder. Currently each only has 1 image. However using GraphQL, along with the Sharp image processing library through `gatsby-plugin-sharp`, I came up with the query fragment that will create thumbnails for me at a specified dimension and cropped to the center of the image. 
```javascript
  thumbnail {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 300, cropFocus: CENTER) {
          sizes
          aspectRatio
          srcSet
        }
      }
  }
```

This all being said, I still have room for improvement. This site's performance score is just an 80. I'd like to have 95+ across the board and will continue to improve this site's performance to reach that over the next couple of days.