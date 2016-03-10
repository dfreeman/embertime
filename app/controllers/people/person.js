import Controller from 'ember-controller';

export default Controller.extend({
  showMap: false,

  actions: {
    toggleMap() {
      this.toggleProperty('showMap');
    }
  }
});
