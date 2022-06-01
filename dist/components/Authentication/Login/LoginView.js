"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _LockOutlined = _interopRequireDefault(require("@mui/icons-material/LockOutlined"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _reactRouterDom = require("react-router-dom");

var _Snackbar = _interopRequireDefault(require("@mui/material/Snackbar"));

var _Alert = _interopRequireDefault(require("@mui/material/Alert"));

var _LoadingButton = _interopRequireDefault(require("@mui/lab/LoadingButton"));

var _formik = require("formik");

var _reactGoogleButton = _interopRequireDefault(require("react-google-button"));

var _UserAuthContext = require("../../context/UserAuthContext");

var _utilityFunctions = require("../../utilityFunctions");

var _Styles = require("../../Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Alert = /*#__PURE__*/_react.default.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/_react.default.createElement(_Alert.default, _extends({
    elevation: 6,
    ref: ref,
    variant: "filled"
  }, props));
});

const LoginView = () => {
  const {
    appState,
    login,
    googleSignIn
  } = (0, _UserAuthContext.useUserAuth)();
  const [showPassword, setShowPassword] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)('');
  const [open, setOpen] = (0, _react.useState)(true);
  const [load, setLoad] = (0, _react.useState)(false);
  const navigate = (0, _reactRouterDom.useNavigate)();

  const handleGoogleSignin = async e => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const validate = values => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!values.email.match(mailformat)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  const formik = (0, _formik.useFormik)({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: async values => {
      setError('');
      setLoad(true);

      try {
        await login(values.email, values.password);
        navigate('/');
      } catch (err) {
        setError(err.message);
        setLoad(false);
      }
    }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  (0, _react.useEffect)(() => {
    if (error) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Paper, {
    elevation: appState.mobileView ? 0 : 10,
    style: _objectSpread(_objectSpread({}, _Styles.paperStyle), {}, {
      height: '90vh',
      backgroundColor: '#fff'
    })
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    style: {
      backgroundColor: '#1bbd7e'
    }
  }, /*#__PURE__*/_react.default.createElement(_LockOutlined.default, null)), /*#__PURE__*/_react.default.createElement("h2", null, "Log in")), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    id: "email",
    name: "email",
    label: "Email address",
    variant: "outlined",
    onBlur: formik.handleBlur,
    error: formik.touched.email && formik.errors.email ? true : false,
    helperText: formik.touched.email && formik.errors.email ? formik.errors.email : '',
    sx: {
      m: 1,
      width: '35ch',
      outlineColor: 'blue'
    },
    onChange: formik.handleChange,
    required: true
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Password",
    id: "password",
    name: "password",
    onBlur: formik.handleBlur,
    error: formik.touched.password && formik.errors.password ? true : false,
    helperText: formik.touched.password && formik.errors.password ? formik.errors.password : '',
    sx: {
      m: 1,
      width: '35ch',
      outlineColor: 'blue'
    },
    type: showPassword ? 'text' : 'password',
    onChange: formik.handleChange,
    InputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
        position: "end"
      }, " ", /*#__PURE__*/_react.default.createElement(_material.IconButton, {
        "aria-label": "toggle password visibility",
        onClick: () => (0, _utilityFunctions.handleClickShowPassword)(setShowPassword, showPassword),
        onMouseDown: event => (0, _utilityFunctions.handleMouseDownPassword)(event),
        edge: "end"
      }, showPassword ? /*#__PURE__*/_react.default.createElement(_iconsMaterial.VisibilityOff, null) : /*#__PURE__*/_react.default.createElement(_iconsMaterial.Visibility, null)))
    },
    variant: "outlined",
    required: true
  }), load ? /*#__PURE__*/_react.default.createElement(_LoadingButton.default, {
    loading: true,
    variant: "contained",
    style: {
      width: '94%',
      marginTop: '10px',
      marginLeft: '10px'
    }
  }, "Submit") : /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    variant: "contained",
    style: formik.isValid && formik.touched.email ? _Styles.btnStyleLogin : _objectSpread(_objectSpread({}, _Styles.btnStyleLogin), {}, {
      backgroundColor: 'grey',
      color: '#fff'
    }),
    disabled: formik.isValid && formik.touched.email ? false : true,
    fullWidth: true
  }, "Log in")), /*#__PURE__*/_react.default.createElement(_reactGoogleButton.default, {
    style: {
      width: '94%',
      marginTop: '10px',
      marginLeft: '10px',
      marginBottom: '20px'
    },
    className: "g-btn",
    type: "dark",
    onClick: handleGoogleSignin
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    align: "center",
    to: "#",
    style: _Styles.forgotten_account_link_style
  }, "Forgotten account?"), /*#__PURE__*/_react.default.createElement(_material.Divider, {
    style: _Styles.dividerStyle
  }, "or"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/signup",
    style: _Styles.createNewAccount_link_style
  }, " ", /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    variant: "contained",
    style: _Styles.createNewAccount_btn_style
  }, "Create New Account"))), error && /*#__PURE__*/_react.default.createElement(_Snackbar.default, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(Alert, {
    onClose: handleClose,
    severity: "error",
    sx: {
      width: '100%'
    }
  }, error)));
};

var _default = LoginView;
exports.default = _default;