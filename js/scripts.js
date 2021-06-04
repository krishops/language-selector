// const beverage = $("#beverage").val();
// const flavor = $("input:radio[name=flavor]:checked").val();
// HTML: 1-5
// Java: 6-10
// C#: 11-15

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
    console.log(name);
    console.log(quest)
    console.log(color);
    console.log(assyria);
    console.log(swallow);
    console.log(knights);
    console.log(total);
    

    
  });
});




// if else statements here
// pick what quest directs to certain results