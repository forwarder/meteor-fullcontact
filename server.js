FullContact = Npm.require('fullcontact');

var AsyncDecorator = function (Client, scope) {
  var client = new Client(scope);

  decorateClient(client, this);

  Object.defineProperty(this, 'client', {
    value: client,
    enumerable: true
  });
};

function decorateClient(client, decorator) {
  var methods = _.functions(client),
      decorator = decorator || {};

   _.chain(client).pick(methods).each(function(method, methodName) {
    decorator[methodName] = Meteor.wrapAsync(method, client);
  });

  return decorator;
}

FullContact.define(FullContact.prototype, 'location', function define() {
  return new AsyncDecorator(FullContact.Location, this);
});

FullContact.define(FullContact.prototype, 'email', function define() {
  return new AsyncDecorator(FullContact.Email, this);
});

FullContact.define(FullContact.prototype, 'person', function define() {
  return new AsyncDecorator(FullContact.Person, this);
});

FullContact.define(FullContact.prototype, 'name', function define() {
  return new AsyncDecorator(FullContact.Name, this);
});

FullContact.define(FullContact.prototype, 'company', function define() {
  return new AsyncDecorator(FullContact.Company, this);
});
