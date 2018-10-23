"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./common/rely.js");

var _Class = _interopRequireDefault(require("./common/Class.js"));

var _scroll = _interopRequireDefault(require("./base/scroll"));

var _classnames = _interopRequireDefault(require("classnames"));

var _date = _interopRequireDefault(require("./date.less"));

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

var DH =
/*#__PURE__*/
function (_Component) {
  _inherits(DH, _Component);

  function DH(props) {
    var _this2;

    _classCallCheck(this, DH);

    var _getLoactionTime = new Date().getLoactionTime(),
        FullYear = _getLoactionTime.FullYear,
        Month = _getLoactionTime.Month,
        date = _getLoactionTime.date;

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DH).call(this, props));
    _this2.state = {
      week: ['日', '一', '二', '三', '四', '五', '六'],
      activeDate: [],
      monthArr: _this2.Leap(FullYear, Month, date)
    };
    return _this2;
  }

  _createClass(DH, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      //  console.log("props", this.props.holidays);
      var _getLoactionTime2 = new Date().getLoactionTime(),
          FullYear = _getLoactionTime2.FullYear,
          Month = _getLoactionTime2.Month,
          date = _getLoactionTime2.date;

      this.setState({
        activeDate: this.props.defaultDate
      }); //初始化数据

      this.props.DateChange(this.props.defaultDate, 1);
    } //年处理

  }, {
    key: "Leap",
    value: function Leap(FullYear, Month, date) {
      var show_Month,
          show_date,
          _this$props = this.props,
          limitDate = _this$props.limitDate,
          holidays = _this$props.holidays,
          Today = Date.timeFormat(new Date().getLoactionTime().FullYear, new Date().getLoactionTime().Month, new Date().getLoactionTime().date),
          Tomorrow = Date.timeFormat(new Date().getLoactionTime().FullYear, new Date().getLoactionTime().Month, new Date().getLoactionTime().date + 1);

      for (var i = 0, len = holidays.length; i < len; i++) {
        if (holidays[i].date == Today) {
          //&& holidays[i].name
          this._changeText(holidays[i]);
        }
        /*else if (holidays[i].date == Tomorrow && holidays[i].name){
          this._changeText(holidays[i])
        }*/

      }
      /*当前年分是不是闰年*/


      var MONTH_DATE = Date.YEAR_NOT_LEAP;

      if (Date.isLeapYear(FullYear)) {
        MONTH_DATE = Date.YEAR_LEAP;
      }
      /*现在当月还剩多少天*/


      show_date = parseInt(MONTH_DATE[Month - 1]) - parseInt(date) + 1;
      show_Month = 1;
      /*判断时候满足显示天数的显示*/

      while (show_date < limitDate) {
        show_date += parseInt(MONTH_DATE[(Month + show_Month - 1) % 12]);
        show_Month++;
      } // console.log("show_Month",show_Month);
      // 构造年月


      var tepMnth = [];

      for (var j = 0; j < show_Month; j++) {
        tepMnth.push(new _Class.default(FullYear + ((Month + j) % 12 == 0 ? (Month + j) / 12 - 1 : Math.floor((Month + j) / 12)), (Month + j) % 12 == 0 ? 12 : (Month + j) % 12, limitDate));
      } // console.log(tepMnth)


      return tepMnth;
    } //月份渲染

  }, {
    key: "renderMonth",
    value: function renderMonth(monthArr) {
      var _this3 = this;

      if (!monthArr.length) {
        return null;
      }

      return _react.default.createElement(_scroll.default, {
        height: this.props.scrollHeight || "94%"
      }, _react.default.createElement("div", {
        className: _date.default["DH-month-main"]
      }, monthArr.map(function (item, index) {
        //console.log("monthArr",monthArr);
        var str = "".concat(item.FullYear, "\u5E74").concat(item.Month < 9 ? '0' + item.Month : item.Month, "\u6708");
        return _react.default.createElement("div", {
          className: _date.default["DH-month"],
          key: index + "_/*"
        }, _react.default.createElement("div", {
          className: new Date().getLoactionTime()["FullYear"] == item.FullYear && item.Month == new Date().getLoactionTime()["Month"] ? _date.default["DH-month-title"] : (0, _classnames.default)(_date.default["DH-month-title"], _date.default["color3E3E3E"])
        }, str), _this3.renderDate(item, index));
      })));
    }
    /*active 算法*/

  }, {
    key: "_algorithm",
    value: function _algorithm(date) {
      var activeDate = this.state.activeDate,
          results = false;

      for (var i = 0, len = activeDate.length; i < len; i++) {
        if (activeDate[i] == date) {
          results = true;
        }
      }

      return results;
    }
    /*渲染日期*/

  }, {
    key: "renderDate",
    value: function renderDate(item, index) {
      var _this4 = this;

      var FullYear = item.FullYear,
          Month = item.Month,
          _this = this,
          model = this.props.model;

      return _react.default.createElement("div", {
        className: _date.default["DH-month-date"]
      }, item.week.map(function (n, wekkindex) {
        return _react.default.createElement("div", {
          key: wekkindex.toString() + '_data'
        });
      }), item.date.map(function (day, daIndex) {
        var ClassStr,
            dataStr = "".concat(FullYear, "-").concat(Month < 10 ? '0' + Month : Month, "-").concat(day.date < 10 ? '0' + day.date : day.date),
            allow = day.allow,
            classActiveStr = "";
        allow && (ClassStr = 'DH-month-date-allow');
        _this4._algorithm(dataStr) && allow && (classActiveStr = 'DH-active-date');

        var _BreakData = _this4._BreakData(dataStr); //allow = _BreakData.playContent;


        return _react.default.createElement("div", {
          className: (0, _classnames.default)(_date.default[ClassStr], {}),
          key: daIndex + '_day*/',
          onClick: allow ? _this.props.type == "common" && _this4.toggleDate.bind(_this4, dataStr) || _this4.chooseSingle.bind(_this4, dataStr) : null
        }, _react.default.createElement("div", {
          className: (0, _classnames.default)(_date.default[classActiveStr])
        }, _react.default.createElement("div", {
          className: _date.default["tip"]
        }, _BreakData.playContent), dataStr == new Date().format("yyyy-MM-dd") ? _react.default.createElement("div", {
          className: "cn_fontSize"
        }, "\u4ECA\u5929") : _react.default.createElement("div", {
          className: "en_fontSize"
        }, day.date), _react.default.createElement("div", {
          className: _date.default["remark"]
        }, "\uFFE530")));
      }));
    }
    /*切换日期,多选择*/

  }, {
    key: "toggleDate",
    value: function toggleDate(date) {
      var activeDate = this.state.activeDate,
          results = [],
          temp = [],
          _this$props2 = this.props,
          DateChange = _this$props2.DateChange,
          chooseNumber = _this$props2.chooseNumber;
      var index = activeDate.indexOf(date);

      if (index > -1) {
        /*选择日期在当前选择数组中时候---取消选择*/
        activeDate.splice(index, 1);
        temp = activeDate;
      } else {
        /*选择日期没有在当前选择数组中时候---选择*/
        var now_time = new Date(Date.parse(date.replace(/-/g, "/"))).getTime();
        var TIME_INTERVAL = 24 * 60 * 60 * 1000;
        temp = [date];
        var lastNum = chooseNumber - 1;
        results[lastNum] = date;

        for (var i = 1; i < chooseNumber; i++) {
          var NextTime = now_time + i * TIME_INTERVAL,
              PrevTime = now_time - i * TIME_INTERVAL,
              NextDate = new Date(NextTime),
              PrevDate = new Date(PrevTime);
          results[lastNum + i] = this.formatDateTime(NextDate);
          results[lastNum - i] = this.formatDateTime(PrevDate);
        }

        activeDate.forEach(function (item) {
          if (results.indexOf(item) > -1) {
            temp.push(item);
          }
        });
      }

      this.setState({
        "activeDate": temp
      }, function () {
        DateChange && DateChange(temp.sort());
      }); //let sortDate = temp.sort()
      //console.log(now_time)
    }
  }, {
    key: "chooseSingle",
    value: function chooseSingle(date) {
      var DateChange = this.props.DateChange,
          temp = [date];
      this.setState({
        "activeDate": temp
      }, function () {
        DateChange && DateChange(temp.sort());
      });
    } //改变今天明天的显示文字

  }, {
    key: "_changeText",
    value: function _changeText(holiday) {
      var _special = Date.specialDate; // console.log(Date.specialDate,"outer/*8*")

      for (var i = 0, len = _special.length; i < len; i++) {
        //  console.log(_special[i])
        if (_special[i].date == holiday.date) {
          Date.specialDate[i].text = holiday.name; //holiday.name;
        }
      }
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(date) {
      var Year = date.getFullYear(),
          Month = date.getMonth() + 1,
          day = date.getDate();
      Month = Month < 10 ? '0' + Month : Month;
      day = day < 10 ? '0' + day : day;
      return [Year, Month, day].join('-');
    }
  }, {
    key: "_BreakData",
    value: function _BreakData(dataStr) {
      var holidays = this.props.holidays,
          rest = false,
          tip,
          playContent = "";
      /*今天--*/

      var _getLoactionTime3 = new Date().getLoactionTime(),
          FullYear = _getLoactionTime3.FullYear,
          Month = _getLoactionTime3.Month,
          date = _getLoactionTime3.date;

      for (var i = 0, len = holidays.length; i < len; i++) {
        if (dataStr == holidays[i].date) {
          playContent = holidays[i].name || holidays[i].play == "1" && "休" || holidays[i].play == "0" && "班" || "";
        }
        /*if ((holidays[i].play == "1"||!holidays[i].play) && (dataStr == holidays[i].date)){
            rest = true
            playContent = holidays[i].play == "1"?!holidays[i].name&&"休"||holidays[i].name:"班"
        }
        if (holidays[i].name&& (dataStr == holidays[i].date)){
            tip = holidays[i].name
        }*/

      }

      return {
        playContent: playContent
      };
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var _this$state = this.state,
          week = _this$state.week,
          monthArr = _this$state.monthArr;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(_date.default["DH-main"], _date.default[this.props.defineClass])
      }, this.props.Header, _react.default.createElement("div", {
        className: _date.default["content"]
      }, _react.default.createElement("div", {
        className: _date.default["DH-week"]
      }, week.map(function (item, index) {
        return _react.default.createElement("div", {
          key: item.toString(),
          className: _date.default["DH-week-item ".concat(index == "0" || index == "6" ? " colorFC5151" : '')]
        }, item);
      })), this.props.tips, this.renderMonth(monthArr)));
    }
  }]);

  return DH;
}(_react.Component);

DH.defaultProps = {
  title: '日期选择器Dome',
  defaultDate: ['2018-03-12', '2018-03-15', '2018-03-11'],
  limitDate: 150,
  holidays: [{
    date: "2018-05-03",
    id: 3673,
    name: "国庆节",
    play: 1,
    year: 2018
  }, {
    date: "2018-05-04",
    id: 3673,
    name: "",
    play: 1,
    year: 2018
  }, {
    date: "2018-03-30",
    id: 3673,
    name: "国庆",
    play: 1,
    year: 2018
  }],
  DateChange: null,
  chooseNumber: 4,
  type: 'more',
  model: 'common' //统一的样式 jpmp: 景区门票

};
var _default = DH;
exports.default = _default;