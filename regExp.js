// 判断环境
var domain = window.location.host;
var env = '111111111';

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

// 判断身份证
var reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;


// 获取url中指定参数值
function getUrlParams (name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	if (r != null) {
		return unescape(r[2])
	} else {
		return '';
	}
}

