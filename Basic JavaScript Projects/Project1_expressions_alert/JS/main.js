function My_First_Function() {                              //Defined and named the function.
    var str = "This is the button text!";                   //Assigned the variable "str" a string value.
    document.getElementById("Button_text").innerHTML = str; //Entered the Id for getElementById method to look for and the value to use when activated.
}
var Sent1 = "This is the beginning of the string";  //Assigned Sent1 first half of sentence.
var Sent2 = " and this is the end of the string.";  //Assigned Sent2 secnd half of sentence. Space at begginning to prevent incorrect spacing.

document.write(Sent1 + Sent2); //Expression that concatonates Sent1 and Sent2.
window.alert("Here goes my first JS"); //Alert pop-up with message.

function My_Mousover_Message() {
    var str = "Hopefully this text is showing now you\'ve hovered.";
    document.getElementById("para1").innerHTML = str;
}