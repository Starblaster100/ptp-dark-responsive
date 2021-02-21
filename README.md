# PTP Responsive Stylesheets

Listed in this repo are a collection of stylesheets that should 
be loaded on top of default forum stylesheets to enable responsive pages.

Supported stylesheets currently include:
* Dark: [dark-responsive.css](https://starblaster100.github.io/ptp-responsive/dist/dark-responsive.css)

## To Use a Responsive Stylesheet
* Choose one of the supported themes above, and copy the link next to it
* Browser to PTP, click on the `Edit` link next to your username, and click on `Stylesheet`
* Scroll to the bottom, select the `Other` radio button, input the raw dist link into the input field,
  and select `Load on top of Dark stylesheet` in the dropdown (select the corresponding base stylesheet)
* Save your profile!

This will load the responsive stylesheet on top of the default stylesheet, to enable the site to work
at different viewport sizes.

## To Develop a Responsive Stylesheet

Install the dependencies:
```
$ npm install
```

Start the SASS watcher:
```
npm run sass:watch
```

Start the local server
```
$ node index.js
```

This will allow you to get a http://localhost:3000/dark-responsive.css link 
(or a link for another stylesheet that you're developing) that you can input into
PTP to test youe changes on the go.

The watcher will automatically recompile your SASS into CSS on each change you make,
and the localhost link will reflect the changes when its called.

Once you have completed your Stylesheet, and tested it using the instructions below,
please compile a compressed version of it by running:
```
$ npm run build
```
and committing the generated file.

## Testing 

Please ensure the following commands all return no errors before submitting a PR:

```
$ npm run eslint
$ npm run stylelint
```

### Autofix
```
$ npm run eslint:fix 
$ npm run stylelint:fix
```
also exist to fix some violations automatically.
