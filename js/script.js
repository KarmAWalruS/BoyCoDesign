 $(window).on('load resize', function(){
    if ($(window).width()<=1199) {
        $('.break').remove();
        $('<div class="break"></div>').insertAfter('.Kompas');
        $('<div class="break"></div>').insertAfter('.Corona');
        $('<div class="break"></div>').insertAfter('.Substance');
    }
}) 

$(window).on('load resize', function(){
    if ($(window).width()<=1199) {
        $("#my_img").attr("src","/img/self1199px.png");
    }
    else {
        $("#my_img").attr("src","/img/self.png");
    }
}) 

$(window).on('load resize', function(){
    if ($(window).width()<=768) {
        $('.break').remove();
        $('<div class="break"></div>').insertAfter('.Autocad');
        $('<div class="break"></div>').insertAfter('.Kompas');
        $('<div class="break"></div>').insertAfter('.Marvelous');
        $('<div class="break"></div>').insertAfter('.Corona');
        $('<div class="break"></div>').insertAfter('.Photoshop');
        $('<div class="break"></div>').insertAfter('.Substance');
        $('<div class="break"></div>').insertAfter('.3ds');
    }
}) 

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list'),
    hamburger = document.querySelector('.hamburger');
    logo = document.querySelector('.first-section__logo');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('nav-menu_active');
        logo.classList.toggle('logo-unactive');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})



