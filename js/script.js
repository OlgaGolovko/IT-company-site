$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('a').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });


    let header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
        if (scrolled >= 100 && scrolled > scrollPrev) {
            header.addClass('out');
            header.addClass('bg');
        } else if (scrolled < 100) {
            header.removeClass('bg');
        } else {
            header.removeClass('out');

        }
        scrollPrev = scrolled;
    })

});

let map;

let markersArray = [
    ["IT company", { lat: 49.584440483756275, lng: 34.559056355869835 }]
];

function initMap() {
    const myLatLng = { lat: 49.58968449458217, lng: 34.55106122649574 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 10,

    });
    for (let i = 0; i < markersArray.length; i++) {

        new google.maps.Marker({
            position: markersArray[i][1],
            map,
            title: markersArray[i][0],
        });
    }

}
marker.setMap(map);