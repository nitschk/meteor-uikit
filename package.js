Package.describe({
  name: 'alexandesigner:meteor-uikit',
  version: '1.0.0',
  summary: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces',
  git: 'https://github.com/alexandesigner/meteor-uikit',
  documentation: 'README.md'
});

Package.onUse(function (api, where) {

  api.versionsFrom('METEOR@1.4.1');

  const path = Npm.require('path');
  const assetPath = path.join('src');

  //js
  api.addFiles(path.join(assetPath, 'js', 'uikit.js'), 'client');

  //css
  api.addFiles(path.join(assetPath, 'css', 'uikit.css'), 'client');

  //fonts
  api.addAssets(path.join(assetPath, 'images', 'accordion-close.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'accordion-open.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'close-large.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'close.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'divider-icon.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'form-checkbox-indeterminate.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'form-checkbox.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'form-radio.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'form-select.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'icons.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'list-bullet.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'nav-parent-close.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'nav-parent-open.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'navbar-toggle.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'overlay.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'pagination-next.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'pagination-previous.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'search-default.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'search-navbar.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'search-large.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'slidenav-large-next.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'slidenav-large-previous.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'slidenav-next.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'slidenav-previous.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'spinner.svg'), 'client');
  api.addAssets(path.join(assetPath, 'images', 'totop.svg'), 'client');

});
