# eslint-plugin-no-this-in-jsx-component-name

This ESLint rule checks JSX tags for `<this.ComponentName />` since user-defined components must be capitalized.

More here: https://facebook.github.io/react/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-this-in-jsx-component-name`:

```
$ npm install eslint-plugin-no-this-in-jsx-component-name --save-dev
```

**Note:** If you installed ESLint globally, you must also install `eslint-plugin-no-this-in-jsx-component-name` globally.

## Usage

Add `no-this-in-jsx-component-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-this-in-jsx-component-name"
    ]
}
```

Then add `no-this-in-jsx-component-name`'s only rule under the rules section.

```json
{
    "rules": {
        "no-this-in-jsx-component-name/no-this-in-jsx-component-name": "error"
    }
}
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

As alternatives, use either of these options in your render method:

```js
const Component = this.Component;
<Component />

const { ComponentA, ComponentB } = this;
<ComponentA />
<ComponentB />
```
