import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
   
    }

    html {
        background: ${({ theme }) => theme.background};
        margin: 0;
        padding: 0;
        width: 100%;
    }

    #root {
        position: relative;
    }
  
`;