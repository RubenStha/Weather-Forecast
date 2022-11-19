import React,{useState,useEffect} from 'react';
import { getLocation,getWeather,getCurrentLocation } from '../API/fetchAPI';
import Place from './Place';
import TodaysWeather from './TodaysWeather';
import FiveDaysWeather from './FiveDaysWeather';


export default function Search() {
    let location = {}
    const [city,setCity] = useState("");
    const [address,setAddress] = useState([]);
    const [weather,setWeather] = useState("")
    

const getData = async()=>{
    console.log(location)   
    setWeather(await getWeather(location))
}

const getAddress = async()=>{
    setAddress(await getCurrentLocation(location))
}

useEffect(()=>{
    
    if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
            location = {
            lat:position.coords.latitude,
            lon:position.coords.longitude
                }
                getAddress();
                getData();
                console.log(location);
            })
            console.log(location);
        }
        else{
            console.log("location not allowed")
        }
    },[])
    
    const handleSearch = async() =>{
        const result = await getLocation(city);
        setAddress(result);
    }

    const handleClick = (data) =>{
        setWeather(data);
    }

    // console.log(weather);
    return (
    <div className='container'>
        <div className="search-container">
            <div>
                <h1 className="caption">The Only Weather Forecast you need</h1>
                <input type="text" 
                id='search' 
                placeholder='Search City' 
                onChange={(e)=>setCity(e.target.value)}
                />
                <button id='search-btn' onClick={handleSearch}>Search</button>
            
            <Place address={address} getData={handleClick}/>
            </div>

        </div>
        <div className='weather-forecast'>
            <div>
                <div className='current-location'>

                <i className='fas'>&#xf3c5;</i>
                <div>
                    {
                        address && address.map(({lat,lon,name,country})=> 
                        <div className="current-address" key={name}><h3>{name} ,{country}</h3> position: {lat.toFixed(3)},{lon.toFixed(3)}</div>)
                    }
                </div>
                </div>

            </div>
        
        { weather && <TodaysWeather weather={weather} />}
        {
            weather && 
        <FiveDaysWeather weather={weather} />
        }
        </div>
    </div>
  )
}
