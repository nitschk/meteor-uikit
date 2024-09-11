Package.describe({
  name: 'nitschk:meteor-uikit',
  version: '1.0.0',
  summary: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces',
  git: 'https://github.com/nitschk/meteor-uikit',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom(['1.10', '2.3', '3.0']);
  //                               ^^^^^^^ for testing your package with meteor 3.0

  api.versionsFrom(['1.10', '2.3', '3.0']);
  //                              ^^^^^^^ for meteor 3.0

  const path = Npm.require('path');
  const assetPath = path.join('src');

  //js
  api.addFiles(path.join(assetPath, 'js', 'uikit.js'), 'client');

  //css
  api.addFiles(path.join(assetPath, 'css', 'uikit.css'), 'client');

  //icons
  api.addAssets(path.join(assetPath, 'images', 'icons.svg'), 'client');
});
