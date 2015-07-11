 //When the document is loaded...
$(document).ready(function()
{
    function adjustStyle(width) {
        width = parseInt(width);
        if (width < 655) {
          $("#size-stylesheet").attr("href", "narrow.css");
        } 
        else if (width < 801) {
          $("#size-stylesheet").attr("href", "narrow2.css");
        }
        else if (width < 1101) {
          $("#size-stylesheet").attr("href", "large2.css");
        }
        else {
          $("#size-stylesheet").attr("href", "large.css");
        }
    }

    $(function() {
      adjustStyle($(this).width());
      $(window).resize(function() {
        adjustStyle($(this).width());
      });
    });


    // Scroll the whole document
    $('.scroll').localScroll({
      target:'body'
     });
 
});
    