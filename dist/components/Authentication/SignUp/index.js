"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SignUpMobileView = _interopRequireDefault(require("./SignUpMobileView"));

var _SignUpDeskTopView = _interopRequireDefault(require("./SignUpDeskTopView"));

var _UserAuthContext = require("../../../context/UserAuthContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react imports
// Internal components imports
// import { useGlobalContext } from '../../App';
const SignUpView = props => {
  const {
    appState
  } = (0, _UserAuthContext.useUserAuth)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, appState.mobileView ? /*#__PURE__*/_react.default.createElement(_SignUpMobileView.default, {
    appName: props.appName
  }) : /*#__PURE__*/_react.default.createElement(_SignUpDeskTopView.default, {
    appName: props.appName
  }));
};

var _default = SignUpView;
exports.default = _default;