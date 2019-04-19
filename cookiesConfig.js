import Cookie from 'js-cookie'

module.exports = {
    setCookie: function(c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    },
    getCookie: function(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                var c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    },
    checkCookie: function(cookieKey) {
        if (this.getCookie(cookieKey) != null && this.getCookie(cookieKey) != "") {
            return true;
        } else {
            return false;
        }
    }
}

// sessionStorage的实现
var session = {
    get(key) {
        const item = sessionStorage.getItem(key)
        // 这点要判断是字符串还是对象
        const result = /^[{\[].*[}\]]$/g.test(item)
        if (result) {
            return JSON.parse(item)
        } else {
            return item
        }
    },
    set(key, value) {
        // 这点要判断是字符串还是对象
        if (typeof value === 'string') {
            sessionStorage.setItem(key, value)
        } else {
            const item = JSON.stringify(value)
            sessionStorage.setItem(key, item)
        }
    },
    remove(key) {
        sessionStorage.removeItem(key)
    },
    clear() {
        sessionStorage.clear()
    }
}
export default session
