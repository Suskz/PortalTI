$(document).ready(function () {

    // Filtro campus

    $('.filter-btn').on('click', function () {

        let type = $(this).attr('id');
        let boxes = $('.learn-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'north-btn') {
            eachBoxes('north', boxes);
        } else if (type == 'northeast-btn') {
            eachBoxes('northeast', boxes);
        } else if (type == 'east-btn') {
            eachBoxes('east', boxes);
        } else if (type == 'southeast-btn') {
            eachBoxes('southeast', boxes);
        } else if (type == 'south-btn') {
            eachBoxes('south', boxes);
        } else if (type == 'southwest-btn') {
            eachBoxes('southwest', boxes);
        } else if (type == 'west-btn') {
            eachBoxes('west', boxes);
        } else if (type == 'northwest-btn') {
            eachBoxes('northwest', boxes);
        } else if (type == 'westcenter-btn') {
            eachBoxes('westcenter', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {

        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

});