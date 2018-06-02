module.exports = {
    objToStr: function (obj) {
        var res = [];
        for (var o in obj) {
            if (obj.hasOwnProperty(o)) {
                res.push(o + '=' + obj[o]);
            }
        }
        return res.join('&');
    },
    fadeIn($el, time, callback) {
        $el.css('opacity', 0);
        $el.css('display', 'block');
        let t = setInterval(() => {
            if ($el.css('opacity') < 1) {
                let o = parseFloat($el.css('opacity'));
                $el.css('opacity', o + 0.05);
            } else {
                clearInterval(t);
                callback && callback();
            }
        }, time / 100);
    },
    fadeOut($el, time, callback) {
        $el.css('opacity', 1);
        let t = setInterval(() => {
            if ($el.css('opacity') > 0) {
                let o = parseFloat($el.css('opacity'));
                $el.css('opacity', o - 0.05);
            } else {
                $el.css('display', 'none');
                clearInterval(t);
                callback && callback();
            }
        }, time / 100);
    },
    setCookie: function (c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + '=' + escape(value) +
            ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/'
    },
    getCookie: function (c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + '=')
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                var c_end = document.cookie.indexOf(';', c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ''
    },
    checkCookie: function (cookieKey) {
        if (this.getCookie(cookieKey) != null && this.getCookie(cookieKey) != '') {
            return true;
        } else {
            return false;
        }
    },
    getUA: function () {
        let userAgent = navigator.userAgent;
        let userDevice = {};
        userDevice.info = userAgent;
        if (userAgent.match(/(iphone|ipod|ipad);?/i)) {
            userDevice.ios = true;
        } else {
            userDevice.ios = false;
        }
        if (userAgent.match(/micromessenger/i)) {
            userDevice.wechat = true;
        } else {
            userDevice.wechat = false;
        }
        if (userAgent.match(/FocusLiveApp/i)) {
            // 判断是否在直播app内部
            userDevice.focusApp = true;
        } else {
            userDevice.focusApp = false;
        }
        if (userAgent.match(/MQQBrowser/i)) {
            // 判断是否在QQ浏览器内部
            userDevice.xFive = true;
        } else {
            userDevice.xFive = false;
        }
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
        if (userAgent.match(/metasr/i)) {
            userDevice.sougou = true;
        } else {
            userDevice.sougou = false;
        }
        return userDevice;
    },
    getUrlParams: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); // 构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); // 匹配目标参数
        if (r != null) {
            return unescape(r[2])
        } else {
            return '';
        }
    },
    randomArr: function (arr) {
        // 希望从arr[0]到arr[length-1]中随机return一个
        let l = arr.length;
        let random = Math.floor((Math.random()) * l); // 0 到 length - 1 的随机数
        return arr[random];
    },
    accountEncrypt: function (str) {
        let tpm = str.substring(3, str.length - 4);
        return str.replace(tpm, '****');
    },
    getIEVersion: function () {
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
                return 6;// IE版本<=7
            }
        } else if (isEdge) {
            return 'edge';// edge
        } else if (isIE11) {
            return 11; // IE11
        } else {
            return -1;// 不是ie浏览器
        }
    }
}
