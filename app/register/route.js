import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function () {
      var user = this.store.createRecord('user', {
        name: this.controller.get('name')
      });
      console.log('controller is ' + Ember.inspect(this.controller));
      console.log('name is ' + Ember.inspect(this.controller.get('name')));
      console.log('user object is ' + Ember.inspect(user));
      user.save().then(() => {
        console.log('save successful');
        this.controller.set('message', 'A new user with name "' + this.controller.get('name') + '"was added!');
        this.controller.set('name', null);
      }, function () {
        console.log('save failed');
      });
    }
  }
});
