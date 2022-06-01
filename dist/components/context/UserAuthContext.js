"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAuthContextProvider = UserAuthContextProvider;
exports.useUserAuth = useUserAuth;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _auth = require("firebase/auth");

var _firebase = require("../../../../../src/firebase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const userAuthContext = /*#__PURE__*/(0, _react.createContext)();

function UserAuthContextProvider(_ref) {
  let {
    children
  } = _ref;
  const [user, setUser] = (0, _react.useState)({});
  const [appState, setAppState] = (0, _react.useState)({
    mobileView: false
  });

  const setResponsive = () => {
    return window.innerWidth < 720 ? setAppState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      mobileView: true
    })) : setAppState(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      mobileView: false
    }));
  };

  function signup(email, password) {
    return (0, _auth.createUserWithEmailAndPassword)(_firebase.auth, email, password);
  }

  function login(email, password) {
    return (0, _auth.signInWithEmailAndPassword)(_firebase.auth, email, password);
  }

  function logout() {
    return (0, _auth.signOut)(_firebase.auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new _auth.GoogleAuthProvider();
    return (0, _auth.signInWithPopup)(_firebase.auth, googleAuthProvider);
  }

  (0, _react.useEffect)(() => {
    window.addEventListener('resize', setResponsive);
    return () => {
      window.removeEventListener('resize', setResponsive);
    };
  }, []);
  (0, _react.useEffect)(() => {
    const unsubscribe = (0, _auth.onAuthStateChanged)(_firebase.auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return /*#__PURE__*/React.createElement(userAuthContext.Provider, {
    value: {
      user,
      signup,
      login,
      logout,
      googleSignIn,
      appState
    }
  }, children);
}

function useUserAuth() {
  return (0, _react.useContext)(userAuthContext);
}