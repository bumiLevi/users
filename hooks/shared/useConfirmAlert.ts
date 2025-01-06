import { useState } from "react";
import { closeCostumedAlert } from "../../components/shared/costumeConfirm/showCloseCostumeAlert";

interface ConfirmAlertProps {
  onConfirm: () => void;
  onCancel?: () => void;
}

interface UseConfirmAlertReturn {
  handleConfirm: () => void;
  handleCancel: () => void;
  onClose: () => void;
}

export const useConfirmAlert = ({
  onConfirm,
  onCancel,
}: ConfirmAlertProps): UseConfirmAlertReturn => {
  const handleConfirm = () => {
    onConfirm();
    closeCostumedAlert();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    closeCostumedAlert();
  };

  const onClose = () => {
    closeCostumedAlert();
  };

  return { handleConfirm, handleCancel, onClose };
};
