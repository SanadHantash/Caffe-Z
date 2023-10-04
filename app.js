// function gender(g) {

//     while (gender !== "male" || gender !== "female") {
//         gender = prompt("What is your gender?");
//         let check = gender.toLowerCase();
//         if (check === "male") {
//             alert("Welcome Mr " + user_name);
//             break;
//         } else if (check === "female") {
//             alert("Welcome Ms " + user_name);
//             break;
//         } else {
//             alert("Invalid input. Please enter 'male' or 'female'.");
//         }
//     }
//     return gender;
// }

// let user_name = prompt ("please enter your name");
// let age = prompt("please enter your age");
// let g = gender();


// let drink = prompt ("hot drink or cold drink");
// let order = prompt ("what is your order");

// alert("your drink is getting preaperd");

// var user = [];
// user.push(user_name,age,gender,drink,order);
//     for (let i = 0; i< user.length; i++) {
//         console.log(user[i]);
//     }
// let customer = document.getElementById("customer");
// let ul = document.createElement("ul");
// let name = document.createElement("p");
// let ages = document.createElement("li");
// let drinktype = document.createElement("li");
// let drinkname = document.createElement("li");


let button = document.getElementById("submit");
let username = document.createElement("h1");
let age = document.createElement("h3");
let drinktype = document.createElement("h3");
let order = document.createElement("h3");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    username.innerHTML = document.querySelector("#username").value;
    age.innerHTML = document.querySelector("#age").value;
    order.innerHTML = document.querySelector("#order").value;
    
    if (document.querySelector("#Hot").checked == true) {
        drinktype.innerHTML =  "Hot";
    } else {
        drinktype.innerHTML = "Cold";
    }
        

});

    
customer.appendChild(username);
customer.appendChild(age);
customer.appendChild(drinktype);
customer.appendChild(order);