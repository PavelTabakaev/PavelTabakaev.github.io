;
// Начинать писать отсюда!!!!
$(document).ready(function() {
	$(document).on('click','.hide-nav',function(){
		var nav = $('.header-nab__list');
		$('.hide-nav').toggleClass('active');
		nav.toggleClass('show')
	})
})