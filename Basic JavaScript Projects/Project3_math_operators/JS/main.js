function addition_Function() {                                                                                          //Function for performing Addition
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
}

function subtraction_Func() {                                                                                           //Function for performing Subtraction
    var Subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {                                                                                             //Function for performing Multiplication
    var times_by = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 * 8 = " + times_by;
}

function division() {                                                                                                   ////Function for performing Division
    var divide_by = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + divide_by;
}

function multiple_Operators() {                                                                                         //Function for performing Multiple Operators 
    var simple_Math = (1 + 2) * 10 / 2 - 5;                                                                             //at once.
    document.getElementById("multi_Math").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_Math;
}

function modulus_Operator() {                                                                                           //Function utilizing the Modulus Operator
    var simple_Math = 25 % 6;
    document.getElementById("Modulus").innerHTML = "25 divided by 6 will get you a remainder of: " + simple_Math;
}

function negation_Operator() {                                                                                          //Function utilizing the Negation Unary Operator
    var x = -10;
    document.getElementById("Unary").innerHTML = -x;
}

function increment_Func() {                                                                                             //Function for performing increments
    var x = 8;
    x++;
    document.getElementById("Increment").innerHTML = x;
}

function decrement_Func() {                                                                                             //Function for performing decrements
    var x = 8;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}

window.alert(Math.random() * 100);                                                                                      //alert with random math selection; using Math.random() function
