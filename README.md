# Template TypeScript + React + Redux

> This is a template with initial configuration for TypeScript, React, Redux and React-Router.

This template contains:

* TypeScript and React configuration
* Redux setup
* Webpack v4.9 configuration
* Sass for styling
* TSLint for linting
* React-router for routing
* Normalize.css included
* Some basic snippets for React and Redux to get easily started

Template is configured to support __IE 11__ and uses autoprefixer for cross-broswer css support.

---

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Snippets](#snippets)
- [License](#license)

---

## Installation

Yarn.lock and npm-shrinkwrap.json are provided so you can use whichever you prefer.

### Npm
```
npm init
```

### Yarn
```
yarn
```

After you run the install comand you will get the following folder structure:

```text
my-app/
├─ .vscode
├─ node_modules/
├─ public/
├─ src/
│  └─ actions/
│  └─ actionTypes/
│  └─ assets/
│  └─ common/
│  └─ components/
│  └─ containers/
│  └─ reducers/
│  └─ store/
│  └─ style/
│  └─ utils/
│  └─ index.ts
├─ types/
│  └─ global.d.ts
├─ webpack/
│  └─ plugins.js
│  └─ rules.js
├─ .browserslistrc
├─ .gitignore
├─ .npmignore
├─ index.html
├─ npm-shrinkwrap.json
├─ package.json
├─ postcss.config.js
├─ tsconfig.json
├─ tslint.json
├─ webpack.config.js
└─ yarn.lock
```

Now you can start the project by running:
```
yarn dev or npm run dev
```

This should open the broswer and you should see a hello world page.

## Folder Structure

Typescript code goes into the src folder. Notable folders in there are:

* __Actions, actionTypes and reducers__ are folders where Redux action creators and reducers go. Store is configured in __store/configureStore.ts__ and there you should add additional middlewares if you have some. 
* __Assets__ folder will contain fonts and images (and some other assets you will need) in your application. It is configured in webpack to be __automatically__ copied to the dist folder.
* __Style__  - collection of variables, mixins, normalize and other global style properties.
* __Utils__ - contains a wrapper around isomorphic-fetch that can be easier used with Redux.

## Snippets

If you are using __Visual Studio Code__ as your editor and install the recommended extensions for this workspace you will get some handy snippets that can speed up your development. Snippets will name classes/interfaces by taking the name of the file and properly formatting the name, so it is advisable to first name your file correctly and then use the snippet.

### Typescript snippeti (.ts):
* **Redux reducer template:** _rdx-reducer
* **Redux action creator template:** _rdx-action

### Typescript-React snippeti (.tsx):
* **React Component:** _cmp
* **React Stateless Functional Component:** _cmp-func
* **React Pure Component:** _cmp-stateless
* **TS React Redux Container:** _cont

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
