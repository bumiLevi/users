import styled from "@emotion/styled";

export const Container = styled.div`
  height: fit-content;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
  color: #5d4406;
  text-align: center;
`;

export const H1 = styled.h1`
  padding: 8px 0px 18px 0px;
  color: #5d4406;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  margin: 0 auto;
  padding: 16px 16px 24px 16px;
  background-color: rgb(229 217 225);
  border-radius: 8px;
  box-shadow:  0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
`;

export const Label = styled.label`
  direction: rtl;
  display: block;
  color: #5d4406;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 6px;
  margin-top: 12px;
  text-align: right;
  width: 89%;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  direction: rtl;
  background-color: rgba(255, 255, 255, 0.5);
  width: 80%;
  color: #5d4406;
  padding: 12px;
  margin-bottom: 1px;
  font-size: 15px;
  border: 1px solid
    ${({ hasError }) => (hasError ? "red" : "rgba(138, 55, 110, 0.5)")};
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.4s;

  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? "red" : "rgba(138, 55, 110, 0.5)"};
    border-width: 1px;
    box-shadow: 0 0 6px
      ${({ hasError }) =>
        hasError ? "rgba(255, 0, 0, 0.7)" : "rgba(138, 55, 110, 0.7)"};
    outline: none;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(93, 68, 6, 0.4);
    font-style: italic;
    font-weight: normal;
    text-align: right;
  }

  &:-webkit-autofill {
    -webkit-background-color: rgba(255, 255, 255, 0.5);
    -webkit-text-fill-color: #5d4406;
    -webkit-box-shadow: 0 0 0px 1000px #f5f5f5 inset;
    box-shadow: 0 0 0px 1000px #f5f5f5 inset;
  }
`;

export const LtrInput = styled(Input)`
  direction: ltr;
`;


export const Select = styled.select<{ hasError?: boolean }>`
  direction: rtl;
  background-color: rgba(255, 255, 255, 0.5);
  width: 80%;
  color: #5d4406;
  padding: 12px;
  margin-bottom: 1px;
  font-size: 15px;
  border: 1px solid
    ${({ hasError }) => (hasError ? "red" : "rgba(138, 55, 110, 0.5)")};
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.4s;
  box-sizing: content-box;

  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? "red" : "rgba(138, 55, 110, 0.5)"};
    border-width: 1px;
    box-shadow: 0 0 6px
      ${({ hasError }) =>
        hasError ? "rgba(255, 0, 0, 0.7)" : "rgba(138, 55, 110, 0.7)"};
    outline: none;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(93, 68, 6, 0.4);
    font-style: italic;
    font-weight: normal;
    text-align: right;
  }

  &:-webkit-autofill {
    -webkit-background-color: rgba(255, 255, 255, 0.5);
    -webkit-text-fill-color: #5d4406;
    -webkit-box-shadow: 0 0 0px 1000px #f5f5f5 inset;
    box-shadow: 0 0 0px 1000px #f5f5f5 inset;
  }
`;


export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TogglePasswordVisibility = styled.button`
  padding-left: 20px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #5d4406;
`;

export const ErrorText = styled.p`
  direction: rtl;
  height: 5px;
  color: red;
  font-size: 12px;
  margin: 0px;
  text-align: right;
  width: 89%;
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 12px 32px;
  font-size: 16px;
  color: #5d4406;
  background-color: rgba(138, 55, 110, 0.5);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: rgba(138, 55, 110, 0.8);
    color: rgba(177, 166, 144);
  }

  &:disabled {
    background-color: rgba(156, 127, 146, 1);
    cursor: not-allowed;
  }
`;

export const cancelButton = styled(Button)`
  background-color: rgba(93, 68, 6, 0.4);

  &:hover {
    background-color: rgba(93, 68, 6, 0.7);
  }
  &:disabled {
    background-color: rgba(156, 127, 146, 1);
  }
`

export const SubmitError = styled.p`
  direction: rtl;
  min-height: 5px;
  color: red;
  font-size: 16px;
  margin: 4px;
  text-align: center;
`;

export const closeButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;


  &:hover {
    color: rgba(177, 166, 144);
  }
`;

export const Link = styled.a`
    color: rgba(138, 55, 110, 0.8);
`;

export const Spinner = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3.8px solid;
  border-color: #dbdcef;
  border-right-color: rgba(117, 108, 84);
  animation: spinner-d3wgkg 1s infinite linear;


@keyframes spinner-d3wgkg {
  to {
     transform: rotate(1turn);
  }}
`;