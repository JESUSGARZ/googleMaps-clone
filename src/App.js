import React, {useState} from 'react'
import './App.css';
import Map from './components/Map';
import RoutesDataMobile from './components/RoutesDataMobile';
import SearchMobile from './components/SearchMobile';

function App() {
  const [search, setSearch] = useState(true);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <div className='app__container '>
      <SearchMobile search = {search} setSearch= {setSearch} />
      <RoutesDataMobile search = {search} setSearch= {setSearch} distance={distance} setDistance={setDistance} duration ={duration} setDuration={setDuration} /> 
      <Map search = {search} setSearch= {setSearch} distance={distance} setDistance={setDistance} duration ={duration} setDuration={setDuration}/> 
    </div>
    
  );
}

export default App;
