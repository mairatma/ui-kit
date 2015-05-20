# UI Kit

> A set of UI components made with [Metal.js](https://github.com/liferay/metal.js)

## Install

```
bower install liferay-apps/ui-kit
```

## Usage

1. Load CSS dependencies:

	```html
<link rel="stylesheet" href="bower_components/skeleton/css/normalize.css">
<link rel="stylesheet" href="bower_components/skeleton/css/skeleton.css">
	```

2. Load CSS font icons:

	```html
<link rel="stylesheet" href="bower_components/ui-kit/build/fonts/icon-12.css">
<link rel="stylesheet" href="bower_components/ui-kit/build/fonts/icon-16.css">
	```

3. Import base files into your SASS file:

	```css
@import "bower_components/ui-kit/lib/styles/theme";
@import "bower_components/ui-kit/lib/styles/base";
	```

4. Load main script:

	```html
<script src="vendor/ui-kit/build/scripts/ui-kit.js"></script>
	```

3. Copy & paste component's markup at [liferay-apps.github.io/ui-kit](http://liferay-apps.github.io/ui-kit/).

## Development

1. Run `bower install`
2. Run `npm install`

Bulding the library:

1. `gulp build:lib`

Testing the library:

1. `gulp test` - this will run the tests inside Chrome
2. `gulp test:watch` - this will continuously run the tests inside Chrome
3. `gulp test:browsers` - this will run the tests inside all registered browsers

Building the site:

1. `gulp build:site` - Note that the site requires the library to be built first, so remember to run `gulp build:lib` before.

## License

[BSD License](http://opensource.org/licenses/BSD-2-Clause) © Liferay, Inc.
