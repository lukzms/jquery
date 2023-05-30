$(document).ready(function(){
    var ex = $('.ex1');
    $('.evento1').click(function(){
        $('.evento1').css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
        ex.text('evento de clique usado')
    })
    $('.evento2').dblclick(function(){
        $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
        ex.text('evento de clique usado');
   })
   $('evento3').focusIn(function(){
    $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
        ex.text('evento de clique usado');
   })
   $('evento3').focusout(function(){
    $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
        ex.text('evento de clique usado');
   })
});
$('evento4').mouseover(function(){
    $('evento4').focusIn(function(){
        $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
            ex.text('evento de clique usado');
       })
}).mouseover(function(){
    $('evento4').focusIn(function(){
        $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
        ex.text('evento de clique usado');
 });
 $('.evento5').mausedown(function({
    $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
        ex.text('evento de clique usado');
 })).mouseup(function(){
    $(this).css({'backgraund': '#ccc', 'color': 'black' , 'border': 'solid black'});
    ex.text('evento de clique usado');
 })