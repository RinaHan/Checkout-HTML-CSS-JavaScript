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
  var messagediv = 
  document.getElementById("checkout_msg")
  document.querySelector(".form_comp").style.display="flex"
  
  if (checkout_cart === 0)

  {
    messagediv.textContent="you have no items to checkout!" ;
  }

  else {
    // messagediv.textContent="your total cost:$ " + "<div id = total>" + checkout_cart * checkout_cost + "</div>"
    messagediv.textContent="your total cost:$ " + checkout_cart * checkout_cost 
  }
}
function ShoppingEnd(){
  var item_one = document.getElementById("item1")
  var itemonetitle = item_one.children[0].textContent
  var itemoneamount = item_one.children[2].textContent
  var item_two = document.getElementById("item2")
  var itemtwotitle =item_two.children[0].textContent
  var itemtwoamount = item_two.children[2].textContent
  var item_three = document.getElementById("item3")
  var itemthreetitle = item_three.children[0].textContent
  var itemthreeamount = item_three.children[2].textContent
  // var totalcost = document.getElementById("total")
  var totalcost = checkout_cart * checkout_cost
    document.querySelector("#app").innerHTML =`
    <h1>Thank you for shopping!</h1>
    <p>Your purchase of</p>
    <div id = "items"></div>
    <div id = "cost1"></div> 
    `;
    document.querySelector("#items").innerHTML =`
    <h2>${itemoneamount} ${itemonetitle} </h2>
    <h2>${itemtwoamount} ${itemtwotitle} </h2>
    <h2>${itemthreeamount} ${itemthreetitle} </h2>
    `;
    document.querySelector("#cost1").innerHTML =`
    <p>costing $ ${totalcost} will arrive shortly<p>
    `;
}
