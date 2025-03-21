const input = document.querySelector('input');
const form = document.querySelector('form')
const searchBtn = document.querySelector('button');
const temp = document.querySelector('.temperature')
const desc = document.querySelector('.description');
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const apiKey = "ff1868eb3a9aa0ec63931582110b1b39";

document.addEventListener("DOMContentLoaded", () =>{
  form.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(input.value.trim() == ""){
        alert('Please enter city name');
    }else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ff1868eb3a9aa0ec63931582110b1b39`)
        .then(response => response.json())
        .then(data => {console.log(data)
            city.innerHTML = data.name;
            temp.innerHTML = Math.floor(data.main.temp-273.15);
            desc.innerHTML = data.weather[0].description;
            const local = new Date(data.dt * 1000)
            const localOff = new Date(local.getTime()+data.timezone * 1000)
            const ofset = data.timezone/3600
            console.log("date = ", localOff.toString());
            console.log("ofset = ", ofset);

        })
    }
})
})