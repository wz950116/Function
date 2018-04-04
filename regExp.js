// 判断环境
var domain = window.location.host;
var env = '';

if ((/^\d+\.\d+\.\d+\.\d+/).test(domain) || (/^localhost/).test(domain)) {
	// 本地开发走dev
    env = '-dev';
} else if ((/^dev\./).test(domain)) { 
	// dev
    env = '-dev';
} else if ((/^test\./).test(domain)) { 
	// test
    env = '-dev';
} else { 
	// work
    env = '';
}

module.exports = {
    env: env
};

// 判断身份证
var reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

// 浏览器型号
var userAgent = navigator.userAgent.toLowerCase(),
    rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
    rFirefox = /(firefox)\/([\w.]+)/,
    rOpera = /(opera).+version\/([\w.]+)/,
    rChrome = /(chrome)\/([\w.]+)/,
    rSafari = /version\/([\w.]+).*(safari)/;

// 