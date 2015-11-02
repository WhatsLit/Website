/* jshint node: true */

module.exports = function(environment) {
  //DEFINE THE ENV.
  var ENV = {
    modulePrefix: 'whatslit',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: use.typekit.net",
      'connect-src': "'self' 192.168.1.7 api.whatslit.io  192.168.1.7:5000 localhost:5000", //Questionable?
      'img-src': "'self' www.facebook.com csi.gstatic.com maps.googleapis.com data:",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },
  };

  //IFF DEV WITH FRIENDS
  if (environment === 'landev')
      ENV.APP.API_HOST = 'http://192.168.1.7:5000';
  //IFF DEV ALONE
  if(environment === 'development')
      ENV.APP.API_HOST = 'http://localhost:5000';
  //IFF PRODUCTION
  if (environment === 'production')
    ENV.APP.API_HOST = 'http://api.whatslit.io';

  //SETUP API ENDPOINTS
  ENV.APP.ENDPOINTS = {
    user: ENV.APP.API_HOST + '/users/'
  };

  //SETUP SIMPLE AUTH.
  ENV['ember-simple-auth'] = {
    authenticationRoute: 'sign-in',
    authorizer: 'authorizer:django',
    serverTokenEndpoint: ENV.APP.API_HOST + '/api-token-auth/',
    crossOriginWhitelist: [ENV.APP.API_HOST]
  };


  

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }



  return ENV;
};
