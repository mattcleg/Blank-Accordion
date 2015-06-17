var Backbone = require('backbone');
var template = require('./../templates/accordionItem.hbs');

var AccordionItemView = Backbone.View.extend({

	className: 'accordion-item',

	events: {
		'click .accordion-item-title': 'onItemClicked'
	},

	initialize: function(options) {

		this.data = options.data;

		this.parentView = options.parentView;

		this.render();
	},

	render: function() {
		// I was missing 'this.' from this.data
		this.$el.html(template(this.data));
	},

	onItemClicked: function() {
		console.log("Item clicked");
		this.setVisitedState();
		console.log();
	},

	setVisitedState: function() {
		this._isVisited = true;
	},

	setSelectedState: function() {

	},

	showBody: function() {

	},

	hideBody: function() {

	}

});

module.exports = AccordionItemView;