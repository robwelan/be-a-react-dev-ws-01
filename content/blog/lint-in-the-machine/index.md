---
title: Lint In The Machine
date: "2023-05-05T14:41:00Z"
categories:
  - general
meta_keywords:
  - prettier
meta_description: >-
  Linting your code is a best-practise action that makes your code consistent across platforms and developers. It helps force good habits by driving consistency. Consistency helps make code easier to read and debug.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    eslint plus prettier plus reactjs
  src: /eslint-prettier.png
  title: 'ESLint + Prettier + Reactjs'
settings_publish: true
twitter_tags:
  - "#rmwits"
  - "#beareactdev"
  - "#javascript"
  - "#typescript"
  - "#gatsbyjs"
  - "#reactjs"
  - "#nodejs"
  - "#prettier"
  - "#eslint"
---
Prettier and ESLint are both popular tools used for linting and formatting JavaScript code.

Prettier is a code formatter that automatically enforces a consistent code style across your entire codebase. It can handle a wide variety of formatting rules, including indentation, line length, and spacing, and can automatically format your code as you write it.

ESLint, on the other hand, is a linter that analyzes your code for potential errors and coding conventions. It can identify problematic patterns or code that does not follow best practices.

The "prettier-eslint" plugin combines the functionality of Prettier and ESLint, allowing you to use both tools together to format and lint your code. It uses Prettier to format your code and then uses ESLint to check for any errors or warnings that might have been introduced by the formatting changes.

In summary, Prettier is a code formatter, ESLint is a linter, and prettier-eslint is a plugin that combines the functionality of both tools to provide a more comprehensive code formatting and linting solution for JavaScript.

My preferences for linting are as follows:

## .prettierrc file

```javascript
{
  "endOfLine": "lf",
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

The above file goes in your root folder in a standard node / javascript project.

I find that code is easier to read when using the above settings. And slightly harder to write buggy code.

What does all this have to do with lint in the machine? Meh. I was feeling playful.

(written mostly by ChatGPT)
