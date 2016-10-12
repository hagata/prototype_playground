# Prototype Playground
What is it? This is a base environment, with the minimum amount of setup and dependencies to start building web prototypes.

You'll be setting up Node, a Javascript environment that lets you code on your local machine. With Node, you can use NPM and Gulp. NPM is a package manager that lets you download useful tools to help you code. Gulp is a task runner that automates whatever you tell it to. It's commonly used to check for errors, compile your code, and auto refresh your browser.

# Getting started
1. Install [Atom](https://atom.io/) or another text editor of your choice
2. Download XCode from the App Store
3. Open the Terminal app
4. Install Homebrew. This makes it [easier to install Node](http://blog.teamtreehouse.com/install-node-js-npm-mac ).
    1. In Terminal, type ``ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ``
    2. You’ll see messages in the Terminal explaining what you need to do to complete the installation process.
5. Install Node and NPM
    1. Once Homebrew is installed, type ```brew install node```
    2. To make sure Node is installed, type `node -v`. You should see the version that's installed, ex:  `v0.10.31`.
    3. Make sure NPM is installed by typing `npm -v`
6. Install Gulp globally
    1. Type `npm install -g gulp`
7. Create a folder for your new project and navigate to it in Terminal
    1. You can use the `cd` command. For example: `cd /Applications/XAMPP/xamppfiles/htdocs/my-project`
    2. You can also drag your folder onto the Terminal app in your dock.
8. Create a package.json file for your project. This will keep track of dependencies.
    1. Type `npm init` and answer the questions it asks you
9. Install Gulp locally
    1. Type `npm install --save-dev gulp`. The `--save-dev` bit saves gulp as a dependency in your package.json file.
10. Download the prototype playground and place it in your project folder
    1. Click the green Clone or Download button at the top of this page and download the ZIP.
11. Download Node modules
    1. In Terminal type `npm install`.
12. Initialize Gulp
    1. Type `gulp`.
13. Open your project folder in your text editor and start coding!

# Inside the Playground
Take a look at the file structure of your new project. The `/source` folder is where all your editable code lives. Once you start saving changes, the playground will generate a `/_build` folder where your compiled code lives and is served to your browser. Edit the files in `/source` not `/_build`!

The playground will compile and concatenate all the Javascript files in `/source/scripts` and the SASS files in `/source/styles`. You can keep your code neat by separating them into different .js and .scss files. You could, for instance, have different stylesheets for multiple breakpoints.

The `.tpl` files in `source/pages/` are your `.html` files. To learn more, read the Templating section below.

# Templating
In depth documentation and guides can be found [on the nunjucks site](http://mozilla.github.io/nunjucks/templating.html). However, it's useful to know the following concepts.

## tl;dr
`.tpl` files in `source/pages/` are your `.html` files.
To make a new page, start the page with an extend statement and place your code between the block tags
```
// This is an extend statement
{% extends 'templates/base.tpl' %}

{% block content %}
// put your content here…
{% endblock %}
```

## Extending
You'll notice this line of code in `source/pages/index.tpl':
```
{% extends 'templates/base.tpl' %}
```

This means you're including all the html code from the `base.tpl` template in your `index.tpl` file. `base.tpl` would be a good place to hold global elements like a nav and footer.   

## Blocks
The next thing to know is the `{% block %}` concept. A block is a placeholder in the base template for unique content. In our `source/templates/base.tpl` file we're creating a `block` called `content` which we use to inject html content into the `<body>` tag. This is used in `index.tpl`:
```
{% block content %}
<h1>your html content here</h1>
{% endblock %}
```

# Optional plugins for your text editor
* [atom-beautify](https://atom.io/packages/atom-beautify) for higlighting nunjucks syntax in Atom
* [nunjucks syntax](https://packagecontrol.io/packages/Nunjucks%20Syntax) for higlighting nunjucks syntax in Sublime
