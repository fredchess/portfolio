$('document').ready(function () {
    $('.nav-item').click(function (e) {
        $('.nav-item.active').removeClass('active')
        $(this).addClass('active')
    })

    $('#collapsebtn').click(e => {
        let leftbar = $('#left-bar')
        let main = $('.main')

        main.addClass('blur')
        leftbar.addClass('left-0')
        leftbar.removeClass('left-[-1000px]')

        $(document).mousedown(function (e) {
            if ((e.target.id !== 'left-bar' && $(e.target).closest('#left-bar').length === 0) || e.target.id === 'close') {
                main.removeClass('blur')
                leftbar.removeClass('left-0')
                leftbar.addClass('left-[-1000px]')
            }
        });
    })
})