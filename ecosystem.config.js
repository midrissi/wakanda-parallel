const {
  DEBUGGER,
  SOLUTIONS,
  WAKANDA_BIN,
  LICENSE_PATH,
} = require('./config');

let adminPort = 8090;
let adminSSLPort = 4433;

module.exports = {
  apps: SOLUTIONS.map((one) => {
    adminPort += 1;
    adminSSLPort += 1;

    return {
      name: one.name,
      script: WAKANDA_BIN,
      args: `${DEBUGGER ? '--debugger=remote ' : ''}--solution "${one.solution}" --license "${LICENSE_PATH}" --admin-port ${adminPort} --admin-ssl-port ${adminSSLPort}`,
      instances: 1,
      autorestart: true,
      watch: false,
      exp_backoff_restart_delay: 100,
    };
  }),
};
