# meteor-fullcontact
FullContact API client for Meteor

## Installation

```
meteor install forwarder:fullcontact
```

## [Official Documentation](https://github.com/observing/fullcontact)

## Usage

To create a new client you simply need to construct the module with your
FullContact API key:

```js
var fullcontact = new FullContact(Meteor.settings.fullContact.apiKey);
```

Alternatively you can also use the provided `createClient` method, is that's how
you roll.

```js
var fullcontact = FullContact.createClient(Meteor.settings.fullContact.apiKey);
```

Unlike the Node.JS version, all methods can be called synchronous.

```js
var data = fullcontact.person.email('foo@bar.com');
```

And ofcourse asynchronous.

```js
var data = fullcontact.person.email('foo@bar.com', function (err, data) {
  ..
});
```

## License

The module is released under the MIT license.

[fullcontact]: https://fullcontact.com?withlovefrom=observer
