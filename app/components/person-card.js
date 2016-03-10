import on from 'ember-evented/on';
import Component from 'ember-component';

export default Component.extend({
  // Since we don't have direct control over the image we're rendering (the md-card
  // component just takes a URL and renders it for us), we manually tag the image after
  // the fact by running this event handler whenever this component renders.
  //
  // This tag is referenced in transition.js to power the "fly-to" effect
  _tagImage: on('didRender', function() {
    const personId = this.get('person.id');
    this.$().attr('data-person-card', personId);
    this.$('img').attr('data-person-image', personId);
  })
})
