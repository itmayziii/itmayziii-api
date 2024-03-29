# Changelog

## [1.7.1](https://github.com/itmayziii/itmayziii-api/compare/v1.7.0...v1.7.1) (2024-03-27)


### Bug Fixes

* **src/payload.config:** using generateFileURL in addition to collection staticURL ([7583669](https://github.com/itmayziii/itmayziii-api/commit/7583669f53233898b1cad8128aa4b321594da7f5))

## [1.7.0](https://github.com/itmayziii/itmayziii-api/compare/v1.1.6...v1.7.0) (2024-03-25)


### Code Refactoring

* **src/server.ts:** removed debug console.log ([93fd7af](https://github.com/itmayziii/itmayziii-api/commit/93fd7af64e3e5113cf871b836e5e1749cd0e4279))

## [1.1.6](https://github.com/itmayziii/itmayziii-api/compare/v1.1.5...v1.1.6) (2024-03-25)


### Code Refactoring

* **src/server.ts:** logging request headers for debugging ([ac67de7](https://github.com/itmayziii/itmayziii-api/commit/ac67de77395edc2835df98f92adbf3754a480e50))

## [1.1.5](https://github.com/itmayziii/itmayziii-api/compare/v1.1.4...v1.1.5) (2024-03-24)


### Bug Fixes

* **src/payload.config:** yet again fixing payload cms's plugin system, what a mess ([21dc97a](https://github.com/itmayziii/itmayziii-api/commit/21dc97aa02d7e5cba5b254bc28d37421c6aa1066))

## [1.1.4](https://github.com/itmayziii/itmayziii-api/compare/v1.1.3...v1.1.4) (2024-03-24)


### Bug Fixes

* **src/payload.config.ts:** fixed issue where cloud storage was not working ([2fde075](https://github.com/itmayziii/itmayziii-api/commit/2fde075ecf5731976f6c1533c93a0e386b12dbaa))

## [1.1.3](https://github.com/itmayziii/itmayziii-api/compare/v1.1.2...v1.1.3) (2024-03-24)


### Bug Fixes

* **cloud storage plugin:** not relying on APP_ENV to add cloud storage ([c4c83dc](https://github.com/itmayziii/itmayziii-api/commit/c4c83dc0c27a50dc74bd5bb885a8c1e770014438))
* **src/payload.config.ts:** fixed issue where cloud storage was not working ([2fde075](https://github.com/itmayziii/itmayziii-api/commit/2fde075ecf5731976f6c1533c93a0e386b12dbaa))

## [1.1.2](https://github.com/itmayziii/itmayziii-api/compare/v1.1.1...v1.1.2) (2024-03-24)


### Bug Fixes

* **cloud storage plugin:** not relying on APP_ENV to add cloud storage ([c4c83dc](https://github.com/itmayziii/itmayziii-api/commit/c4c83dc0c27a50dc74bd5bb885a8c1e770014438))
* **src/payload.config.ts:** fixed prefix path for cloud storage bucket ([cb85ac0](https://github.com/itmayziii/itmayziii-api/commit/cb85ac0cabd3811944033dc3661d57fcc6cbbf5c))

## [1.1.1](https://github.com/itmayziii/itmayziii-api/compare/v1.1.3...v1.1.1) (2024-03-24)


### Features

* **auth / ci:** enforcing email verification on users auth and added lock time ([d05682b](https://github.com/itmayziii/itmayziii-api/commit/d05682b36647d060ae06c3d8a77244abcc9ec5d1))
* **cors, csrf:** added cors and csrf ([7b073c8](https://github.com/itmayziii/itmayziii-api/commit/7b073c8e8a0e64baa537f5a48357f18b1130c2b4))
* **home page:** home page of the CMS is now completed with added fields and collections ([35e8031](https://github.com/itmayziii/itmayziii-api/commit/35e803120f6eae874da9ce47aa4714df27e4db94))
* **initial commit :rocket::** initial payload setup with some collections and globals ([f427484](https://github.com/itmayziii/itmayziii-api/commit/f42748486eec238e8042056472d5375f78a81283))
* **recaptcha + cloud images:** setup GCS for images and added reCAPTCHA ([bddcaed](https://github.com/itmayziii/itmayziii-api/commit/bddcaedd8b1bb4e726a688c000735f68d948254c))


### Bug Fixes

* **cloud storage plugin:** not relying on APP_ENV to add cloud storage ([c4c83dc](https://github.com/itmayziii/itmayziii-api/commit/c4c83dc0c27a50dc74bd5bb885a8c1e770014438))
* **package-lock.json:** updated dependencies ([cefd16d](https://github.com/itmayziii/itmayziii-api/commit/cefd16d3277238a217bd181e13188a24b9e7a7f1))
* **release-please-config.json:** testing ci process ([282aa60](https://github.com/itmayziii/itmayziii-api/commit/282aa60a82ebdff1db7a84f46ec89e007d026961))
* **release-please-config.json:** testing ci process ([32f3cb0](https://github.com/itmayziii/itmayziii-api/commit/32f3cb0f2b60166ce07bc7d46d99c2d54024a059))
* **release-please-config:** testing ci process ([68467db](https://github.com/itmayziii/itmayziii-api/commit/68467dbf081a322b18fb086c2c3427c100dd8693))
* **src/payload.config.ts:** fixed prefix path for cloud storage bucket ([cb85ac0](https://github.com/itmayziii/itmayziii-api/commit/cb85ac0cabd3811944033dc3661d57fcc6cbbf5c))


### Continuous Integration

* **ci/service.yaml:** added CORS_URLS env variable ([98e7bc6](https://github.com/itmayziii/itmayziii-api/commit/98e7bc6d7bbef2b22b2f53bffb2f98d9152cfc77))

## [1.1.3](https://github.com/itmayziii/itmayziii-api/compare/v1.1.2...v1.1.3) (2024-03-24)


### Bug Fixes

* **cloud storage plugin:** not relying on APP_ENV to add cloud storage ([c4c83dc](https://github.com/itmayziii/itmayziii-api/commit/c4c83dc0c27a50dc74bd5bb885a8c1e770014438))

## [1.1.2](https://github.com/itmayziii/itmayziii-api/compare/v1.1.1...v1.1.2) (2024-03-24)


### Bug Fixes

* **src/payload.config.ts:** fixed prefix path for cloud storage bucket ([cb85ac0](https://github.com/itmayziii/itmayziii-api/commit/cb85ac0cabd3811944033dc3661d57fcc6cbbf5c))

## [1.1.1](https://github.com/itmayziii/itmayziii-api/compare/v1.1.0...v1.1.1) (2024-03-24)


### Continuous Integration

* **ci/service.yaml:** added CORS_URLS env variable ([98e7bc6](https://github.com/itmayziii/itmayziii-api/commit/98e7bc6d7bbef2b22b2f53bffb2f98d9152cfc77))

## [1.1.0](https://github.com/itmayziii/itmayziii-api/compare/v1.0.4...v1.1.0) (2024-03-24)


### Features

* **cors, csrf:** added cors and csrf ([7b073c8](https://github.com/itmayziii/itmayziii-api/commit/7b073c8e8a0e64baa537f5a48357f18b1130c2b4))

## [1.0.4](https://github.com/itmayziii/itmayziii-api/compare/v1.0.3...v1.0.4) (2024-03-22)


### Bug Fixes

* **package-lock.json:** updated dependencies ([cefd16d](https://github.com/itmayziii/itmayziii-api/commit/cefd16d3277238a217bd181e13188a24b9e7a7f1))

## [1.0.3](https://github.com/itmayziii/itmayziii-api/compare/itmayziii-api-v1.0.2...itmayziii-api-v1.0.3) (2023-10-17)


### Bug Fixes

* **release-please-config.json:** testing ci process ([282aa60](https://github.com/itmayziii/itmayziii-api/commit/282aa60a82ebdff1db7a84f46ec89e007d026961))

## [1.0.2](https://github.com/itmayziii/itmayziii-api/compare/itmayziii-api-v1.0.1...itmayziii-api-v1.0.2) (2023-10-17)


### Bug Fixes

* **release-please-config:** testing ci process ([68467db](https://github.com/itmayziii/itmayziii-api/commit/68467dbf081a322b18fb086c2c3427c100dd8693))

## [1.0.1](https://github.com/itmayziii/itmayziii-api/compare/itmayziii-api-v1.0.0...itmayziii-api-v1.0.1) (2023-10-17)


### Bug Fixes

* **release-please-config.json:** testing ci process ([32f3cb0](https://github.com/itmayziii/itmayziii-api/commit/32f3cb0f2b60166ce07bc7d46d99c2d54024a059))

## 1.0.0 (2023-10-17)


### Features

* **auth / ci:** enforcing email verification on users auth and added lock time ([d05682b](https://github.com/itmayziii/itmayziii-api/commit/d05682b36647d060ae06c3d8a77244abcc9ec5d1))
* **home page:** home page of the CMS is now completed with added fields and collections ([35e8031](https://github.com/itmayziii/itmayziii-api/commit/35e803120f6eae874da9ce47aa4714df27e4db94))
* **initial commit :rocket::** initial payload setup with some collections and globals ([f427484](https://github.com/itmayziii/itmayziii-api/commit/f42748486eec238e8042056472d5375f78a81283))
* **recaptcha + cloud images:** setup GCS for images and added reCAPTCHA ([bddcaed](https://github.com/itmayziii/itmayziii-api/commit/bddcaedd8b1bb4e726a688c000735f68d948254c))
