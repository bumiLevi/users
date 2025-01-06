import styled from "@emotion/styled";

interface PopupContentProps {
  type: "success" | "error" | "info";
}


export const Container = styled.div<PopupContentProps>`
    @keyframes slideInFromTop {
    0% {
        transform: translateY(-100%) translateX(-50%);
        opacity: 0;
    }
    100% {
        transform: translateY(0) translateX(-50%);
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
  background-color: ${({ type }) => {
    switch(type) {
      case "success": return "rgba(76, 165, 80, 1)"; 
      case "error": return "rgb(222, 85, 85)"; 
      case "info": return "rgba(163, 138, 76, 1)"; 
      default: return "#ffffff"}}};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 30px;
  left: 50%;
  border-radius: 8px;
  z-index: 1000;
  transform: translateX(-50%);
  animation: slideInFromTop 0.5s ease-out, fadeOut 0.5s ease-out 2.5s;
  padding: 16px 20px;
  width: 60%;
  max-width: 300px;
`;

export const PopupContent = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ConfirmMessage = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;


export const CancelButton = styled.button`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-right: 12px;
  color: white;
  background-color: rgba(138, 55, 110, 0);
  border: none;
  border-radius: 4px;
  width: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    scale: 1.2;
    font-weight: bold;
  }

  &:disabled {
    background-color: rgba(156, 127, 146, 1);
    cursor: not-allowed;
  }
`;

