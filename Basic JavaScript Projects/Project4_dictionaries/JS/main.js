function game_Dictionary(){
    var video_Game = {  //Defining the key/values of the dictionary.
        Platform: "PC",
        Genre: "Platformer",
        Length: "6 Hours",
        Developer: "Sony",
        Startup: "The game is now starting..."
    };
    delete video_Game.Startup //Using the Delete operator to delete the "Startup" key value pair.
    document.getElementById("Dictionary").innerHTML = video_Game.Startup; //Outputting the value of "Startup". Since it's deleted, it'll show up as undefined.
}