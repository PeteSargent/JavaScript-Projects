//Example concat() method from step 156; not part of project.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//Function using Concat()
function passTheSpoon() {                                       
    var sec1 = "Could you ";
    var sec2 = "please pass ";
    var sec3 = "me a ";
    var sec4 = "spoon?";
    var whole_sentence = sec1.concat(sec2, sec3, sec4);
    document.getElementById("Spoon").innerHTML = whole_sentence;
}
//Function using Slice()
function slice_Method() {
    var Sentence = "There's a snake in my boot.";
    var Section = Sentence.slice(10, 15)
    document.getElementById("Snake").innerHTML = Section;
}
//toUpperCase() function
function makeCaps() {
    var text = document.getElementById("iNeedCaps").innerHTML;
    document.getElementById("iNeedCaps").innerHTML =
        text.toUpperCase();
}
//search() function
function findString() {
    var foundString = document.getElementById("searchParagraph").value;
    var stringPosition = foundString.search("cat");
    document.getElementById("catPosition").innerHTML = stringPosition;
}

//toString() method function
function returnString() {
    var x = 69
    document.getElementById("randomNumber").innerHTML = x.toString();
}

//toPrecision() method function
function shortenNumber() {
    var x = 178.2343457
    document.getElementById("longNumber").innerHTML = x.toPrecision(5);
}
//toFix() method function
function toFixedNumber() {
    var x = 178.2343457
    document.getElementById("fixedNumber").innerHTML = x.toFixed();
}
//valueOf() method function
function checkMail() {
    var text = "Congratulations, you are our 100th customer!";
    var letter = text.valueOf();
    document.getElementById("letter").innerHTML = letter;
}