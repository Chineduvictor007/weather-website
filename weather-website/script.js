const apiKey ="26522b517353db435c36bdab1c4dceaa";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "cloud-image1-removebg-preview.png";    
        }
    
        else if(data.weather[0].main == "clear"){
            weatherIcon.src = "clear-image-removebg-preview.png";    
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "rain-icon-removebg-preview.png";    
        }
        else if(data.weather[0].main == "drizzle"){
            weatherIcon.src = "sun-rain-removebg-preview.png";    
        }
        else if(data.weather[0].main == "mist"){
            weatherIcon.src = "mist-images-removebg-preview.png";    
        }
    
        document.querySelector(".weather").style.display = "block";
    }
    // var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud-image1-removebg-preview.png";    
    }

    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "clear-image-removebg-preview.png";    
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "rain-icon-removebg-preview.png";    
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "sun-rain-removebg-preview.png";    
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "mist-images-removebg-preview.png";    
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
searchBtn.addEventListener("click", ()=> { 
    checkWeather(searchBox.value);
})
