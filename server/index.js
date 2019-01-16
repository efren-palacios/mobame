const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '52.91.225.80'
const port = process.env.PORT || 8000
const axios = require('axios')
app.set('port', port)
const key = require('../config.json').api
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.get('/riot-api/:region/:summoner', async (req, res) => {
    const region = req.params.region
    const summoner = req.params.summoner
    res.contentType('json')
    try {
      const { data } = await axios({
        responseType: 'stream',
        method: 'get',
        url: `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}`,
        headers: {
          'X-Riot-Token': key
        }
      })
      data.pipe(res)
    } catch (e) {
      console.log(e)
      res.status(500).send()
    }
  })
  app.get('/riot-api/:region/:summoner/rank', async (req, res) => {
    const region = req.params.region
    const summoner = req.params.summoner
    res.contentType('json')
    try {
      const { data } = await axios({
        responseType: 'stream',
        method: 'get',
        url: `https://${region}.api.riotgames.com/lol/league/v4/positions/by-summoner/${summoner}`,
        headers: {
          'X-Riot-Token': key
        }
      })
      data.pipe(res)
    } catch (e) {
      console.log(e)
      res.status(500).send()
    }
  })

  app.get('/riot-api/:region/:summoner/masteries', async (req, res) => {
    const region = req.params.region
    const summoner = req.params.summoner
    res.contentType('json')
    try {
      const { data } = await axios({
        responseType: 'stream',
        method: 'get',
        url: `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summoner}`,
        headers: {
          'X-Riot-Token': key
        }
      })
      data.pipe(res)
    } catch (e) {
      console.log(e)
      res.status(500).send()
    }
  })
  app.get('/riot-api/:region/:summoner/matches', async (req, res) => {
    const region = req.params.region
    const summoner = req.params.summoner
    res.contentType('json')
    try {
      const { data } = await axios({
        responseType: 'stream',
        method: 'get',
        url: `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${summoner}`,
        headers: {
          'X-Riot-Token': key
        }
      })
      data.pipe(res)
    } catch (e) {
      console.log(e)
      res.status(500).send()
    }
  })
  app.get('/riot-api/:region/matches/:match', async (req, res) => {
    const region = req.params.region
    const match = req.params.match
    res.contentType('json')
    try {
      const { data } = await axios({
        responseType: 'stream',
        method: 'get',
        url: `https://${region}.api.riotgames.com/lol/match/v4/matches/${match}`,
        headers: {
          'X-Riot-Token': key
        }
      })
      data.pipe(res)
    } catch (e) {
      console.log(e)
      res.status(500).send()
    }
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
