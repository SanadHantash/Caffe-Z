function gender(g) {

    while (gender !== "male" || gender !== "female") {
        gender = prompt("What is your gender?");
        let check = gender.toLowerCase();
        if (check === "male") {
            alert("Welcome Mr " + user_name);
            break;
        } else if (check === "female") {
            alert("Welcome Ms " + user_name);
            break;
        } else {
            alert("Invalid input. Please enter 'male' or 'female'.");
        }
    }
    return gender;
}

let user_name = prompt ("please enter your name");
let age = prompt("please enter your age");
let g = gender();


let drink = prompt ("hot drink or cold drink");
let order = prompt ("what is your order");

alert("your drink is getting preaperd");

var user = [];
user.push(user_name,age,gender,drink,order);
    for (let i = 0; i< user.length; i++) {
        console.log(user[i]);
    }


    let customer = document.getElementById("customer");

    let name = document.createElement("p");
    name.textContent = user_name;
    customer.appendChild(name);

    let ul = document.createElement("ul");
    

    let genders = document.createElement("li");
    genders.textContent = "Gender: " + g;
    ul.appendChild(genders);

    let ages = document.createElement("li");
    ages.textContent ="Age: " + age;
    ul.appendChild(ages);

    let drinkname = document.createElement("li");
    drinkname.textContent = "Drink: "+ order;
    ul.appendChild(drinkname);

    customer.appendChild(ul);

    document.body.appendChild(customer);