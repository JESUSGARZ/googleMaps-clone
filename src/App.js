import React, {useState} from 'react'
import './App.css';
import Map from './components/Map';
import SearchMobile from './components/SearchMobile';

function App() {
  const [search, setSearch] = useState(true);

  return (
    <div className='app__container '>
      <SearchMobile search = {search} setSearch= {setSearch}/>
      <Map search = {search} setSearch= {setSearch}/> 
    </div>
    
  );
}

export default App;
