/**
 * This is the global transition map for Liquid Fire. Here you can define how different
 * parts of your app animate or otherwise shift from one to another and within themselves
 * based on criteria like a particular route you're entering or leaving, characteristics
 * of the active model, CSS selectors for a particular region, etc.
 *
 * For more details see http://ember-animation.github.io/liquid-fire/#/transition-map
 */
export default function() {
  // This transition will apply when transitioning in either direction between the
  // people list and a particular person. If it can locate an element in each with
  // a matching data-person-image attribute, it will map those together and "fly"
  // one to the other during the transition. All other content will just fade.
  this.transition(
    this.withinRoute(['people.person', 'people.index']),
    this.use('explode', {
      matchBy: 'data-person-image',
      use: ['fly-to', { duration: 350, easing: 'ease-in-out' }]
    }, {
      use: ['fade', { duration: 200 }]
    })
  );

  // This transition will apply when moving from anywhere in the people route hierarchy
  // to anywhere in the departments route hierarchy. In practice, this means that if
  // you click the department of a particular person on the people list, everyone not
  // in that department will fade away, and the remaining person cards will fly into place
  // in the smaller list.
  this.transition(
    this.withinRoute(['people', 'departments']),
    this.use('explode', {
      matchBy: 'data-person-card',
      use: ['fly-to', { duration: 350, easing: 'ease-in-out' }]
    }, {
      use: ['fade', { duration: 200 }]
    })
  );
}
