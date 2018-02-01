// 判断环境~

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