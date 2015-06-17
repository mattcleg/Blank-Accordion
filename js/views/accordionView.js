var Backbone = require('backbone');
var Velocity = require('velocity-animate');
var template = require('./../templates/accordion.hbs');
var AccordionItemView = require('./accordionItemView');


var AccordionView = Backbone.View.extend({

	className: 'accordion',


	initialize: function() {
		
		this.listenTo(this, 'item:clicked', this.onItemClicked);

		this.render();
	},

	render: function() {
		var data = this.model.toJSON();
		this.$el.html(template(data));

		// var that = this;

		//This kicks off getting the individual items. Bind has kept the 'this' context.
		_.defer(_.bind(this.postRender, this));
	},

	postRender: function() {
		_.each(this.model.get('_items'), function(value, key){
			this.$('.accordion-items').append(new AccordionItemView({
				data: value,
				parentView: this
			}).$el);
		}, this);
	},

	onItemClicked: function() {
		console.log(this.model.attributes);
		var itemLength = this.model.get('_items').length;

		var visitedLength = _.where(this.model.get('_items'), {isVisted: true}).length;

		if( visitedLength === itemLength ) {
			this.model.set( {_isCompleted: true} );
		}
	},

	onComplete: function() {

	}

}); 

module.exports = AccordionView;
