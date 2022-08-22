import React from 'react';
import '../styles/routesDataMobile.css'

const RoutesDataMobile = (props) => {
    const { distance,  duration} = props;
  return (
    <div className='routesDataMobile__container'>
        <div>
            <h2>Distancia:</h2>
            <p>{distance}</p>
        </div>
        <div>
            <h2>Duracion:</h2>
            <p>{duration}</p>
        </div>
    </div>
  )
}

export default RoutesDataMobile