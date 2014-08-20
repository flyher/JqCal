/// <reference path="jquery-1.11.1.js" />


/*生成日历插件*/
$(document).ready(function () {
    JqCal("2014,8,19", true, "#chart");
    JqCalAuto(true, "#chart2");
    JqCalAuto(false, "#chart3");
});
function JqCal(date, isCN, divId) {
    ///<summary>绘制给定日期的样式图</summary>
    ///<para="date">字符串日期,形如:2014-08-09,切记要补全0</para>
    ///<para="isCN">是否显示中文星期</para>
    ///<para="divId">日期控件显示位置div</para>
    $(divId).html("<div class='divcal' id='divcal'><div class='divCalYearMonth' id='divCalYearMonthId'></div><div class='divCalDay' id='divCalDay'></div><div class='divCalClear' id='divCalClear'>--------</div><div class='divCalWeek' id='divCalWeek'></div></div>");
    var weekindex = new Date(date).getDay();
    date = date.split(",");
    $(divId).children().find(".divCalYearMonth").html(date[0] + "-" + date[1]);
    $(divId).children().find(".divCalDay").html(date[2]);
    var weekname= new Array('Sun',"Mon","Tue",'Wed','Thu','Fri','Sat');
    if (isCN) {
        weekname = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    }
    $(divId).children().find(".divCalWeek").html(weekname[weekindex]);
    console.log(weekindex);
}

function JqCalAuto(isCN, divId) {
    ///<summary>自动绘制当前时间样式图</summary>
    ///<para="isCN">是否显示中文星期</para>
    ///<para="divId">日期控件显示位置div</para>
    $(divId).html("<div class='divcal' id='divcal'><div class='divCalYearMonth' id='divCalYearMonthId'></div><div class='divCalDay' id='divCalDay'></div><div class='divCalClear' id='divCalClear'>--------</div><div class='divCalWeek' id='divCalWeek'></div></div>");
    var date = new Date();
    $(divId).children().find(".divCalYearMonth").html(date.getFullYear()+ "-" + (parseInt(date.getMonth())+1));
    $(divId).children().find(".divCalDay").html(date.getDate());
    var weekname = new Array('Sun', "Mon", "Tue", 'Wed', 'Thu', 'Fri', 'Sat');
    if (isCN) {
        weekname = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    }
    $(divId).children().find(".divCalWeek").html(weekname[date.getDay()]);    
}