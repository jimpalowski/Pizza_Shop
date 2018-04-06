//business logic
var Pizza = function(size, topping, sauce){
  this.size = size;
  this.toppings = topping;
  this.sauce = sauce;
}

// user interface logic
$(document).ready(function() {
$("#pizzaForm").submit(function(event){
  event.preventDefault();
  var userSize = $("input:radio[name=pizzaSize]:checked").val();
  var userToppings = $("input[type=checkbox][name=pizzaToppings]:checked").val();
  var userSauce  =$("input:radio[name=pizzaSauce]:checked").val();
  var newPizza = new Pizza(userSize, userToppings, userSauce);




// Calculate prices
  var pizzaPrice = 8;
    if (newPizza.size === ("Medium")) {
      pizzaPrice +=2;
    } else if (newPizza.size === ("Large")) {
        pizzaPrice += 4;
      }else if (newPizza.size === ("Small")) {
        pizzaPrice += 4;
      } 
      else {
        pizzaPrice;
      }
      // had some issues selecting multiple toppings
    if (newPizza.toppings === ("Cheese") || newPizza.toppings === ("Sausage") || newPizza.toppings === ("Pepperoni")) {
      pizzaPrice += 2;
    }  else {
      pizzaPrice;
    }
    if (newPizza.sauce === ("Tomato")) {
      pizzaPrice +=2;
    } else if (newPizza.sauce === ("Marinara")) {
        pizzaPrice += 4;
      }else if (newPizza.sauce === ("Alfredo")) {
        pizzaPrice += 4;
      } 
      else {
        pizzaPrice;
      }
  
$(".Results").show();
$(".pizzaCost").text(pizzaPrice)
});
});
