$(document).ready(function(){

var topic = [ "Jon Snow", "Cersei Lannister",  "Grey Worm" , "Ned Stark" ,"Dani Targaryen", "Tyrion Lannister", "Litllefinger", "Sansa Stark", "khal Drogo" , "Aria Stark ", "Bronn", "Ygritte", "Missandei",]


function displayGif() {

  var movie = $(this).attr("got");
  console.log(this)
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=eSrT1kQEkpAal90wPYdDgWF7TcNqARX1&q=" + movie +"&limit=10&offset=0&rating=G&lang=en"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (j =0; j<response.data.length; j++){
    var stillImage = response.data[j].images.original_still.url
    var movingImage = response.data[j].images.downsized.url
    console.log(response)
    console.log(stillImage)
    var picture = $("<img>").attr("src", stillImage)
    var imageMoving = $("<img>").attr("src", movingImage)
    $("#gif-display").prepend(picture)

    $(this).hover(function(){
    $(this).attr("src", movingImage)
    })

  
    
    }
    })

}



function createBtn() {
    $("#btn").empty();
    for (var i = 0; i < topic.length; i++) {
    var newButton = $("<button class = person>");
    newButton.attr("got", topic[i]);
    newButton.text(topic[i]);
    $("#btn").append(newButton);
    }
}


$("#submit").on("click", function(event) {
    event.preventDefault();
    var name = $("#name").val().trim();
    topic.push(name);
    createBtn();
});


$(document).on("click", ".person", displayGif);
$("#gif-display").empty()
createBtn();

})




