import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    padding: 40px 10px 10px 10px;

    @media (min-width: 600px) { 
        padding: 50px;        
    }

      h4 { 
          font-size: 14px;
          text-align: center;

          @media (min-width: 600px) { 
            font-size: 20px;        
        }
          
      }
`;