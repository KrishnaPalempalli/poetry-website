$(document).ready(function() {
  alert("I hope you have enjoyed watching the video and reading my poems! Thank you for visiting my webpages!");

  $("#d1").draggable();
  $("#d6").draggable();
  $("#d1").click(function(){
    $("#d2").show();
    $("#i1").show();
    });
  $("#d2").click(function(){
    $("#i1").hide();
  });
  $("#d2").dblclick(function(){
    $(this).hide();
    $("#i2").show();
    $("#d4").show();
    });
  $("#d4").click(function(){
    $("#i2").hide();
  });
  $("#d4").dblclick(function(){
    $(this).hide();
    $("#i3").show();
    $("#d5").show();
    });
    $("#d5").click(function(){
      $("#i3").hide();
    });
    $("#d5").dblclick(function(){
      $(this).hide();
      $("#i4").show();
      $("#d7").show();
      });
      $("#d7").click(function(){
        $("#i4").hide();
      });
      $("#d7").dblclick(function(){
        $(this).hide();
        $("#i5").show();
        $("#d8").show();
        });
        $("#d8").click(function(){
          $("#i5").hide();
        });
        $("#d8").dblclick(function(){
          $(this).hide();
          $("#i6").show();
          $("#d9").show();
          });
          $("#d9").click(function(){
            $("#i6").hide();
          });
          $("#d9").dblclick(function(){
            $(this).hide();
            $("#i7").show();
            $("#d10").show();
          });
          $("#d10").click(function(){
            $("#i7").hide();
          });
          $("#d10").dblclick(function(){
            $(this).hide();
            $("#i8").show();
            $("#d11").show();
            });
            $("#d11").click(function(){
              $("#i8").hide();
            });
            $("#d11").dblclick(function(){
              $(this).hide();
              $("#f1").show();
              $("#d3").show();
              });
              $("#d3").click(function(){
                $("#f1").hide();
              });
              $("#d3").dblclick(function(){
                $(this).hide();
                $("#d21").show();
                });
                $("#d1").hover(function(){
                         $("#s6").css("font-size", "28px");
                          });
                          $("#s1").hover(function(){
                                    $("#d1").append("!");
                                   });


  });
