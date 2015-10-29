import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let dishFile = `dish/${params.name}.json`;

    return $.get( dishFile );
  }
});
