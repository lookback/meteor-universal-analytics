Package.describe({
  summary: "universal-analytics packaged for meteor.",
});

Npm.depends({
  "universal-analytics": "https://github.com/peaksandpies/universal-analytics/tarball/7d9fdbb4cd32aab1a91ff397a308229761282ef1",
});

Package.on_use(function(api) {
  api.add_files('server.js', 'server');

  api.export('ga', 'server');
});
