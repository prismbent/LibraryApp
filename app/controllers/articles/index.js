import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['show'],
	possibleStates: ["borrowed", "returned"],
	actions: {
		save: function(model){
			model.save();
			return false;
		}
	}
});
