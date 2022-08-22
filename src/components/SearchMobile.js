import React from 'react';
import '../styles/search.css'

const SearchMobile = (props) => {
    const {search, setSearch} =  props;

    function toogleSearch() {
        if (search === true) {
            const searchMobileContainer = document.querySelector('.searchMobile__container');
            searchMobileContainer.style.display = 'none';
            const routesDataMobile = document.querySelector('.routesDataMobile__container');
            routesDataMobile.style.display = 'none';
            const searchContainer = document.querySelector('.search__container');
            searchContainer.style.display = 'flex';
            setSearch(false)
        }
    }

  return (
    <div className='searchMobile__container' onClick={toogleSearch} >
        <img src='https://subir-imagen.com/images/2022/08/21/search.png' alt=''/>
        <h2>Buscar</h2>
    </div>
  )
}

export default SearchMobile