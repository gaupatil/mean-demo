mean-demo
=========
A bare-bones example of how to get started in the MEAN stack.

Getting Started
===============

Install [node](http://nodejs.org/) and [mongodb](http://www.mongodb.org/).  If you are using a linux-based system, consider using a package manager.  Mac users can check out [homebrew](http://brew.sh/).

* `git clone https://github.com/megalord/mean-demo.git`
* `cd mean-demo`
* `npm install`
* `bower install`
* `mongod`
* `node api/main.js`

You will need to run the last two commands in separate terminal windows.

Libraries Used
==============

Client
------

* [angular](https://angularjs.org/)
* [angular-route](https://docs.angularjs.org/api/ngRoute)
* [angular-resource](https://docs.angularjs.org/api/ngResource)

Server
------

* [express](http://expressjs.com/)
* [body-parser](https://github.com/expressjs/body-parser)
* [serve-static](https://github.com/expressjs/serve-static) - part of express in version 4
* [mongoose](http://mongoosejs.com/)
