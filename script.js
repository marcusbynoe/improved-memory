function hello() {  
    let usersName = prompt("What is your name?");
   while (usersName == "") {
   alert("I need your name...");
   usersName = prompt("Have to type your name!");
   console.log("The user's name is:" + usersName);
   document.write("Welcome to burger joint, " + usersName);} 
}



function likeBurgers() {
    let response = prompt("Do you like burgers?");
     if (response == "yes") {
    alert("Welcome to the promise land of burgers!");
    document.write("Welcome to the promise land of burgers!");
    } else if (response == "no") {
        alert("Hopefully I can change your mind, welcome to burger joint!");
        document.write("Hopefully I can change your mind, welcome to burger joint!");
    } else {
        alert("Not sure what you said...");
    }
} 

function howMany(){
    let rating = prompt("Between 1 - 5, how many burgers do you want?")
    for (let i = 0; i < rating; i++){
        document.write("<img class='rating-pic' src='Yum.jpg' alt='yummy burger'/>");
    }
}