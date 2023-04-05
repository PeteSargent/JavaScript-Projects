function displayType(food) {
    var foodType = food.getAttribute("data-food-type");
    alert(foodType + " is a " + food.innerHTML + " food!") 
}