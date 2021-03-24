# [Paper Kit React - Free Bootstrap 4, React, React Hooks and Reactstrap UI Kit](https://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme) ![version](https://img.shields.io/badge/version-1.3.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-kit.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/paper-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Paper Kit React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/opt_pk_react_thumbnail.jpg)

Paper Kit React is a free Bootstrap 4, React, React Hooks and Reactstrap UI Kit with pale colors, beautiful typography and thoughtful drawings. We've created it having paper and drawings in mind.

Any elements that is vital to code a web project is already here, fully coded. All components are fully responsive and look great on every screen size. Transitions, shadows, colors, they all resemble the flow you would have using pieces of paper.

We have created the UI Kit kit having pastel colors and paper in mind. It feels light, fresh and easy to go through. It features beautiful typography, font icons and thoughtful layouts.


### React Hooks support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports React Hooks.


### Bootstrap 4 support

Paper Kit React is built on top of Bootstrap 4 using React and Reactstrap, so it fully supports them. Most of the elements from the framework are re-designed to resemble sheets of paper and color pastels. If the are elements that we have not touched, they will gracefully fall back to the Bootstrap 4 default.


### Examples

Paper Kit React contains some pages already designed and implemented. Here is the list with the pages available. We are also working on more example pages, that you will be able to access no matter the version you download.


* [Landing Page](https://demos.creative-tim.com/paper-kit-react/#/landing-page?ref=pkr-github-readme)
* [Register](https://demos.creative-tim.com/paper-kit-react/#/register-page?ref=pkr-github-readme)
* [Profile Page](https://demos.creative-tim.com/paper-kit-react/#/profile-page?ref=pkr-github-readme)

Tutorial and components

Once you download the archive, you will be able find a tutorial page inside it explaining how to start using it. You can also check the [documentation online](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

| HTML | Angular | React |
| --- | --- | --- |
| [![Paper Kit 2 HTML](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-html/opt_pk2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-kit-2?ref=pkr-github-readme)  | [![Paper Kit 2 Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-angular/opt_pk2_angular_thumbnail.jpg)](https://www.creative-tim.com/product/paper-kit-2-angular?ref=pkr-github-readme)  | [![Paper Kit  React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/opt_pk_react_thumbnail.jpg)](https://www.creative-tim.com/product/paper-kit-react?ref=pkr-github-readme)  

| Register Page | Landing Page | Profile Page  |
| --- | --- | ---  |
| [![Register Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/register.png)](https://demos.creative-tim.com/paper-kit-react/#/register-page?ref=pkr-github-readme)  | [![Landing Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/landing.png)](https://demos.creative-tim.com/paper-kit-react/#/landing-page?ref=pkr-github-readme)  | [![Profile Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-react/profile.png)](https://demos.creative-tim.com/paper-kit-react/#/profile-page?ref=pkr-github-readme)  

[View More](https://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme)

## Quick start

1.  Download the project's zip
2.  Make sure you have node.js (<https://nodejs.org/en/>) installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4.  You will find all the branding colors inside `src/assets/scss/paper-kit/_variables.scss`. You can change them with a `HEX` value or with other predefined variables.
5.  Run in terminal `npm start`.

## Documentation
The documentation for the Paper Kit React is hosted at our [website](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme).


## File Structure

Within the download you'll find the following directories and files:
```
paper-kit-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   └── bootstrap.min.css.map
    │   ├── demo
    │   │   └── demo.css
    │   ├── fonts
    │   ├── img
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   └── scss
    │       ├── paper-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── paper-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── paper-kit.scss
    ├── components
    │   ├── Footers
    │   │   └── DemoFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── ProfilePage.js
        │   └── RegisterPage.js
        └── index-sections
            ├── SectionButtons.js
            ├── SectionCarousel.js
            ├── SectionDark.js
            ├── SectionDownload.js
            ├── SectionExamples.js
            ├── SectionJavaScript.js
            ├── SectionLogin.js
            ├── SectionNavbars.js
            ├── SectionNavigation.js
            ├── SectionNotifications.js
            ├── SectionNucleoIcons.js
            ├── SectionProgress.js
            └── SectionTypography.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Resources
- Demo: <http://demos.creative-tim.com/paper-kit-react/#/index?ref=pkr-github-readme>
- Download Page: <https://www.creative-tim.com/product/paper-kit-react?ref=pkr-github-readme>
- Documentation: <https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme>
- License Agreement: <https://www.creative-tim.com/license?ref=pkr-github-readme>
- Support: <https://www.creative-tim.com/contact-us?ref=pkr-github-readme>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/paper-kit-react/issues)


**Dashboards:**

| HTML | React | Vue  | Angular |
| --- | --- | ---  | ---  |
| [![Paper Dashboard  HTML](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-2-html/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-2?ref=pkr-github-readme) | [![Paper Dashboard  React](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-react/opt_pd_react_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-pro-react?ref=pkr-github-readme) | [![Vue Paper Dashboard](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-paper-dashboard/opt_pd_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-paper-dashboard?ref=pkr-github-readme)  | [![ Paper Dashboard Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-2-angular/opt_pk2_angular_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-angular?ref=pkr-github-readme)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Paper Kit 2. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Paper Kit 2. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=pkr-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2021 Creative Tim (https://www.creative-tim.com/?ref=pkr-github-readme)

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=pkr-github-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=pkr-github-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=pkr-github-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=pkr-github-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=pkr-github-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=pkr-github-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=pkr-github-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=pkr-github-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=pkr-github-readme)

### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
