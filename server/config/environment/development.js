'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://192.168.99.100:27017/temp-dev'
  },

  // Seed database on startup
  seedDB: true

};
