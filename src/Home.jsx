import react, { useState } from "react";
import "./Home.css";
import "./App";

const Home = () => {
    const [weather, setWeather] = useState([
        { place: "ludhiana", temp: "25C" },
        { place: "chandigarh", temp: "22C" },
        { place: "patiala", temp: "23C" },
        { place: "nangal", temp: "24C" },
        { place: "patna", temp: "24C" },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const processInput = () => {
        const foundEntry = weather.find(
            (entry) => entry.place.toLowerCase() === inputValue.toLowerCase()
        );
        if (foundEntry) {
            setOutputValue(foundEntry.temp);
        } else {
            setOutputValue("No Match Found");
        }
    };

    return (
        <>
            <div className="Home">
                <div className="navbar-nav">
                    <div className="navbar-brand">Weather</div>
                    <div className="navbar-center">
                        <input
                            type="search"
                            placeholder="search city"
                            className="searchBox"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="black"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007
             1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="glassBox1">
                    <h3 className="cityName">
                        {" "}
                        city name and date and time according to IST
                    </h3>
                    {/* <h3 className="riseSet"> Sunrise and Sunset</h3> */}
                    <h1 className="temp"> Temperature </h1>
                    <h1 className="humidity">Humidity</h1>
                    <h3 className="day-night">
                        Day Temperature Night Temperature
                    </h3>
                    <h3 className="weather">How's Weather</h3>
                </div>

                <div className="glassBox2">
                    <h1 className="precipitation">Precipitation</h1>
                    <hr />
                    <h1 className="wind">Wind</h1>
                    <hr />
                    <h1 className="pressure">Pressure</h1>
                    <hr />
                    <h1 className="vis">Visibility</h1>

                    <h1 className="airQualityIndex">Air Quality Index</h1>
                    <hr className="hr1" />
                    <h1 className="dewPoint">Dew Point</h1>
                    <hr className="hr2" />
                    <h1 className="UV">UV Index</h1>
                    <hr className="hr3" />

                    <h1 className="sunRise">☀️</h1>
                    <div className="vl"></div>
                    <h1 className="sunSet">🌤️</h1>
                </div>

                <div className="glassBox3">
                    <h1 className="forecast">Today's forecast</h1>
                    <div className="grid-container">
                        <div className="morning">
                            <p>Morning</p>
                            <p>Temperature</p>
                        </div>
                        <div className="afternoon">
                            <p>Afternoon</p>
                            <p>Temperature</p>
                        </div>
                        <div className="evening">
                            <p>Evening</p>
                            <p>Temperature</p>
                        </div>
                        <div className="night">
                            <p>Night</p>
                            <p>Temperature</p>
                        </div>
                    </div>
                </div>

                {/* <div className="glassBox">

<input
type="text"
value={inputValue}
onChange={handleInputChange}
/>
<br/>
<button onClick={processInput}>Output</button>
<br/>
<p>{outputValue}</p> */}
            </div>
        </>
        //   </div>
    );
};

export default Home;
