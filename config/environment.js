/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'whatslit',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }
if (environment === 'development') {
    ENV.APP.API_HOST = 'http://192.168.1.7:5000';
    ENV['simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: 'http://192.168.1.7:5000/api-token-auth/',
      crossOriginWhitelist: ['http://192.168.1.7:5000']
    };
  }


  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://api.whatslit.io';
    ENV['simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: 'http://api.whatslit.io/api-token-auth/',
      crossOriginWhitelist: ['http://api.whatslit.io']
    };
  }

  return ENV;
};