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


Ideas to Expand the Demo
========================

* Add a new model and some more api calls to interact with the data. Consider an entity that has a relationship to a cat, e.g. owner or sibling. Check out the tables on [this page](http://guides.rubyonrails.org/routing.html) for routing tips.
* Split up the backend components.  Right now, everything is in one file, but how can we do a better job of separating our concerns?
* Create new routes for the UI, such as separate views for the listing of cats and creating/deleting a new cat.
* Put the api calls for cats in a service.
* If you're really feeling a challenge, make a directive for a cat that includes update and delete buttons.
* Add some styles! Check out [this](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda) or [this](http://www.google.com/design/spec/material-design/introduction.html#) for some pointers and principles.
