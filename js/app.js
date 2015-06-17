/*var Backbone = require('backbone');
var Hub = require('./hub');
var AccordionView = require('js/views/accordionView');
var AccordionModel = require('js/models/accordionModel');
*/

$(function() {

	var allSections = $('.accordion-body').addClass('hidden');

	$('.accordion-title').on('click', function(){
		var accordionBody = $(this).next('.accordion-body');

		accordionBody.toggleClass('visible');
	})

});
