Package.describe({
  name: 'praneybehl:react-select',
  version: '0.6.11_1',
  summary: 'React-Select packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.addFiles('react-select.css', 'client');
  api.export('Select');
});

Npm.depends({
  "react-select": "0.6.11",
  "exposify": "0.5.0"
});
