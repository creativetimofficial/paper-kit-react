# Change Log

## [1.2.0] 2020-06-12
### Bug fixing
- https://github.com/creativetimofficial/paper-kit-react/issues/2 (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- Other Paper React products issues solved here as well
  - https://github.com/creativetimofficial/ct-paper-kit-pro-react/issues/2
  - https://github.com/creativetimofficial/paper-dashboard-react/issues/15
  - https://github.com/creativetimofficial/paper-dashboard-react/issues/8
  - https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues/8
  - https://github.com/creativetimofficial/ct-paper-dashboard-pro-react/issues/6 - solution to this is to change the usage of the ModalHeader from reactstrap to simple Bootstrap ones:
  So, instead of:
```
<ModalHeader className="justify-content-center" toggle={this.toggleModalDemo}>
    Modal Title
</ModalHeader>
```
  You should use
```
<div className="modal-header justify-content-center">
  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalDemo}>
    <span aria-hidden="true">×</span>
  </button>
  <h5 className="modal-title">Modal Title</h5>
</div>
```
### Major style changes
- `src/assets/scss/paper-kit/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/paper-kit/_nucleo-icons.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/react/plugins/_plugin-nouislider.scss` (due to new `noUiSlider` API)
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ gulp@4.0.2 (for Creative Tim copyrights)
+ gulp-append-prepend@1.0.8 (for Creative Tim copyrights)
### Updated dependencies
```
moment             2.24.0   →    2.26.0
node-sass          4.12.0   →    4.14.1
nouislider         13.1.5   →    14.5.0
react              16.8.6   →   16.13.1
react-dom          16.8.6   →   16.13.1
react-router        5.0.1   →     5.2.0
react-router-dom    5.0.1   →     5.2.0
react-scripts       3.0.1   →     3.4.1
reactstrap          8.0.0   →     8.4.1
typescript          3.5.2   →     3.9.5
```
### Warning
_All the following products: Paper Kit React, Paper Dashboard React, Paper Kit PRO React and Paper Dashboard PRO React have been updated together, and thus, we've added to all of them the same version of 1.2.0 - we may have skipped some versions for some of the above products, we've done so, since we want all Paper & React products to share the same versions._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.0.0] 2019-06-26
### Original Release
- Added Reactstrap as base framework
- Added design from Paper Kit 2 by Creative Tim
