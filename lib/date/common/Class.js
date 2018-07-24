"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./rely");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SelfYear =
/*#__PURE__*/
function () {
  function SelfYear(year, month, limit) {
    _classCallCheck(this, SelfYear);

    this.FullYear = year;
    this.Month = month;
    this.date = SelfYear.getMonthDay(year, month, limit).result;
    this.week = SelfYear.getWeekBlank(year, month); // 每月一号值周几
  }

  _createClass(SelfYear, null, [{
    key: "getWeekBlank",
    value: function getWeekBlank(year, month) {
      var rect = []; //确定每月第一天是星期几 - 空出几个空白区域

      var firstWeek = Date.timeFormat(year, month, '01');
      var weekNum = new Date(Date.parse(firstWeek.replace(/-/g, '/'))).getDay();

      for (var i = 0; i < weekNum; i++) {
        rect.push('week_blank');
      }

      return rect;
    }
  }, {
    key: "getMonthDay",
    value: function getMonthDay(year, month, limit) {
      var result = [],
          active = [];
      /*今天*/

      var _getLoactionTime = new Date().getLoactionTime(),
          FullYear = _getLoactionTime.FullYear,
          Month = _getLoactionTime.Month,
          date = _getLoactionTime.date;

      var today = Date.timeFormat(FullYear, Month, date);
      var INNER_MONTH_DATE = Date.YEAR_NOT_LEAP; //判断是否是渲染当前年是非闰年

      if (Date.isLeapYear(this.year)) {
        INNER_MONTH_DATE = Date.YEAR_LEAP;
      }
      /*得到这个月有多少天*/


      for (var i = 1; i <= INNER_MONTH_DATE[month - 1]; i++) {
        var loop_date = Date.timeFormat(year, month, i);
        result.push({
          date: i,
          allow: Date.daysBetween(loop_date, today) >= 0 && Date.daysBetween(loop_date, today) < limit ? true : false,
          tip: specialDate(loop_date),
          week: new Date(Date.parse(loop_date.replace(/-/g, '/'))).getDay()
        });
      }

      return {
        result: result
      };
    }
  }]);

  return SelfYear;
}();

function specialDate(loop_date) {
  for (var i = 0, len = Date.specialDate.length; i < len; i++) {
    if (loop_date == Date.specialDate[i].date) {
      return Date.specialDate[i].text;
    }
  }
}

var _default = SelfYear;
exports.default = _default;