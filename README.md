# 같이가치 by Undefined

## prepare project

* install **dependencies**

```bash
$ yarn
```

* run

```bash
$ yarn start
```

## nginx setup for ReactRouter

> /etc/nginx/sites-enabled/default
> 
> try_files $uri /index.html; # 모든 요청을 index.html 로 보냄 

```nginx
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /opt/www;

	index index.html index.htm index.nginx-debian.html;

	server_name undefined.narsha;
	client_max_body_size 100M;

	location / {
		try_files $uri /index.html; # 모든 요청을 index.html 로 보냄
	}

	location /node/ {
		rewrite ^/node(/.*)$ $1 break;
		proxy_pass http://node_server;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_redirect off;
	}

	location /go/ {
		rewrite ^/go(/.*)$ $1 break;
		proxy_pass http://go_server;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_redirect off;
	}

}

upstream node_server {
	server 127.0.0.1:8080;
}

upstream go_server {
	server 127.0.0.1:8081;
}
```

## create-react-app + mobx + styled-components

* create project

```bash
$ create-react-app myApp
$ cd myApp
```

* add dependencies

```bash
$ yarn add mobx mobx-react styled-components
$ yarn add --dev react-app-rewired react-app-rewire-mobx
```

* create **config-overrides.js** in project root folder

```javascript
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

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```

## import my components simply

```bash
$ yarn add --dev cros-env
```

* then update **scripts** in **package.json**

> add **cross-env NODE_PATH=src**

```json
  "scripts": {
    "start": "cross-env NODE_PATH=src react-app-rewired start",
    "build": "cross-env NODE_PATH=src react-app-rewired build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```
