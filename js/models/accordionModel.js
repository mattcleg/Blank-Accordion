var Backbone = require('backbone');


var AccordionModel = Backbone.Model.extend({
	initialize: function() {

	},

	defaults: {
		title: "This is the Model title",
		body: "The body",
		_items: [
			{
				title: "Title 1 - funksters unite",
				body: "Let's unite y'all"
			},
			
			{
				title: "Title 1 - funksters unite",
				body: "Let's unite y'all"
			},

			{
				title: "Title 1 - funksters unite",
				body: "Let's unite y'all"
			},
		]
	}
});

module.exports = AccordionModel;