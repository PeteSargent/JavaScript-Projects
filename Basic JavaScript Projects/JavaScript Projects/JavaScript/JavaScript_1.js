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

function getElClass() {
    var A = document.getElementsByClassName("Statue");
    A[2].innerHTML = "This statue needs repairs.";
}

{
    let c = document.getElementById("canvas1");
    let ctx = c.getContext("2d");
    let grd = ctx.createLinearGradient(0, 0, 300, 300);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");
    ctx.strokeStyle = grd;
    ctx.font = "30px Arial";
    
    ctx.strokeText("Hello World, I am in a Canvas Element!", 10, 50);

    
}