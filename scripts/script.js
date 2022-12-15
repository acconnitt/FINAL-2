function toggle() {
    document.getElementById('nav-menu').classList.toggle('hide');
}


const lastModDate = new Date(document.lastModified);
const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const writtenMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
document.getElementById('last-modification').innerHTML = `Last update: ${dayOfWeek[lastModDate.getDay()]}, ${writtenMonth[lastModDate.getMonth()]} ${lastModDate.getDate()} ${lastModDate.getFullYear()}`;




const upcEvURL = 'scripts/menu2.json';

fetch(upcEvURL)
    .then(response => response.json())
    .then(jsonObject => {
        let business = jsonObject.drinks;
        for (let i = 0; i <= 6; i++) {
            let foodCard = document.createElement('section');
            let localName = document.createElement('h3');
            let localDesc = document.createElement('div');
            let localIng = document.createElement('div');
            let localNum = document.createElement('div');
            let localImg = document.createElement('img');
            localName.textContent = business[i].name;
            localDesc.textContent = business[i].description;
            localIng.textContent = `${business[i].ingredient.fruits}`;
            localNum.textContent = `${business[i].ingredient.number}`;
            localImg.textContent = business[i].image;


            localImg.setAttribute('src', business[i].image);
            localImg.setAttribute('alt', `Drink ${business[i].name}`);
            localImg.setAttribute('loading', 'lazy');


            foodCard.appendChild(localName);
            foodCard.appendChild(localDesc);
            foodCard.appendChild(localIng);
            foodCard.appendChild(localNum);
            foodCard.appendChild(localImg);
            document.querySelector('div.menu-directory').appendChild(foodCard);
        };
    })







const lat = 33.126249600000044;
const lon = -117.31140891643027;
const apiKey = "96903c0c4a665e1829d511ed75451893";
const requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

fetch(requestURL)
    .then(response => response.json())
    .then((jsonObject) => {



        let weatherCard = document.createElement('section');
        let weatherTitle = document.createElement('h3');
        let iconImg = document.createElement('img')
        let tempDiv = document.createElement('div');
        let descDiv = document.createElement('div');
        let humDiv = document.createElement('div');
        weatherTitle.textContent = "Current Weather";
        iconImg.setAttribute('src', `https://openweathermap.org/img/wn/${jsonObject.current.weather[0].icon}@4x.png`);
        iconImg.setAttribute('alt', `${jsonObject.current.weather[0].main} icon`)
        tempDiv.textContent = `Temperature: ${jsonObject.current.temp.toFixed(0)}°F`;
        descDiv.textContent = `Condition: ${jsonObject.current.weather[0].main}`;
        humDiv.textContent = `Humidity: ${jsonObject.current.humidity}%`;
        weatherCard.appendChild(weatherTitle);
        weatherCard.appendChild(iconImg);
        weatherCard.appendChild(tempDiv);
        weatherCard.appendChild(descDiv);
        weatherCard.appendChild(humDiv);



        let forecastCard = document.createElement('section');
        forecastCard.className = 'forecastCard';
        let forecastTitle = document.createElement('h3');
        forecastTitle.textContent = '3-day Forecast';
        forecastCard.appendChild(forecastTitle);
        for (let i = 0; i < 3; i++) {
            let forecastDay = document.createElement('div');
            forecastDay.setAttribute('id', `day${i+1}`);
            let dayLabel = document.createElement('div');
            let condIcon = document.createElement('img');
            let tempDay = document.createElement('div');
            let currentDay = new Date(jsonObject.daily[i + 1].dt * 1000);
            dayLabel.textContent = dayOfWeek[currentDay.getDay()];
            condIcon.setAttribute('src', `https://openweathermap.org/img/wn/${jsonObject.daily[i].weather[0].icon}@4x.png`);
            condIcon.setAttribute('alt', `${jsonObject.daily[i].weather[0].main} icon`);
            tempDay.textContent = `${jsonObject.daily[i].temp.day.toFixed(0)}°F | ${jsonObject.daily[i].weather[0].main}`;
            forecastDay.appendChild(dayLabel);
            forecastDay.appendChild(condIcon);
            forecastDay.appendChild(tempDay);
            forecastCard.appendChild(forecastDay);
        };
        document.querySelector('div.weather').appendChild(weatherCard);
        document.querySelector('div.weather').appendChild(forecastCard);
    });