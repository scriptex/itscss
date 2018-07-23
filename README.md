![Inverted Triangle CSS Visualization](https://github.com/scriptex/itscss/blob/master/itcss.svg)

# ITCSS

[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/itscss.svg)](https://greenkeeper.io/)

A starter boilerplate based on the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) (Inverted Triangle CSS) methodology.

## About

This boilerplate is intented to be used as a starting point in your application. You should use this as a foundation for your CSS and build on top of it.

## Install

```sh
# Via NPM
npm i itscss

# Via Yarn
yarn add itscss
```

## Usage

If you are using a module bundler (such as Webpack, Parcel, Browserify):

```sh
# In your SCSS entrypoint
@import 'itscss';

# Or if the above does not resolve, try
@import 'itscss/index.scss';
```

There are several predefined variables which you can overwrite:

```css
/* Color Variables */
$color-base: #333;
$color-white: #fff;
$color-black: #000;
$color-action: #ef4c23;

/* Text Variables */
$font-sans-serif: sans-serif;
$font-serif: serif;
$font-monospace: monospace;

$font-size-base: 1rem;
$line-height-base: 1.35;

$font-size-h1: 2rem;
$font-size-h2: 1.75rem;
$font-size-h3: 1.5rem;
$font-size-h4: 1.25rem;
$font-size-h5: $font-size-base;
$font-size-h6: 0.75rem;

/* Transition Variables */
$timing: 0.4s;
$easing: ease-in-out;

/* Misc Variables */
$shell-width: 75rem;

$small-desktop: 1439px;
$tablet-landscape: 1279px;
$tablet-portrait: 1023px;
$mobile: 767px;
```

**You should place the overwriting variables before the `@import` statement.**

## Supported browsers

The combined and built version of this boilerplate has been tested and works in all evergreen browsers (Chrome, Firefox, Edge, Opera, Safari, Brave, Vivaldi, iOS Safari, Chrome on Android, Samsung Internet) and IE 10+.

## Available CSS selectors and their purpose

### Settings

### Tools

### Generic

### Elements

### Objects

### Components

### Utilities

## LICENSE

MIT
