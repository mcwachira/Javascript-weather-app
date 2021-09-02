const key = 	"EuJoboBbS0UepIiT41tHdbDhbWgxnn0W";


//Get weather information
const getWeather = async(id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query =`${id}?apikey=${key}`;
    const response = await fetch (base + query);//returns a promise
    const data = await response.json() // also returns a promise
    return data[0];
}

const getCity = async (city) =>{
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query =`?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data  = await response.json();
    return data[0]; // returrns a promise
}

