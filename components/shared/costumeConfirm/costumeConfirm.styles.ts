import styled from "@emotion/styled";

interface ConfirmAlertProps {
  primary: "delete" | "confirm";
}

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  position: relative;
  background-color:  rgb(229 217 225);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  width: 90%;
  padding: 16px;
  color: #5d4406;
  text-align: center;
`;

export const H2 = styled.h2`
  direction: rtl;
  padding: 16px 0px 8px 0px;
  color: #5d4406;
  text-align: center;
`;

export const ConfirmMessage = styled.p`
  direction: rtl;
  color: #5d4406;
  font-size: 16px;
  margin: 8px 0;
  margin-bottom: 32px;
`;

export const ConfirmButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;

export const ConfirmButton = styled.button<ConfirmAlertProps>`
  direction: rtl;
  padding: 10px 24px;
  font-size: 14px;
  color: white;
  background-color: ${({ primary }) => primary === 'confirm' ? 'rgba(138, 55, 110, 0.8)' : 'rgba(93, 68, 6, 0.4)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => primary === 'confirm' ? 'rgba(138, 55, 110, 1)' : 'rgba(93, 68, 6, 0.7)'};
  }

  &:disabled {
    background-color: rgba(156, 127, 146, 1);
    cursor: not-allowed;
  }
`;

export const CancelButton = styled(ConfirmButton)<ConfirmAlertProps>`
  padding: 10px 24px;
  font-size: 14px;
  color: white;
  background-color: ${({ primary }) => primary === 'confirm' ? 'rgba(93, 68, 6, 0.4)' : 'rgba(138, 55, 110, 0.8)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => primary === 'confirm' ? 'rgba(93, 68, 6, 0.7)' : 'rgba(138, 55, 110, 1)'};
  }

  &:disabled {
    background-color: rgba(156, 127, 146, 1);
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;
