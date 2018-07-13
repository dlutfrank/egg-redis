'use strict';

exports.redis = {
  default: {
  },
  app: true,
  agent: false,

  // Single Redis
  // client: {
  //   host: 'host',
  //   port: 'port',
  //   family: 'user',
  //   password: 'password',
  //   db: 'db',
  // },

  // Cluster Redis
  // client: {
  //   cluster: true,
  //   nodes: [{
  //     host: 'host',
  //     port: 'port',
  //     family: 'user',
  //     password: 'password',
  //     db: 'db',
  //   },{
  //     host: 'host',
  //     port: 'port',
  //     family: 'user',
  //     password: 'password',
  //     db: 'db',
  //   },
  // ]},

  // sentinel Redis
  // client: {
  //   sentinels: [{
  //     host: 'host',
  //     port: 'port',
  //   }, {
  //     host: 'host',
  //     port: 'port',
  //   }],
  //   name: 'name',
  //   password: 'password',
  // },

  // Multi Redis
  // clients: {
  //   instance1: {
  //     host: 'host',
  //     port: 'port',
  //     family: 'user',
  //     password: 'password',
  //     db: 'db',
  //   },
  //   instance2: {
  //     host: 'host',
  //     port: 'port',
  //     family: 'user',
  //     password: 'password',
  //     db: 'db',
  //   },
  // },
};
