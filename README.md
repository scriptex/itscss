![Inverted Triangle CSS Visualization](https://raw.githubusercontent.com/scriptex/itscss/master/itcss.svg?sanitize=true)

# ITSCSS

[![GitHub release](https://img.shields.io/github/release/scriptex/itscss.svg)](https://github.com/scriptex/itscss/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/itscss.svg)](https://github.com/scriptex/itscss/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/itscss.svg)](https://github.com/scriptex/itscss/commits/master)
[![Build Status](https://travis-ci.com/scriptex/itscss.svg?branch=master)](https://travis-ci.com/scriptex/itscss)
[![npm](https://img.shields.io/npm/dt/itscss.svg)](https://www.npmjs.com/package/itscss)
[![npm](https://img.shields.io/npm/v/itscss.svg)](https://www.npmjs.com/package/itscss)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/itscss/README.md)](https://github.com/scriptex/itscss/)

A starter boilerplate based on the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) (Inverted Triangle CSS) methodology.

## About

> ITSCSS is a mobile-first, responsive, battle-tested SCSS framework based on the ITCSS methodology utilizing the BEM methodology.

This boilerplate is intented to be used as a starting point in your application. You should use this as a foundation for your CSS and build on top of it.

If you want to use the full capabilities of this boilerplate such as variables, mixins, etc., then you should include it in your SCSS files.

You can also use the plain CSS version which lacks mixins and other useful tools.

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

/* Spacing between grid items */
$gap: 0.5rem;

/* Number of columns in the grid */
$columns: 12;

/* The maximum width of the shell container */
$shell-width: 75rem;

/* The left and right padding of the shell container */
$shell-gap: 1rem;

/* Responsive breakpoints */
$small-desktop: 1439px;
$tablet-landscape: 1279px;
$tablet-portrait: 1023px;
$mobile: 767px;

/*
	A map of breakpoints used to create
	the grid columns rules and
	the responsive utility classnames
*/
$breakpoints: (
	xs: (
		min: 0,
		max: $mobile
	),
	sm: (
		min: $mobile + 1,
		max: $tablet-portrait
	),
	md: (
		min: $tablet-portrait + 1,
		max: $tablet-landscape
	),
	lg: (
		min: $tablet-landscape + 1,
		max: $small-desktop
	),
	xl: (
		min: $small-desktop + 1
	)
);

/* A list of display properties */
$displays: 'block', 'inline', 'inline-block', 'flex', 'inline-flex';

/* A list of text alignment properties */
$alignments: 'center', 'right', 'left', 'justify';

/*
	A map of elements used to define z-index property.
	See Functions section below for more details.
*/
$z-indexes: (
	header: (),
	main: (
		alert: (),
		content: (
			title,
			inner,
			overlay
		),
		aside: ()
	),
	footer: (),
	modal: ()
);
```

**You should place the overwriting variables before the `@import` statement.**

## Supported browsers

The combined and built version of this boilerplate has been tested and works in all evergreen browsers (Chrome, Firefox, Edge, Opera, Safari, Brave, Vivaldi, iOS Safari, Chrome on Android, Samsung Internet) and IE 10+.

## Available files, selectors, variables and their usage

### Settings

-   `_colors.scss` - contains variables for all colors
-   `_text.scss` - contains variables for all font settings
-   `_transitions.scss` - contains variables for transition duration and timing function
-   `_variables.scss` - contains variables for all other variables/settings

### Tools

-   `_chevron.scss` - a mixin for a directional arrow icon

    _Usage:_

    ```css
    /* prettier-ignore */
    @include chevron(
    	2rem, /* width and height */
    	0 0 1px 1px, /* border width */
    	$color-black, /* border color */
    	-5px 0 0 0.5em, /* margin */
    	-135deg /* rotation */
    );
    ```

-   `_flexbox.scss` - a set of mixins for flexbox

    _Contains four mixins:_

    ```css
    /* General purpose flex container */
    /* prettier-ignore */
    @include flex(
    	center /* align-items */
    	flex-end /* justify-content */
    );

    /* Flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @include flex-row(
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */
    );

    /* Flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @include flex-column(
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */
    );

    /* Grid rules based on the $columns and $breakpoints variables */
    @include grid;
    ```

-   `_functions.scss` - a collection of SCSS functions

    _Contains the following functions:_

    ```css
    // Uses the $z-indexes variable from above.
    // Defines z-index based on the index of given key sequence:
    // .header {
    //   z-index: z(header);
    // }
    //
    // .main {
    //   z-index: z(main);
    // }
    //
    // .alert {
    //   z-index: z(main, alert, high);
    // }
    //
    // .content__title {
    //   z-index: z(main, content, title);
    // }
    @function z($keys);
    ```

-   `_media-queries.scss` - mixins for all supported media queries

    _Custom media queries:_

    ```css
    /* (max-width: 1439px) */
    @media (small-desktop) {
    }

    /* (min-width: 1279px) */
    @media (desktop-only) {
    }

    /* (max-width: 1279px) */
    @media (tablet-landscape) {
    }

    /* (min-width: 1023px) and (max-width: 1279px) */
    @media (tablet-landscape-only) {
    }

    /* (max-width: 1023px) */
    @media (tablet-portrait) {
    }

    /* (min-width: 767px) and (max-width: 1023px) */
    @media (tablet-portrait-only) {
    }

    /* (max-width: 767px) */
    @media (mobile) {
    }

    /* (prefers-reduced-motion: reduce) */
    @media (reduced-motion) {
    }

    /* hover support */
    @media (hover) {
    } ;
    ```

-   `_mixins.scss` - all other mixins

    _Available mixins:_

    ```css
    /* absolutely positions an element with known dimensions in the center of their relative parent element */
    @include centered;

    /* change the display property of an element with the given $value */
    @include display($value);
    ```

### Generic

-   `_form-elements.scss` - default styles for form elements
-   `_reset.scss` - additional browser reset and normalize (normalize.css is also included)
-   `_transitions.scss` - default transitions for focusable/active elements

### Elements

-   `_document.scss` - default styles for the `body` element
-   `_headings.scss` - default styles for all h\* (h1 - h6) tags
-   `_links.scss` - default styles for anchors
-   `_texts.scss` - default styles for text elements

### Objects

-   `_grid.scss` - a grid system

    _Available selectors are:_

    ```css
    /* defines a grid container */
    .o-grid {
    }

    /* defines a grid item */
    .o-grid__item {
    }

    /**
    	depending on the $breakpoints and $columns variables
    	the following selectors will vary.
    	1 means 1/12 of the available width.
    	12 means all of the available width.
    	Here are the defaults
    */
    /* From 0 to 767px */
    .xs-1 to .xs-12
    /* From 768px to 1023px */
    .sm-1 to .sm-12
    /* From 1024px to 1279px */
    .md-1 to .md-12
    /* From 1280px to 1439px */
    .lg-1 to .lg-12
    /* From 1440px above */
    .xl-1 to .xl-12;
    ```

-   `_main.scss` - styles for the `main` element

    _Available selectors are:_

    ```css
    /* defines the main content. used with <main> element */
    .o-main {
    }
    ```

-   `_shell.scss` - styles for the site container

    _Available selectors are:_

    ```css
    /* defines the site container */
    .o-shell {
    }

    /* defines the site container as flex container */
    .o-shell--flex {
    }

    /* makes the site container take the whole browser width */
    .o-shell--fluid {
    }
    ```

-   `_wrapper.scss` - styles for the site wrapper

    _Available selectors are:_

    ```css
    /* defines the parent container of all other elements. usually the only child of the <body> element */
    .o-wrapper {
    }
    ```

### Components

-   `_btn.scss` - default styles for the buttons

    _Available selectors are:_

    ```css
    /* default styles for a button */
    .c-btn {
    }

    /* makes the button fill its parent's width */
    .c-btn--block {
    }
    ```

-   `_list.scss` - default styles for lists. A list is an element with a classname which starts with `c-list`

### Utilities

-   `_align.scss` - alignment class utilities

    _Available selectors are:_

    ```css
    /* align to the left */
    .alignleft {
    }

    /* align to the right */
    .alignright {
    }

    /* clear the alignment */
    .alignnone {
    }

    /* clear the alignment and center horizontally */
    .aligncenter {
    }
    ```

-   `_clear.scss` - utilites to clear after floats

    _Available selectors are:_

    ```css
    /* clear both */
    .clear {
    }

    /* clear right */
    .clear-right {
    }

    /* clear left */
    .clear-left {
    }
    ```

-   `_fullsize-background.scss` - helper for background image

    _Available selectors are:_

    ```css
    /* makes the element's background image take the whole size of the element using "background-size: cover" */
    .fullsize-background {
    }
    ```

-   `_hidden.scss` - helper class/attribute for hidden elements

    _Available selectors are:_

    ```css
    .hidden,
    [hidden] {
    }
    ```

-   `_preferences.scss` - contains user preferences settings such as `reduced-motion` or `prefers-color-scheme` preferences.

-   `_responsive-utilities.scss` - helpers for showing/hiding elements on different resolutions. For resolutions reference please check the media queries section. These utility classnames are based on the `$breakpoints` and the `$displays` variables.

    _Available selectors are:_

    ```css
    .visible-xs-block {
    }
    .visible-xs-inline {
    }
    .visible-xs-inline-block {
    }
    .visible-xs-flex {
    }
    .visible-xs-inline-flex {
    }
    .visible-sm-block {
    }
    .visible-sm-inline {
    }
    .visible-sm-inline-block {
    }
    .visible-sm-flex {
    }
    .visible-sm-inline-flex {
    }
    .visible-md-block {
    }
    .visible-md-inline {
    }
    .visible-md-inline-block {
    }
    .visible-md-flex {
    }
    .visible-md-inline-flex {
    }
    .visible-lg-block {
    }
    .visible-lg-inline {
    }
    .visible-lg-inline-block {
    }
    .visible-lg-flex {
    }
    .visible-lg-inline-flex {
    }
    .visible-xl-block {
    }
    .visible-xl-inline {
    }
    .visible-xl-inline-block {
    }
    .visible-xl-flex {
    }
    .visible-xl-inline-flex {
    }
    .hidden-xs {
    }
    .hidden-sm {
    }
    .hidden-md {
    }
    .hidden-lg {
    }
    .hidden-xl {
    }
    ```

-   `_text-align.scss` - text alignment utilities. These utilites classnames are based on the `$alignments` variable

    _Available selectors are:_

    ```css
    /* align text to the left */
    .text-left {
    }

    /* align text to the center */
    .text-center {
    }

    /* align text to the right */
    .text-right {
    }

    /* align text to the right */
    .text-justify {
    }
    ```

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fitscss&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
