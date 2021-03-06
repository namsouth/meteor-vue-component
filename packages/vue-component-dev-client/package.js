Package.describe({
  name: 'akryum:vue-component-dev-client',
  version: '0.0.6',
  summary: 'Hot-reloading client for vue components',
  git: 'https://github.com/Akryum/meteor-vue-component',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3');
  api.use('ecmascript');
  api.use('reload');
  api.use('autoupdate');
  api.use('reactive-var');
  api.use('akryum:vue@1.0.3');
  api.mainModule('client/dev-client.js', 'client');
});


Npm.depends({
  'socket.io-client': '1.4.6'
});
