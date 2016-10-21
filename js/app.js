$(document).ready( function () {
    $('.section').click( function() {
        $(this).find('.button').toggleClass('button__isClicked')
    })
})
