const { Nuxt, Builder } = require('nuxt')
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import Routes
let api = require('./api/index')(app);

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = new Nuxt(config)
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
