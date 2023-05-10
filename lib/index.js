const epac = require('./rest/epac');

const initializer = (accountSid, apiKey, opts) => {
  return new epac(accountSid, apiKey, opts);
};

initializer.epac = epac;
initializer.WebhookResponse = require('./epac/webhook-response');
initializer.WsRouter = require('./epac/ws-router');
initializer.WsSession = require('./epac/ws-session');
initializer.handleProtocols = (protocols) => {
  if (!protocols.has('ws.epac.org')) return false;
  return 'ws.epac.org';
};


module.exports = initializer;