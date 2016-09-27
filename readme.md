# Prototype Playground
What is it? This is a base environment, with the minimum amount of setup and dependencies to start building web prototypes.

# Getting started
Clone this repository, then:

1. install dependencies. (If you don't have npm installed, see the Prerequisites section)
    ```
    npm install
    ```
2. Build, start the development server, and start watchers with:
    ```
    npm run start
    ```
    This will start a development server at `localhost:3000`. The console will also export a "external" ip address that can be accessed from other devices if applicable.

# Templating
Pages are generated using [nunjucks](https://github.com/mozilla/nunjucks) templates. Each page within `source/pages/` will generate a `.html` file in the `/_build` directory; which is the file that is served—don't edit the html files directly.

# Getting started with nunjucks
In depth documentation and guides can be found [on the nunjucks site](http://mozilla.github.io/nunjucks/templating.html). However, it is useful to know the following concepts.

## tl;dr
`.tpl` files in `source/pages/` are your `.html` files.
To make a new page, or work with the provided `source/pages/index.tpl`, start the page with an extend statement, and place your code between the block tags
```
// Start with an extend
{% extends 'templates/base.tpl' %}

{% block content %}
// put your content here…
{% endblock %}
```

## Extending
The concept of extending a template is essentially saying "this page/template is going to include all of the same things". You will notice in `source/pages/index.tpl' that is includes the following:
```
{% extends 'templates/base.tpl' %}
```

this will render all of the html code from `templates/base.tpl` into the generated `index.html` file.

## Blocks
The next, and potentially most important thing to know if the `{% block %}` concept. A block is essentially a placeholder in the base template for unique content. In our `source/templates/base.tpl` file we're creating a `block` called `content` which we use to inject html content into the `<body>` tag. This is used in `index.tpl`:
```
{% block content %}
<h1>your html content here</h1>
{% endblock %}
```

# Gulp tasks
This project leverages the power of Gulp. The build tasks are a part of the `npm run start` command. However, you may use the following gulp commands as needed.

| command | description |
| ------ | ------- |
| watch | Runs necessary build scripts as files are modified. |
| sass | Compile sass to build directory |
| serve | Starts a browserSync server at default port :3000 |

# Prerequisites
* [Node with npm](https://nodejs.org/en/)
* [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) needs to be installed for running build steps. If gulp is not installed. run the following:

    ```bash
        npm install npm install --global gulp-cli
    ```

# Recommended
* nunjucks syntax highlighting plugin for your text editor.