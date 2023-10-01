let user_name = prompt ("please enter your name");
function gender() {

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
}
// let gender;


// while (gender != "male" || gender != "female") {
//     gender = prompt("what is your gender");
//     let check = gender.toLowerCase();
//     if (check == "male") {
//         alert("Welcome Mr " + user_name);
//         break;
//     } else if (check == "female") {
//         alert("Welcome Ms " + user_name);
//         break;
//     } 
// }

    gender();


let drink = prompt ("hot drink or cold drink");
let order = prompt ("what is your order");

alert("your drink is getting preaperd");

var user = [];
user.push(user_name,gender,drink,order);
    for (let i = 0; i< user.length; i++) {
        console.log(user[i]);
    }