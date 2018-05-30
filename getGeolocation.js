import Es6Promise from 'es6-promise';

const getLocationLatLon = (options) => {
	let newOption = Object.assign({}, {
		enableHighAccuracy: true,
		maximumAge: 3600000,
		timeout: 1000
	}, options);
	
	return new Es6Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				resolve({
					isGet: true,
					data: {
						position
					}
				})
			}, (error) => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						reject({
							isGet: false,
							data: 'User denied the request for Geolocation'
						})
						break
					case error.POSITION_UNAVAILABLE:
						reject({
							isGet: false,
							data: 'Location information is unavailable'
						})
						break
					case error.TIMEOUT:
						reject({
							isGet: false,
							data: 'The request to get user location timed out'
						})
						break
					case error.UNKNOWN_ERROR:
						reject({
							isGet: false,
							data: 'An unknown error occurred'
						})
						break
					default:
						reject({
							isGet: false,
							data: 'other error'
						})
				}
			}, newOption)
		} else {
			reject({
				isGet: false,
				data: 'Geolocation is not supported by this browser'
			})
		}
	});
};

const getRealLocation = (options)=> {
	return new Es6Promise ((reslove, reject) => {
		getLocationLatLon().then(res => {
			if (res && res.isGet === true) {
				let { longitude, latitude } = res.data.position.coords;
				let lonlat = longitude + ',' + latitude;
				let result = getByJsonp(`http://apis.map.qq.com/jsapi?qt=rgeoc&lnglat=${lonlat}&key=FBOBZ-VODWU-C7SVF-B2BDI-UK3JE-YBFUS&pf=jsapi&ref=jsapi`);
				result.then(res => {
					resolve({
						type: 1,
						data: res
					})
				}).catch(error => {
					console.log('getLocationll Error:', error)
				})
			} else {
				console.log({
					errorType: 'Geolocation Error1: ',
					errorMsg: res
				})
				reject({
					errorType: 'Geolocation Error1: ',
					errorMsg: res
				})
			}
		}).catch(error => {
			console.log(error);

			// 获取ip ...
		});
	});
};