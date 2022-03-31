//declarations
//search button
var submitButton = document.querySelector('.submitButton');
//search entry
var citySearch = document.querySelector('.citySearch');
//city result box
var cityLocation = document.querySelector('.cityLocation');
//current weather results
var currentTemp = document.querySelector('.currentTemp');
var currentWind = document.querySelector('.currentWind');
var currentHumidity = document.querySelector('.currentHumidity');
var currentUV = document.querySelector('.currentUV');
//forcasted results ...I could prolly do this with a loop
//Date
var dateDayOne = document.querySelector('#dateDayOne');
var dateDayTwo = document.querySelector('#dateDayTwo');
var dateDayThree = document.querySelector('#dateDayThree');
var dateDayFour = document.querySelector('#dateDayFour');
var dateDayFive = document.querySelector('#dateDayFive');
//Weather Clip Art thing
var clipArtOne = document.querySelector('#clipArtOne');
var clipArtTwo = document.querySelector('#clipArtTwo');
var clipArtThree = document.querySelector('#clipArtThree');
var clipArtFour = document.querySelector('#clipArtFour');
var clipArtFive = document.querySelector('#clipArtFive');
//Temp
var tempDayOne = document.querySelector('#tempDayOne');
var tempDayTwo = document.querySelector('#tempDayTwo');
var tempDayThree = document.querySelector('#tempDayThree');
var tempDayFour = document.querySelector('#tempDayFour');
var tempDayFive = document.querySelector('#tempDayFive');
//Wind
var windDayOne = document.querySelector('#windDayOne');
var windDayTwo = document.querySelector('#windDayTwo');
var windDayThree = document.querySelector('#windDayThree');
var windDayFour = document.querySelector('#windDayFour');
var windDayFive = document.querySelector('#windDayFive');
//Humdidity
var humidityDayOne = document.querySelector('#humidityDayOne');
var humidityDayTwo = document.querySelector('#humidityDayTwo');
var humidityDayThree = document.querySelector('#humidityDayThree');
var humidityDayFour = document.querySelector('#humidityDayFour');
var humidityDayFive = document.querySelector('#humidityDayFive');



submitButton.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+citySearch.value+'&appid=f21ad9b2ab9ce54c7d3efd0ff1351189')
    .then(response =>response.json())
    .then(data=> {
        var cityName = data['name'];
        var tempValue = data['main']['temp'];

        cityLocation.innerHTML = cityName;
        currentTemp.innerHTML = tempValue;
    })
    .catch(err => alert ("invalid entry"))
})

