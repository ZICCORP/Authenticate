"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.handlePasswordOnChange = exports.handleMouseDownPassword = exports.handleLoginSubmit = exports.handleFieldOnChange = exports.handleEmailOnChange = exports.handleClose = exports.handleClickShowPassword = exports.handleCheckBoxOnchange = exports.handleButton = exports.checkPhoneNum = exports.checkPassword = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const handleEmailOnChange = (event, setInputState, inputState) => {
  setInputState(_objectSpread(_objectSpread({}, inputState), {}, {
    email: event.target.value
  }));
};

exports.handleEmailOnChange = handleEmailOnChange;

const handleFieldOnChange = (event, field, signupInputs, setSignupInputs, setIsFieldClicked) => {
  if (field === 'firstName') {
    setIsFieldClicked(true);
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      firstName: event.target.value
    }));
  }

  if (field === 'surName') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      surName: event.target.value
    }));
  }

  if (field === 'phoneNum') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      phoneNum: event.target.value
    }));
  }

  if (field === 'email') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      email: event.target.value
    }));
  }

  if (field === 'newPassword') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      newPassword: event.target.value
    }));
  }

  if (field === 'confirmPassword') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      confirmPassword: event.target.value
    }));
  }

  if (field === 'dob') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      dob: event.target.value
    }));
  }

  if (field === 'gender') {
    return setSignupInputs(_objectSpread(_objectSpread({}, signupInputs), {}, {
      gender: event.target.value
    }));
  }
};

exports.handleFieldOnChange = handleFieldOnChange;

const handleClose = (event, reason, setShowError) => {
  if (reason === 'clickaway') {
    return;
  }

  setShowError(false);
};

exports.handleClose = handleClose;

const handleCheckBoxOnchange = (event, inputState, setInputState) => {
  setInputState(_objectSpread(_objectSpread({}, inputState), {}, {
    checked: event.target.checked
  }));
  console.log(event.target.checked);
};

exports.handleCheckBoxOnchange = handleCheckBoxOnchange;

const handleMouseDownPassword = event => {
  event.preventDefault();
};

exports.handleMouseDownPassword = handleMouseDownPassword;

const handleClickShowPassword = (setShowPassword, showPassword) => {
  setShowPassword(!showPassword);
};

exports.handleClickShowPassword = handleClickShowPassword;

const handlePasswordOnChange = (event, setInputState, inputState) => {
  setInputState(_objectSpread(_objectSpread({}, inputState), {}, {
    password: event.target.value
  }));
};

exports.handlePasswordOnChange = handlePasswordOnChange;

const checkPassword = (inputState, setErrormsg, setShowError) => {
  // To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
  if (inputState.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    console.log('Valid password');
  } else {
    setErrormsg('Incorrect Password ');
    setShowError(true);
    console.log('Incorrect password');
  }
};

exports.checkPassword = checkPassword;

const checkPhoneNum = (inputState, setErrormsg, setShowError) => {
  const temPhone = inputState.phone;
  var output = [temPhone.slice(0, 4), temPhone.slice(4, 9), temPhone.slice(9)].join('');

  if (output.match(/^\+?(234)\)?[-]?([0-9]{5})[-]?([0-9]{5,6})$/)) {
    console.log('Yes. it match');
  } else {
    setErrormsg('Incorrect Phone Number');
    setShowError(true);
    console.log('No. it did not match');
  }
};

exports.checkPhoneNum = checkPhoneNum;

const handleLoginSubmit = (event, isEmailCorrect, isPasswordCorrect, setErrormsg, setShowError) => {
  event.preventDefault();

  if (isEmailCorrect === true) {
    console.log('Valid email address');

    if (isPasswordCorrect === true) {
      console.log('Valid password');
    } else if (isPasswordCorrect === false) {
      console.log('Invalid password');
      setErrormsg('InValid password');
      setShowError(true);
    } else {
      console.log('Password field is empty');
      setErrormsg('Password field is empty');
      setShowError(true);
    }
  } else if (isEmailCorrect === false) {
    console.log('Invalid email address');
    setErrormsg('Invalid email address');
    setShowError(true);
  } else {
    console.log('Email address field is empty');
    setErrormsg('Email address field is empty');
    setShowError(true);
  }
};

exports.handleLoginSubmit = handleLoginSubmit;

const handleButton = (setIndex, index) => {
  setIndex(index + 1);
};

exports.handleButton = handleButton;

const validate = values => {
  let letters = /^[A-Za-z]+$/;
  let numbers = /^[+]?[0-9]+$/;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!values.firstName.match(letters)) {
    errors.firstName = 'Can only contain alphabets';
  } else if (values.firstName.length > 20) {
    errors.firstName = 'Must be 20 characters or less';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 2 characters or more';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (!values.lastName.match(letters)) {
    errors.lastName = 'Can only contain alphabets';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 2 characters or more';
  }

  if (!values.phoneNum) {
    errors.phoneNum = 'Required';
  } else if (!values.phoneNum.match(numbers)) {
    errors.phoneNum = 'can only contain numbers and an optional leading plus(+) sign';
  } else if (values.phoneNum.length > 15 || values.phoneNum.length < 11 || values.phoneNum.length === 12) {
    errors.phoneNum = 'Must be a valid phone number';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!values.email.match(mailformat)) {
    errors.email = 'Must be a valid email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!values.password.match(passwordformat)) {
    errors.password = 'Must be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Must be the same as password';
  }

  return errors;
};

exports.validate = validate;