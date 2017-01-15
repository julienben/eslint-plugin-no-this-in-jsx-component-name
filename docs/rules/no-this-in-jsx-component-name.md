# Checks JSX tags for &#34;&lt;this.ComponentName&gt;&#34; since user-defined components must be capitalized (no-this-in-jsx-component-name)

This ESLint rule checks JSX tags for `<this.ComponentName />` since user-defined components must be capitalized.

More here: https://facebook.github.io/react/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized

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
