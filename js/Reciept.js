
document.cookie = "cookies=none";
document.cookie = "sameSite=strict";

var shown = 0;

var height = 0;

$(document).ready(function () {
  var numItems = $(".product").length;
  $("p").css("display", "none");
  height = numItems * 20 + 50;
  $("#first").css("height", height / 2 + "px");
  $("#second").css("height", height / 2 + "px");
  $("#foldl").animate(
    {
      borderLeftWidth: "30px",
      borderBottomWidth: "0px",
      borderTopWidth: "0px"
    },
    1
  );

  $("#foldr").animate(
    {
      borderRightWidth: "30px",
      borderBottomWidth: "0px",
      borderTopWidth: "0px"
    },
    1
  );

  $("#first").animate(
    {
      backgroundColor: "#e6e6e6",
      height: "0px"
    },
    1
  );

  $("#second").animate(
    {
      backgroundColor: "#e6e6e6",
      height: "0px",
      borderTopColor: "#BBBBBB"
    },
    1
  );
  $("#second").css("borderBottomColor", "#ffffff");
});

$("#readmore").click(function () {
  if (shown == 1) {
    $("p").css("display", "none");
    $("#foldl").animate(
      {
        borderLeftWidth: "30px",
        borderBottomWidth: "0px",
        borderTopWidth: "0px"
      },
      1000
    );

    $("#foldr").animate(
      {
        borderRightWidth: "30px",
        borderBottomWidth: "0px",
        borderTopWidth: "0px"
      },
      1000
    );

    $("#first").animate(
      {
        backgroundColor: "#e6e6e6",
        height: "0px"
      },
      1000
    );

    $("#second").animate(
      {
        backgroundColor: "#e6e6e6",
        height: "0px",
        borderTopColor: "#BBBBBB",
        borderBottomColor: "#ffffff"
      },
      1000,
      function () {
        $("#second").animate({ borderTopWidth: "0px" }, 1);
      }
    );

    shown = 0;
  } else if (shown == 0) {
    $("#second").animate({ borderTopWidth: "1px" }, 1);
    $("#foldl").animate(
      {
        borderLeftWidth: "0px",
        borderBottomWidth: height / 2 + "px",
        borderTopWidth: height / 2 + "px"
      },
      1000
    );

    $("#first").animate(
      {
        backgroundColor: "#ffffff",
        height: height / 2 + "px"
      },
      1000
    );

    $("#second").animate(
      {
        backgroundColor: "#ffffff",
        height: height / 2 + "px",
        borderTopColor: "#FFFFFF",
        borderBottomColor: "#000000"
      },
      1000
    );

    $("#foldr").animate(
      {
        borderRightWidth: "0px",
        borderBottomWidth: height / 2 + "px",
        borderTopWidth: height / 2 + "px"
      },
      1000,
      function () {
        $("p").fadeIn(500);
      }
    );

    shown = 1;
  }
});
