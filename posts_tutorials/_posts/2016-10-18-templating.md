---
layout: default
title: Creating templates
---

# Creating templates
In depth documentation and guides can be found [on the nunjucks site](http://mozilla.github.io/nunjucks/templating.html). However, it's useful to know the following concepts.

## The basics
`.tpl` files in `source/pages/` are your `.html` files.
To make a new page, start the page with an extend statement and place your code between the block tags
```html
{% raw %}
// This is an extend statement
{% extends 'templates/base.tpl' %}

{% block content %}
// put your content here…
{% endblock %}
{% endraw %}
```

## Using your template
You'll notice this line of code in `source/pages/index.tpl':
```html
{% raw %}
{% extends 'templates/base.tpl' %}
{% endraw %}
```

This means you're including all the html code from the `base.tpl` template in your `index.tpl` file. `base.tpl` would be a good place to hold global elements like a nav and footer.   

## Individualizing your template
The next thing to know is the {% raw %}`{% block %}`{% endraw %} concept. A block is a placeholder in the base template for unique content. In our `source/templates/base.tpl` file we're creating a `block` called `content` which we use to inject html content into the `<body>` tag. This is used in `index.tpl`:
```html
{% raw %}
{% block content %}
<h1>your html content here</h1>
{% endblock %}
{% endraw %}
```
