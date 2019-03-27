# MY BEER SHOP

## Work flow

How I create this project?

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Then, I define my app structure
3. Break UI into smaller components
4. Static component was builded and identify which state is important
5. On that simple version, the dataflow is build and app able to show up data
6. App decorated by themes and styles
7. Add router for travel with component

> *Note1: In this process, I recognize that I should add router right after add component. I had waste time in build some event for menu items.

> *Note2: I'm out of time, so that the loader feature is implement after.

## The Architecture

A simple architect:

```
my-beer-shop
+-- App.js
+-- components
|   +-- component-name        => Flat component architecture: All component is in this folder
|   |   +-- component.js
|   |   +-- component.scss
|   +-- ...
+-- themes                    => Global css declare in here
|   +-- theme-name
|   |   +-- index.scss
|   |   +-- ...
|   +-- ...
...
```

## Dependencies

- axios
- bootstrap
- lodash
- node-sass
- react
- react-dom
- react-router-dom
- react-scripts

## Available Scripts to start project

In the project directory, you can run:

### `yarn install`

Install all modules

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
