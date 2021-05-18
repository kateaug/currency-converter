import styled from 'styled-components';

export const Container = styled.form`
padding-bottom: 2.5rem;
    width: 80%;
    background-color: ${(theme) => theme.background};
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin: 0 auto;   
    justify-content: space-between;

        @media (min-width: 600px) { 
            border: 2px solid ${({ theme }) => theme.text};
            border-radius: 4px;        
        }
    
        @media (min-width: 1200px) {
          padding: 25px;

        }
   
`;

export const Rates = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;

        @media (min-width: 600px) { 
            flex-direction: row;
        }
   
`;

export const Option = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 15px 0;
   width: 100%;

        span {
            color: ${({ theme }) => theme.text};
            font-size: 17px;
            font-weight: bold
        }

        @media (min-width: 600px) { 
            padding: 20px;
        }
`;

export const Conversion = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   align-items: center;
   justify-content: start;
   //height: 100px;
   padding: 20px 0;

        @media (min-width: 600px) { 
            flex-direction: row;
            padding: 20px;
            margin-top: 50px;


        }
`;

export const Input = styled.input`
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    [type=number] {
    -moz-appearance: textfield;
    }
    
    max-width: 100%;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.text};
    border-bottom: 2px solid ${({ theme }) => theme.text};
    padding: 15px;
    width: 100%; 
    outline: none;
    font-size: 20px;
    margin: 10px 0;  
    transition: all 0.3s ease 0s;
    
        &:focus {
            border-bottom: 2px solid ${({ theme }) => theme.elements};
        }   
     
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme}) => theme.elements};
    color: ${({ theme }) => theme.text};
    border: none;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.10);
    width: 100%;
    font-size: 17px;
    border-radius: 4px;
    transition: all 0.3s ease 0s;
    min-height: 100%;
    padding: 15px;
    
   
        &:hover {
            background-color:${({theme}) => theme.hover};
            
        }

        &:disabled {
            background-color:${({theme}) => theme.disabled};
        }
        
        @media (min-width: 600px) { 
            width: 32%;
           // font-size: 15px;
           // padding: 15px;
        }

        @media (min-width: 1200px) { 
            width: 20%;
        } 


`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: space-between;
  padding: 20px 0;
  color: ${({ theme }) => theme.text};

  @media (min-width: 600px) { 
    //flex-direction: row;
  }

`;

export const ResultEquls = styled.div`
  padding: 5px;
  font-size: 20px;

  span {
      padding: 5px;
  }

  :nth-child(2) {
      font-size: 25px;

  }

`;
