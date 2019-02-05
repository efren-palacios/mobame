<template>
  <section class="bg-black">
    <div class="navbar">
      <div class="logo">
        <p>
          MOBA
          <span class="blue">ME</span>
        </p>
        <div class="form-container">
          <form @submit.prevent="submit" action class="form-flex" _lpchecked="1">
            <input
              v-model="search"
              autofocus="autofocus"
              placeholder="Search for a summoner..."
              type="text"
              value
              class="search-bar"
            >
            <button v-on:click="search" class="search-button">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  text-decoration: none;

  /*
	For those who enjoy CSS3 color & background transitions everywhere.
	This will save space and ease the stress on selecting what's needed
	for :hover and :active properties.
	*/

  -webkit-transition: background-color 250ms ease-in-out,
    color 250ms ease-in-out;
  -moz-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  -o-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  -ms-transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

caption,
th,
td {
  font-weight: normal;
  text-align: left;
}

ol,
ul {
  list-style: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}
blockquote,
q {
  quotes: '' '';
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
h group,
menu,
nav,
section {
  display: block;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}

body {
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 12px;
  line-height: 24px;
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
  color: #f05;
}

body {
  background: #ddd;
}

section {
  display: flex;
  flex-direction: column;
}

.bg-black {
  background-color: #22292f;
  width: auto;
}

.navbar {
  padding: 0.75em 0;
  display: flex;
}

.logo {
  width: 33.3%;
  font-weight: 100;
  text-align: center;
  font-size: 1.25rem;
  color: white;
  white-space: nowrap;
}

.blue {
  color: #72a0d9;
}

@media only screen and (max-width: 600px) {
  body {
    min-width: 0;
  }
  .logo {
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 0.8em;
    align-items: center;
    width: 100%;
  }
  .search-bar {
    background-color: #3d4852;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    font-size: 12px;
    height: 20px;
  }

  .search-bar,
  .search-button {
    padding: 0.5rem 1.2rem;
    color: #fff;
  }

  .search-button {
    background-color: #2779bd;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    cursor: pointer;
    font-size: 12px;
    height: auto;
  }

  .form-container {
    margin: 0 1.25rem 0 0;
  }

  .form-flex {
    display: flex;
  }
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`/summoner/${this.search}`)
    }
  }
}
</script>

