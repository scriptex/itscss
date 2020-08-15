![Inverted Triangle CSS Visualization](https://raw.githubusercontent.com/scriptex/itscss/master/itcss.svg?sanitize=true)

# ITCSS

[![GitHub release](https://img.shields.io/github/release/scriptex/itscss.svg)](https://github.com/scriptex/itscss/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/itscss.svg)](https://github.com/scriptex/itscss/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/itscss.svg)](https://github.com/scriptex/itscss/commits/master)
[![Build Status](https://travis-ci.com/scriptex/itscss.svg?branch=master)](https://travis-ci.com/scriptex/itscss)
[![npm](https://img.shields.io/npm/dt/itscss.svg)](https://www.npmjs.com/package/itscss)
[![npm](https://img.shields.io/npm/v/itscss.svg)](https://www.npmjs.com/package/itscss)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/itscss/README.md)](https://github.com/scriptex/itscss/)

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

-   `_colors.scss` - contains all colors and theme Settings
-   `_text.scss` - contains all text settings (font-size, font-family, etc)
-   `_transitions.scss` - contains the default transition duration and timing function
-   `_variables.scss` - contains all other variables

### Tools

-   `_chevron.scss` - a mixin for a directional arrow icon
-   `_flexbox.scss` - a mixin for flex container
-   `_media-queries.scss` - mixins for all supported media queries
-   `_mixins.scss` - all other mixins

### Generic

-   `_form-elements.scss` - default styles for form elements
-   `_reset.scss` - additional browser reset and normalize (normalize.scss is also included)
-   `_transitions.scss` - default transitions for focusable/active elements

### Elements

-   `_document.scss` - default styles for the `body` element
-   `_headings.scss` - default styles for all h\* (h1 - h6) tags
-   `_links.scss` - default styles for anchors
-   `_texts.scss` - default styles for text elements

### Objects

-   `_grid.scss` - a grid system
-   `_main.scss` - styles for the `main` element
-   `_shell.scss` - styles for the site container
-   `_wrapper.scss` - styles for the site wrapper

### Components

-   `_btn.scss` - default styles for the buttons
-   `_list.scss` - default styles for lists

### Utilities

-   `_align.scss` - alignment class utilities
-   `_fullsize-background.scss` - helper for background image
-   `_hidden.scss` - helper class/attribute for hidden elements
-   `_responsive-utilities.scss` - helpers for showing/hiding elements on different resolutions
-   `_text-align.scss` - text alignment utilities

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fitscss&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
