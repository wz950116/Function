// 1、手机设备
function iphoneUA() {
    let userAgent = navigator.userAgent;
    let userDevice = {};
    userDevice.info = userAgent;
    // ios
    if (userAgent.match(/(iphone|ipod|ipad);?/i)) {
        userDevice.ios = true;
    } else {
        userDevice.ios = false;
    }
    // 微信
    if (userAgent.match(/micromessenger/i)) {
        userDevice.wechat = true;
    } else {
        userDevice.wechat = false;
    }
    // app内部
    // Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 FocusApp_iOS_SalesMaster(FocusLiveApp)
    if (userAgent.match(/FocusLiveApp/i)) {
        userDevice.focusApp = true;
    } else {
        userDevice.focusApp = false;
    }
    // QQ浏览器
    if (userAgent.match(/MQQBrowser/i)) {
        userDevice.xFive = true;
    } else {
        userDevice.xFive = false;
    }
    // 手机
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
        userDevice.mobile = true;
    } else {
        userDevice.mobile = false;
    }
    if (userAgent.match(/vivo/i)) {
        userDevice.vivo = true;
    } else {
        userDevice.vivo = false;
    }
    if (userAgent.match(/HUAWEI/i)) {
        userDevice.huawei = true;
    } else {
        userDevice.huawei = false;
    }
    // 搜狗浏览器
    if (userAgent.match(/metasr/i)) {
        userDevice.sougou = true;
    } else {
        userDevice.sougou = false;
    }
    return userDevice;
},

// 2、PC型号
var userAgent = navigator.userAgent.toLowerCase(),
    rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
    rFirefox = /(firefox)\/([\w.]+)/,
    rOpera = /(opera).+version\/([\w.]+)/,
    rChrome = /(chrome)\/([\w.]+)/,
    rSafari = /version\/([\w.]+).*(safari)/;


// 3、获取IE版本
function getIEVersion() {
    var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE<11浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp['$1']);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6; // IE版本<=7
        }
    } else if (isEdge) {
        return 'edge'; // edge
    } else if (isIE11) {
        return 11; // IE11
    } else {
        return -1; // 不是ie浏览器
    }
}