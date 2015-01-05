# ember-cli-foreigner

`ember-cli-foreigner` is a set of helpers and mixins to interface with the [foreigner.js](https://github.com/mirego/foreigner.js) library in Ember.

[![Node package version](http://img.shields.io/npm/v/ember-cli-foreigner.svg)](http://img.shields.io/npm/v/ember-cli-foreigner.svg) [![Travis-CI status](http://img.shields.io/travis/mirego/ember-cli-foreigner.svg)](http://img.shields.io/travis/mirego/ember-cli-foreigner.svg) [![Code Climate](http://img.shields.io/codeclimate/github/mirego/ember-cli-foreigner.svg)](https://codeclimate.com/github/mirego/ember-cli-foreigner)

## Setup

```bash
npm install ember-cli-foreigner --save-dev
ember g ember-cli-foreigner
```

### Adding a locale

```bash
ember g locale <locale>
```

In your app’s `config/environment.js`, set the default locale:

```js
var ENV = {
  APP: {
    defaultLocale: '<locale>'
  }
};
```

### Changing the locales folder

You can change the folder where the translations are put by setting the locale prefix:

```
var ENV = {
  modulePrefix: 'your-app',
  localePrefix: 'your-app/localizations'
};
```

The path is relative to `modulePrefix` and is set to `locales` by default.

## Usage

To see how to write your locale file, see the [foreigner.js README](https://github.com/mirego/foreigner.js)

### Translating text content

```hbs
{{!-- Simple translation --}}
<h1>{{t 'hello_world'}}</h1>

{{!-- Bound interpolated values --}}
<p>{{t 'you_have_x_message' messageCount=messages.length}}</p>
```

### Translating attributes of a component

```js
import Ember from 'ember';
import TranslateableAttributes from 'ember-cli-foreigner/translateable-attributes';

export default Ember.Component.extend(TranslateableAttributes, {
  // component definition
});
```

### Translating attributes of an Ember view

Say you want to translate the `placeholder` attribute on the `input` helper.

First, you have to include the `translateable-attributes` mixin on the `Ember.TextField` class:

```js
import TranslateableAttributes from 'ember-cli-foreigner/translateable-attributes';

Ember.TextField.reopen(TranslateableAttributes);
```

And then you can define your placeholder like this:

```hbs
{{input placeholderTranslation='form.input_placeholder'}}
```

### Translate attributes on a plain tag

```hbs
<a {{translate-attr title='link_title'}}>Link</a>
```

### Changing the locale

The locale property is set on your app’s instance, so to change it you could do something like this in your `routes/application.js`:

```js
export default Ember.Route.extend({
  actions: {
    changeLocale: function(locale) {
      var application = this.container.lookup('application:main');
      application.set('locale', locale);

      // Transitioning to any other route from here should render
      // your templates with the new locale’s translations
    }
  }
});
```

## Contributing

### Installation

- git clone this repository
- `npm install`
- `bower install`

### Running

- `ember server`
- Visit your app at http://localhost:4200.

### Running Tests

- `ember test`
- `ember test --server`

### Building

- `ember build`

For more information on using ember-cli, visit http://www.ember-cli.com/.

## License

`ember-cli-foreigner` is © 2014-2015 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-cli-foreigner/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
