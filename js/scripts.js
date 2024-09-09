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

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let careerSection = $('#career-area');
    let skillsSection = $('#skills-area');
    let graduationSection = $('#graduation-area');
    let oportunitySection = $('#oportunity-area');
    let learnSection = $('#learn-area');

    let scrollTo = '';

    $(navBtn).click(function () {

        let btnId = $(this).attr('id');

        switch (btnId) {
            case "career-menu":
                scrollTo = careerSection;
                break;
            case "skills-menu":
                scrollTo = skillsSection;
                break;
            case "graduation-menu":
                scrollTo = graduationSection;
                break;
            case "oportunity-menu":
                scrollTo = oportunitySection;
                break;
            case "learn-menu":
                scrollTo = learnSection;
                break;
            default:
                scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 500);
    });

    $('.navbar-nav .nav-link').click(function() {
        $('#navbar-links').collapse('hide');
    });
});