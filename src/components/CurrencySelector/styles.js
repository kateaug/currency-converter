import styled from 'styled-components';


export const Select = styled.div`

    select {
        // reset of styles, including removing the default dropdown arrow
        appearance: none;
        background-color: transparent;
        border: none;
        margin: 0;
        margin-left: 8px;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
        z-index: 1;
        outline: none;
        color: ${({ theme }) => theme.textElements};
        transition: all 0.3s ease 0s;

        &::-ms-expand {
            display: none;
        }

        &:focus + span {
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            border: 2px solid ${({ theme }) => theme.elements};
            border-radius: inherit;
        }

    }
    
    // styles for select div
    width: 100%;
    min-width: 40vw;
    max-width: 70vw;
    border: 0;
    background-color: ${({ theme }) => theme.selectElements};
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.10);
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    display: grid;
    align-items: center;
    position: relative;
    margin: 10px 0;   

    @media (min-width: 600px) { 
        min-width: 15vw;
        max-width: 30vw;
    }
    
    // custom dropdown arrow
    &:after {
        content: '';
        width: 0.7em;
        height: 0.4em;
        background-color: ${({ theme }) => theme.selectArrow};
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        justify-self: end;
        position: absolute;
        margin-right: 16px;
    }
     
`;