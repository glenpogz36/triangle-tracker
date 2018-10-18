$(document).ready(function() {
  $("#formInfo").submit(function(event) {
    var a = parseInt($("input#numberOneInput").val());
    var b = parseInt($("input#numberTwoInput").val());
    var c = parseInt($("input#numberThreeInput").val());

    if(a === b && b === c && a === c) {
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#notriangle").hide();
      $("#scalene").hide();
    } else if (a === b || a === c || b === c) {
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#notriangle").hide();
      $("#scalene").hide();
    } else if (!a || !b || !c) {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#notriangle").show();
      $("#scalene").hide();
    } else {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#notriangle").hide();
      $("#scalene").show();

    }
  console.log(a)
  console.log(b)
  console.log(c)
  a = undefined;
  b = undefined;
  c = undefined;
  event.preventDefault();
  })
});
