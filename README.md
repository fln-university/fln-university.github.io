# FLN University

FLN University is the effort of Freelancer.com to have a centralized repository
of all internal training materials.

# Installation
Installation is simple. Just go to the project repo and run `npm install`. For
instance:

```
cd path/to/project/directory
npm install
```

That's it!

# Contributing
First and foremost, clone the repository locally and create your own feature
branch *from the production branch*. (Note that the production branch is where
the angular source files are contained, and the master branch contains the
static website files that are already built from the source code). Submit a
pull/merge request and wait for someone to code review you. If all looks good,
your code will be merged with production branch. **Please test all your changes
in your local environment before submited a pull request!**

Run the application using `npm run start` or `ng serve` (make sure you have the
[angular cli](https://cli.angular.io/ installed)). By default, you should be
able to access the application through `localhost:4200`.

The angular server automatically handles live-reloading so you can dev away.

# Deployment
Inside `package.json`, we have a `deploy` script, which, well, deploys the
application. What the script does is simply build the source code into the
`dist` directory and pushes the directory to the master branch. By default,
only @aperea has push access to the master branch.

To do deployment, ensure that you have the angular-cli-ghpages npm module:
```
npm install -g angular-cli-ghpages
```

Afterwards, just run the deploy script:
```
npm run deploy
```

After successfully building, you should see your application in
[https://fln-university.gihtub.io](https://fln-university.github.io)
