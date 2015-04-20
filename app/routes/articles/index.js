import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
  	return this.modelFor('friends/show').get('articles');
  },

  deactivate: function () {
	var model = this.modelFor("articles/new");
	console.log(model);
	if (model.get('isNew')) {
		model.destroyRecord();
	}
  }

});
 