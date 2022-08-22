import React, {useRef, useState} from 'react';
import '../styles/map.css';
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import Loading from './Loading';


const center = {lat:4.689385, lng: -74.034844}

const Map = (props) => {
  const {search, setSearch, distance, setDistance, duration, setDuration} = props;
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBiuA55ioK9NkW9D3BPMI6er3V4EPcG91I',
    libraries:['places']
  });

  const [map, setMap] = useState(/** @type google.maps.map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef()

  if (!isLoaded) {
    return <Loading/>  
  }

  async function createRoute () {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    if (search === false) {
      toggleSearch()
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const directions = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    setDirectionsResponse(directions);
    setDistance(directions.routes[0].legs[0].distance.text);
    setDuration(directions.routes[0].legs[0].duration.text);
    
  }

  function clearRoute() {
    if (search === false) {
      toggleSearch()
    }
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
    map.panTo(center);
    map.setZoom(18);
  }

  function toggleSearch() {
    if (search === false) {
      const searchMobileContainer = document.querySelector('.searchMobile__container');
      searchMobileContainer.style.display = 'flex';  
      const routesDataMobile = document.querySelector('.routesDataMobile__container');
      routesDataMobile.style.display = 'flex';
      const searchContainer = document.querySelector('.search__container');
      searchContainer.style.display = 'none';
      setSearch(true) 
    } 
  }



  return (
    <div className='map__container'>
      <div className='search__container'>
        <div>
            <label>Origen:</label>
            <Autocomplete>
              <input type={'text'} placeholder= {'Roma, colliseum'} ref={originRef}/>
            </Autocomplete>
            
            <label>Destino:</label>
            <Autocomplete>
              <input type={'text'} placeholder= {'itali'} ref={destinationRef}/>
            </Autocomplete>
            
        </div>
        {/* <div className='search__route-data'>
            <label>Distancia (km):</label>
            <h3 disabled >{distance}</h3>
            <label>Tiempo (minutos):</label>
            <h3 disabled >{duration}</h3>
        </div> */}
        <div className='searchButtons__container'>
            <button onClick={createRoute}>Calcular Ruta</button>
            <button onClick={clearRoute}>Volver</button>
        </div>
      </div>

      <GoogleMap 
        center={center} 
        zoom ={18}
        mapContainerStyle={{width:'100%', height:'100%'}}
        onLoad = {map => setMap(map)}
      >
          <Marker position={ center } />
          {directionsResponse !== null && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap> 
    </div>
  )
}

export default Map