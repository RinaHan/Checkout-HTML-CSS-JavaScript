var item_state = [
  {
    item: "Item 1",
    title:"New Cell Phone",
    num:0
  },
  {
    item: "Item 2",
    title:"Toilet Paper",
    num:0
  },
  {
    item: "Item 3",
    title:"Grocer Package",
    num:0
  }
];

function ItemUpdate(){
  document.querySelector(".item1").innerHTML = item_state[0].title;
  document.querySelector(".item2").innerHTML = item_state[1].title;
  document.querySelector(".item3").innerHTML = item_state[2].title;
  document.querySelector("#circ1").innerHTML = item_state[0].num;
  document.querySelector("#circ2").innerHTML = item_state[1].num;
  document.querySelector("#circ3").innerHTML = item_state[2].num;
}



// -------
// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
// }
// -------



function Item1StatusAdd(){
  //add 1 to the num of item_state, and update the UI
  item_state[0].num++
  document.querySelector("#item_status").innerHTML = "You've added "+ item_state[0].title + ". You have " + item_state[0].num + " " + item_state[0].title +"!";
}
function Item2StatusAdd(){
  //add 1 to the num of item_state, and update the UI
  //  document.querySelector("#circ2").innerHTML = item_state[0].num;
  item_state[1].num++
  document.querySelector("#item_status").innerHTML = "You've added "+ item_state[1].title + ". You have " + item_state[1].num + " " + item_state[1].title +"!";
}
function Item3StatusAdd(){
  //add 1 to the num of item_state, and update the UI
  //  document.querySelector("#circ3").innerHTML = item_state[0].num;
  item_state[2].num++
  document.querySelector("#item_status").innerHTML = "You've added "+ item_state[2].title + ". You have " + item_state[2].num + " " + item_state[2].title +"!";
}

function Item1StatusRemove(){
  //subtract 1 to the num of item_state, and update the UI
  item_state[0].num--
  document.querySelector("#item_status").innerHTML = "You've remove "+ item_state[0].title + ". You have " + item_state[0].num + " " + item_state[0].title +"!";
}
function Item2StatusRemove(){
  //subtract 1 to the num of item_state, and update the UI
  item_state[1].num--
  document.querySelector("#item_status").innerHTML = "You've remove "+ item_state[1].title + ". You have " + item_state[1].num + " " + item_state[1].title +"!";
}
function Item3StatusRemove(){
    //subtract 1 to the num of item_state, and update the UI
    item_state[2].num--
    document.querySelector("#item_status").innerHTML = "You've remove "+ item_state[2].title + ". You have " + item_state[2].num + " " + item_state[2].title +"!";
  }