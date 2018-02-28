# Allie

Allie is a base stylesheet intended to provide accessible defaults for starting a project or using as a fallback style for legacy browsers (for example, if you are using feature queries for modern browsers).

Allie builds upon [normalize.css](https://necolas.github.io/normalize.css/) which fixes inconsistencies between browsers. On top of this Allie provides a number of defaults which we have found to be beneficial when developing complex layouts, these are opinionated defaults because they are based on our experience and taste. While we have chosen to include opinionated defaults, we intend to make sure that the stylesheet remains basic and lightweight because the goal is to create a starting point for a wide variety of projects.

## Installing with npm

`npm install @themeworkshop/allie`

## Contributing

The project uses a number of PostCSS plugins to make maintaining the stylesheet easier.
The stylesheet in the source directory is compiled to the dist directory using [Gulp](https://gulpjs.com/).

`npm run build` will run the build process once.

`npm start` will run the build process and allow it to continue watching for subsequent changes to the source code.

Examples of the styles should be visible in the html file in the example directory.

## Browser support

The project is planning to support Internet Explorer 9 and above and the latest versions of Chrome, Edge, Firefox and Safari.

## Legal information

Allie is maintained by Theme Workshop, a brand of Doublethink Studios LLP.

It is distributed under the MIT license.
