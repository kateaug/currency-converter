import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    padding: 50px;

      h4 { 
          font-size: 16px;
          text-align: center;

          @media (min-width: 600px) { 
            font-size: 20px;        
        }
          
      }
`;