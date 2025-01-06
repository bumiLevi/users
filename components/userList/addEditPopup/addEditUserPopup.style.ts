import styled from "@emotion/styled";
import * as styles from "../../shared/form.styles";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: relative;
   background-color: rgba(255, 255, 255, 0.9);
  padding: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  border-radius: 8px;
`;

export const phoneInput = styled(styles.Input)`
    direction: ltr;
`;

export const emailInput = styled(styles.Input)`
    direction: ltr;
`;