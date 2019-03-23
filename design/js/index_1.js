/* global $ ,alert, console*/

$(function() {
	'use strict';

	//nice scroll
	
	$("html").niceScroll();

	//change header height
	$('.header').height($(window).height());

	//scroll to first artical
	$('.header .arrow i ').click(function() {

		$('html,body').animate({

			scrollTop: $('.artical').offset().top
		}, 1500);
	});
	// SHOW HIDDEN ITEMS

	$('.show-more').click(function(){

		 $('.artical_2 .hidden').fadeIn(2000);
	});

	//cheek artical_3

	var leftArrow = $('.artical_3 .fa-chevron-left') ,

		rightArrow = $('.artical_3 .fa-chevron-right');

	function checkClients()
	{

		if ($('.person:first').hasClass('active'))
		{

			leftArrow.fadeOut();
		} 
		else
		{
			leftArrow.fadeIn();
		}
		if ($('.person:last').hasClass('active'))
		{

			rightArrow.fadeOut();
		} 
		else
		{
			rightArrow.fadeIn();
		}

	}
	checkClients();

	$('.artical_3 i').click(function() 
	{
		if($(this).hasClass('fa-chevron-right'))
		{
			$('.artical_3 .active').fadeOut(100,function()
			{
				$(this).removeClass('active').next('.person').addClass('active').fadeIn();
				checkClients();
			});
		}
		else
		{
			$('.artical_3 .active').fadeOut(100,function()
			{
				$(this).removeClass('active').prev('.person').addClass('active').fadeIn();
				checkClients();
			});
		}
	});
});