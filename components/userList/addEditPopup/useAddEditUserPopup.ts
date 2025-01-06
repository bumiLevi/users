import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useValidInput } from "../../../hooks/shared/useValidInput";
import { updateUserList } from "../../../store/usersSlice";
import { createUser, editUser } from "../../../services/userListService";
import { customMessageAlert } from '../../shared/costumeAlert/customAlert';


interface UseUserListReturn {
    username: ReturnType<typeof useValidInput>;
    fullName: ReturnType<typeof useValidInput>;
    email: ReturnType<typeof useValidInput>;
    password: ReturnType<typeof useValidInput>;
    isLoading: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }

  
export const useListForm = (user: any, onClose: () => void): UseUserListReturn => {

  const username = useValidInput(user?.username || "", {
      required: true,
      min: 3,
      max: 20,
      patterns: ["username"],
  });

  const fullName = useValidInput(user?.fullName || "", {
    required: true,
    min: 3,
    max: 35,
    patterns: ["username"],
});

  const password = useValidInput("", {
      required: true,
      min: 8,
      max: 128,
      patterns: ["hasUppercase", "hasLowercaseOrNumber"],
  });

  const email = useValidInput(user?.email || "", {
      required: true,
      min: 8,
      max: 128,
      patterns: ["email"],
  });


  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  const isUsernameValid = username.validate();
  const isNameValid = username.validate();
  const isEmailValid = email.validate(); 
  const isPasswordValid = password.validate();
  
  if (!isUsernameValid || !isEmailValid || !isNameValid || (!user && !isPasswordValid)) {
    return;
  }
  
  setIsLoading(true);

      const {err, res} =  await (!user ? 
       createUser({
        username: username.value,
        fullName: fullName.value,
        password: password.value,
        email: email.value,
      }) : 
        editUser({
          _id: user._id,
          username: username.value,
          email: email.value,
          fullName: fullName.value,
        }));
     
        
        if (res) {
        dispatch(
          updateUserList(res.data)
        );
        customMessageAlert({ message: "ⓘ משתמש נשמר בהצלחה", type: 'success'})
        onClose();
      } else {
        customMessageAlert({ message: `ⓘ שגיאה בעת שמירה: ${err?.message}`, type: 'error'})
      }
      setIsLoading(false);
  };

  return {
    username,
    fullName,
    email,
    password,
    isLoading,
    handleSubmit,
  };
};
