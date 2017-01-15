# Checks JSX tags for &#34;&lt;this.ComponentName&gt;&#34; since user-defined components must be capitalized (no-this-in-jsx-component-name)

This ESLint rule checks JSX tags for "<this.ComponentName />" since user-defined components must be capitalized.

From https://facebook.github.io/react/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized:

```
When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.
We recommend naming components with a capital letter. If you do have a component that starts with a lowercase letter, assign it to a capitalized variable before using it in JSX.
```

## Rule Details

This rule aims to avoid compilation errors in React when a component's name starts with "this".

The following patterns are considered warnings:

```js

<this.ComponentName />
<this.ComponentName>Content</this.ComponentName>

```

The following patterns are not warnings:

```js

<div />
<MyComponent />

```

As alternatives, use either of these options:

```
const Component = this.Component;
const { ComponentA, ComponentB } = this;
```
