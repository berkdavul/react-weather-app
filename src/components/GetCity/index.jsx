import { useRef, useState, useEffect } from "react";
import SuggestionList from "../Suggections/index";
import WeatherInfo from "../WeatherInfo/index";
import Card from "../Card/index";
import classes from "./style.module.scss"
const GetCity = (props) => {

    const API_KEY = ''; // Replace with your OpenWeatherMap API key
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [location, setLocation] = useState('');
    const [suggestedLocations, setSuggestedLocations] = useState([]);
    const [weatherData, setWeatherData] = useState("");
    const [news, setNews] = useState("");
    const [news2, setNews2] = useState("");
    const handleInputChange = (event) => {
        setLocation(event.target.value);

        setSelectedLocation(null);
    };

    const handleLocationSelect = (selectedLocation) => {
        setSelectedLocation(selectedLocation);
        setNews(selectedLocation)
        setLocation(selectedLocation.name);
        fetchWeatherData(selectedLocation.lat, selectedLocation.lon)
        setSuggestedLocations([]);

    };
    useEffect(() => {
        if (location.trim() !== '') {
            fetchSuggestedLocations();
        } else {
            setSuggestedLocations([]);
        }
    }, [location]);

    const fetchSuggestedLocations = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSuggestedLocations(data);



        } catch (error) {
            console.error('Error fetching suggested locations:', error);
        }
    };


    const fetchWeatherData = async (selectedLat, selectedLon, selectName) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${selectedLat}&lon=${selectedLon}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();


            setWeatherData(data);
            setNews2(data)



        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
    const inputRef = useRef();




    return (

        <div>
            <Card backgroundImage={weatherData}>
                <div className={classes.container}>
                    <div className={classes.inputContainer}>
                        <input
                            type="text"
                            placeholder="Enter location (e.g., Rome)"
                            value={location}
                            onChange={handleInputChange} ref={inputRef}
                            className={classes.input}
                        />
                        <div>
                            {suggestedLocations.length > 0 && !selectedLocation && (
                                <SuggestionList
                                    suggestions={suggestedLocations}
                                    onSuggestionSelect={handleLocationSelect}
                                />
                            )}
                        </div>

                    </div>
                    {weatherData && (
                        <WeatherInfo data={weatherData} city={news.name} country={news.country} />
                    )}
                </div>
            </Card>
        </div>)
}
export default GetCity