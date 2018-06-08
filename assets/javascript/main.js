$(document).ready(function(){

var topic = [ "Jon Snow", "Cersei Lannister",  "Grey Worm" , "Ned Stark" ,"Dani Targaryen", "Tyrion Lannister", "Litllefinger", "Sansa Stark", "khal Drogo" , "Aria Stark ", "Bronn", "Ygritte", "Missandei",]



var gif =("http://api.giphy.com/v1/gifs/search?api_key=eSrT1kQEkpAal90wPYdDgWF7TcNqARX1&q=" + topic[i]+ "&limit=10&offset=0&rating=G&lang=en");    


$.ajax({
    url : gif,
    method: "get"
    }).then(function(response){
    
       $(".people").on("click", function(){
       
     
        
       })


       $("#btn").empty()
    
       $("#submit").on("click", function(event){
        event.preventDefault()
        var newPerson = $("#submit").val().trim();
        topic.push(newPerson)

       }







