import Ember from 'ember';

export default Ember.Component.extend({

  /* PUBLIC */
  buttonClicked: null, // action

  /* PRIVATE */
  _buttonStatus: 'ready', // ready, pending, succeeded, failed

  isButtonReady: Ember.computed.equal('_buttonStatus', 'ready'),
  isButtonPending: Ember.computed.equal('_buttonStatus', 'pending'),

  actions: {
    clickButton() {
      this.set('_buttonStatus', 'pending');
      const promise = this.get('buttonClicked')();
      promise
        .then(() => {
          this.set('_buttonStatus', 'ready');
        })
        .catch(err => {
          this.set('_buttonStatus', 'ready');
          Ember.Logger.log(err);
        });
    }
  }
});
