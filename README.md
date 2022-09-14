![Inverted Triangle CSS Visualization](https://raw.githubusercontent.com/scriptex/itscss/master/itscss.svg?sanitize=true)

# ITSCSS

[![Travis CI](https://travis-ci.com/scriptex/itscss.svg?branch=master)](https://travis-ci.com/scriptex/itscss)
[![Github Build](https://github.com/scriptex/itscss/workflows/Build/badge.svg)](https://github.com/scriptex/itscss/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/itscss/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/itscss&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-itscss-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/itscss/badge)](https://www.codefactor.io/repository/github/scriptex/itscss)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/itscss/README.md?pixel)](https://github.com/scriptex/itscss/)

> A starter boilerplate based on the [ITsCSS](https://www.xfive.co/blog/itscss-scalable-maintainable-css-architecture/) (Inverted Triangle CSS) methodology.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/itscss?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/itscss?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/itscss?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/itscss)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/itscss?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/itscss?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/itscss?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/itscss?style=plastic)

## About

> ITSCSS is a mobile-first, responsive, battle-tested SCSS framework based on the ITsCSS methodology utilizing the BEM methodology.

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

    _Contains several mixins:_

    ```css
    /* General purpose flex container */
    /* prettier-ignore */
    @include flex(
    	center /* align-items */,
    	flex-end /* justify-content */,
        wrap /* flex-wrap */,
        row /* flex-direction */,
        flex /* display */
    );

    /* Flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @include flex-row(
    	no-wrap /* wrap */,
    	center /* align-items */,
    	flex-end /* justify-content */
    );

    /* Flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @include flex-column(
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */
    );

    /* Inline-flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @include inline-flex-row(
    	no-wrap /* wrap */,
    	center /* align-items */,
    	flex-end /* justify-content */
    );

    /* Inline-flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @include inline-flex-column(
    	no-wrap /* wrap */
    	center /* align-items */
    	flex-end /* justify-content */
    );

    /* Inline-flex container with flex-direction set to "row" */
    /* prettier-ignore */
    @include inline-flex-row(
    	no-wrap /* wrap */,
    	center /* align-items */,
    	flex-end /* justify-content */
    );

    /* Inline-flex container with flex-direction set to "column" */
    /* prettier-ignore */
    @include inline-flex-column(
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

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
