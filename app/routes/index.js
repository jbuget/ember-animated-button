import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  actions: {
    redirectToDone() {
      const sleep = new RSVP.Promise(function(resolve) {
        Ember.run.later(this, function() {
          resolve(true);
        }, 1000);
      });
      return sleep.then(() => {
        return this.transitionTo('done');
      });
    }
  }
});
