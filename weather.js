const apiKey = '87833716ee41e68bf638b2a8b3dc68b5';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&q=';

const searchBox = document.querySelector('.searchform input')
const searchButton = document.querySelector('.searchform button')
const weatherkaicon = document.querySelector('.weather-icon')
async function weathercheck(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector('.errormessage').style.display = 'flex'; 
        document.querySelector('.weather-card').style.display = 'none';
        document.querySelector('.normalmessage').style.display = 'none';
    }else{
        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = data.main.temp+`°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity+`%`;
        document.querySelector(".wind").innerHTML = data.wind.speed+` km/hr`;
    
        if (data.weather[0].main == 'Clouds'){
            weatherkaicon.src = 'images/clouds.png'
        }else if (data.weather[0].main == 'Clear'){
            weatherkaicon.src = 'images/clear.png'
        }else if (data.weather[0].main == 'Rain'){
            weatherkaicon.src = 'images/rain.png'
        }else if (data.weather[0].main == 'Drizzle'){
            weatherkaicon.src = 'images/drizzle.png'
        }else if (data.weather[0].main == 'Mist'){
            weatherkaicon.src = 'images/mist.png'
        }
    
        document.querySelector('.weather-card').style.display = 'flex';
        document.querySelector('.normalmessage').style.display = 'none';
        document.querySelector('.errormessage').style.display = 'none';
    }

}
searchButton.addEventListener('click',()=>{
    weathercheck(searchBox.value);
})
