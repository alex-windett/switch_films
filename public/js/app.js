
$(document).ready(function() {
    const getVideos = 'https://api.vimeo.com/me/videos?access_token=95f772dfe9154c5946fd77421662d46c';
    const getEmbeddableVideos = getVideos + '&filter=embeddable&filter_embeddable=true';

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
	});

    const appendVideosToGrid = function(data) {
        data.forEach( function(video, index) {
            const embedHTML = '<div class="image__wrapper column"><div class="iframe">' + video.embed.html + '</div></div>';

            if ( index === 0) {
              $('.primary-video').append(embedHTML);
            }

            if ( index >=1 && index <= 4) {
              $('.video-row').append(embedHTML);
            }
        } )
    }

    $.get(getEmbeddableVideos)
        .done(function(data) {
            // console.log(data, ' done')
            appendVideosToGrid(data.data);
        })
        .fail(function(data) {
            console.log(data, ' fail')
        })

})
