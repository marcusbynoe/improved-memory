function hello() {  
    let usersName = prompt("What is your name?");
   if (usersName == "") {
   alert("You didn't type a name...");
   usersName = prompt("Please tell me your name.");
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