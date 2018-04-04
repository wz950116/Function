// HTTP请求 参数

// 1、fetch 同时发送多个请求 依次返回
function fetch (url, http, data) {
    var args;
    if (url.indexOf('house-sv-base') === -1) {
        http.credentials = 'include';
        http.Cookie = userModel.getCookie();
    }

    if (data instanceof Object) {
        args = JSON.stringify(data);
    } else {
        args = data;
    }

    if (http.method === 'POST') {
        http.body = args; 
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


// 3、HTTP Safe
function initJQueryAjaxCSRF() {
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

// 4、CSRF <input id='csrf_token' />
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