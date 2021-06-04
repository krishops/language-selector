// const beverage = $("#beverage").val();
// const flavor = $("input:radio[name=flavor]:checked").val();

// Holy Grail: Critical Error

//Business logic

function userTotal(color, assyria, swallow, knights) {
  return color + assyria + swallow + knights
}


// User Interface Logic
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
    
    
    // if else statements here
    // pick what quest directs to certain results
    // if radio button for holy grail selected - return error, don't get to cross bridge

    
    // Webdesign 0-25: Ruby 26-50: Java 51-75: C#
// Desktop 0-25: Java 26-50: C# 51-75: Ruby
// Mobile 0-25: C# 26-50: Ruby 51-75: Java
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
      
    
    
    
    console.log(name);
    console.log(quest)
    console.log(color);
    console.log(assyria);
    console.log(swallow);
    console.log(knights);
    console.log(total);
    

    
  });
});

// If they pick Holy Grail it's an immediate fail that should be easy enough.
// If They pi





