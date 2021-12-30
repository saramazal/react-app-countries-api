import { useContext } from "react"
import { PopupContext } from "../App"

export default function Country(props) {

    const [, setPopup] = useContext(PopupContext)
    const { flags, name, capital, region } = props

    return <li onClick={() => setPopup(<CountryOpen {...props} />)}>

            <label
            className='flag'
            style={{ backgroundImage: `url(${flags.svg})` }}
        ></label>
        
        
            <label className="name">{name.common}</label> 
            <label className="capital">{capital}</label>
            <label className="region">{region}</label>
        
    </li>
}


function CountryOpen(props) {
    const { name = {}, flags = {}, languages = {}, population } = props

    return <div className='countryOpen'>
        <h2 >{name.common}</h2>
        <img className="flag" src={flags.svg} />
        <h4>Population: </h4>
        <span>{population}</span>
        <h4>Languages:</h4>
        <ul>{Object.values(languages).map(l => <li key={l} >{l}</li>)}</ul>
    </div>
}  