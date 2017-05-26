import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Component.extend({

  /* PUBLIC */
  treatmentDone: null, // action

  actions: {
    doTreatment() {
      return this.get('treatmentDone')();
    }
  }
});
