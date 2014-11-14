/// <reference path="jquery-1.11.1.js" />


/*生成日历插件*/
$(document).ready(function () {
    JqCal("2014,8,19", true, "#chart1");
    JqCal("2014,8,19", false, "#chart2");	
    JqCalAuto(true, "#chart3");
    JqCalAuto(false, "#chart4");
    JqCalColor("2014,11,14", true, "#chart5", "skyblue");
    JqCalSelf("2014,11,14", true, "#chart6", "#8CC63F", "white", "#8CC63F", "#8CC63F", "silver", "#8CC63F");//指定日期自定义
    JqCalSelfAuto(true, "#chart7", "orange", "white", "orange", "orange", "silver", "orange");//当前日期自定义
});
function JqCal(date, isCN, divId) {
    ///<summary>绘制给定日期的样式图</summary>
    ///<para="date">字符串日期,形如:2014,08,09（若使用2014-08-09在服务器上有时会报错，未知原因）</para>
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
    //console.log(weekindex);
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

function JqCalColor(date, isCN, divId,color) {
    ///<summary>绘制给定日期的样式图</summary>
    ///<para="date">字符串日期,形如:2014,08,09（若使用2014-08-09在服务器上有时会报错，未知原因）</para>
    ///<para="isCN">是否显示中文星期</para>
    ///<para="divId">日期控件显示位置div</para>
    ///<para="color">控件颜色</para>
    $(divId).html("<div class='divcal' id='divcal'><div class='divCalYearMonth' id='divCalYearMonthId'></div><div class='divCalDay' id='divCalDay'></div><div class='divCalClear' id='divCalClear'>--------</div><div class='divCalWeek' id='divCalWeek'></div></div>");
    var weekindex = new Date(date).getDay();
    date = date.split(",");
    $(divId).children().find(".divCalYearMonth").html(date[0] + "-" + date[1]);
    $(divId).children().find(".divCalDay").html(date[2]);
    var weekname = new Array('Sun', "Mon", "Tue", 'Wed', 'Thu', 'Fri', 'Sat');
    if (isCN) {
        weekname = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    }
    $(divId).children().find(".divCalWeek").html(weekname[weekindex]);
    //设置颜色
    $(divId).children().find(".divCalYearMonth").css("background-color",color);
}

function JqCalSelf(date, isCN, divId, borderColor, yearMonthColor, yearMonthBgcolor, dayColor, clearColor, weekColor) {
    ///<summary>绘制给定日期的样式图</summary>
    ///<para="date">字符串日期,形如:2014,08,09（若使用2014-08-09在服务器上有时会报错，未知原因）</para>
    ///<para="isCN">是否显示中文星期</para>
    ///<para="divId">日期控件显示位置div</para>
    ///<para="bordercolor">边框颜色</para>
    ///<para="yearMonthColor">年月颜色</para>
    ///<para="dayColor">天颜色</para>
    ///<para="clearColor">分割横线颜色</para>
    ///<para="weekColor">星期颜色</para>
    $(divId).html("<div class='divcal' id='divcal'><div class='divCalYearMonth' id='divCalYearMonthId'></div><div class='divCalDay' id='divCalDay'></div><div class='divCalClear' id='divCalClear'>--------</div><div class='divCalWeek' id='divCalWeek'></div></div>");
    var weekindex = new Date(date).getDay();
    date = date.split(",");
    $(divId).children().find(".divCalYearMonth").html(date[0] + "-" + date[1]);
    $(divId).children().find(".divCalDay").html(date[2]);
    var weekname = new Array('Sun', "Mon", "Tue", 'Wed', 'Thu', 'Fri', 'Sat');
    if (isCN) {
        weekname = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    }
    $(divId).children().find(".divCalWeek").html(weekname[weekindex]);
    //设置颜色

    $(divId).children().find(".divCalYearMonth")
            .css("border-top", "1px solid " + borderColor)
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor);
    $(divId).children().find(".divCalDay")
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor);
    $(divId).children().find(".divCalClear")
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor);
    $(divId).children().find(".divCalWeek")
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor)
            .css("border-bottom", "1px solid " + borderColor);
    $(divId).children().find(".divCalYearMonth")
            .css("background-color", yearMonthBgcolor)
            .css("color", yearMonthColor);


    $(divId).children().find(".divCalDay").css("color", dayColor);
    $(divId).children().find(".divCalClear").css("color", clearColor);
    $(divId).children().find(".divCalWeek").css("color", weekColor);


}

function JqCalSelfAuto(isCN, divId, borderColor, yearMonthColor, yearMonthBgcolor, dayColor, clearColor, weekColor) {
    ///<summary>绘制给定日期的样式图</summary>
    ///<para="date">字符串日期,形如:2014,08,09（若使用2014-08-09在服务器上有时会报错，未知原因）</para>
    ///<para="isCN">是否显示中文星期</para>
    ///<para="divId">日期控件显示位置div</para>
    ///<para="bordercolor">边框颜色</para>
    ///<para="yearMonthColor">年月颜色</para>
    ///<para="dayColor">天颜色</para>
    ///<para="clearColor">分割横线颜色</para>
    ///<para="weekColor">星期颜色</para>
    $(divId).html("<div class='divcal' id='divcal'><div class='divCalYearMonth' id='divCalYearMonthId'></div><div class='divCalDay' id='divCalDay'></div><div class='divCalClear' id='divCalClear'>--------</div><div class='divCalWeek' id='divCalWeek'></div></div>");
    var date = new Date();
    $(divId).children().find(".divCalYearMonth").html(date.getFullYear() + "-" + (parseInt(date.getMonth()) + 1));
    $(divId).children().find(".divCalDay").html(date.getDate());
    var weekname = new Array('Sun', "Mon", "Tue", 'Wed', 'Thu', 'Fri', 'Sat');
    if (isCN) {
        weekname = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    }
    $(divId).children().find(".divCalWeek").html(weekname[date.getDay()]);
    //设置颜色

    $(divId).children().find(".divCalYearMonth")
            .css("border-top", "1px solid " + borderColor)
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor);
    $(divId).children().find(".divCalDay")
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor);
    $(divId).children().find(".divCalClear")
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor);
    $(divId).children().find(".divCalWeek")
            .css("border-left", "1px solid " + borderColor)
            .css("border-right", "1px solid " + borderColor)
            .css("border-bottom", "1px solid " + borderColor);
    $(divId).children().find(".divCalYearMonth")
            .css("background-color", yearMonthBgcolor)
            .css("color", yearMonthColor);


    $(divId).children().find(".divCalDay").css("color", dayColor);
    $(divId).children().find(".divCalClear").css("color", clearColor);
    $(divId).children().find(".divCalWeek").css("color", weekColor);


}