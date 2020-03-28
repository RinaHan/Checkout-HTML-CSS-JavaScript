var form_data = {
  address: false,
  phone: false,
  country: false
}





function FormAddressCheck() {
  //check if the address is bigger than 5, if not then give them an error!
  //otherwise store form_data's address
  var addressinput = document.querySelector("#address").value;
  if (addressinput.length > 5) {
    document.querySelector("#error").innerText = "Adress ok";
    form_data.address=addressinput
  } else {
    document.querySelector("#error").innerText = "Address is too short";
  }
}

function FormPhoneCheck() {
  //check if the phone is a number. check if the phone is 10 digits long, if not give them an error!
  //otherwise store form_data's phone
  var input = document.querySelector("#phonenum").value;
  input === Number;
  console.log(input)
  if (input.length === 10) {
    document.querySelector("#error").innerText = "Phone ok";
    form_data.phone=input
  } else {
    document.querySelector("#error").innerText = "Invalid Phone Number";
  }
}

var country_state ="canada" ;
var america = "USA";

function FormCountryCheck() {
  //check if the country is canada or usa, if not give them an error!
  //otherwise store form_data's country
  var input = document.querySelector("#country").value;
  
  if (input === country_state || input === america) {
    document.querySelector("#error").innerText = "Country ok";
    form_data.country=input
    
  } else {
    document.querySelector("#error").innerText = "Your Country isn't supported";
  }
}

function FinalCancel() {
  document.querySelector(".confirm").style.display = "none";
}



function FormSubmit(){
  //check if form_data has information inside, if all 3 of address, phone, and country have stored values, then show the confirm message.
  //otherwise give them an error!
  document.querySelector(".confirm").style.display = "flex";
  document.querySelector("#confirm_text").innerHTML= "Is this your shipping information?";
  document.querySelector("#confirm_text").innerHTML+= "<h1>" + form_data.address+"</h1>";
  document.querySelector("#confirm_text").innerHTML+= "<h1>" + form_data.phone+"</h1>";
  document.querySelector("#confirm_text").innerHTML+= "<h1>" + form_data.country+"</h1>";
  





  
}





// function FormAddressCheck(){
//   //check if the address is bigger than 5, if not then give them an error!
//   //otherwise store form_data's address
// }

// function FormPhoneCheck(){
//   //check if the phone is a number. check if the phone is 10 digits long, if not give them an error!
//   //otherwise store form_data's phone
// }

// function FormCountryCheck(){
//   //check if the country is canada or usa, if not give them an error!
//   //otherwise store form_data's country
// }

// function FormSubmit(){
//   //check if form_data has information inside, if all 3 of address, phone, and country have stored values, then show the confirm message.
//   //otherwise give them an error!
// }

// function ConfirmCancel(){
//   //hide the confirm message
// }