const required = (value) => (value ? undefined : "Required");
//export const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const maxLength6 = maxLength(6);

const numeric = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
const alpha = (value) =>
  value && /[^a-zA-Z ]/i.test(value) ? "Only alpha characters" : undefined;
const mobileNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const passwordValidate = (values) =>
  values && values !== document.querySelectorAll("input#password")[0].value
    ? "Password mismatched"
    : undefined;

module.exports = {
  Required: required,
  MaxLength15: maxLength15,
  MaxLength6: maxLength6,
  Numeric: numeric,
  AlphaNumeric: alphaNumeric,
  Alpha: alpha,
  MobileNumber: mobileNumber,
  Email: email,
  PasswordValidate: passwordValidate,
};
