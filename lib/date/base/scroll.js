"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _betterScroll = _interopRequireDefault(require("better-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Scroll =
/*#__PURE__*/
function (_Component) {
  _inherits(Scroll, _Component);

  function Scroll(props) {
    _classCallCheck(this, Scroll);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scroll).call(this, props));
  }

  _createClass(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this._initScroll();

      window.addEventListener('resize', function () {
        _this.refresh();
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.refresh();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.refresh();
    }
  }, {
    key: "_initScroll",
    value: function _initScroll() {
      var _this2 = this;

      var _this$props = this.props,
          probeType = _this$props.probeType,
          click = _this$props.click,
          listenScroll = _this$props.listenScroll,
          pullup = _this$props.pullup,
          beforeScroll = _this$props.beforeScroll;
      var wrapper = this.refs.wrapper;
      var self = this;

      if (!wrapper) {
        return;
      }

      this.scroll = new _betterScroll.default(wrapper, {
        probeType: probeType,
        click: click
      });

      if (listenScroll) {
        this.scroll.on('scroll', function (pos) {
          self.props.scrollFun && self.props.scrollFun(pos);
        });
      }

      if (pullup) {
        this.scroll.on('scrollEnd', function () {
          if (_this2.scroll.y <= _this2.scroll.maxScrollY + 50) {
            self.props.scrollEndFun && self.props.scrollEndFun();
          }
        });
      }

      if (beforeScroll) {
        this.scroll.on('beforeScrollStart', function () {
          self.props.beforeScrollStartFun && self.props.beforeScrollStartFun();
        });
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      this.scroll && this.scroll.enable();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.scroll && this.scroll.refresh();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          wrapperClass = _this$props2.wrapperClass,
          data = _this$props2.data;
      return _react.default.createElement("div", {
        ref: "wrapper",
        className: wrapperClass
      }, children);
    }
  }]);

  return Scroll;
}(_react.Component);

Scroll.defaultProps = {
  probeType: 1,
  click: true,
  listenScroll: false,
  data: [],
  pullup: false,
  beforeScroll: false,
  refreshDelay: 20,
  wrapperClass: ''
};
var _default = Scroll;
exports.default = _default;