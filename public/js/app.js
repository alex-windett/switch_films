
$(document).ready(function() {
    const vimeoAPI = {
        getVideos: 'https://api.vimeo.com/me/videos?access_token=42315fec2bf964ec800311df5f221383'
    }

    // VIMEO API ENDPOINT = api.vimeo.com/me/videos?access_token=42315fec2bf964ec800311df5f221383

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
            console.log(video, 'index ' + index)
            const embedHTML = '<div class="image__wrapper column">' + video.embed.html + '</div>';
            $('.video-row').append(embedHTML);
        } )
    }

    $.get(vimeoAPI.getVideos)
        .done(function(data) {
            // console.log(data, ' done')
            appendVideosToGrid(data.data);
        })
        .fail(function(data) {
            console.log(data, ' fail')
        })

})
