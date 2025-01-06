import styled from '@emotion/styled';
import { cell, header } from '../shared/data_table.styles';


const primaryColor = 'rgba(138, 55, 110, 0.5)';
const secondaryColor = '#FFFFFF';
const borderColor = '#E0E0E0';
;


export const SuccessMessage = styled.div`
    @keyframes slideInFromTop {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    }

    @keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
    }
  position: fixed;
  top: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  animation: slideInFromTop 0.5s ease-out, fadeOut 0.5s ease-out 2.5s;
`;

export const addNewUserButton = styled.button`
    background-color: ${primaryColor};
    color: ${secondaryColor};
    border: none;
    border-radius: 5px;
    margin: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: rgba(138, 55, 110, 0.7);
        transform: scale(1.0);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(138, 55, 110, 0.3);
    }
`;

export const functionButton = styled.button<{disabled?: boolean}>`
    padding: 10px;
  margin: 2px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: rgba(138, 55, 110, 0.5);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: rgba(138, 55, 110, 0.8);
    color: rgba(177, 166, 144);
  }

  &:disabled {
    background-color: rgba(156, 127, 146, 1);
    cursor: not-allowed;
  }
`;

export const editButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    /* margin-left: 5px; */
    color: ${primaryColor};
    transition: color 0.3s ease;

    &:hover {
        color: rgba(138, 55, 110, 0.7);
        transform: scale(1.4);
    }

    &:focus {
        outline: none;
    }
`;



export const userNameCell = styled(cell)`
    direction: ltr;
    width: 25%;
`;

export const userNameHeader = styled(header)`
    width: 25%;
`;

export const nameCell = styled(cell)`
    width: 25%;
`;

export const nameHeader = styled(header)`
    width: 25%;
`;

export const emailCell = styled(cell)`
    direction: ltr;
    width: 25%;
`;

export const emailHeader = styled(header)`
    width: 25%;
`;

export const buttonCell = styled(cell)`
    width: 25%;
    border-left: 1px solid ${borderColor};
`;

export const buttonHeader = styled(header)`
    width: 25%;
    border-left: 1px solid ${borderColor};
`;

