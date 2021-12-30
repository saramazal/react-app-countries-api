export default function Country(props) {
    const { flags, name, capital, region } = props

    return <li>
        
        <label
            className='flag'
            style={{ backgroundImage: `url(${flags.svg})` }}
        ></label>
     <label className='name'> {name.common}</label>  
 <label className='capital'>{capital}</label>
 <label className="region">{region}</label>
 
      </li>
        
}   