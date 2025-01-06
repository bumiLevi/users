import React from "react";
import * as formStyles from "../../shared/form.styles";
import { useLoginForm } from "../../../hooks/auth/useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm: React.FC = () => {
  const {
    username,
    password,
    showPassword,
    setShowPassword,
    isLoading,
    submitError,
    handleSubmit,
  } = useLoginForm();

  return (
    <formStyles.Container>
      <formStyles.H1>דף כניסה</formStyles.H1>
      <formStyles.Form onSubmit={handleSubmit}>
        <formStyles.InputContainer>
          <formStyles.Label>שם משתמש</formStyles.Label>
          <formStyles.Input
            type="text"
            autoComplete="name"
            {...username}
            placeholder="הכנס שם משתמש"
            hasError={!!username.error}
            disabled={isLoading}
          />
          <formStyles.ErrorText>{username.error}</formStyles.ErrorText>
        </formStyles.InputContainer>
        <formStyles.InputContainer>
          <formStyles.Label>סיסמה</formStyles.Label>
          <formStyles.PasswordInputWrapper>
            <formStyles.Input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              {...password}
              placeholder="הכנס סיסמה"
              hasError={!!password.error}
              disabled={isLoading}
            />
            <formStyles.TogglePasswordVisibility
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </formStyles.TogglePasswordVisibility>
          </formStyles.PasswordInputWrapper>
          <formStyles.ErrorText>{password.error}</formStyles.ErrorText>
        </formStyles.InputContainer>
        <formStyles.InputContainer>
          <formStyles.Button type="submit" disabled={isLoading}>
            {isLoading ? <formStyles.Spinner/> : "היכנס"}
          </formStyles.Button>
        </formStyles.InputContainer>
        <formStyles.SubmitError>{submitError}</formStyles.SubmitError>
      </formStyles.Form>
    </formStyles.Container >
  );
};

export default LoginForm;
