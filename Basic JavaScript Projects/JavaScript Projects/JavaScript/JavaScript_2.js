function validateForm() {
    let x = document.forms["mainForm"]["fname"].value;
    if (x == "") {
        alert("Both name fields must be filled out.");
        return false;
    }
    let y = document.forms["mainForm"]["lname"].value;
    if (y == "") {
        alert("Both name fields must be filled out.");
        return false;
    }
}

