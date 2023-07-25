//Bin url - https://api.jsonbin.io/v3/b/64b4c6528e4aa6225ebf6353

var widthCounter = 3;

var counter = 1;

// import * as fs from 'fs';

const dict = {"Precious Achiuwa" : ["Chris Boucher", "Bobby"]}

function getData(){
    console.log("Getting Data")
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };
    
    req.open("GET", "https://api.jsonbin.io/v3/b/64b4c6528e4aa6225ebf6353", false);
    req.setRequestHeader("X-Master-Key", "$2b$10$NHUpSbhOSlBN1RRwC/q.WuygkISk/onmAntTNDP.sJUmHIlZ4TbiO");
    req.send();

    return req.responseText

}

function startGame()
{

    document.getElementById("guessCounter").style.display = "block";
    document.getElementById("guessButton").style.display = "inline";
    document.getElementById("playButton").style.display = "none";
    // getData()
  
}

function timer_passage(){
    var now = new Date()
    if (0==now.getHours() && 0==now.getMinutes()){
        console.log("reset")
        var startPlayer = document.getElementById("Splayer")
        startPlayer.textContent = randomProperty(dict)
        var endPlayer = document.getElementById("Eplayer")
        endPlayer.textContent = randomProperty(dict)
    }
    setTimeout(timer_passage, 60000)//exec myself after 60000 ms
}


function checkAddGuess(data)
{
    // console.log("This is the data from checkguess: " + data)
    const useData = JSON.parse(data); 
    console.log("This is the parsed data: " + data)
    // console.log("parsed string: " + JSON.parse(useData))
    // console.log("record : " + JSON.parse(useData)[0])
    const guessLocation = document.getElementById("guesses")

    const newInput = document.createElement("input")
    const typeAttribute = document.createAttribute("type")
    typeAttribute.value = "text"
    const idAttribute = document.createAttribute("id")
    idAttribute.value = "guess" + counter;
    // console.log(idAttribute.value)
    const PHAttribute = document.createAttribute("placeholder")
    PHAttribute.value = "Enter your guess"
    const classAttibute = document.createAttribute("class")
    classAttibute.value = "guessList"


    newInput.setAttributeNode(typeAttribute)
    newInput.setAttributeNode(idAttribute)
    newInput.setAttributeNode(PHAttribute)
    newInput.setAttributeNode(classAttibute)


    //If when guess is clicked and the links are not met do this
    guessLocation.append(newInput)
    counter++
    document.getElementById("guessCounter").textContent = counter
    //else = when links are connected
    //congrats you won link'd in ____ number of guesses

    var userGuess = document.getElementsByClassName("guessList")[counter-2].value //value to dictionary 
    var Splayer = document.getElementById("Splayer").textContent  //Key
    var Eplayer = document.getElementById("Eplayer").textContent    //Key

    for(var key in dict) {
        if(Splayer == key){
            var values = dict[key];
            for(var value in values)
            {
                if(values[value] == userGuess)
                {
                    newInput.style.border =  "2px green solid"; //Find a way to target right input box 
                }
            }
        }
      }
        




    //if userGuess has one correct link on either the right or left of it, box should turn green 
    //if userGuess has two correct links, box should turn green 
    //if userGuess links 1/2 players, IDK

}

var randomProperty = function (obj) { //Chooses random player each day 
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() >> 0 ];  //dict[keys [ 2]* random]
}

