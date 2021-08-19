// get city information
const getCity = async (cityName) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${cityName}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get weather information
const getWeather = async (cityId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/' + `${cityId}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};