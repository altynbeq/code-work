const wrapper = document.querySelector('.wrapper'),
    weatherSrch = wrapper.querySelector('.weatherSrch'),
    weatherInfo = wrapper.querySelector('.weatherInfo'),
    inputPart = weatherSrch.querySelector('input'),
    infoText = weatherSrch.querySelector('.infoText'),
    locationBttn = weatherSrch.querySelector('.locationBttn'),
    srchBttn = weatherSrch.querySelector('.srchBttn');

// checking if possible to find location and next functions to execute if yes/no
locationBttn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } else {
        alert("Your browser does not supports geolocation api.")
    }
    infoText.innerText = "Searching weather forecast..."
    infoText.classList.add('pending')
});

//send api request for weather and check input value
srchBttn.addEventListener('click', () => {
    if (inputPart.value !== '' && inputPart.value !== 'Enter') {
        requestApi(inputPart.value);
    }
});
//if possible to find user location-> api deaclared, fetch function called 
function onSuccess(position) {
    const { latitude, longitude } = position.coords;
    api = `http://api.weatherapi.com/v1/current.json?key=7d4f80bde0874aa4a69133705220107&q=${latitude},${longitude}&aqi=yes`
    fetchData();
}
//if not possible to find user location -> error message
function onError(error) {
    infoText.classList.add("error");
    infoText.innerText = "Location denied"
}

//api path declared & data fetched
function requestApi(city) {
    api = `http://api.weatherapi.com/v1/current.json?key=7d4f80bde0874aa4a69133705220107&q=${city}&aqi=yes`;
    fetchData();
}

//send request
function fetchData() {
    infoText.classList.add("pending")
    infoText.innerText = "Searching weather forecast...";

    fetch(api).then(response => response.json().then(result => weatherDetails(result)));
}


//area for detailed weather forecast
function weatherDetails(info) {
    //if user enters wrong city name
    if (info.code == "1006") {
        infoText.innerHTML = 'Invalid city name';
        infoText.classList.replace('pending', 'error')
            //if everything is right
    } else {
        const city = info.location.name;
        const country = info.location.country;
        const descr = info.current.condition.text;
        const humidity = info.current.humidity;
        const feelsLike = info.current.feelslike_c;
        const temp = info.current.temp_c;


        wrapper.querySelector('.degreeNum').innerText = temp;
        wrapper.querySelector('.skyInfo').innerText = descr;
        wrapper.querySelector('.locationInfo').innerText = `${city},${country}`;
        wrapper.querySelector('.feelsLike h2').innerText = feelsLike;
        wrapper.querySelector('.humidity h2').innerText = humidity;



        infoText.classList.remove('penging', 'error');
        weatherSrch.classList.add('hide')
        weatherInfo.classList.remove('hide');

    }
}