import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%
     }

    html {
        background: ${({ theme }) => theme.background};
        margin: 0;
        padding: 0;
        width: 100%;
    }

    
  
`;