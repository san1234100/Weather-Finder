function getWeather() {
    const apiKey = 'Add Your Key'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;
    const apiUrl = `Get from OpenWeatherMap API`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '';
    
    const cityName = document.createElement('h2');
    cityName.textContent = data.name;
  
    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
  
    const description = document.createElement('p');
    description.textContent = `Description: ${data.weather[0].description}`;
    const desc=data.weather[0].main;
    const weatherIcon = document.createElement('img');
    if(desc=='Clouds'){
        weatherIcon.src ='./assets/images/cloudy (3).png';
      }
      else if(desc=='Clear'){
        weatherIcon.src = './assets/images/sun.png';
      }
      else if(desc=='Thunderstorm'){
        weatherIcon.src = './assets/images/storm.png';
      }
      else if(desc=='Rain'){
        weatherIcon.src = './assets/images/raining.png';
      }
    weatherIcon.alt = 'Weather Icon';
    weatherIcon.width='200'

    weatherContainer.appendChild(cityName);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(description);
    weatherContainer.appendChild(weatherIcon);
  }
   