const {
  DEBUGGER,
  SOLUTIONS,
  WAKANDA_BIN,
  LICENSE_PATH,
} = require('./config');

let adminPort = 8090;
let adminSSLPort = 4433;

module.exports = {
  apps : SOLUTIONS.map((one) => ({
    name: one.name,
    script: WAKANDA_BIN,
    args: `${DEBUGGER ? '--debugger=remote ': ''}--solution "${one.solution}" --license "${LICENSE_PATH}" --admin-port ${++adminPort} --admin-ssl-port ${++adminSSLPort}`,
    instances: 1,
    autorestart: false,
    watch: false,
  })),
};
