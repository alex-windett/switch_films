
$(document).ready(function() {
  // CONSTANTS
  const getVideos = 'https://api.vimeo.com/me/videos?access_token=95f772dfe9154c5946fd77421662d46c';
  const getEmbeddableVideos = getVideos + '&filter=embeddable&filter_embeddable=true';
  const tagToFilterBy = 'marathon';

  $('.section').click(function() {
    // $('body').toggleClass('isZoomed')
    $(this).find('.button').toggleClass('button__isClicked');
    $(this).find('.article').toggleClass('article__isVisible');
  })

  // SET UP TAGS
  $('.tab-link').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tab-link').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  // GET VIMEO VIDEOS
  const filterByTagName = function(obj) {
    obj.name == tagToFilterBy ? true : false
  }

  const appendVideosToGrid = function(data) {

    data.forEach( (d, i) => {
      if ( data[0].tags.filter(filterByTagName) ) {
        const video = data[0];
        const embedHTML =
        `<div class="image__wrapper column">
          <a href="#1" data-modal-id="video-${i}" class="modal__trigger">
            <img src="${video.pictures.sizes[5].link}"/>
            <p class="video-title">${video.name}</p>
          </a>
        </div>
        <section class="modal" id="video-${i}">
          <div class="modal__wrapper">
            <div class="modal__content">
              <div class="iframe">${video.embed.html}</div>
            </div>
          </div>
        </section>`;

        if ( i <= 4) {
          $('.video-row').append(embedHTML);
        }
      }
    });
  }

  $.get(getEmbeddableVideos)
    .done(function(data) {
      appendVideosToGrid(data.data);
      $('.modal__trigger').on( 'click', function(ev) {
        ev.preventDefault();
        $('.overlay').addClass('overlay__active');
        const modal = $(this).attr('data-modal-id');
        $(`#${modal}`).addClass('modal__active');
      })

      $('.modal:not(.modal__content)').on('click', function() {
        $('.modal').removeClass('modal__active');
      })
    })
    .fail(function(data) {
      console.log(data, ' fail')
    })
})
