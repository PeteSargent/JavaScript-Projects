document.write(typeof "1500");  //document.write method with typeof operator.
document.write("<br>")          //added break so the above and below methods are on their own lines
document.write("100" + 30);     //expression combining a string and number value.

function myFuction() { // function that will return a NaN
    document.getElementById("test").innerHTML = 0 / 0;
}

function isNaNtrue() { //function utilizing the isNaN function returning a value of true.
    document.getElementById("test2").innerHTML = isNaN("This a string");
}

function isNaNfalse() { //function utilizing the isNaN function returning a value of false.
    document.getElementById("test3").innerHTML = isNaN(10);
}

function infinity() { //displaying a number labeled infinity.
    document.getElementById("Infinity").innerHTML = 3E310;
}
function negativeInfinity() { //displaying a number labeled negative infinity.
    document.getElementById("negativeInfinity").innerHTML = -3E310;
}

function trueFalseDisplay() { //function demonstrating boolean logic.
    var x = (10 > 2);
    var y = (2 < 1);
    document.getElementById("trueFalse").innerHTML = "10 > 2 = " + x + " and 2 < 1 = " + y;
}

console.log("I put a sneaky little math operation in your console."); //Demonstration of consol.log method
console.log("2 + 2 =");
console.log(2 + 2);
console.log(10 < 5);

function equalEqualCompare1() {                                             //Using == operator to return value of True.
    document.getElementById("doubleEqualTrue").innerHTML = 10 == 5 + 5;
}

function equalEqualCompare2() {                                             //Using == operator to return value of False.
    document.getElementById("doubleEqualFalse").innerHTML = 10 == 5;
}

function tripleEqualTrue() {                                                //Using === operator to return value of true (same type of data, same value).
    X = 10;
    Y = 10;
    document.getElementById("tripleEqualTrue").innerHTML = X === Y;
}

function tripleEqualFalse() {                                               //=== operator returning false (different type, different value).
    X = "Five";
    Y = 10;
    document.getElementById("tripleEqualFalse").innerHTML = X === Y;
}

function sameValDifType() {                                                 //=== operator returning false (different type, same value).
    X = 15;
    Y = "Fifteen";
    document.getElementById("sameValDifType").innerHTML = X === Y;
}

function sameTypeDifVal() {                                                 //=== operator returning false (same type, different value).
    X = "Fifteen";
    Y = "Fourteen";
    document.getElementById("sameTypeDifVal").innerHTML = X === Y;
}

function showAndTrue() {                                                    //&& AND bool operator returning true.
    document.getElementById("showAndTrue").innerHTML = 5 > 2 && 4 < 10;
}

function showAndFalse() {                                                   //&& AND bool operator returning false.
    document.getElementById("showAndFalse").innerHTML = 6 > 8 && 5 < 10;
}

function showOrTrue() {                                                     //|| OR bool operator returning true.
    document.getElementById("showOrTrue").innerHTML = 6 > 8 || 5 < 10;
}

function showOrFalse() {                                                    //|| OR bool operator returning false.
    document.getElementById("showOrFalse").innerHTML = 3 > 9 || 2 > 12;
}

function notTrue() {                                                        //Function for using ! operator to return bool val as true.
    document.getElementById("notTrue").innerHTML = !(5 > 10);
}

function notFalse() {                                                       //Function for using ! operator to return bool val as false.
    document.getElementById("notFalse").innerHTML = !(100 > 50);
}