import { getByJsonp } from './HTTP.js';

const getCityIp = () => {
	// fetch请求返回promise对象
	let getIp = fetch('http://127.0.0.1:3000/api/getUserIp', {
		headers: new Headers({
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'text/plain; application/json; charset=utf8'
		})
	});
	return new Promise((reslove, reject) => {
		getIp.then(res => {
			return res.text()
		}).then(res => {
			console.log('获取到的城市ip:', res);
			let result = getByJsonp(`https://open.onebox.so.com/dataApi?type=ip&src=onebox&tpl=0&query=ip&ip=${res}`, 'callback');
			result.then(data => {
				console.log('获取到的城市信息：', data)
				resolve(data);
			}).catch(e => {
				reject(e);
			})
		}).catch (e => {
			reject(e);
			console.log('getUserIp Error', e);
		});
	});
};

getCityIp().then(res => {
	resolve({
		type: 2,
		data: res
	});
}).catch(e => {
	reject({
		errorType: 'getCityByIp Error1: ',
		errorMsg: e
	});
	console.log(e);
	alert('getCityByIp Error1:', e);
});