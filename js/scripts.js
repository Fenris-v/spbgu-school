$(document).ready(() => {
    /**
     * ACCORDION
     */
    $('.flexAcc_left__item__title').on('click', (e) => {
        let parent = $(e.target).parents('.flexAcc_left__item');

        if (parent.hasClass('active')) {
            parent.find('.flexAcc_left__item__content').stop(true, true).slideUp();
            parent.removeClass('active');
        } else {
            $('.flexAcc_left__item__content').stop(true, true).slideUp();
            $('.flexAcc_left__item').removeClass('active');
            parent.addClass('active');
            parent.find('.flexAcc_left__item__content').stop(true, true).slideDown();
        }
    });

    /**
     * GALLERY
     */
    $('.imgBottom a').on('click', (e) => {
        e.preventDefault();
        console.log(123);

        let link = $(e.target).attr('href');
        if (e.target.nodeName !== 'A') {
            link = $(e.target).parent('a')[0].href;
        }

        $('.bigImg a').attr('href', link);
        $('.bigImg img').attr('src', link);
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });
});
