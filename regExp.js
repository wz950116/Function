// 1、判断环境
var domain = window.location.host;
var env = '';

if ((/^\d+\.\d+\.\d+\.\d+/).test(domain) || (/^localhost/).test(domain)) {
	// 本地 0.0.0.0 || localhost 开发走dev
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

// 2、判断身份证
var reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;