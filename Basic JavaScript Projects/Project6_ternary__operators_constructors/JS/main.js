function Ride_Function() {                                                              //Example of using ternary operator.
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Voting_Function() {                                    
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {                                            //Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                                  //Instantiation of objects
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year +".";
}

function Character(Name, Class, Level, Gender) {                                        //Customized constructor function
    this.Character_Name = Name;
    this.Character_Class = Class;
    this.Character_Level = Level;
    this.Character_Gender = Gender;
}

var Peter = new Character("Argofeast", "Warrior", 60, "Male");                          //Customize object instance
function classDesc() {
    document.getElementById("New_and_This").innerHTML = 
        "Peter plays a character named " + Peter.Character_Name + ", a Level " + Peter.Character_Level + " " + Peter.Character_Gender + " " + Peter.Character_Class + "."
}

function Person(first, last, age, eye) {                                                //Constructor for example below
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var peter = new Person("Pete", "Sargent", 27, "Blue");                               //demonstrating reserved word cannot be used. "peter" was previously set to "abstract" and understandably would not run.
function invalidVariable() {
    document.getElementById("BadVariable").innerHTML =
        "My name is " + peter.firstName + " " + peter.lastName + ", my eyes are " + peter.eyeColor + " and I am " + peter.age + " years old."
}

function countByTen() {                                                             //Nested function
    document.getElementById("Nested_Function").innerHTML = addTen();
    function addTen() {
        var Starting_point = 0;
        function add() { Starting_point += 10; }
        add();
        return Starting_point;
    }
}