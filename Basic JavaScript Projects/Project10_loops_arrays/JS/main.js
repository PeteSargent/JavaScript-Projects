function Call_Loop(){
    var digit = "";
    var x = 10;
    while (x > -1) {
        digit += "<br>" + x;
        x--;
    }
    document.getElementById("Loop").innerHTML = digit;
}

function stringLength() {
    var text = "Click the button bellow to convert me into my string length value.";
    var length = text.length;

    document.getElementById("lengthProperty").innerHTML = length;
}

var Instruments = ["Scalpel", "Bonesaw", "Stethoscope", "Syringe", "Forceps"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var car_Picture = [];
    car_Picture[0] = "is off";
    car_Picture[1] = "is on";
    car_Picture[2] = "is moving";
    car_Picture[3] = "has crashed";
    document.getElementById("car").innerHTML = "In this picture the car " + car_Picture[3] + "."

}

function constant_function() {
    const vehicle = { Type: "Bicycle", Color: "Red", Size: "Medium", Build: "Custom" };
    vehicle.Color = "Blue";
    vehicle.Wheels = "Off-road wheels";
    document.getElementById("Constant").innerHTML = "My name is Jake and I ride a " + vehicle.Build + "-built " + vehicle.Type + ". It is colored " + vehicle.Color + ". " +
        "It is equipped with " + vehicle.Wheels + ".";
}
    
function let_Test(){
    var x = "sit down.";
    document.write(x);
    {
        let x = "stand up."
        document.write("<br>" + x)
    }
    document.write("<br>" + x + "<br>" + "you're going to want to refresh the page now.")
}

document.getElementById("returnFunc").innerHTML = returnName("Johnson");

function returnName(Name) {
    return "Hi, my name is " + Name + ".";
}

let cat = {
    breed: "an american shorthair",
    age: "5 years old",
    color: "white with black stripes",
    description: function () {
        return "This cat is " + this.breed + " that is " + this.age + " and its fur is " + this.color + ".";
    }
};

function catDesc() {
    document.getElementById("Cat").innerHTML = cat.description();
}

let text = "";
for (let a = 0; a < 20; a++){
    if(a === 7){ break; }
    text += "The number is currently " + a + "<br>";
}
document.getElementById("breakDemo").innerHTML = text;

var cont = "";
for (let c = 0; c < 20; c++){
    if (c === 3) { continue; }
    if (c === 5) { continue; }
    if (c === 10) { continue; }
    cont += "The number is now " + c + "<br>";
}
document.getElementById("continueDemo").innerHTML = cont;