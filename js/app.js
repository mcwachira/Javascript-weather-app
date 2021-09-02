const cityForm = document.querySelector('form');
const card = document.querySelector('.card')
const details  = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

console.log(icon);
const updateUi = (data) =>  {
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //weather.IsDayTime
    //destructuring
    const {cityDetails, weather} = data;

    //update the details template
    details.innerHTML = `
 <h5 class="my-3">${cityDetails.EnglishName}</h5>
  <div class="my-3"> ${weather.WeatherText}</div>
  <div class="display-4 my-4">
           <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;c</span>
        </div>
    `;

    //update night/day images  & weather icons

    let iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;

icon.setAttribute('src',iconSrc);



    let timeSrc =  null;
    if(weather.IsDayTime){
        timeSrc="./img/day.svg"
    }else{
        timeSrc="./img/night.svg"
    }
  time.setAttribute('src', timeSrc);


    if(card.classList.contains('d-none'))   {
        card.classList.remove('d-none');
    }




}

const updateCity  = async( city) => {
    const cityDetails = await getCity(city) //wait for promise to be resolved
    const weather = await getWeather(cityDetails.Key);
    console.log(weather)
return{
    cityDetails :cityDetails,
    weather :weather
}
}


cityForm.addEventListener('submit', e =>{
    e.preventDefault();
    //const city = input.value
 const city =  cityForm.city.value.trim();
 console.log(city)
    cityForm.reset();

 //update ui with new city
    updateCity(city).then(data =>{
        console.log(data);
     updateUi(data);
    }).catch(error =>{
        console.log(error)
    })

})












































































































































































