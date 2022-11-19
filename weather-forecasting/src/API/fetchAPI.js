import axios from 'axios';

export const getLocation = async(city) => {
    console.log(city)

        try {
            const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7866f376bde0e9f4df7f9570d27c340e
            `);
            return data;
        }
        catch (error) {
            console.error(error.message);
        }
    };

export const  getWeather = async({lat,lon})=>{
    // console.log("sdgsdg  "+ lat)
        try {
            const {data} = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=58c347521e38426eb3c82907221811&q=${lat},${lon}&days=5
            `);
            return data;
        }
        catch (error) {
            console.error(error.message);
        }
    }

export const  getCurrentLocation = async({lat,lon})=>{
    // console.log("sdgsdg  "+ lat)
        try {
            const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=7866f376bde0e9f4df7f9570d27c340e
            `);
            return data;
        }
        catch (error) {
            console.error(error.message);
        }
    }
