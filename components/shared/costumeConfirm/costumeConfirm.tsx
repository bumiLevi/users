import React from "react";
import * as ConfirmAlertStyles from "./costumeConfirm.styles";
import { useConfirmAlert } from "../../../hooks/shared/useConfirmAlert";
import { showCostumeAlert } from "./showCloseCostumeAlert";


interface ConfirmAlertProps {
  title?: string;
  message?: string | React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  primary?: "delete" | "confirm";
  isClose?: boolean
  onConfirm: () => void;
  onCancel?: () => void;
}

export const ConfirmAlert: React.FC<ConfirmAlertProps> = ({
  title = "אישור פעולה",
  message = "האם אתה בטוח שברצונך להמשיך?",
  confirmText = "אישור",
  cancelText = "ביטול",
  primary = "delete",
  isClose = false,
  onConfirm,
  onCancel,
}) => {
  const { handleConfirm, handleCancel, onClose } = useConfirmAlert({ onConfirm, onCancel });

  return (
    <ConfirmAlertStyles.PopupOverlay>
      <ConfirmAlertStyles.PopupContent>
        {isClose && <ConfirmAlertStyles.CloseButton onClick={onClose}>
          &times;
        </ConfirmAlertStyles.CloseButton>}
        <ConfirmAlertStyles.H2>{title}</ConfirmAlertStyles.H2>
        <ConfirmAlertStyles.ConfirmMessage>{message}</ConfirmAlertStyles.ConfirmMessage>
        <ConfirmAlertStyles.ConfirmButtonsWrapper>
          <ConfirmAlertStyles.ConfirmButton primary={primary} onClick={handleConfirm}>
            {confirmText}
          </ConfirmAlertStyles.ConfirmButton>
          <ConfirmAlertStyles.CancelButton primary={primary} onClick={handleCancel}>
            {cancelText}
          </ConfirmAlertStyles.CancelButton>
        </ConfirmAlertStyles.ConfirmButtonsWrapper>
      </ConfirmAlertStyles.PopupContent>
    </ConfirmAlertStyles.PopupOverlay>
  );
};


export const costumedConfirm = (props: ConfirmAlertProps) => {
  showCostumeAlert(<ConfirmAlert {...props} />)
}