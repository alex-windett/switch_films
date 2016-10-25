
$(document).ready(function() {
    $('.section').click(function() {
        $('body').toggleClass('isZoomed')
        $(this).find('.button').toggleClass('button__isClicked');
        $(this).find('.article').toggleClass('article__isVisible');
    })

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})
