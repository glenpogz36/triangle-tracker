$(document).ready(function() {
  $("#formInfo").submit(function(event) {
    var a = parseInt($("input#numberOneInput").val());
    var b = parseInt($("input#numberTwoInput").val());
    var c = parseInt($("input#numberThreeInput").val());

    if(a === b && b === c && a === c) {
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#notriangle").hide();
    } else if (a === b || a === c || b === c) {
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#scalene").hide();
      $("#notriangle").hide();
    } else if (!a || !b || !c) {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#notriangle").show();
    } else {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").show();
      $("#notriangle").hide();
    }
  console.log(a)
  console.log(b)
  console.log(c)
  event.preventDefault();
  })
});
