import React, { useState } from "react";
import "./Hourly.css";

const Hourly = () => {
    const [conditions, setConditions] = useState([
        {
            time: "10:00",
            temp: "25C",
            climate: "cloudy",
            precipitation: "9%",
            wind: "3km/h",
            dewBreeze:"26C",
            UVindex:"0 of 11",
        },
        {
            time: "11:00",
            temp: "22C",
            climate: "cloudy",
            precipitation: "9%",
            wind: "3km/h",
            dewBreeze:"26C",
            UVindex:"0 of 11",
        },
        {
            time: "11:00",
            temp: "22C",
            climate: "cloudy",
            precipitation: "9%",
            wind: "3km/h",
            dewBreeze:"26C",
            UVindex:"0 of 11",
        },
        {
            time: "12:00",
            temp: "23C",
            climate: "cloudy",
            precipitation: "9%",
            wind: "3km/h",
            dewBreeze:"26C",
            UVindex:"0 of 11",
        },
        {
            time: "13:00",
            temp: "24C",
            climate: "cloudy",
            precipitation: "9%",
            wind: "3km/h",
            dewBreeze:"26C",
            UVindex:"0 of 11",
        },
        {
            time: "14:00",
            temp: "24C",
            climate: "cloudy",
            precipitation: "9%",
            wind: "3km/h",
            dewBreeze:"26C",
            UVindex:"0 of 11",
        },
        
    ]);
    return (
        <div className="Hourly">
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
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>
            <div className="hourlyGlassBox">
                <div className="upperLine">
                    <h4 className="dateDay">Date and day </h4>
                </div>
                <h2>
                    Hourly Weather<em>-place</em>
                </h2>
                <p> As of Time according to IST </p>
                <hr className ="hour"/>
                <ul>
                    {conditions.map((item, index) => (
                        <ul className="data" key={index}>
                            <p>{item.time}</p>
                            <p>{item.temp}</p>
                            <p>{item.climate}</p>
                            <p>{item.precipitation}</p>
                            <p>{item.wind}</p>
                            <div className="dropdown">
                                <button className="dropdown-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-caret-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                    </svg>
                                </button>
                                <div className="dropdown-content">
                                    <p>{item.dewBreeze}</p>
                                    <p>{item.UVindex}</p>
                            
                                </div>
                              
                            </div>

                            {/* <hr/> */}
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Hourly;
