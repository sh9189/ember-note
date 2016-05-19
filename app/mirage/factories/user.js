import Mirage, {
  faker
} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  name() {
    return faker.name.findName();
  }
});
