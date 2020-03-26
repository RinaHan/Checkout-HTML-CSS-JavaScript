var inum = 0;
var item_state = [
  {
    title:"New Cell Phone",
    num:0
  },
  {
    title:"Toilet Paper",
    num:0
  },
  {
    title:"Grocer Package",
    num:0
  }
];


// var answercheck = [
//   {title: "a",
//   name:"3"},
//   {title: "e",
//   name:"1"}
// ];
function itemboxon(){
  document.querySelector(".item1").innerHTML = item_state[0].title;
  document.querySelector(".item2").innerHTML = item_state[1].title;
  document.querySelector(".item3").innerHTML = item_state[2].title;
  document.querySelector("#circ1").innerHTML = item_state[0].num;
  document.querySelector("#circ2").innerHTML = item_state[0].num;
  document.querySelector("#circ3").innerHTML = item_state[0].num;
}




function ItemUpdate(){
  //update the item UI with the item_state info
}

function ItemStatusAdd(item_index){
  //add 1 to the num of item_state, and update the UI
}

function ItemStatusRemove(item_index){
  //subtract 1 to the num of item_state, and update the UI
}