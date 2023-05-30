$(document).ready(function(){
    $('.siga-nos').hide();
    $('.menu').hide();
    
    $('.nav-menu').click(function(){
        $('.menu').toggle('slow')
        $('.siga-nos').hide();
    });

    $('.nav-siga-nos').click(function(){
        $('.siga-nos').toggle('slow');
        $('.menu').hide();
    });
// arrow function / mesma função de 'function'
    $('.fechar').click((e)=>{
        $(e.target).fadeOut('slow');
        $(".propaganda").fadeOut('slow');
    });
});
    var img1 = $('.img1')
    var img2 = $('.img2')
    var img3 = $('.img3')
    var img4 = $('.img4')

    img1.hide();
    img2.hide();
    img3.hide();
    img4.hide();

    $('next').on('click', ()=>{
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();


    })
