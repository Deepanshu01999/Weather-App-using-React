
import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        
            city :"Karnal",
            feelsLike: 33.83,
            humidity: 68,
            temp: 29.68,    
            tempMax: 29.68,
            tempMin: 29.68,
            weather: "broken clouds",
          
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App by Deepanshu</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}