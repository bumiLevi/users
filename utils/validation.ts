import { PhoneNumberUtil, PhoneNumber } from "google-libphonenumber";

const regexPatterns = {
  word: /^[A-Za-z]+$/,
  number: /^\d+$/,
  email: /^[\w.-]+@([\w-]+\.)+[\w-]{2,5}$/,
  username: /^[A-Za-z\u00C0-\u1FFF\u2C00-\uD7FF\d_ ]+$/,
  password: /^(?=.*[a-z,0-9])(?=.*[A-Z]).{5,128}$/,
  hasUppercase: /[A-Z]/,
  hasLowercaseOrNumber: /[a-z0-9]/,
  code: /^\d{5,6}$/,
  url: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}/,
  date: /^\d{4}-\d{2}-\d{2}$/,
  time: /^([01]\d|2[0-3]):([0-5]\d)$/,
  text: /^[a-zA-Z0-9\u0590-\u05FF\u0400-\u04FF\u0600-\u06FF\s\-._~:/?#[\]@!$&'()*+,;=%]+$/,
};

const errorMessages = {
  required: "ⓘ שדה חובה",
  minLength: "ⓘ מינימום {min} תווים",
  maxLength: "ⓘ מקסימום {max} תווים",
  minNumber: "ⓘ מינימום {min}",
  maxNumber: "ⓘ מקסימום {max}",
  word: "ⓘ אותיות בלבד",
  number: "ⓘ מספרים בלבד",
  email: "ⓘ פורמט אימייל לא תקין",
  username: "ⓘ שם משתמש לא תקין",
  password: "ⓘ סיסמה: אות אחת גדולה ומספר/אות אחת קטנה",
  hasUppercase: "ⓘ סיסמה חייבת להכיל לפחות אות גדולה אחת",
  hasLowercaseOrNumber: "ⓘ סיסמה חייבת להכיל לפחות מספר/אות אחת קטנה",
  code: "ⓘ קוד אימות: 5-6 ספרות",
  date: "ⓘ פורמט תאריך: YYYY-MM-DD",
  time: "ⓘ פורמט שעה: HH:MM",
  text: "ⓘ טקסט לא תקין",
  match: "ⓘ הערכים לא תואמים",
  phone: "ⓘ מספר טלפון לא חוקי",
  url: "ⓘ קישור אינו תקין",
};

const validateRequired = (value: string | number): string => {
  if (typeof value === "number") return "";
  return value.trim() === "" ? errorMessages.required : "";
};

const validateMinLength = (value: string, min: number): string => {
  return value.length < min
    ? errorMessages.minLength.replace("{min}", min.toString())
    : "";
};

const validateMaxLength = (value: string, max: number): string => {
  return value.length > max
    ? errorMessages.maxLength.replace("{max}", max.toString())
    : "";
};

const validateMinNumber = (value: string, min: number): string => {
  const numericValue = Number(value);

  if (isNaN(numericValue)) {
    return errorMessages.number;
  }

  return numericValue < min
    ? errorMessages.minNumber.replace("{min}", min.toString())
    : "";
};

const validateMaxNumber = (value: string, max: number): string => {
  const numericValue = Number(value);

  if (isNaN(numericValue)) {
    return errorMessages.number;
  }

  return numericValue > max
    ? errorMessages.maxNumber.replace("{max}", max.toString())
    : "";
};

const validateMatch = (value: string, confirmValue: string): string => {
  return value === confirmValue ? "" : errorMessages.match;
};

const validateWithRegexPatterns = (
  value: string,
  patterns: (keyof typeof regexPatterns)[],
  customMessages: string[] = []
): string => {
  for (let i = 0; i < patterns.length; i++) {
    const pattern = regexPatterns[patterns[i]];
    const message = customMessages[i] || errorMessages[patterns[i]];
    if (!pattern.test(value)) {
      return message;
    }
  }
  return "";
};

interface ValidationOptions {
  required?: boolean;
  min?: number;
  max?: number;
  minNumber?: number;
  maxNumber?: number;
  match?: string;
  patterns?: (keyof typeof regexPatterns)[];
  customMessages?: string[];
  validate?: (value: string) => string | boolean;
  phone?: boolean;
}

const validate = (value: string, options: ValidationOptions): string => {
  let error = "";

  if (options.required) {
    error = validateRequired(value);
    if (error) return error;
  }

  if (options.min !== undefined) {
    error = validateMinLength(value, options.min);
    if (error) return error;
  }

  if (options.max !== undefined) {
    error = validateMaxLength(value, options.max);
    if (error) return error;
  }
  if (options.minNumber !== undefined) {
    error = validateMinNumber(value, options.minNumber);
    if (error) return error;
  }

  if (options.maxNumber !== undefined) {
    error = validateMaxNumber(value, options.maxNumber);
    if (error) return error;
  }

  if (options.match) {
    error = validateMatch(value, options.match);
    if (error) return error;
  }

  if (options.patterns) {
    error = validateWithRegexPatterns(
      value,
      options.patterns,
      options.customMessages || []
    );
    if (error) return error;
  }

  if (options.validate) {
    const customError = options.validate(value);
    if (typeof customError === "string") {
      return customError;
    }
  }

  return "";
};

export { validate, type ValidationOptions };
