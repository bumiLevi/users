import { useState, ChangeEvent } from "react";
import { validate, type ValidationOptions } from "../../utils/validation";

interface ValidationInput {
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  error: string;
  validate: () => boolean;
}

export const useValidInput = (
  initialValue: any,
  validationOptions: ValidationOptions
): ValidationInput => {
  const [value, setValue] = useState<any>(initialValue);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(validate(newValue, validationOptions));
  };

  const validateInput = (): boolean => {
    const validationError = validate(value, validationOptions);
    setError(validationError);
    return validationError === "";
  };

  return {
    value: value,
    onChange: handleChange,
    error: error,
    validate: validateInput,
  };
};
