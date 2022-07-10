import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';


import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
font-size: 3em;
font-weight: 700;
font-family: 'Genos', sans-serif;
color: #03dac6;
letter-spacing: 2px;
text-align: center;
transition: transform 0.7s ease;
text-decoration: none;
&:hover {
  color: #ff0266;
  transform: scale(1.09);
  cursor: pointer;
}
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
 
  transition: transform 0.7s ease;
  &:hover {
    color: #ff0266;
    transform: scale(1.2);
  }
`;

export const Header = () => {
  const [theme, setTheme] = useState('day');

  const toggleTheme = () => setTheme(theme === 'day' ? 'night' : 'day');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>COUNTRIES</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'day' ? (
                          <BrightnessLowIcon style={{ color: '#03dac6' }} size="14px" />
            ) : (
              <AutoAwesomeIcon style={{color:'#FFFF00'}} size="14px" />
            )}{' '}
                      <span style={{ marginLeft: '0.75rem' }} ></span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
