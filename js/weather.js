const API_KEY = "8d427b17da325701665ee3d14116333c"; 

function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerHTML =  data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //network 상에서 확인, promise임 시간걸림 
}

function onGeoError(){
    console.log("i cant find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);