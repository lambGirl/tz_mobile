"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _betterScroll = _interopRequireDefault(require("better-scroll"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function (_React$Component) {
  _inherits(Scroll, _React$Component);

  function Scroll(props) {
    var _this;

    _classCallCheck(this, Scroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scroll).call(this, props));
    _this.state = {
      pullupLoadStatus: false,
      pullupLoad: {
        moreDate: ''
      }
    };
    return _this;
  }

  _createClass(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2._initScroll();
      }, 20); // console.log("11111111111111111111");

      this.refresh();
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
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: "wrapper",
        className: this.props.class || ""
      }, this.props.children);
    }
  }, {
    key: "_initScroll",
    value: function _initScroll() {
      var wrapper = this.refs.wrapper,
          _self = this;

      this.scroll = new _betterScroll.default(wrapper, {
        scrollY: true,
        click: true,
        probeType: 3,
        startY: 0,

        /* flickLimitDistance:10000,*/
        bounce: false,
        momentum: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      });
      this.scroll.on('scroll', function (pos) {
        // console.log("pos",pos);
        _self.props.scrollFun && _self.props.scrollFun(pos);
      });
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    } //刷新scroll

  }, {
    key: "refresh",
    value: function refresh() {
      //console.log("refresh -------")
      this.scroll && this.scroll.refresh();
    }
  }]);

  return Scroll;
}(_react.default.Component); //props过来定义规范


Scroll.propsType = {
  probeType: _propTypes.default.number,
  click: _propTypes.default.bool,
  listenScroll: _propTypes.default.bool,
  data: _propTypes.default.array,
  pullup: _propTypes.default.bool,
  beforeScroll: _propTypes.default.bool,
  refreshDelay: _propTypes.default.number
};
Scroll.defaultProps = {
  probeType: 1,
  click: true,
  listenScroll: false,
  data: null,
  pullup: true,
  beforeScroll: false,
  refreshDelay: 20
};
var _default = Scroll;
exports.default = _default;