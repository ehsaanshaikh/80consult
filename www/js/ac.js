;(function($) {

$(document).ready(function() {
  console.log("Sss");
  $(".clickroute").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
 });

});




})(jQuery);
