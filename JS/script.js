//I've had a very not good week and didnt have much time to work on this. I had to rush through alot of this. I am not proud very proud of the result.
const APIKey = "57fd6244d936d349b1e391d63d133c49"
var city;
var numQuests = 5;
var btnPress = 0;

var lastSearch1 = document.querySelector('#lastSearch1');
var lastSearch2 = document.querySelector('#lastSearch2');
var lastSearch3 = document.querySelector('#lastSearch3');
var lastSearch4 = document.querySelector('#lastSearch4');
var lastSearch5 = document.querySelector('#lastSearch5');


lastSearch1.addEventListener("click",()=> buttonWeather(1))
lastSearch2.addEventListener("click",()=> buttonWeather(2))
lastSearch3.addEventListener("click",()=> buttonWeather(3))
lastSearch4.addEventListener("click",()=> buttonWeather(4))
lastSearch5.addEventListener("click",()=> buttonWeather(5))

localStorage.clear();



///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\
async function getWeather(){

    event.preventDefault();
    clearWeather();

    city = document.getElementById("city").value;

    const cordsResp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`)
    const cords = await cordsResp.json();

    const weatherResp = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${cords[0].lat}&lon=${cords[0].lon}&units=imperial&appid=${APIKey}`)
    const weather = await weatherResp.json();


    
    document.getElementById("temp1").innerHTML += weather.list[0].main.temp + " F";
    document.getElementById("hum1").innerHTML += weather.list[0].main.humidity + "%";
    document.getElementById("wind1").innerHTML += weather.list[0].wind.speed + "MPH";

    document.getElementById("temp2").innerHTML += weather.list[8].main.temp + " F";
    document.getElementById("hum2").innerHTML += weather.list[8].main.humidity + "%";
    document.getElementById("wind2").innerHTML += weather.list[8].wind.speed + "MPH";

    document.getElementById("temp3").innerHTML += weather.list[16].main.temp + " F";
    document.getElementById("hum3").innerHTML += weather.list[16].main.humidity + "%";
    document.getElementById("wind3").innerHTML += weather.list[16].wind.speed + "MPH";

    document.getElementById("temp4").innerHTML += weather.list[24].main.temp + " F";
    document.getElementById("hum4").innerHTML += weather.list[24].main.humidity + "%";
    document.getElementById("wind4").innerHTML += weather.list[24].wind.speed + "MPH";

    document.getElementById("temp5").innerHTML += weather.list[32].main.temp + " F";
    document.getElementById("hum5").innerHTML += weather.list[32].main.humidity + "%";
    document.getElementById("wind5").innerHTML += weather.list[32].wind.speed + "MPH";

    if(btnPress == 0){
        showBtn();
    }

}
///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\

function showBtn(){
    
    if(numQuests == 0){
        numQuests = 5;
    }
    if(numQuests == 5){
        localStorage.setItem("cityOne", city);
        document.getElementById("lastSearch5").style.display = "inline";
        document.getElementById("lastSearch5").innerHTML = localStorage.getItem("cityOne");
    }else if(numQuests == 4){
        localStorage.setItem("cityTwo", city);
        document.getElementById("lastSearch4").style.display = "inline";
        document.getElementById("lastSearch4").innerHTML = localStorage.getItem("cityTwo");
    }else if(numQuests == 3){
        localStorage.setItem("cityThree", city);
        document.getElementById("lastSearch3").style.display = "inline";
        document.getElementById("lastSearch3").innerHTML = localStorage.getItem("cityThree");
    }else if(numQuests == 2){
        localStorage.setItem("cityFour", city);
        document.getElementById("lastSearch2").style.display = "inline";
        document.getElementById("lastSearch2").innerHTML = localStorage.getItem("cityFour");
    }else if(numQuests == 1){
        localStorage.setItem("cityFive", city);
        document.getElementById("lastSearch1").style.display = "inline";
        document.getElementById("lastSearch1").innerHTML = localStorage.getItem("cityFive");
    }

    numQuests -= 1;
    console.log(localStorage.getItem("cityOne"));
    console.log(localStorage.getItem("cityTwo"));
    console.log(localStorage.getItem("cityThree"));
    console.log(localStorage.getItem("cityFour"));
    console.log(localStorage.getItem("cityFive"));
}

///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\
function clearWeather(){
    document.getElementById("temp1").innerHTML = "Temp: ";
    document.getElementById("hum1").innerHTML = "Humidity: ";
    document.getElementById("wind1").innerHTML = "Wind Speed: ";

    document.getElementById("temp2").innerHTML = "Temp: ";
    document.getElementById("hum2").innerHTML = "Humidity: ";
    document.getElementById("wind2").innerHTML = "Wind Speed: ";

    document.getElementById("temp3").innerHTML = "Temp: ";
    document.getElementById("hum3").innerHTML = "Humidity: ";
    document.getElementById("wind3").innerHTML = "Wind Speed: ";

    document.getElementById("temp4").innerHTML = "Temp: ";
    document.getElementById("hum4").innerHTML = "Humidity: ";
    document.getElementById("wind4").innerHTML = "Wind Speed: ";

    document.getElementById("temp5").innerHTML = "Temp: ";
    document.getElementById("hum5").innerHTML = "Humidity: ";
    document.getElementById("wind5").innerHTML = "Wind Speed: ";
}
///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\

function buttonWeather(btnNum){
    btnPress = 1;

    if(btnNum == 1){
        city = localStorage.getItem("cityFive");
        getWeather();
    }else if(btnNum == 2){
        city = localStorage.getItem("cityFour");
        getWeather();
    }else if(btnNum == 3){
        city = localStorage.getItem("cityThree");
        getWeather();
    }else if(btnNum == 4){
        city = localStorage.getItem("cityTwo");
        getWeather();
    }else if(btnNum == 5){
        city = localStorage.getItem("cityOne");
        getWeather();
    }

    btnPress = 0;
}