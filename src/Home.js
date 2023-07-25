import react,{useState} from 'react';
import './Home.css';
import './App';


function Home(){

  const [weather, setWeather] = useState([
    { place: 'ludhiana', temp: '25C' },
    { place: 'chandigarh', temp: '22C' },
    { place: 'patiala', temp: '23C' },
    { place: 'nangal', temp: '24C' },
    { place: 'patna', temp: '24C' },
  ]);


  const [inputValue,setInputValue] = useState('');
  const [outputValue,setOutputValue]=useState('');


  const handleInputChange = (e) => {
     setInputValue(e.target.value);

  };

  const processInput=()=> {
    const foundEntry=weather.find((entry)=>entry.place.toLowerCase() === inputValue.toLowerCase());
    if(foundEntry){
      setOutputValue(foundEntry.temp);
    }
    else{
      setOutputValue("No Match Found");
    }


 };


  return (

    <div className="Home">
      <div className="navbar-nav">
        <div className="navbar-brand">Weather</div>
        <div className="navbar-center"> 
            <input type="text" 
            placeholder='search city...'
            className="searchBox"

              />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007
             1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
      </div>
      
      <div className="glassBox1">

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
        //   </div>

        )
}


export default Home;