const epas = require('./rest/epas');

const initializer = (accountSid, apiKey, opts) => {
  return new epas(accountSid, apiKey, opts);
};

initializer.epas = epas;
initializer.WebhookResponse = require('./epas/webhook-response');
initializer.WsRouter = require('./epas/ws-router');
initializer.WsSession = require('./epas/ws-session');
initializer.handleProtocols = (protocols) => {
  if (!protocols.has('ws.epas.org')) return false;
  return 'ws.epas.org';
};


module.exports = initializer;