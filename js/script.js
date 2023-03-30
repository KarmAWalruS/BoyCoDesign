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
}) 



