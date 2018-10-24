"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "rightClick",
    //右击
    value: function rightClick() {
      var rightClick = this.props.rightClick;

      if (rightClick) {
        rightClick();
        return;
      }

      return false;
    } //左击

  }, {
    key: "leftClick",
    value: function leftClick() {
      var leftClick = this.props.leftClick;

      if (leftClick) {
        leftClick();
        return;
      }

      return false;
    }
  }, {
    key: "centerClick",
    value: function centerClick() {
      if (!this.props.centerClick) {
        return;
      }

      this.props.centerClick();
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames, _classnames2;

      var _this$props = this.props,
          parentOutClass = _this$props.parentOutClass,
          positionType = _this$props.positionType,
          mode = _this$props.mode,
          leftContent = _this$props.leftContent,
          rightContent = _this$props.rightContent,
          centerContentType = _this$props.centerContentType,
          ref = _this$props.ref,
          headerInput = _this$props.headerInput,
          leftIcon = _this$props.leftIcon; //console.log("classnames",styles["header-parent"]);
      //设置默认值

      leftIcon = leftIcon || 'white';
      return _react.default.createElement("div", {
        ref: ref,
        className: (0, _classnames4.default)(_index.default["header-parent"], (_classnames = {}, _defineProperty(_classnames, _index.default["positionAbolute"], positionType === 'positionAbolute'), _defineProperty(_classnames, _index.default["positionFixed"], positionType === 'positionFixed'), _classnames), parentOutClass)
      }, _react.default.createElement("div", {
        className: (0, _classnames4.default)((_classnames2 = {}, _defineProperty(_classnames2, _index.default["transparent"], mode === "transparent" || false), _defineProperty(_classnames2, _index.default["light"], mode === 'light'), _defineProperty(_classnames2, _index.default["colorE6e6e6"], mode === 'colorE6e6e6'), _defineProperty(_classnames2, _index.default["common"], mode === 'common' || !mode || false), _defineProperty(_classnames2, _index.default["none"], mode === 'none'), _defineProperty(_classnames2, _index.default["header-Input"], headerInput), _defineProperty(_classnames2, _index.default['header-common'], !headerInput), _classnames2))
      }, _react.default.createElement("div", {
        className: _index.default['left-header'],
        onClick: this.leftClick.bind(this)
      }, _react.default.createElement("div", {
        className: (0, _classnames4.default)(_defineProperty({}, _index.default["headerleftIconWhite"], leftIcon === "white" || false))
      }) || leftContent), _react.default.createElement("div", {
        className: _index.default['center-header'],
        onClick: this.centerClick.bind(this)
      }, centerContentType == '1' && _react.default.createElement("div", {
        className: _index.default['search-input']
      }, _react.default.createElement("div", {
        className: _index.default['search-icon']
      }, _react.default.createElement("div", {
        className: _index.default["icon"]
      })), _react.default.createElement("input", {
        type: "text",
        className: _index.default["searchInputText"],
        name: "searchAll",
        placeholder: "\u666F\u70B9\u540D\u79F0"
      })), (!centerContentType || !parseInt(centerContentType)) && this.props.children), _react.default.createElement("div", {
        className: _index.default['right-header'],
        onClick: this.rightClick.bind(this)
      }, rightContent)));
    }
  }]);

  return Header;
}(_react.default.Component);

var _default = Header;
exports.default = _default;