const APIKey = "57fd6244d936d349b1e391d63d133c49"
var city = "London"


getWeather();
///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\
async function getWeather(){

    const cordsResp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`)
    const cords = await cordsResp.json();

    const weatherResp = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${cords[0].lat}&lon=${cords[0].lon}&appid=${APIKey}`)
    const weather = await weatherResp.json();

    console.log(weather);
    console.log(weather.list[0].main.temp);
    console.log(weather.list[0].main.humidity);
    console.log(weather.list[0].weather.main);
    console.log(weather.list[0].wind.speed);

}
///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\

