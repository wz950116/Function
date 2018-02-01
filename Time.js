// 对时间的各种处理~

// 1、获得 距离今天 指定时间天数 的日期（返回数组）
function getBeforeDate (n) {
	var n = n, curDay = [],
    	d = new Date(),
    	year = d.getFullYear(),
    	mon = d.getMonth() + 1,
    	day = d.getDate();
    curDay.push(year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day));
    if (day <= n) {
        if (mon > 1) {
            mon = mon - 1;
        }
        else {
            year = year - 1;
            mon = 12;
        }
    }
    d.setDate(d.getDate() - n);
    year = d.getFullYear();
    mon = d.getMonth() + 1;
    day = d.getDate();
    curDay.push(year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day));
    return curDay;
}

// 2、传入 时间参数 返回 年-月-日 形式 String
function _dateTimeFormatter (dt, format = 'YYYY-MM-DD') {
    return format.replace(/([a-z]+)/ig, function (a, b, c, d) {
        if (/Y{2,}/.test(b)) {
            return b.length === 4 ? dt.getFullYear() : ('' + dt.getFullYear()).substr(2);
        } else if (/M{2}/.test(b)) {
            return (dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
        } else if (/D{2}/.test(b)) {
            return (dt.getDate()) < 10 ? '0' + dt.getDate() : dt.getDate();
        } else if (/h{2}/.test(b)) {
            return dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours();
        } else if (/m{2}/.test(b)) {
            return dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
        } else if (/s{2}/.test(b)) {
            return dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds();
        } else {
            return 0;
        }
    });
}


// 3、传入 时间参数 返回 年月日 形式 String
function dateFormat (date, str = 'yyyyMMdd') {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(str)) str = str.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(str)) str = str.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return str;
}