# 같이가치 by Undefined

## prepare project

* install **dependencies**
```c
$ yarn
```
* run
```c
$ yarn start
```

## create-react-app + mobx + styled-components
* create project
```c
$ create-react-app myApp
$ cd myApp
```

* add dependencies
```c
$ yarn add mobx mobx-react styled-components
$ yarn add --dev react-app-rewired react-app-rewire-mobx
```

* create **config-overrides.js** in project root folder
```c
const { injectBabelPlugin } = require('react-app-rewired');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);

  return config;
};
```

* update **scripts** in **package.json**
> changed react-scripts to react-app-rewired
```c
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```

## import my components simply
```c
$ yarn add --dev cros-env
```
* then update **scripts** in **package.json**
> add **cross-env NODE_PATH=src**
```c
  "scripts": {
    "start": "cross-env NODE_PATH=src react-app-rewired start",
    "build": "cross-env NODE_PATH=src react-app-rewired build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```
