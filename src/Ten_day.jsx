import "./Ten_day.css";
import "./Hourly.css";

import react from "react";

const Ten_day = () => {
  return (
    <div className="Ten_day">
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

      <div className="ten_day_glassBox">
        <div className="upperLine">
          <h4 className="dateDay">Date and day </h4>
          <h2>
            Ten day Weather<em>-place</em>
          </h2>
          <p> As of Time according to IST </p>
          <hr className ="hour"/>
        </div>
      
        

      </div>
    </div>
  );
};

export default Ten_day;
