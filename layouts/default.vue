<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
* {
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  text-decoration: none;
  -webkit-transition: background-color 250ms ease-in-out,
    color 250ms ease-in-out;
  -moz-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  -o-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  -ms-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #ddd;
  font-family: 'Helvetica Neue', 'Open Sans', Arial, Verdana, Sans-Serif;
  font-size: 12px;
  line-height: 24px;
  color: #222;
  min-width: 960px;
}

h1 {
  font-size: 48px;
  line-height: 56px;
}
h2 {
  font-size: 30px;
  line-height: 38px;
}
h3 {
  font-size: 22px;
  line-height: 30px;
}
h4 {
  font-size: 20px;
  line-height: 28px;
}
h5 {
  font-size: 18px;
  line-height: 26px;
}
h6 {
  font-size: 16px;
  line-height: 24px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  cursor: default;
}
.clear {
  clear: both;
}
a {
  color: #fff;
}
.blue {
  color: #72a0d9;
}

.darken {
  background-color: white;
}

.bg-facebook {
  background-color: #3b5998;
}

.champion {
  position: relative;
  background-size: cover;
  background-position-y: 510px;
  opacity: 0.9;
}

.background {
  /* background-image: url('https://cdn.communitydragon.org/8.16.1/champion/Poppy/splash-art/centered/skin/0'); */
  background-position: center 25%;
  position: absolute;
  height: 50%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.inline {
  display: inline-block;
}

.logo {
  min-width: 120px;
}

.short {
  margin: 0 15px;
}

.text-shadow {
  text-shadow: 1px 1px 2px black;
}

.text-rank {
  font-size: 16px;
}

.rank {
  width: 550px;
}

.win {
  border-left: 3px solid limegreen;
}

.items {
  width: 132px;
}

.items > img {
  margin: 2px;
}
</style>