var checkout_cart = 0;
var checkout_cost = 100;
function IncreaseCart(){
  //increase the number on the cart!
  checkout_cart++;
  var itemnumber = document.getElementsByClassName("itemcounter")[0]
  itemnumber.textContent=checkout_cart

}

function DecreaseCart(){
  //decrease the number on the cart!
}


function CheckoutChangeMsg(){
  //change the checkout message
  var messagediv = document.getElementById("checkout_msg")
  document.querySelector(".form_comp").style.display="flex"
  
  if (checkout_cart === 0)

  {
    messagediv.textContent="you have no items to checkout!" ;
  }

  else {
    messagediv.textContent="your total cost:$ " + "<div id = total>" + checkout_cart * checkout_cost + "</div>"
  }
}