import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Fonts */
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@300;400&display=swap');

:root {
  /* Variables */

  /* -Colours- */
  --white: #fcfeff;
  --orange: #f58220;
  --lightBlue: #00b7f0;
  --blue: #01589c;
  --darkBlue: #04183c;
  --black: #00171f;
  --grey: #bfbfbf;
  --lightGrey: #f2f4f6;


  /* Defaults */
  --bg-primary: var(--white);
  --bg-secondary: var(--darkBlue);
  --bg-black: var(--black);
  --bg-accent: var(--orange);

  --text-primary: var(--black);
  --text-secondary: var(--white);
  --text-accent: var(--orange);

  --link-primary: var(--darkBlue);
  --link-medium: var(--orange);
  --link-light: var(--lightBlue);

  /* CTA */
  --cta-light-background: var(--orange);
  --cta-medium-background: var(--blue);
  --cta-dark-background: var(--darkBlue);

  --cta-light-text: var(--white);
  --cta-medium-text: var(--orange);
  --cta-dark-text: var(--black);

  --cta-border-dark: var(--black);
  --cta-border-medium: var(--orange);
  --cta-border-light: var(--white);

  /* Type */
  --text-font-family: 'Merriweather', serif;
  --heading-font-family: 'Lato', sans-serif;
  --h1: 2em;
  --h2: 1.75em;
  --h3: 1.66em;
  --h4: 1.5em;
  --h5: 1.33em;
  --h6: 1.25em;
  --cta: 1.15em;
  --pText: 1.15em;
  --inputText: 1em;
  --base-text-size: 1rem;
  --smallText: .8em;

  /* Elevation */
  --box-shadow: 0 0 10px 2px rgba(0, 25, 40, .4);
  --level-1:	0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --level-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-inner-heavy: inset 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);

  /* Sizes */
  --border-radius: calc(var(--base-text-size) / 5);
  --padding: 1em;
  --smallLargePadding: calc(var(--padding) / 2) var(--padding);
  --margin: 1.5em;
  --max-basis-font: 24px;
  --line-height: 1.7;

  --desktop: 48em;
  --mobile: 26em;

  /* Other */
  font-size: calc(13px + 1vmin);
}

@media screen and (min-width: 60rem) {
  :root {
    font-size: var(--max-basis-font);
  }
}

/* Normalize */
html {
  box-sizing: border-box;
	-webkit-text-size-adjust: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

p + p,
h1 + p,
h2 + p,
h3 + p {
  margin-top: var(--margin);
}

li + li,
dl + dd,
dd + dt,
dt + dd,
h4 + p,
h5 + p {
  margin-top: calc(var(--margin) / 2);
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--base-text-size);
  line-height: var(--line-height);
  font-family: var(--text-font-family);
	line-height: var(--line-height);
	margin: 0;
  white-space: pre-wrap;
}

main {
	display: block
}

h1 {
	font-size: var(--h1);
	margin: calc(var(--h1) / 3) 0;
}

h2 {
	font-size: var(--h2);
	margin: calc(var(--h2) / 3) 0;
}

h3 {
	font-size: var(--h3);
	margin: calc(var(--h3) / 3) 0;
}

h4 {
	font-size: var(--h4);
	margin: calc(var(--h4) / 3) 0;
}

h5 {
	font-size: var(--h5);
	margin: calc(var(--h5) / 3) 0;
}

h1, h2, h3, h4, h5 {
  font-family: var(--heading-font-family);
}

hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible
}

pre {
	font-family: monospace, monospace;
	font-size: var(--pText);
  white-space: pre-wrap;
}

a {
	background-color: transparent;
  color: var(--link-primary);
  font-weight: 500;
}

a:hover {
  color: var(--link-medium);
  text-decoration: underline;
  text-decoration-skip: skip;
  transition: all .2s ease-in;
}

abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	text-decoration: underline dotted
}

b,
strong {
	font-weight: bolder
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sub {
	bottom: -.25em
}

sup {
	top: -.5em
}

img {
	border-style: none
}

button,
input,
optgroup,
select,
textarea {
  border: 1px solid;
	font-family: inherit;
  font-size: var(--inputText);
	margin: 0;
  margin-bottom: var(--margin);
  padding: calc(var(--padding) / 2);
}

button,
input {
	overflow: visible
}

button,
select {
	text-transform: none
}

[type=button],
[type=reset],
[type=submit],
button {
  appearance: none;
  background-color: var(--cta-medium-background);
  border-color: transparent;
  border-radius: var(--border-radius);
  box-shadow: var(--level-2);
  color: var(--cta-light-text);
  cursor: pointer;
  font-size: var(--base-text-size);
  padding: var(--smallLargePadding);
  text-transform: uppercase;
}

[type=button]:hover,
[type=reset]:hover,
[type=submit]:hover,
button:hover {
  border-color: var(--cta-dark-background);
  box-shadow: var(--level-3);
}

[type=button][disabled],
[type=reset][disabled],
[type=submit][disabled],
button[disabled] {
  background-color: var(--grey);
  color: var(--text-primary);
  pointer-events: none;
  box-shadow: var(--level-1);
}

[type=button]:active,
[type=reset]:active,
[type=submit]:active,
button:active {
  box-shadow: var(--shadow-inner-heavy);
  outline: 0;
  transform: translate(0, 2px) scale(0.98);
}

fieldset {
	padding: .35em .75em .625em
}
fieldset div {
  display: flex;
  flex-direction: column;
}

legend {
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal
}

progress {
	vertical-align: baseline
}

q {
  quotes: "“" "”";
}

textarea {
	overflow: auto
}

[type=checkbox],
[type=radio] {
	box-sizing: border-box;
  margin-right: 5px;
	padding: 0;
}

[type=search] {
	-webkit-appearance: textfield;
	outline-offset: -2px
}

button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: none;
}

details {
	display: block
}

summary {
	display: list-item
}

template {
	display: none
}

[hidden] {
	display: none
}

blockquote {
  margin: 10px;
  padding: var(--padding);
}

label {
  display: block;
  font-size: var(--pText);
}

::placeholder {
  color: var(--grey);
}

/* Utility Classes */
.grid {
  --gridCols: 2;
  display: grid;
  grid-template-columns: repeat(var(--gridCols), 1fr);
}
.cols-3 {
  --gridCols: 3;
}
.cols-4 {
  --gridCols: 4;
}

.flex {
  --justifyContent: space-between;
  display: flex;
  justify-content: var(--justifyContent);
}

.flex-around {
  --justifyContent: space-around;
}

@media screen and (max-width: 32rem) {
  .grid {
    display: grid;
  }
  .flex {
    display: flex;
  }
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

`;
