import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    margin-bottom: 30px;

    @media (min-width: 600px) {
        margin-bottom: 40px;
    }


    @media (min-width: 1200px) {
        padding: 20px 100px;
    }

    h1 {
        font-size: 17px;
        color: ${({ theme }) => theme.text};

        @media (min-width: 600px) {
            font-size: 15px;
        }
    }
    
    button {
        display: flex;
        font-size: 17px;
        justify-content: space-around;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        margin-right: 0;  
        background: transparent;

        span {
            display: none;
            @media (min-width: 600px) {
                display: block;
                color: ${({ theme }) => theme.text};
            }
          
        }
        svg {
            color: ${({ theme }) => theme.text};
            @media (min-width: 600px) { 
                margin-right: 10px;
            }
        }
    }
`;