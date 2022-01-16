$(document).ready(function() {
    $('header__burger').click(function(event) {
        $('header__burger,.header__menu-container').toggleClass('active');
    });
});


var headerMenu = $('.header__menu-container'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        headerMenu.addClass('out');
    } else {
        headerMenu.removeClass('out');
    }
    scrollPrev = scrolled;
});



// // копия. Переделать
// var opacity1 = { r: 0, g: 0, b: 0, a: 0.2 } //Из какого цвета
//     // 51, 51, 51, 0.801
// var opacity2 = { r: 51, g: 51, b: 51, a: 1 } //В какой цвет

// window.onload = function() {
//     window.dispatchEvent(new Event("scroll"));
// }
// window.addEventListener("scroll", function() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop; //текущая позиция скролла
//     var scrollHeight = Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//     ) - innerHeight; //Получаем высоту видимой части окна
//     var percent = scrollTop / scrollHeight;
//     var opacity = { r: 0, g: 0, b: 0, a: 0 };
//     var tmp = Math.abs(opacity1.r - opacity2.r) * percent;
//     opacity.r = Math.ceil(opacity.r > opacity2.r ? opacity1.r - tmp : opacity1.r + tmp);

//     tmp = Math.abs(opacity1.g - opacity2.g) * percent;
//     opacity.g = Math.ceil(opacity1.g > opacity2.g ? opacity1.g - tmp : opacity1.g + tmp);

//     tmp = Math.abs(opacity1.b - opacity2.b) * percent;
//     opacity.b = Math.ceil(opacity1.b > opacity2.b ? opacity1.b - tmp : opacity1.b + tmp);

//     tmp = Math.abs(opacity2.a - opacity1.a) * percent;
//     opacity.a = Math.ceil(opacity2.a > opacity1.a ? opacity2.a - tmp : opacity2.a + tmp);

//     document.getElementById("menu").style.background = "rgba(" + opacity.r + "," + opacity.g + "," + opacity.b + "," + opacity.a + ")";
// });



// // оригинал. Работает
// var bgColor1 = { r: 73, g: 113, b: 255 } //Из какого цвета
// var bgColor2 = { r: 10, g: 150, b: 142 } //В какой цвет

// window.onload = function() {
//     window.dispatchEvent(new Event("scroll"));
// }
// window.addEventListener("scroll", function() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop; //текущая позиция скролла
//     var scrollHeight = Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//     ) - innerHeight; //Получаем высоту видимой части окна
//     var percent = scrollTop / scrollHeight;
//     var color = { r: 0, g: 0, b: 0 };
//     var tmp = Math.abs(bgColor1.r - bgColor2.r) * percent;
//     color.r = Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp : bgColor1.r + tmp);

//     tmp = Math.abs(bgColor1.g - bgColor2.g) * percent;
//     color.g = Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp : bgColor1.g + tmp);

//     tmp = Math.abs(bgColor1.b - bgColor2.b) * percent;
//     color.b = Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp : bgColor1.b + tmp);

//     document.getElementById("menu").style.background = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
// });




// const menu = document.getElementById("menu");

// document.addEventListener("scroll", () => {

//     // use document.documentElement for chrome, firefox, ie or opera
//     // and document.body for safari since that's where overflow is set in those browsers
//     if (document.documentElement.scrollTop > 0)
//         menu.classList.add("menu--alt");
//     else
//         menu.classList.remove("menu--alt");

// });