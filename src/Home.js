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
      <h1>WEATHER</h1>
      <div className="glassBox">

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
       <br/>
        <button onClick={processInput}>Output</button>
        <br/>
        <p>{outputValue}</p>
            
    

      


        </div>
          </div>

        )
}


export default Home;