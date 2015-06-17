var Backbone = require('backbone');
var Hub = require('./hub');
var AccordionView = require('js/views/accordionView');
var AccordionModel = require('js/models/accordionModel');

$(function() {
	var accordionModel = new AccordionModel();

	$('#wrapper').append(new AccordionView({
		model: accordionModel
	}).$el);
});