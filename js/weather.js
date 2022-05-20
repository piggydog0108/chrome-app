
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "c132c28347698f9af3d69097d5869751";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");

        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        

    });

}


function onGeoError(){
    alert("please allow to find your geolocation")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);