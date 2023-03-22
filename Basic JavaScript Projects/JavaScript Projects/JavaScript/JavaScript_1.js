function foodChoice() {
    var food_Output;
    var food = document.getElementById("food_input").value;
    var food_string = " is my favroite food!";
    switch (food) {
        case "Cereal":
            food_Output = "Cereal" + food_string;
            break
        case "Spaghetti":
            food_Output = "Spaghetti" + food_string;
            break
        case "Beef Stroganoff":
            food_Output = "Beef Stroganoff" + food_string;
            break
        case "PB&J":
            food_Output = "PB&J" + food_string;
            break
        case "Steak":
            food_Output = "Steak" + food_string;
            break
        case "Uranium-238":
            food_Output = "Uranium-238" + food_string;
            break
        default:
            food_Output = "Please enter a food exactly as written in the list above."
    }
    document.getElementById("output").innerHTML = food_Output
}