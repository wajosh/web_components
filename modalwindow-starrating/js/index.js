$(document).ready(function(){
    fnScoreRating();
})

 function fnScoreRating(){
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $(".popup-rating").show();
  $(".close").click(function() {
    $(".popup-rating").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });

  $(".x").click(function() {
    $(".popup-rating").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });

  //  setTimeout(function() {
  //  $(".popup-rating").hide();
  //   overlay.appendTo(document.body).remove();
  //   return false;
  // }, 5000);
 }

// Counter Number function
// Animate the element's value from x to y:
  $({ValueOne: 0}).animate({ValueOne: 1320}, {
      duration: 3000,
      easing:'swing', // can be anything
      step: function() { // called on every step
      // Update the element's text with rounded-up value:
      $('.points-count').text(pointsCountCommaSeparateNumber(Math.round(this.ValueOne)));
      }
  });

 function pointsCountCommaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
  }