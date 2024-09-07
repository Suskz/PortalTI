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

//Botão de ir ao topo

document.addEventListener('DOMContentLoaded', (event) => {
    const goToTopBtn = document.getElementById('goToTopBtn');
    const hideButtonAfter = 470;

    function toggleButtonVisibility() {
        if (window.scrollY <= hideButtonAfter) {
            goToTopBtn.style.display = 'none';
        } else {
            goToTopBtn.style.display = 'block';
        }
    }

    goToTopBtn.addEventListener('click', function (event) {
        event.preventDefault();

        let start = null;
        const duration = 400;
        const startPosition = window.scrollY;
        const distance = -startPosition;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);

            window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        window.requestAnimationFrame(step);
    });

    window.addEventListener('scroll', toggleButtonVisibility);

    toggleButtonVisibility();
});