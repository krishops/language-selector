// const beverage = $("#beverage").val();
// const flavor = $("input:radio[name=flavor]:checked").val();
// HTML: 1-5
// Java: 6-10
// C#: 11-15

//Business logic

function totalValue(number1, number2, number3, number4) {
  return number1 + number2 + number3 + number4
}


// User Interface Logic
$(document).ready(function()  {
  $("form#language-selector").submit(function(event){
    event.preventDefault();
    const name = $("input#name").val();
    const color = parseInt($("select#color").val());
    console.log(name);
    console.log(color);

    
  });
});




// if else statements here
// pick what quest directs to certain results