# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.3.3](https://github.com/alauda/alauda-ui/compare/v5.3.2...v5.3.3) (2020-11-09)


### Features

* form control components support readonly state ([bd8742d](https://github.com/alauda/alauda-ui/commit/bd8742de880e61ffe170b61bd9b2364efc7073a5))


### Bug Fixes

* form item may won't show error hint ([6fc6ebe](https://github.com/alauda/alauda-ui/commit/6fc6ebeab4b8b0c0f689a72edf68794a94092f9b))
* readme online demo address ([b760715](https://github.com/alauda/alauda-ui/commit/b76071544c3087a233c4bb0145f471343909b3d8))
* **number input:** check button state when write value ([b2fa11a](https://github.com/alauda/alauda-ui/commit/b2fa11ac4c8be1ee3bd3c1db4b0aea9a9c596496))
* form container should never overflow due to width 100% ([#54](https://github.com/alauda/alauda-ui/issues/54)) ([bd269db](https://github.com/alauda/alauda-ui/commit/bd269db1c4ed9355f24c15e09d7b8e6f3ec4d6fb)), closes [#ACP-3614](https://github.com/alauda/alauda-ui/issues/ACP-3614)
* input min-width error and tags input value may null ([4ac1a9e](https://github.com/alauda/alauda-ui/commit/4ac1a9eea93bc19b0c499f54dfd263b8aef9f63c))

### [5.3.2](https://github.com/alauda/alauda-ui/compare/v5.3.1...v5.3.2) (2020-09-25)


### Features

* bump deps, support typescript 4.0+ ([#51](https://github.com/alauda/alauda-ui/issues/51)) ([7291f95](https://github.com/alauda/alauda-ui/commit/7291f9519fb69664a9e5bff729a6ae25d4320cee))


### Bug Fixes

* changeValue should trigger before blur ([#52](https://github.com/alauda/alauda-ui/issues/52)) ([a4980e9](https://github.com/alauda/alauda-ui/commit/a4980e9e1f9bc1d6e6b5c23c188a02e6662f556d))
* compatible with cdk 10.2+, support sticky header ([#50](https://github.com/alauda/alauda-ui/issues/50)) ([d900f45](https://github.com/alauda/alauda-ui/commit/d900f4573415929f2e0a9a8b842f8888ce3d8c62))
* firefox aui-number-input css bug ([#48](https://github.com/alauda/alauda-ui/issues/48)) ([ebe3249](https://github.com/alauda/alauda-ui/commit/ebe324924f440025069435ebcad99782cd3566c4))

### [5.3.1](https://github.com/alauda/alauda-ui/compare/v5.3.0...v5.3.1) (2020-09-14)


### Bug Fixes

* auiTocLink support array input ([a647e80](https://github.com/alauda/alauda-ui/commit/a647e80df0a68231fe897844369e802e63f671fd))
* common form control typing ([c80e5a4](https://github.com/alauda/alauda-ui/commit/c80e5a44173cadaac87f4d543186440848f1e7ab))

## [5.3.0](https://github.com/alauda/alauda-ui/compare/v5.2.0...v5.3.0) (2020-08-13)


### Bug Fixes

* **select:** auto scroll to focused option ([1bec1e5](https://github.com/alauda/alauda-ui/commit/1bec1e592c544ec40372e5eef0cb44b4551a5ed4))
* compatibility with cdk 10.1+ ([#41](https://github.com/alauda/alauda-ui/issues/41)) ([de02bc7](https://github.com/alauda/alauda-ui/commit/de02bc79b97fe4e8bb4bdce8750c8db0d262e492))
* input should hide when unfocus ([#38](https://github.com/alauda/alauda-ui/issues/38)) ([605491d](https://github.com/alauda/alauda-ui/commit/605491d9405110e393a0194ec1f5192b353f88c0))
* resize card section margin ([83182f0](https://github.com/alauda/alauda-ui/commit/83182f0d29c7daab4e8efb2d35345c49c861aecf))

## [5.2.0](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.2.0) (2020-07-14)


### ⚠ BREAKING CHANGES

* upgrade to Angular 10 (#33)

### Features

* add title to tag in tag input AIT-3046 ([#34](https://github.com/alauda/alauda-ui/issues/34)) ([4b05ac3](https://github.com/alauda/alauda-ui/commit/4b05ac3843b4a61e749a7fb97de03639e5270548))
* add toc doc ([#27](https://github.com/alauda/alauda-ui/issues/27)) ([932cb38](https://github.com/alauda/alauda-ui/commit/932cb388b752e8f40ff30287b58b7e37ff9828eb))
* select tag card docs ([58e6888](https://github.com/alauda/alauda-ui/commit/58e68882b25cad85fe19ea8a5558655bb18afd09))
* upgrade to Angular 10 ([#33](https://github.com/alauda/alauda-ui/issues/33)) ([03efc87](https://github.com/alauda/alauda-ui/commit/03efc87eb4c56fd7e7b82835aa4ca29f8603328b))


### Bug Fixes

* empty line when one row filled by tag and optimize #ACP-2796 ([#31](https://github.com/alauda/alauda-ui/issues/31)) ([7b8b9b1](https://github.com/alauda/alauda-ui/commit/7b8b9b12d781444371032397e6512ca885026d85)), closes [#ACP-2796](https://github.com/alauda/alauda-ui/issues/ACP-2796)
* tag input not hide placeholder when update ([#35](https://github.com/alauda/alauda-ui/issues/35)) ([5289daa](https://github.com/alauda/alauda-ui/commit/5289daa2862affb2e3083c4bf3d7d69c53fa1cb8))

### [5.1.10](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.1.10) (2020-06-09)


### Features

* **checkbox:** add indeterminate state ([732d489](https://github.com/alauda/alauda-ui/commit/732d48996ddf84efd83033900739ad6ff87ac8c4))
* add switch,autocomplete,backtop docs ([6e0b8b2](https://github.com/alauda/alauda-ui/commit/6e0b8b292795cd955d7116000f67864623c970b7))


### Bug Fixes

* card header hasDivider apply only chind header ([1741a73](https://github.com/alauda/alauda-ui/commit/1741a731311741572e115651ae3f8230eb4b974d))

### [5.1.9](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.1.9) (2020-05-15)


### Bug Fixes

* toc container had multi instance ([43115e4](https://github.com/alauda/alauda-ui/commit/43115e4c9877142bc9eeb0a6d5e2e08c4e2f9aa6))

### [5.1.8](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.1.8) (2020-05-12)


### Bug Fixes

* **select:** remove line through error style ([8a86be5](https://github.com/alauda/alauda-ui/commit/8a86be5a62bba2080875cc3366bdbb726903f2ea))

### [5.1.7](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.1.7) (2020-04-26)


### Bug Fixes

* initial value snapshot of tags input ([d9c12a7](https://github.com/alauda/alauda-ui/commit/d9c12a771d422d80d5dde5ddb293df74da30cd42))

### [5.1.6](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.1.6) (2020-04-24)


### Features

* common form control set snapshot by default ([a5782a5](https://github.com/alauda/alauda-ui/commit/a5782a5c99a124672ff3dd49bca02855d4f0ae46))
* **accordion:** add lazy load to accordion item ([0370784](https://github.com/alauda/alauda-ui/commit/0370784b87ed6922e70e9d98ad93cfe802a0c108))

### [5.1.5](https://github.com/alauda/alauda-ui/compare/v5.1.4...v5.1.5) (2020-04-22)


### Features

* page sider static false ([0ed3881](https://github.com/alauda/alauda-ui/commit/0ed3881b7c69bdcfd3b6484af003076a476aef78))


### Bug Fixes

* radio button can't inject radio group ([c0f8e07](https://github.com/alauda/alauda-ui/commit/c0f8e07e902b15e05015cea2c9b9f627adc111fb))

### 5.1.4 (2020-04-09)


### Bug Fixes

* multi-select height ([4bc59ec](https://github.com/alauda/alauda-ui/commit/4bc59eceecf265b893f4e00aaaaab8985af025d6))

### [5.1.3](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.1.3..v5.1.2#diff) (2020-04-08)


### Bug Fixes

* placeholder rely on value of hasSelected changes ([d448ba1](https://bitbucket.org/mathildetech/alauda-ui/commits/d448ba1e561f74ab022eb99177f396ce2afd6cbc))
* style for class names includes aui- ([217fdc4](https://bitbucket.org/mathildetech/alauda-ui/commits/217fdc40bc136651a1e900ffbddd4e8a9d341d32))

### [5.1.2](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.1.2..v5.1.1#diff) (2020-03-26)


### Features

* optimize taginput ([e3e549d](https://bitbucket.org/mathildetech/alauda-ui/commits/e3e549dd9e1dbd17617955726f95d7cd9b9696ea))


### Bug Fixes

* ivy compatibility ([8fcc012](https://bitbucket.org/mathildetech/alauda-ui/commits/8fcc01291087ac7174a13bd0368cc0fab8e1330b))

### [5.1.1](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.1.1..v5.1.0#diff) (2020-03-16)


### Bug Fixes

* using unique spinner mask id ([b7b58ac](https://bitbucket.org/mathildetech/alauda-ui/commits/b7b58acdc516be5e9b2fc417d2c483f2e276742e))

## [5.1.0](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.1.0..v5.0.2#diff) (2020-03-09)


### ⚠ BREAKING CHANGES

* basic icons are removed, and some aui icons are renamed

### Features

* change the color of info type notification/message to blue ([b99f941](https://bitbucket.org/mathildetech/alauda-ui/commits/b99f941ae4c494326682f9a4bc245b5bf8442b1d))
* include cdk scrolling module ([bdabaa3](https://bitbucket.org/mathildetech/alauda-ui/commits/bdabaa35d7c99bbce5d7883cf7ab8eba8083704c))
* remove basic icons ([697ee60](https://bitbucket.org/mathildetech/alauda-ui/commits/697ee60a346f7cbb08de08e7b69b425053be6a12))
* replace spinner icon ([579a3fb](https://bitbucket.org/mathildetech/alauda-ui/commits/579a3fb593c7afa231e0e0eac7d3fdc76b14b00c))

### [5.0.2](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.0.2..v5.0.1#diff) (2020-02-18)


### Bug Fixes

* add debounce to toc container scroll event handler ([00b3f6a](https://bitbucket.org/mathildetech/alauda-ui/commits/00b3f6a82801a5cc7dfd222ee66297685c280383))

### [5.0.1](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.0.1..v5.0.0#diff) (2020-02-14)

## [5.0.0](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v5.0.0..v4.3.3#diff) (2020-02-07)


### ⚠ BREAKING CHANGES

* upgrade angular to 9.0, remove deprecated modules

### Features

* upgrade angular to 9.0, remove deprecated modules ([9f5c81c](https://bitbucket.org/mathildetech/alauda-ui/commits/9f5c81cde219c9a613e960fc4deb4b423cd8a4c3))

### [4.3.3](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.3.3..v4.3.2#diff) (2020-02-03)


### Bug Fixes

* can't resolve 'clipboard-polyfill' ([940221f](https://bitbucket.org/mathildetech/alauda-ui/commits/940221f16f2aec4904f595794a0e70f8cee0383e))
* num-aui-input min max ui bug #PT-263 ([3d0a06b](https://bitbucket.org/mathildetech/alauda-ui/commits/3d0a06bcb8cc4c9192be76ab7fcc87814cf62eb9)), closes [#PT-263](http://jira.alaudatech.com/browse/PT-263)
* storybook build error ([eb605be](https://bitbucket.org/mathildetech/alauda-ui/commits/eb605befbd81220fcdc738412a857f65abb19abe))

### [4.3.2](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.3.2..v4.3.1#diff) (2019-12-11)


### Features

* use union [@1st](https://bitbucket.org/mathildetech/alauda-ui)G configs, bump all (dev)Dependencies ([355a814](https://bitbucket.org/mathildetech/alauda-ui/commits/355a81464c8c583e805301433141a828a38ecc46))

### [4.3.1](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.3.1..v4.3.0#diff) (2019-12-10)


### Features

* support to disable table row ([6108ab4](https://bitbucket.org/mathildetech/alauda-ui/commits/6108ab490212aeb73adf7541fd959eb466c57cab))

## [4.3.0](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.3.0..v4.2.12#diff) (2019-12-05)


### Features

* support muilt select options label use template ([a6d895d](https://bitbucket.org/mathildetech/alauda-ui/commits/a6d895d43644d98658a330d9d07deb12b8fd3cc6))


### Bug Fixes

* form item content should align to the center of container ([b4757d3](https://bitbucket.org/mathildetech/alauda-ui/commits/b4757d3b16b0fd93a1ab14c2eb49dcdf7e0cc481))

## [1.5.0](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v1.5.0..v4.2.12#diff) (2019-12-05)


### Features

* support muilt select options label use template ([a6d895d](https://bitbucket.org/mathildetech/alauda-ui/commits/a6d895d43644d98658a330d9d07deb12b8fd3cc6))


### Bug Fixes

* form item content should align to the center of container ([b4757d3](https://bitbucket.org/mathildetech/alauda-ui/commits/b4757d3b16b0fd93a1ab14c2eb49dcdf7e0cc481))

### [4.2.12](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.12..v4.2.11#diff) (2019-12-03)


### Bug Fixes

* form-item-addon should align to the top of the container ([0907081](https://bitbucket.org/mathildetech/alauda-ui/commits/09070819ed7089385f2ec9364b3f2bfa6b0f4278))

### [4.2.11](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.11..v4.2.10#diff) (2019-11-28)


### Bug Fixes

* add fill color for tree select icon ([f062006](https://bitbucket.org/mathildetech/alauda-ui/commits/f06200669affe69e265c1a67c7b36b0de2ad23da))
* optimize the postion of the close button in dialog header ([f1d1129](https://bitbucket.org/mathildetech/alauda-ui/commits/f1d11297a8a5bfdcf9ce69bb16e6c77480216a7f))

### [4.2.10](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.10..v4.2.9#diff) (2019-11-14)


### Icon

* update basic icon v0.75 ([026dd69](https://bitbucket.org/mathildetech/alauda-ui/commits/026dd693cdc29224063427102895203fbd524a5f))

### [4.2.9](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.9..v4.2.8#diff) (2019-10-21)


### Bug Fixes

* number input add type attribute ([c60dae1](https://bitbucket.org/mathildetech/alauda-ui/commits/c60dae1053cade76a70768e37a6ffc1b49be9593))

### [4.2.8](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.8..v4.2.7#diff) (2019-10-17)


### Bug Fixes

* multi select custom create value bug ([db908ce](https://bitbucket.org/mathildetech/alauda-ui/commits/db908ce71537bda9f6f68a5ff44ca4c451e3b448))

### [4.2.7](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.7..v4.2.6#diff) (2019-10-16)


### Bug Fixes

* icon doc url ([396e186](https://bitbucket.org/mathildetech/alauda-ui/commits/396e1867b78b39eb6413a41ac1f0dee4cf45eb0f))


### Icon

* update basic icon v0.73 ([be43888](https://bitbucket.org/mathildetech/alauda-ui/commits/be438888c71d48821abdccf8ccd406e535fabaee))

### [4.2.6](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.6..v4.2.5#diff) (2019-10-15)


### Bug Fixes

* select allow create bug ([e816a2f](https://bitbucket.org/mathildetech/alauda-ui/commits/e816a2f6c77a133c21e93625cca3d5d4e7d85440))

### [4.2.5](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.5..v4.2.4#diff) (2019-09-18)


### Bug Fixes

* confirm dialog type error ([e376a1b](https://bitbucket.org/mathildetech/alauda-ui/commits/e376a1b))

### [4.2.4](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.4..v4.2.3#diff) (2019-09-18)


### Bug Fixes

* dialog confirm method return type ([113a4ea](https://bitbucket.org/mathildetech/alauda-ui/commits/113a4ea))


### Icon

* update v0.72, fix viewBox ([c06729a](https://bitbucket.org/mathildetech/alauda-ui/commits/c06729a))

### [4.2.3](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.3..v4.2.2#diff) (2019-09-18)

### [4.2.2](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.2..v4.2.1#diff) (2019-09-16)


### Bug Fixes

* bitbucket pipeline ([c349be9](https://bitbucket.org/mathildetech/alauda-ui/commits/c349be9))
* update dev readme ([f88e232](https://bitbucket.org/mathildetech/alauda-ui/commits/f88e232))


### Icon

* update basic icon v0.71 ([87794c0](https://bitbucket.org/mathildetech/alauda-ui/commits/87794c0))

### [4.2.1](https://bitbucket.org/mathildetech/alauda-ui/compare/v4.2.0...v4.2.1) (2019-08-27)


### Bug Fixes

* change all similar codes ([7edf3a6](https://bitbucket.org/mathildetech/alauda-ui/commit/7edf3a6))
* workaround for fesm2015 package building error ([d4701e6](https://bitbucket.org/mathildetech/alauda-ui/commit/d4701e6)), closes [/github.com/angular/angular-cli/issues/14247#issuecomment-486582423](https://bitbucket.org/mathildetech/alauda-ui/issues/issuecomment-486582423)



## [4.2.0](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.2.0..v4.1.2#diff) (2019-08-18)


### Features

* confirm dialog return result ([839e0b0](https://bitbucket.org/mathildetech/alauda-ui/commits/839e0b0))

### [4.1.2](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.1.2..v4.1.1#diff) (2019-08-15)


### Bug Fixes

* add icon 0.70 ([6f619d9](https://bitbucket.org/mathildetech/alauda-ui/commits/6f619d9))
* menu-group-title margin bottom ([c43b8da](https://bitbucket.org/mathildetech/alauda-ui/commits/c43b8da))

### [4.1.1](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.1.1..v4.1.0#diff) (2019-08-05)


### Bug Fixes

* menu item add icon margin ([7e56525](https://bitbucket.org/mathildetech/alauda-ui/commits/7e56525)), closes [#PT-220](http://jira.alaudatech.com/browse/PT-220)


### Icon

* update basic icon 0.69 ([5437436](https://bitbucket.org/mathildetech/alauda-ui/commits/5437436))

## [4.1.0](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.1.0..v4.0.5#diff) (2019-07-26)


### Bug Fixes

* call _changeActivatedTabs on selectedIndex changes ([c73a46e](https://bitbucket.org/mathildetech/alauda-ui/commits/c73a46e))
* change tab component static metadata ([8f3b7a6](https://bitbucket.org/mathildetech/alauda-ui/commits/8f3b7a6))
* input group addon support dynamic render ([8556bf1](https://bitbucket.org/mathildetech/alauda-ui/commits/8556bf1))
* story should declare used component ([0572490](https://bitbucket.org/mathildetech/alauda-ui/commits/0572490))


### Refactor

* remove unused layout component ([578c016](https://bitbucket.org/mathildetech/alauda-ui/commits/578c016))


### BREAKING CHANGES

* aui-layout has been removed



### [4.0.5](https://bitbucket.org/mathildetech/alauda-ui/branches/compare/v4.0.5..v4.0.4#diff) (2019-07-10)


### Bug Fixes

* aui header addon not show error ([d96a1b9](https://bitbucket.org/mathildetech/alauda-ui/commits/d96a1b9))
* ContentChild static false for form-item ([a85139a](https://bitbucket.org/mathildetech/alauda-ui/commits/a85139a))
