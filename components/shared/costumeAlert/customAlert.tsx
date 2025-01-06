import React, { useEffect } from "react";
import * as MessageAlertStyles from "./customAlert.styles";
// import { closeCostumedAlert, costumeMessage } from "./useMessage_Alert";
import { closeCostumedAlert, showCostumeAlert } from "../costumeConfirm/showCloseCostumeAlert";


interface MessageAlertProps {
  message?: string;
  type?: "success" | "error" | "info";
}


export const MessageAlert: React.FC<MessageAlertProps> = ({
  message = 'נשמר בהצלחה',
  type = "success",
}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      closeCostumedAlert();
    }, 3000); // Close after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (    
      <MessageAlertStyles.Container type={type}>
        <MessageAlertStyles.PopupContent>
          <MessageAlertStyles.ConfirmMessage>{message}</MessageAlertStyles.ConfirmMessage>
          <MessageAlertStyles.CancelButton onClick={closeCostumedAlert}>x</MessageAlertStyles.CancelButton>
        </MessageAlertStyles.PopupContent>
      </MessageAlertStyles.Container>
  );
};


export const customMessageAlert = (props: MessageAlertProps) => {
  showCostumeAlert(<MessageAlert {...props}/>)
}