Package.describe({
  name: 'brwn:to-markdown',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'to-markdown wrapper for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aamdani/to-markdown',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.1');
    // dependecies required by package
    //api.use('contributor:package-name@version.number.here','client')
    // adding the required file for package
    api.add_files('lib/to-markdown.js', 'client');
});
