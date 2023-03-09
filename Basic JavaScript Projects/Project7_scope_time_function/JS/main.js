x = 10

function localVar() {                                           //function assigning a local variable and using it with a global variable
    var y = 20;
    document.getElementById("goodFunc").innerHTML = (x + y);
}

function get_Date() {                                                               //function using the Date.getHours method.
    if (new Date().getHours() >= 12) {
        document.getElementById("dateMethod").innerHTML = "Good afternoon, User.";
    }
}

function password_Function() {                                          //function using if conditional statment
    var Password;
    Password = document.getElementById("Password").value;
    if (Password == "CoolPassword123") {
        document.getElementById("Accessed").innerHTML = "Welcome, User.";
    }
}

function dark_Brotherhood_Door() {                              //function using if and else conditional statments
    var passPhrase = document.getElementById("paraInput").value;
    if (passPhrase == "2") {
        doorResponse = "\"Welcome home.\"";
    }
    else {
        doorResponse = "...";
    }
    document.getElementById("Para").innerHTML = doorResponse;
}

function Time_function() {                          //time function using if, else if, and else
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


//Onclick version of using local variable from other function, error appears in console.
//function brokenFunc() {
//    document.getElementById("badFunc").innerHTML = (x + y);
//}

//Automatic version of using local variable from other function, doesn't require click the related <p> element to cause error in console.
//function brokenFunc() {
//    document.write (x + y);
//}
//brokenFunc(); //above function activated.

