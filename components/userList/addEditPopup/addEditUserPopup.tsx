import React from "react";
import * as styles from "./addEditUserPopup.style";
import * as formStyles from '../../shared/form.styles';
import { useListForm } from "./useAddEditUserPopup";


interface PopupProps {
  user?: any;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({user, onClose}) => {
  const {
    username,
    fullName,
    email,
    password,
    isLoading,
    handleSubmit,
  } = useListForm(user, onClose);

  return (
    <styles.Overlay>
    <styles.Container>
      <formStyles.closeButton onClick={onClose} aria-label="delete">&times;</formStyles.closeButton>
      {user ? (<formStyles.H1>עריכת משתמש</formStyles.H1>)
      : (<formStyles.H1>הוספת משתמש</formStyles.H1>)}
      <formStyles.Form onSubmit={handleSubmit}>
        <formStyles.InputContainer>
          <formStyles.Label>שם משתמש</formStyles.Label>
          <formStyles.Input
            type="text"
            name="username"
            autoComplete="username"
            {...username}
            placeholder="הכנס שם משתמש"
            hasError={!!username.error}
            disabled={isLoading}
          />
          <formStyles.ErrorText>{username.error}</formStyles.ErrorText>
        </formStyles.InputContainer>
        
        <formStyles.InputContainer>
          <formStyles.Label>שם מלא</formStyles.Label>
          <styles.phoneInput
            type="text"
            name="fullName"
            autoComplete="fullName"
            {...fullName}
            placeholder="הכנס שם מלא"
            hasError={!!fullName.error}
            disabled={isLoading}
          />
          <formStyles.ErrorText>{fullName.error}</formStyles.ErrorText>
        </formStyles.InputContainer>

        <formStyles.InputContainer>
          <formStyles.Label>אימייל</formStyles.Label>
          <styles.emailInput
            type="text"
            name="email"
            autoComplete="email"
            {...email}
            placeholder="הכנס כתובת אימייל"
            hasError={!!email.error}
            disabled={isLoading}
          />
          <formStyles.ErrorText>{email.error}</formStyles.ErrorText>
        </formStyles.InputContainer>
        {!user && <formStyles.InputContainer>
          <formStyles.Label>סיסמה</formStyles.Label>
          <styles.emailInput
            type="text"
            name="password"
            autoComplete="password"
            {...password}
            placeholder="הכנס סיסמה"
            hasError={!!password.error}
            disabled={isLoading}
          />
          <formStyles.ErrorText>{password.error}</formStyles.ErrorText>
        </formStyles.InputContainer>
        }


        <formStyles.InputContainer>
          <formStyles.Button type="submit" disabled={isLoading}>
            {user ? 
            (isLoading ? <formStyles.Spinner/> : "עדכן")
            : (isLoading ? <formStyles.Spinner/> : "הוסף")}
          </formStyles.Button>
        </formStyles.InputContainer>
      </formStyles.Form>
    </styles.Container>
    </styles.Overlay>
  );
};

export default Popup;
