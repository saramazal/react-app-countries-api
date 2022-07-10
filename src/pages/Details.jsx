import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = props => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
    
  const navigate = useNavigate();
    const goBack = () => navigate('/')
    


  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
          <Button onClick={goBack}>
           <IoArrowBack /> Back
          </Button>

          {country && <Info navigate={navigate} {...country} />}
    </div>
  )
};