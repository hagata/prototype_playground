---
layout: default
title: How to loop with Nunjucks
---

# How to loop with Nunjucks
Using small bits of HTML and looping over it with data can save time in both the initial setup, and future editing. This allows you as a developer to only write/edit the HTML markup once. This simplifies your code and makes it much easier to read.

Create an entry with an array in a data file. e.g., `data/products.json` that looks something like the following.

```json
{
    "products": [
        {
            "name": "product one",
            "description": "this is a great product if you like the number 1",
            "price": "4.95"
        },
        {
            "name": "product two",
            "description": "this is a great product if you like the number 2",
            "price": "4.95"
        },
        {
            "name": "product three",
            "description": "this is a great product if you like the number 3",
            "price": "4.95"
        }
    ]
}

```

> \* note: Make a newile if necessary

In the `.tpl` file that you would like to loop over the information in, create a `for` block that contains the code that you would like repeated for each entry in the data. Example:

```html
{% raw %}
<!-- for variable in our products array -->
{% for product in products %}


<div class="product">
<!--access the property of the looping element with .name-->
<!-- remember: "product" here referes to the current looping element by the name we assigned in the for-loop. -->
<h1 class="product__title">{{product.name}}</h1>
<p class="product__description">{{product.description}}</p>
<span class="product__price">{{product.price}}</span>
</div>

{% endfor %} <!--Make sure to close the loop! -->
{% endraw %}
```

The opening line `for product in products` the first `product` is a variable name we are creating to refer to the 'current' item that is being looped over in the `for` loop. The second argument `products` refers to the name we gave our data entry (Array of Objects) in the `json` file.

When the project compiles to the browser, the HTML will be generated for each item within the data. To add more items to the page in this example, we would simply need to add another product to the data file.

# Output HTML
The output HTML would be the same as if you were to write the HTML that was defined in the for loop multiple times.

Output:
```html
<div class="product">
	<h1 class="product__title">product one</h1>
	<p class="product__description">this is a great product if you like the number 1</p>
	<span class="product__price">4.95</span>
</div>

<div class="product">
	<h1 class="product__title">product two</h1>
	<p class="product__description">this is a great product if you like the number 2</p>
	<span class="product__price">4.95</span>
</div>

<div class="product">
	<h1 class="product__title">product three</h1>
	<p class="product__description">this is a great product if you like the number 3</p>
	<span class="product__price">4.95</span>
</div>
```