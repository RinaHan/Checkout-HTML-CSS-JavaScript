function StartShopping(){
  //hide the button and show the items component
  document.querySelector(".items_comp").style.display = "flex";
  document.querySelector(".checkout_comp").style.display = "flex";
  document.querySelector("#app button").style.display = "none";
}

function ShowFormComp(){
  //show the form component added to mine
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
  var totalcost = document.getElementById("total")
    document.querySelector("#app").innerHTML =`
    <h1>Thank you for shopping!</h1>
    <p>Your purchase of</p>
    <div id = "items"></div>
    <div id = "cost"></div> 
    `;
    document.querySelector("#items").innerHTML =`
    <h2>${itemoneamount} ${itemonetitle} </h2>
    <h2>${itemtwoamount} ${itemtwotitle} </h2>
    <h2>${itemthreeamount} ${itemthreetitle} </h2>
    `;
    document.querySelector("#cost").innerHTML =`
    <p>costing ${totalcost} will arrive shortly<p>
    `;
}

