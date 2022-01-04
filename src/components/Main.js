import Header from './Header'
import CountriesList from './CountriesList'
import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const SearchContext = createContext()

export default function Main() {
    const
        [list, setList] = useState(),
        [searchValue, setSearchValue] = useState('')

    useEffect(getCountries, [])

    function getCountries() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(result => {
                setList(result.data)
            })
    }

    if (!list) return <Loader 
                         arialLabel="loading-indicator"
                         type="Circles"
                         color="#FF0266"
                         className="loader"
                         radius="22" />/*'loading' */
                    

    const filteredList = list.filter(c =>
        c.name.common
            .toLowerCase()
            .startsWith(searchValue.toLowerCase())
    )

    return <main>
   
        <SearchContext.Provider value={setSearchValue}>
         <Header countriesNum={filteredList.length} />
         
        </SearchContext.Provider>
        
        <CountriesList list={filteredList} />
    </main>
}