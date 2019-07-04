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


// 获取url中指定参数值
function getUrlParams (name) {
	var reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)'); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr().match(reg); // 匹配目标参数
	if (r != null) {
		return unescape(r[2])
	} else {
		return '';
	}
}


// 数字千分位化
function hh(str){
  if (/\./.test(str)) {
    return str.replace(/\d(?=(\d{3})+\.)/g, "$&,").replace(/\d{3}(?![,.]|$)/g, "$&,");
  } else {
    return str.replace(/\d(?=(\d{3})+$)/g, "$&,");  // ?= 前瞻3位数字
  }
}


// 常规正则
export const regExpConfig = {
  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  mobile: /^1([3|4|5|7|8|])\d{9}$/, // 手机号码
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 固定电话
  num: /^[0-9]*$/, // 数字
  phoneNo: /(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/, // 电话或者手机
  policeNo: /^[0-9A-Za-z]{4,10}$/, // 账号4-10位数字或字母组成
  pwd: /^[0-9A-Za-z]{6,16}$/, // 密码由6-16位数字或者字母组成
  isNumAlpha: /^[0-9A-Za-z]*$/, // 字母或数字
  isAlpha: /^[a-zA-Z]*$/, // 是否字母
  isNumAlphaCn: /^[0-9a-zA-Z\u4E00-\uFA29]*$/, // 是否数字或字母或汉字
  isPostCode: /^[\d-]*$/i, // 是否邮编
  isNumAlphaUline: /^[0-9a-zA-Z_]*$/, // 是否数字、字母或下划线
  isNumAndThanZero: /^([1-9]\d*(\.\d+)?|0)$/, // 是否为整数且大于0/^[1-9]\d*(\.\d+)?$/
  isNormalEncode: /^(\w||[\u4e00-\u9fa5]){0,}$/, // 是否为非特殊字符（包括数字字母下划线中文）
  isTableName: /^[a-zA-Z][A-Za-z0-9#$_-]{0,29}$/, // 表名
  isInt: /^-?\d+$/, // 整数
  isTableOtherName: /^[\u4e00-\u9fa5]{0,20}$/, // 别名
  isText_30: /^(\W|\w{1}){0,30}$/, // 匹配30个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_50: /^(\W|\w{1}){0,50}$/, // 匹配50个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_20: /^(\W|\w{1}){0,20}$/, // 匹配20个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_100: /^(\W|\w{1}){0,100}$/, // 匹配100个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_250: /^(\W|\w{1}){0,250}$/, // 匹配250个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isNotChina: /^[^\u4e00-\u9fa5]{0,}$/, // 不为中文  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  IDcardAndAdmin: /^(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))$/, // 身份证或者是admin账号
  IDcardTrim: /^\s*(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))\s*$/, // 身份证
  num1: /^[1-9]*$/, // 数字
  companyNO: /^qqb_[0-9a-zA-Z_]{1,}$/, // 公司人员账号
  imgType: /image\/(png|jpg|jpeg|gif)$/, // 上传图片类型
  isChina: /^[\u4e00-\u9fa5]{2,8}$/,
  isNozeroNumber: /^\+?[1-9]\d*$/, // 大于零的正整数
  float: /^\d+(\.?|(\.\d+)?)$/, // 匹配正整数或者小数 或者0.这个特殊值
}

