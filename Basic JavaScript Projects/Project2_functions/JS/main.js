function My_First_Function() {                                  //Keyword and name
    var x = "Mary had a";                                       //Assigning value
    var y = " little lamb";                                     //Assigning value
    document.getElementById("Button_Text").innerHTML = x + y;   //Concatenating using + operator
}

function concatenate() {                                        //Keyword and Name
    var sentence = "I can see";                                 //Assign value to var
    sentence += " my house from here!";                         //Concatenating strings with += operator
    document.getElementById("join").innerHTML = sentence;       //
}