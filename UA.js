function() {
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