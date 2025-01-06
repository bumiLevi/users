import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useValidInput } from "../shared/useValidInput";
import { userLoginService } from "../../services/authService";
import { setClientData } from "../../store/clientSlice";

interface UseLoginFormReturn {
  username: ReturnType<typeof useValidInput>;
  password: ReturnType<typeof useValidInput>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  submitError: string | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const username = useValidInput("", {
    required: true,
    min: 3,
    max: 20,
    patterns: ["username"],
  });

  const password = useValidInput("", {
    required: true,
    min: 4,
    max: 128,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isUsernameValid = username.validate();
    const isPasswordValid = password.validate();

    if (!isUsernameValid || !isPasswordValid) {
      return;
    }

    setIsLoading(true);
    setSubmitError(null);

    try {
      const { res, err } = await userLoginService({
        username: username.value,
        password: password.value,
      });
  
      if (res) {
        console.log(res.data)
        localStorage.setItem("authToken", res.data.token);
        //I don't really need it but you should have the user details there if you already do it
        dispatch(
          setClientData({
            _id: res.data._id,
            username: res.data.username,
            email: res.data.email,
            name: res.data.name,
            token: res.data.token,
          })
        );
        navigate(`/users`);
      } else {
        setSubmitError(err?.error || "ⓘ שגיאה במהלך הכניסה. נסה שוב.");
      }
    } catch (error) {
      setSubmitError("ⓘ שגיאה במהלך הכניסה. נסה שוב.");
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    password,
    showPassword,
    setShowPassword,
    isLoading,
    submitError,
    handleSubmit,
  };
};
