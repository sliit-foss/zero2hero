---
sidebar_position: 1
---

# Heroku

Heroku is a hosting platform where you can deploy dynamic applications in Rails, PHP, Node.js, and Python web applications.

## Prerequisites
* Any program to host
* Git installed
* Install Heroku CLI for your system

## Methods to deploy your website on Heroku

There are two ways to host on Heroku.

#### 1. Using the Heroku website:

###### Step 1: Go to the Heroku website and login/sign up<br/>
Go to the official Heroku website. If you don’t have an account, go make one by clicking on the Sign Up button. Once you log in, there should be a dashboard.<br/>
###### Step 2: Create a new app<br/>
Click on ‘New’ then ‘Create new app’. Now enter your app name (anything is fine) and the region if you live close to Europe or America.<br/>
###### Step 3: Connect your Github account with Heroku<br/>
Now, you should come to a screen called ‘Deploy’. Click on ‘Github Connect to Github’. Connect your Github profile to Heroku. Once you have finished that, a text box should appear. Choose your Github profile and enter your repo-name. A list will come up with repositories containing the keyword. Click on the repo that you want to host.<br/>
###### Step 4: Host it<br/>
Finally, Click on the Deploy Branch button at the bottom to host it. You can access it by going to herokuapp URL

#### 2. Using Git and Heroku CLI

Before you can deploy your app to Heroku, you need to initialize a local Git repository and commit your application code to it.

```
$ cd <name of your app directory>
$ git init
$ git add .
$ git commit -am "First commit"
```

Now, to create a Heroku Remote you will have to type the following command, for example

```
$ heroku create
```

Now, for deploying your app type this command in your terminal

```
$ git push heroku master
```

Congratulations !! You successfully deployed your static app on Heroku.
