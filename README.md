# Teamwork
[![Build Status](https://travis-ci.com/JustineRobert/Teamwork.svg?branch=master)](https://travis-ci.com/JustineRobert/Teamwork)
[![Coverage Status](https://coveralls.io/repos/github/JustineRobert/Teamwork/badge.svg?branch=master)](https://coveralls.io/github/JustineRobert/Teamwork?branch=master)
[![dependencies Status](https://david-dm.org/Flexberry/javascript-project-template/status.svg)](https://david-dm.org/Flexberry/javascript-project-template)
[![Maintainability](https://api.codeclimate.com/v1/badges/3e24f5c76db0e112494f/maintainability)](https://codeclimate.com/github/JustineRobert/Teamwork/maintainability)

## Description:

Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.

## Quick start with the App

``` bash
# Install dependencies
- `npm install`

# Serve on localhost:5500
- `npm start`
# Dev Server (Nodemon)
- `npm run dev`
```

# Install dependencies
npm install
# Setup
- You need to have `git`, `NodeJS` and `nmp` installed on your local environment.
- Clone the application with `git clone` command.
- `npm install` to install all the dependencies in local environment.

# Getting Started
To Start the application run the following npm script
* `npm start` for starting the server.

# Testing
To test the application and view test coverage run:
* `npm test` for running the tests, and getting coverage summary.

# API
* POST `/api/v1/auth/signup` Creating account.
* POST `/api/v1/auth/signin` Sign in.

  **Require authentication**
  
* GET `/api/v1/feeds` Retrieve all articles posted
* GET `/api/v1/feeds/:tagId/tags` Retrieve articles by tag
* GET `/api/v1/articles/:articleId` Fetch single article by its ID
* GET `/api/v1/author/articles/:authorId` Fetch all articles by author ID
* POST `/api/v1/articles` Create new article
* POST `/api/v1/:articleId/comments` Add comment to an article
* PATCH `/api/v1/articles/:articleId` Update an article
* DELETE `/api/v1/articles/:articleId` Delete an article

## App Info
# Heroku 
Access link :[https://teamworktitech.herokuapp.com/](https://teamworktitech.herokuapp.com/).

# Swagger API Documentation
Access link :[http://editor.swagger.io/](http://editor.swagger.io/)

# Github page of this Project

[GitHub page for Teamwork App Access link ](https://github.com/JustineRobert/Teamwork)

### Author
Justine Robert Igune
[Justine Robert Igune](https://github.com/JustineRobert/)

### Version
1.0.0

[Pre-release of the project URL:](https://github.com/JustineRobert/Teamwork/releases/tag/v1)


### License

This project is licensed under the MIT License
