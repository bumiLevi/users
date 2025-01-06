import styled from "@emotion/styled";

interface SortButtonProps {
  isActive: boolean;
  sortOrder: "asc" | "desc";
}

const primaryColor = "rgba(138, 55, 110, 0.6)";
const secondaryColor = "#FFFFFF";
const borderColor = "#E0E0E0";
const hoverColor = "#F5F5F5";

export const Container = styled.div`
  height: 90%;
  width: 90%;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  border-radius: 8px;
  
`;

export const H1 = styled.h1`
  padding: 12px 0px 1px 0px;
  color: #5d4406;
  text-align: center;
  width: 100%;
`;

export const Search = styled.div`
  width: 100%;
  padding: 8px;
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  background-color: rgba(93, 68, 6, 0.1);
  justify-content: center;
  box-sizing: border-box;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const P = styled.div`
 font-weight: 600;
 color: rgba(138, 55, 110, 0.7);
`

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid rgba(138, 55, 110, 0.5);
  border-radius: 8px;
  background-color: white;
  padding: 2px 4px;
  margin: 2px 8px;
  flex-grow: 2;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px 4px;
  font-size: 15px;
  border: none;
  outline: none;
  direction: rtl;

  &::placeholder {
    color: rgba(93, 68, 6, 0.4);
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(93, 68, 6, 0.4);
    font-style: italic;
    font-weight: normal;
    text-align: right;
  }

  &:-webkit-autofill {
    -webkit-background-color: rgba(255, 255, 255, 0.5);
    -webkit-text-fill-color: #5d4406;
    -webkit-box-shadow: 0 0 0px 1000px #f5f5f5 inset;
    box-shadow: 0 0 0px 1000px #f5f5f5 inset;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(93, 68, 6, 0.4);
  padding: 2px;
  margin: 2px;
  border-radius: 6px;
  border: 1px solid rgba(93, 68, 6, 0.2);
  &:hover {
    background-color: rgba(93, 68, 6, 0.5);
    border: 1px solid ${primaryColor};
  }
`;

export const Switch = styled.input`
  appearance: none;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const SwitchLabel = styled.label<{ checked: boolean }>`
  background-color: ${({ checked }) => (checked ? primaryColor : "none")};
  border-radius: 4px;
  font-weight: 600;
  width: 75px;
  height: 30px;
  color: ${({ checked }) => (checked ? "white" : primaryColor)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Button = styled.button`
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

export const bodyWrap = styled.div`
  width: 100%;
  max-height: calc(95% - 150px);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 1px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(138, 55, 110, 0.5);
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(138, 55, 110, 0.7);
  }
  ::-webkit-scrollbar-track {
    background-color: none;
  }
`

export const TableWrapper = styled.div`
  height: 99%;
  width: calc(100% - 20px);
  min-width: 750px;
  margin-right: 10px;
  margin-left: 10px;
  flex: 1;
  flex-grow: 2;
  flex-basis: content;
`;

export const tableBody = styled.div`
  overflow-y: scroll;
  border-bottom: 2px solid ${borderColor};
  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 8px; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(138, 55, 110, 0.5);
    border-radius: 10px; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(138, 55, 110, 0.7);
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  height: calc(100% - 45px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SortButton = styled.div<SortButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 80%;
  cursor: pointer;
  .arrow {
    font-size: 20px;
    color: gray;
    line-height: 1;
  }

  .arrow {
    color: ${(props) => (props.isActive ? "black" : "gray")};
  }
`;

export const row = styled.div`
  height: 45px;
  display: flex;
  border-bottom: 1px ${borderColor};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${hoverColor};
  }
`;

export const cell = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 45px;
  white-space: nowrap;
  border-right: 1px solid ${borderColor};
  box-sizing: border-box;
`;

export const header = styled.div`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 1px solid ${borderColor};
  box-sizing: border-box;
  &:hover {
    background-color: ${primaryColor};
  }
`;
