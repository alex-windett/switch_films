
$(document).ready(function() {
    $('.section').click(function() {
        $('body').toggleClass('isZoomed')
        $(this).find('.button').toggleClass('button__isClicked');
        $(this).find('.article').toggleClass('article__isVisible');
    })
})
