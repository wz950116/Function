// HTTP请求 参数

// 1、fetch 同时发送多个请求 依次返回
function fetch (url, http, data) {
    var args;
    http.credentials = 'include';  // 是否携带cookie
    http.Cookie = '';

    if (data instanceof Object) {
        args = JSON.stringify(data);
    } else {
        args = data;
    }

    if (http.method === 'POST') {
        http.body = args;  // 参数
    } else {
        url = url + '?';
        args = JSON.parse(args);
        for (var i in args) {
            url += i + '=' + args[i] + '&';
        }
        url = url.substring(0, url.length - 1);
    }
    return fetch(url, http);
}
function combine (requestArr, fn) {
    var data = {};
    var arr = [];
    for (let i = 0; i < requestArr.length; i++) {
        arr.push(_pfetch(requestArr[i].url, requestArr[i].method, requestArr[i].params));
    }
    Promise.all(arr).then(function (data) {
        fn && fn(data);
    });

};
function _pfetch (url, method, params) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: method,
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        }, params).then(function (res) {
            res.json().then(function (obj) {
                resolve(obj);
            });
        }, function (err) {
            reject(err);
        });
    })
};

var request = [{
    url: '',
    method: 'POST',  // or GET
    params: {}
}];
combine(request, function (data) {
    if (data.length === 1) {
        fn(data[0]);
    }
});


// 2、jsonp 封装
import originJsonp from "jsonp";
function buildUrl(url, data) {
    let params = [];
    for (var k in data) {
        params.push(`${k}=${data[k]}`);
    }
    let param = params.join("&");
    if (url.indexOf("?") === -1) {
        url += "?" + param;
    } else {
        url += "&" + param;
    }
    return url;
}
let jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        originJsonp(buildUrl(url, data), option, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};

const PARAM = {
    format: "jsonp",
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0
};
const OPTION = {
    param: "jsonpCallback",
    prefix: "callback"
};
const data = Object.assign({}, PARAM, {
    g_tk: 701075963,
    uin: 0,
    platform: "h5",
    needNewCode: 1,
    _: new Date().getTime()
});
jsonp(url, data, OPTION).then(res => {console.log(res)});

// 3、CSRF <input id='csrf_token' />
export function initJQueryAjaxCSRF() {
    // Works in conjunction with a Flask-WTF token as described here:
    // http://flask-wtf.readthedocs.io/en/stable/csrf.html#javascript-requests
    const token = $('input#csrf_token').val();
    if (token) {
        $.ajaxSetup({
            beforeSend(xhr, settings) {
                if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader('X-CSRFToken', token);
                }
            },
        });
    }
}

// 4、jQuery
export default {
    post: function(params, callback) {
        $.ajax({
            url: params.url,
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(params.data),
            contentType: 'application/json',
            xhrFields: {
                withCredentials: true,
            },
        }).done(function(res) {
            callback && callback(res);
        }).fail(function() {
            console.log('error');
        }).always(function() {
            // console.log('complete');
        });
    },
    get: function(params, callback) {
        $.ajax({
            url: params.url,
            type: 'GET',
            dataType: 'json',
            data: params.data,
            contentType: 'application/json',
            xhrFields: {
                withCredentials: true,
            },
        }).done(function(res) {
            callback && callback(res);
        }).fail(function() {
            console.log('error');
        }).always(function() {
            // console.log('complete');
        });
    },

    jsonp: function(params, callback) {
        $.ajax({
            url: params.url,
            type: 'GET',
            dataType: 'jsonp',
            data: params.data,
            contentType: 'application/json'
        }).done(function(res) {
            callback && callback(res);
        }).fail(function() {
            console.log('error');
        }).always(function() {
            // console.log('complete');
        });
    }
}


// 5、axios
import Axios from 'axios'
import Vue from 'vue'

let baseURL = mock ? '//10.0.118.50:9991' : `//activity.focus${window.env}.cn`

// response拦截器
Axios.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

let request = {
    post(url, params) {
        return Axios({
            url: url,
            method: 'post',
            baseURL: baseURL,
            data: params
        }).catch(err => {
            console.log(err)
        })
    },
    get(url, params) {
        return Axios({
            url: url,
            method: 'get',
            baseURL: baseURL,
            params: params
        }).catch(err => {
            console.log(err)
        })
    },
    jsonp(url, params) {
        return Vue.jsonp(url, params)
    }
}
export default request

// 返回promise对象
request.get('/wap/getTaskList', {}).then(res => {
    if (res.code == 200) {
        this.listData = [].concat(res.data)
        setTimeout(() => {
            this.isLoading = false
        }, 300)
    }
})

// 6、XDomainRequest跨域请求
// jQuery.XDomainRequest.min.js 是一个利用 XDomainRequest 对象为 IE8、IE9 实现跨域资源共享 为CORS做兼容
// <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js" type="text/javascript" charset="utf-8"></script>
var iElm = $("#get-body");
if ($.browser.msie && window.XDomainRequest) {
    var xdr = new XDomainRequest();
    xdr.open("GET", "//www.baidu.com/abc.html");
    xdr.onload = function(ev) {
        iElm.html(xdr.responseText);
    }
    xdr.onerror = function() {
        window.location.reload();
    }
    xdr.ontimeout = function() {}
    xdr.onprogress = function() {}
    xdr.send();
}