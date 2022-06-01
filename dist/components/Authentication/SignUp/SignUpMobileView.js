"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _formik = require("formik");

var _Snackbar = _interopRequireDefault(require("@mui/material/Snackbar"));

var _Alert = _interopRequireDefault(require("@mui/material/Alert"));

var _LoadingButton = _interopRequireDefault(require("@mui/lab/LoadingButton"));

var _firestore = require("firebase/firestore");

var _utilityFunctions = require("../../utilityFunctions");

var _UserAuthContext = require("../../context/UserAuthContext");

var _firebase = require("../../../../../../src/firebase");

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

const SignUpMobileView = props => {
  const [showPassword, setShowPassword] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)('');
  const [open, setOpen] = (0, _react.useState)(true);
  const [load, setLoad] = (0, _react.useState)(false);
  const {
    signup
  } = (0, _UserAuthContext.useUserAuth)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const formik = (0, _formik.useFormik)({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate: _utilityFunctions.validate,
    onSubmit: async values => {
      setError('');
      setLoad(true);

      try {
        await signup(values.email, values.password);
        await (0, _firestore.addDoc)((0, _firestore.collection)(_firebase.db, "users"), {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNum: values.phoneNum
        });
        navigate('/signin');
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      flexGrow: 1
    },
    style: _Styles.mobile_signup_box_style
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    align: "center",
    variant: "h6",
    component: "h1",
    sx: {
      flexGrow: 1
    }
  }, "Join ", props.appName)), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_material.Paper, {
    elevation: 10,
    style: _Styles.mobile_signup_paperStyle
  }, /*#__PURE__*/_react.default.createElement("form", {
    noValidate: true,
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    style: _Styles.mobile_signup_textfield,
    label: "First name",
    id: "firstName",
    name: "firstName",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched.firstName && formik.errors.firstName ? true : false,
    helperText: formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : '',
    value: formik.values.firstName,
    required: true,
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    style: _Styles.mobile_signup_textfield,
    label: "Last name",
    id: "lastName",
    name: "lastName",
    onBlur: formik.handleBlur,
    onChange: formik.handleChange,
    value: formik.values.lastName,
    error: formik.touched.lastName && formik.errors.lastName ? true : false,
    helperText: formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : '',
    required: true,
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    label: "Mobile number",
    id: "phoneNum",
    name: "phoneNum",
    style: _Styles.mobile_signup_textfield,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched.phoneNum && formik.errors.phoneNum ? true : false,
    helperText: formik.touched.phoneNum && formik.errors.phoneNum ? formik.errors.phoneNum : '',
    value: formik.values.phoneNum,
    required: true,
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    id: "email",
    name: "email",
    style: _Styles.mobile_signup_textfield,
    type: "email",
    label: "Email address",
    variant: "outlined",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched.email && formik.errors.email ? true : false,
    helperText: formik.touched.email && formik.errors.email ? formik.errors.email : '',
    value: formik.values.email,
    required: true,
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    style: _Styles.mobile_signup_textfield,
    label: "Password",
    id: "password",
    name: "password",
    type: showPassword ? 'text' : 'password',
    onBlur: formik.handleBlur,
    error: formik.touched.password && formik.errors.password ? true : false,
    helperText: formik.touched.password && formik.errors.password ? formik.errors.password : '',
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
    required: true,
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    style: _Styles.mobile_signup_textfield,
    label: "Comfirm password",
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.confirmPassword,
    error: formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false,
    helperText: formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : '',
    required: true,
    fullWidth: true
  }), load ? /*#__PURE__*/_react.default.createElement(_LoadingButton.default, {
    loading: true,
    variant: "contained",
    style: {
      width: '94%',
      marginTop: '10px',
      marginLeft: '10px'
    }
  }, "Submit") : /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    style: !formik.isValid || !formik.touched.firstName ? _objectSpread(_objectSpread({}, _Styles.desktop_mobile_signup_btnStyle), {}, {
      backgroundColor: 'grey',
      color: 'white'
    }) : _Styles.desktop_mobile_signup_btnStyle,
    disabled: formik.errors.firstName || !formik.touched.firstName || formik.errors.lastName ? true : false,
    fullWidth: true
  }, "Sign up"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/signin",
    style: _objectSpread(_objectSpread({}, _Styles.already_have_account_Link_style), {}, {
      marginLeft: '50px'
    })
  }, "Already have an account?")), error && /*#__PURE__*/_react.default.createElement(_Snackbar.default, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    style: {
      height: '200px',
      marginTop: '1px',
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: '-10px'
    }
  }, /*#__PURE__*/_react.default.createElement(Alert, {
    onClose: handleClose,
    severity: "error"
  }, error))))));
};

var _default = SignUpMobileView;
exports.default = _default;