import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'




export const Header = ( {toggleThemes} ) => {

  const { name } = useContext(ThemeContext);

  return (
    
     <Container>  
            <h1>Currency Converter</h1>      
            <button onClick={toggleThemes}>
               {name === 'light' ? (
                        <>
                            <FontAwesomeIcon icon={faSun} /> <span>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode</span>
                        </>
                )}
            </button>

     </Container>
     
 );
};