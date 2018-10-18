$(document).ready(function() {
  $("#formInfo").submit(function(event) {
    var a = parseInt($("input#numberOneInput").val());
    var b = parseInt($("input#numberTwoInput").val());
    var c = parseInt($("input#numberThreeInput").val());

    if(a === b && b === c && a === c) {
      $("#equilateral").show();
    } else if (a === b || a === c || b === c) {
      $("#isosceles").show();
    } else if (!a || !b || !c) {
      $("#notriangle").show();
    } else {
      $("#scalene").show();

    }
  console.log(a)
  console.log(b)
  console.log(c)
  event.preventDefault();
  })
});
