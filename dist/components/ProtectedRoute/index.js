"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _UserAuthContext = require("../../context/UserAuthContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProtectedRoute = _ref => {
  let {
    children
  } = _ref;
  let {
    user
  } = (0, _UserAuthContext.useUserAuth)();

  if (!user) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/signin"
    });
  }

  return children;
};

var _default = ProtectedRoute;
exports.default = _default;