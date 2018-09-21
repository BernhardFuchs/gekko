// Note: this file gets copied around, make sure you edit
// the UIconfig located at `gekko/web/vue/dist/UIconfig.js`.

// This config is used by both the frontend as well as the web server.
// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html#Configuring-Gekko

const CONFIG = {
  headless: true,
  api: {
    host: '0.0.0.0',
    port: 3005,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    host: '13.58.95.146',
    port: 3005,
    path: '/'
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
