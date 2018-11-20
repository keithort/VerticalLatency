---
title: What They Don't Say About The Redux Devtools Extension 
date: "2018-11-20"
layout: post
path: "/what-they-dont-say-about-the-redux-devtools-extension/"
abstract: When I am building these applications, I have been testing almost exclusively in Chrome with the Redux Devtools Extension enabled. The problem with this approach has been that I was missing a serious bug and being completely unaware of it.
thumbnail: "./images/main.jpg"
---
![](./images/main.jpg)

I have been building different React apps for the past few weeks. When I am building these applications, I have been testing almost exclusively in Chrome with the Redux Devtools Extension enabled. The problem with this approach has been that I was missing a serious bug and being completely unaware of it.

Here is a simple example of how I would set up my Redux store with Redux Thunk.

```javascript
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
);

export default store;
```

The bug is there but isn't obvious. In the `createStore` function's `compose` method, it is expecting the Redux Devtools Extension. If you load the app in a browser that does not have that installed, it will crash. The `compose` method is expecting you to pass functions to it. 

So what do we do to work around this? Pass a function in if the Redux Devtools Extension is not installed. Here is the updated store creation with the bug fix in place.

```javascript
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const INITIAL_STATE = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose()
  )
);

export default store;

```

Hopefully this is the missing piece in your debugging adventure.