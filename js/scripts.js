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
});
