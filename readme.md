# Documentation for [prototype playground](https://github.com/hagata/prototype_playground)

# posts
Posts can be added manually, or conviniently using the jekyll compose pugin, [https://github.com/jekyll/jekyll-compose](https://github.com/jekyll/jekyll-compose). See `jekyll help` for more info on each.

# Categorize posts in directories.
Posts are automatically added to the side bar navigation based on the directory they are added to. Post `.md` files must be in the `_posts` subdirectory within each `post_category` category directory.

```
├── posts_gettingstarted
│   └── _posts
│       ├── 2016-10-18-getting-started.md
│       └── 2016-10-18-overview.md
└── posts_tutorials
    └── _posts
        └── 2016-10-18-how-to-loop-with-nunjucks.md
```