$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           width: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           width: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});
