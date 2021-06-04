function userTotal(color, assyria, swallow, knights) {
  return color + assyria + swallow + knights
}




$(document).ready(function()  {
  $("form#language-selector").submit(function(event){
    event.preventDefault();
    const name = $("#name").val();
    const quest = $("input:radio[name=quest]:checked").val();
    const color = parseInt($("#color").val());
    const assyria = parseInt($("#assyria").val());
    const swallow = parseInt($("#swallow").val());
    const knights = parseInt($("#knights").val());
    const total = userTotal(color, assyria, swallow, knights);
    $("#username").text(name);
    $("#username-fail").text(name);

    $(".btn-danger").click(function(){
      $("#language-selector").trigger("reset");
      $("#hidden").hide();
      $("#hidden-fail").hide()
    });
  

    console.log(name);
    console.log(quest)
    console.log(color);
    console.log(assyria);
    console.log(swallow);
    console.log(knights);
    console.log(total);

    if ((quest === "web-design")) {
      if (total <=25) {
        $("#language").text("Ruby");
        $("#hidden").show();
      } else if (total >26 && total <=50) {
        $("#language").text("Java");
        $("#hidden").show();
      } else if (total >51 && total <=75) {
        $("#language").text("C#");
        $("#hidden").show();
      }
    }

    if ((quest === "desktop")) {
      if (total <=25) {
        $("#language").text("C#");
        $("#hidden").show();
      } else if (total >26 && total <=50) {
        $("#language").text("Ruby");
        $("#hidden").show();
      } else if (total >51 && total <=75) {
        $("#language").text("Java");
        $("#hidden").show();
      }
    }
    
    if ((quest === "mobile")) {
      if (total <=25) {
        $("#language").text("Java");
        $("#hidden").show();
      } else if (total >26 && total <=50) {
        $("#language").text("C#");
        $("#hidden").show();
      } else if (total >51 && total <=75) {
        $("#language").text("Ruby");
        $("#hidden").show();
      }
    }

    if ((quest === "holy-grail")) {
      if (total >=0 && total <=75)  {
        $("#hidden-fail").show();
      }
    }
  });
});






