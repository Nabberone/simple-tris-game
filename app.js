var choice = $(".slot").text(choice);
var click = 0;

$(".container").hide();

$(".btn-x").click(function () {
  $(".start").hide();
  $(".container").show();
  click++;
});

$(".btn-o").click(function () {
  $(".start").hide();
  $(".container").show();
});

$(".1").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".1").text(choice);
  winH1()
  winV1()
  winO1()
});
$(".2").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".2").text(choice);
  winH1()
  winV2()
});
$(".3").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".3").text(choice);
  winH1()
  winV3()
  winO2()
});
$(".4").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".4").text(choice);
  winH2()
  winV1()
});
$(".5").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".5").text(choice);
  winH2()
  winV2()
  winO1()
  winO2()
});
$(".6").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".6").text(choice);
  winH2()
  winV3()
});
$(".7").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".7").text(choice);
  winH3()
  winV1()
  winO2()
});
$(".8").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".8").text(choice);
  winH3()
  winV2()
});
$(".9").click(function () {
  click++;
  click % 2 == 0 ? (choice = "X") : (choice = "O");
  $(".9").text(choice);
  winH3()
  winV3()
  winO1()
});

$(".ng").click(function () {
  location.reload()
});


function winH1(){
  if($(".1").text() == "X" && $(".2").text() == "X" && $(".3").text() == "X"){
    $(".h1").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".1").text() == "O" && $(".2").text() == "O" && $(".3").text() == "O"){
    $(".h1").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")

  }
}
function winH2(){
  if($(".4").text() == "X" && $(".5").text() == "X" && $(".6").text() == "X"){
    $(".h2").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".4").text() == "O" && $(".5").text() == "O" && $(".6").text() == "O"){
    $(".h2").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}
function winH3(){
  if($(".7").text() == "X" && $(".8").text() == "X" && $(".9").text() == "X"){
    $(".h3").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".7").text() == "O" && $(".8").text() == "O" && $(".9").text() == "O"){
    $(".h3").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}



function winV1(){
  if($(".1").text() == "X" && $(".4").text() == "X" && $(".7").text() == "X"){
    $(".v1").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".1").text() == "O" && $(".4").text() == "O" && $(".7").text() == "O"){
    $(".v1").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}
function winV2(){
  if($(".2").text() == "X" && $(".5").text() == "X" && $(".8").text() == "X"){
    $(".v2").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".2").text() == "O" && $(".5").text() == "O" && $(".8").text() == "O"){
    $(".v2").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}
function winV3(){
  if($(".3").text() == "X" && $(".6").text() == "X" && $(".9").text() == "X"){
    $(".v3").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".3").text() == "O" && $(".6").text() == "O" && $(".9").text() == "O"){
    $(".v3").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}


function winO1(){
  if($(".1").text() == "X" && $(".5").text() == "X" && $(".9").text() == "X"){
    $(".o1").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".1").text() == "O" && $(".5").text() == "O" && $(".9").text() == "O"){
    $(".o1").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}
function winO2(){
  if($(".3").text() == "X" && $(".5").text() == "X" && $(".7").text() == "X"){
    $(".o2").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("X Vince")
  } else if($(".3").text() == "O" && $(".5").text() == "O" && $(".7").text() == "O"){
    $(".o2").css("background-color", "rgba(144, 238, 144, 0.5)")
    alert("O Vince")
  }
}








