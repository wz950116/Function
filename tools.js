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
}
