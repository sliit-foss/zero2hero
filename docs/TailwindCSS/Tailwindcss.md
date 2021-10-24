---
sidebar_position: 1
---

# TailwindCSS

Tailwind CSS is a ***utility-first*** CSS framework for rapidly building custom user interfaces and is highly customizable. It Enables Building Complex Responsive Layouts as it uses a ***mobile-first*** approach by default.

## Installation

To use Tailwind's features, we need to install it first via `npm` or `yarn`.

```posh
# Using npm
npm install tailwindcss
```

```posh
# Using Yarn
yarn add tailwindcss
```

## Add Tailwind Directives to CSS

```css
@tailwind base; 
@tailwind components; 
@tailwind utilities;
```

## Create your Tailwind config file

For more customization, we need to generate a config file.

```posh
npx tailwindcss init
```

This will create a minimal `tailwind.config.js` file at the **root** of your project:

```js
module.exports = 
{ 
    future: {}, 
    purge: [], 
    theme: { 
        extend: {}, 
    },
    variants: {}, 
    plugins: [], 
}
```

## Processing / Building your CSS:

```posh
npx tailwindcss build styles.css -o output.css
```

## Some Important Tailwindcss Directives

* `@tailwind`
Used to insert Tailwind's base, components, utilities and screens styles into your CSS.

* `@apply`
Used to add custom styling to any of the utility classes.

* `@variants`
Used to generate responsive, hover, focus, active, and other variants of your utilities by wrapping their definitions in the @variants directive.

* `@responsive`
Used to generate responsive variants of your classes by wrapping their definitions in the @responsive directive.

* `@screen`
Used to create media queries that reference your breakpoints by name instead of values.

## For more Information
Visit the official TailwindCSS docs [here](https://v1.tailwindcss.com/docs/installation).
