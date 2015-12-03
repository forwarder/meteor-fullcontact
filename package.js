Package.describe({
  summary: "FullContact wrapped for Meteor.",
  name: 'forwarder:fullcontact',
  version: '1.0.0'
});

Npm.depends({
  'fullcontact': '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'underscore'
  ], 'server');

  api.addFiles([
    'server.js'
  ], 'server');

  if(api.export) {
    api.export('FullContact');
  }
});
