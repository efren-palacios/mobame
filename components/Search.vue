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
  .champion {
    position: relative;
    background-size: cover;
    background-position-y: 510px;
    opacity: 0.9;
    width: 100%;
    background-color: black;
  }
  .profile {
    display: flex;
    margin: 0 auto;
  }
  .summoner-icon {
    width: 12.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    border: 4px solid white;
  }
  .summoner-profile {
    margin: 2.5em auto;
    display: flex;
    flex-direction: column;
  }
  .background {
    background-position: center 25%;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.15;
  }
  .summoner-name {
    text-shadow: 1px 1px 2px black;
    letter-spacing: 0.05em;
    font-size: 3rem;
    margin: 1rem 0;
    color: white;
    text-align: center;
  }
  .summoner-info {
    display: flex;
    flex-direction: column;
  }
  .summoner-stats {
    display: flex;
    justify-content: space-around;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  .summoner-social {
    justify-content: space-evenly;
    display: flex;
    margin: 0.5rem 0;
  }
  .streaming,
  .online-status {
    padding: 0.25rem 0.5rem;
    border-radius: 0.125rem;
    background-color: #9561e2;
    color: white;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
  }
  .online-status {
    background-color: #38c172;
  }
  .rank-container {
    background-color: #ddd;
    color: #ddd;
    display: flex;
    flex-direction: column;
  }
  .rank-group {
    display: flex;
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 0.5em;
  }
  .rank-group:nth-child(odd) {
    margin-top: -1px;
    margin-bottom: -1px;
  }
  .rank-data {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }
  .rank-summary {
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    background-color: #22292f;
  }
  .rank-stats {
    background-color: #3d4852;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    text-align: center;
    font-size: 18px;
    flex-direction: column;
  }
  .rank-emblem > img {
    width: 7em;
  }
  .rank-division {
    font-size: 24px;
    color: #6abbff;
    font-weight: bold;
    text-shadow: 1px 1px 3px black;
    text-transform: capitalize;
    font-variant: small-caps;
  }
  .rank-lp {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.5em;
    text-shadow: 1px 1px 3px black;
  }
  .darken {
    color: rgba(255, 255, 255, 0.25);
  }
  .text-green {
    color: #38c172;
  }
  .rank-champ {
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
  }
  .rank-ratio {
    font-size: 12px;
  }
  .summoner-verification {
    color: white;
    display: flex;
    justify-content: space-evenly;
  }
  .match-card {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .match-card-victory {
    border-left: 4px solid #4e77ff;
    background-color: #192845;
  }
  .match-card-defeat {
    border-left: 4px solid #ff4e50;
    background-color: #45192b;
  }
  .match-summary {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .match-ending {
    font-weight: bold;
  }
  .match-defeat {
    color: #ff4e50;
  }
  .match-victory {
    color: #4e77ff;
  }
  .match-champ {
    width: 2rem;
    border-radius: 50%;
  }
  .match-champ-stats {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .match-champ-stats > img {
    margin-right: 0.5rem;
  }
  .match-role {
    width: 1.5rem;
  }
  .match-score {
    display: flex;
    flex-direction: column;
  }
  .match-summoners {
    display: flex;
    flex-direction: column;
    width: 15px;
  }
  .match-summoner-icon {
    width: 1.5rem;
    margin: 1px 0;
  }
  .match-items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 95px;
  }
  .match-items > img {
    height: 1.8rem;
    align-items: center;
    align-content: center;
    margin: 1px;
  }
  .match-slots {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .match-menu {
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 0 0 auto;
  }
  .match-card:nth-child(odd) {
    margin-top: -1px;
    margin-bottom: -1px;
  }
  .match-menu > i {
    padding: 0.5em;
  }
  .flex-center {
    align-self: center;
  }
  .rank-icon > img {
    width: 5.5em;
    margin: 0 0.5em;
  }
  .rank-queue {
    text-align: center;
    width: 50px;
  }
  .rank-name {
    font-size: 12px;
  }
  .rank-master {
    color: rgb(199, 109, 215);
  }
  .rank-diamond {
    color: rgb(92, 111, 197);
  }
  .rank-gold {
    color: rgb(214, 195, 126);
  }
  .rank-platinum {
    color: rgb(125, 213, 163);
  }
  .rank-silver {
    color: rgb(232, 232, 232);
  }
  .rank-bronze {
    color: rgb(196, 140, 77);
  }
  .rank-iron {
    color: rgb(206, 186, 165);
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

