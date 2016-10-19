---
layout: default
title: How to loop over data
---

# How to loop over data
Let's say you've built a module, and it looks something like this:

```html
<div class="product">
	<h1 class="product__title">product one</h1>
	<p class="product__description">this is a great product</p>
	<span class="product__price">4.95</span>
</div>
```

This problem is, you've got lots of products. By writing a loop, you can automatically generate a module for every product you have. This simplifies your code and makes it much easier to read.

To begin, create a `json` file in `/source/data`, and fill it with data like this:

```json
{
    "products": [
        {
            "name": "product one",
            "description": "this is a great product",
            "price": "4.95"
        },
        {
            "name": "product two",
            "description": "this is a great product",
            "price": "4.95"
        },
        {
            "name": "product three",
            "description": "this is a great product",
            "price": "4.95"
        }
    ]
}

```

> \* note: Make a new file if necessary

In the `.tpl` file you'd like the data to appear in, create a `for` block:

```html
{% raw %}
{% for product in products %}
<div class="product">

  <h1 class="product__title">{{product.name}}</h1>
  <p class="product__description">{{product.description}}</p>
  <span class="product__price">{{product.price}}</span>

</div>
{% endfor %}
{% endraw %}
```

In the opening line `for product in products`, the first `product` is a new variable we're creating to refer to the 'current' item that's being looped over in the `for` loop. The second argument `products` refers to the name we gave our array of objects in the `json` file.

To add more items to the page, we would simply need to add another product to the data file. When the project compiles to the browser, the HTML will be generated for each item within the data.

# Output
If you look in `/_build/index.html`, you'll see that your loop has generated HTML for you. That HTML should look something like this:

```html
<div class="product">
	<h1 class="product__title">product one</h1>
	<p class="product__description">this is a great product</p>
	<span class="product__price">4.95</span>
</div>

<div class="product">
	<h1 class="product__title">product two</h1>
	<p class="product__description">this is a great product</p>
	<span class="product__price">4.95</span>
</div>

<div class="product">
	<h1 class="product__title">product three</h1>
	<p class="product__description">this is a great product</p>
	<span class="product__price">4.95</span>
</div>
```
