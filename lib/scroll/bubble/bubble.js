"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var Bubble =
/*#__PURE__*/
function (_Component) {
  _inherits(Bubble, _Component);

  function Bubble() {
    var _this;

    _classCallCheck(this, Bubble);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bubble).call(this));
    _this.width = 50;
    _this.height = 100;
    _this.state = {
      style: null
    };
    return _this;
  }

  _createClass(Bubble, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.ratio = window.devicePixelRatio;
      this.width *= this.ratio;
      this.height *= this.ratio;
      this.initRadius = 18 * this.ratio;
      this.minHeadRadius = 12 * this.ratio;
      this.minTailRadius = 5 * this.ratio;
      this.initArrowRadius = 10 * this.ratio;
      this.minArrowRadius = 6 * this.ratio;
      this.arrowWidth = 3 * this.ratio;
      this.maxDistance = 40 * this.ratio;
      this.initCenterX = 25 * this.ratio;
      this.initCenterY = 25 * this.ratio;
      this.headCenter = {
        x: this.initCenterX,
        y: this.initCenterY
      };
      this.setState({
        style: {
          width: "".concat(this.width / this.ratio, "px}"),
          height: "".concat(this.height / this.ratio, "px")
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._draw();
    }
  }, {
    key: "_getDistance",
    value: function _getDistance() {
      return Math.max(0, Math.min(this.props.y * this.ratio, this.maxDistance));
    }
  }, {
    key: "_draw",
    value: function _draw() {
      var bubble = document.getElementById('bubble');
      var ctx = bubble.getContext('2d');
      ctx.clearRect(0, 0, bubble.width, bubble.height);

      this._drawBubble(ctx);

      this._drawArrow(ctx);
    }
  }, {
    key: "_drawBubble",
    value: function _drawBubble(ctx) {
      ctx.save();
      ctx.beginPath();

      var _distance = this._getDistance();

      var rate = _distance / this.maxDistance;
      var headRadius = this.initRadius - (this.initRadius - this.minHeadRadius) * rate;
      this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * rate; // 画上半弧线

      ctx.arc(this.headCenter.x, this.headCenter.y, headRadius, 0, Math.PI, true); // 画左侧贝塞尔

      var tailRadius = this.initRadius - (this.initRadius - this.minTailRadius) * rate;
      var tailCenter = {
        x: this.headCenter.x,
        y: this.headCenter.y + _distance
      };
      var tailPointL = {
        x: tailCenter.x - tailRadius,
        y: tailCenter.y
      };
      var controlPointL = {
        x: tailPointL.x,
        y: tailPointL.y - _distance / 2
      };
      ctx.quadraticCurveTo(controlPointL.x, controlPointL.y, tailPointL.x, tailPointL.y); // 画下半弧线

      ctx.arc(tailCenter.x, tailCenter.y, tailRadius, Math.PI, 0, true); // 画右侧贝塞尔

      var headPointR = {
        x: this.headCenter.x + headRadius,
        y: this.headCenter.y
      };
      var controlPointR = {
        x: tailCenter.x + tailRadius,
        y: headPointR.y + _distance / 2
      };
      ctx.quadraticCurveTo(controlPointR.x, controlPointR.y, headPointR.x, headPointR.y);
      ctx.fillStyle = 'rgb(170,170,170)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(153,153,153)';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "_drawArrow",
    value: function _drawArrow(ctx) {
      ctx.save();
      ctx.beginPath();

      var _distance = this._getDistance();

      var rate = _distance / this.maxDistance;
      var arrowRadius = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * rate; // 画内圆

      ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius - (this.arrowWidth - rate), -Math.PI / 2, 0, true); // 画外圆

      ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius, 0, Math.PI * 3 / 2, false);
      ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius - this.arrowWidth / 2 + rate);
      ctx.lineTo(this.headCenter.x + this.arrowWidth * 2 - rate * 2, this.headCenter.y - arrowRadius + this.arrowWidth / 2);
      ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius + this.arrowWidth * 3 / 2 - rate);
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(170,170,170)';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "render",
    value: function render() {
      console.log("height", this.height, this.state.width, this.state.style);
      return _react.default.createElement("canvas", {
        id: "bubble",
        width: this.width,
        height: this.height,
        style: this.state.style
      });
    }
  }]);

  return Bubble;
}(_react.Component);

Bubble.propTypes = {
  y: _propTypes.default.number
};
Bubble.defaultProps = {
  y: 0
};
var _default = Bubble;
exports.default = _default;