---
layout: default
title: "Jekyll Docs Template"
---

# Overview
What is it? This is a base environment, with the minimum amount of setup and dependencies to start building web prototypes.

You'll be setting up Node, a Javascript environment that lets you code on your local machine. With Node, you can use NPM and Gulp. NPM is a package manager that lets you download useful tools to help you code. Gulp is a task runner that automates whatever you tell it to. It's commonly used to check for errors, compile your code, and auto refresh your browser.

# Prerequisites
* [XCode](https://itunes.apple.com/cg/app/xcode/id497799835?mt=12)
* [Node.js with npm](https://nodejs.org/en/)
  - *If you have a permissions issue, run this in Terminal `sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}`*
* Gulp
  * Run `npm install gulp -g` in Terminal

# Getting started
1. Download the prototype playground from [Github](https://github.com/hagata/prototype_playground/)
2. Drag and drop the folder onto Terminal in your dock
3. Download Node modules
    1. In Terminal type `npm install`.
4. Initialize Gulp
    1. Type `gulp`.
5. Open your project folder in your text editor and start coding!

# Inside the Playground
Take a look at the file structure of your new project. The `/source` folder is where all your editable code lives. Once you start saving changes, the playground will generate a `/_build` folder where your compiled code lives and is served to your browser. Edit the files in `/source` not `/_build`!

The playground will compile and concatenate all the Javascript files in `/source/scripts` and the SASS files in `/source/styles`. You can keep your code neat by separating them into different .js and .scss files.

The `.tpl` files in `source/pages/` are your `.html` files. To learn more, read the Creating Templates section.
