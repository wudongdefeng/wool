/**
 * 
 * 科勒优选  小程序(舞力全开活动)
 *
 * cron 10 7 * * *  klyx.js
 *
 * 7-3		领取每日任务 ,自己看日志 ,正常就行
 *
 * ========= 青龙--配置文件 =========
 * 
# 科勒优选
export klyx='xcx_openid & activeId的值 & 城市名'

 * 
 * 多账号用 换行 或 @ 分割
 * 抓包 kohler-mini.brandsh.cn , 找到 xcx_openid , activeId, 城市名汉字  即可
 * ====================================
 * tg频道: https://t.me/yml2213_tg  
 */

const $ = new Env("科勒优选");
const alias_name = 'klyx'
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
const debug = 0			//0为关闭调试,1为打开调试,默认为0
//---------------------------------------------------------------------------------------------------------
let ckStr = process.env[alias_name];
let msg, ck;
let ck_status = true;
//---------------------------------------------------------------------------------------------------------
let VersionCheck = "0.0.1"
let Change = '领取每日任务!'
let thank = `\n感谢 群友 的投稿\n`
//---------------------------------------------------------------------------------------------------------

async function tips(ckArr) {
	// let Version_latest = await Version_Check(alias_name, '1');
	let Version = `\n📌 本地脚本: V ${VersionCheck}  `
	DoubleLog(`${Version}\n📌 🆙 更新内容: ${Change}`);
	// DoubleLog(`${thank}`);
	await wyy();
	DoubleLog(`\n========== 共找到 ${ckArr.length} 个账号 ==========`);
	debugLog(`【debug】 这是你的账号数组:\n ${ckArr}`);
}



async function start() {
	await init('初始化');

	await task_list('任务列表');

	await account('查询余额');

}


async function init(name) {
	console.log(`\n开始 ${name}`);
	host = 'kohler-mini.brandsh.cn';
	hostname = 'https://' + host;
	klyx_headers = {
		'Host': host,
		'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2102J2SC Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4313 MMWEBSDK/20220709 Mobile Safari/537.36 MMWEBID/8801 MicroMessenger/8.0.25.2200(0x28001953) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
		'content-type': 'application/x-www-form-urlencoded'
	}
}






// 任务列表  https://kohler-mini.brandsh.cn/mini.php/fissionCustom/getTaskList
async function task_list(name) {
	DoubleLog(`\n开始 ${name}`)
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/getTaskList`,
		headers: klyx_headers,
		// body: `xcx_openid=otwae4n5AzGsFjSnCl-W5udpgt00&activeId=276&city=%E6%BB%A8%E5%B7%9E%E5%B8%82`
		body: `xcx_openid=${ck[0]}&activeId=${ck[1]}&city=${ck[2]}`
	};
	let result = await httpPost(Option, name);

	// console.log(result);

	tasks = result.data.user_task_list;

	for (let index = 0; index < tasks.length; index++) {
		task_name = tasks[index].task_name;
		status_ = tasks[index].status;
		if (status_ == 0) {
			await do_task(task_name);
		} else if (status_ == 2) {
			DoubleLog(`${task_name} 已完成`)
		} else {
			DoubleLog(`${name}: 失败 ❌ 了呢,原因未知!`);
			console.log(result);
		}
	}
}


/**
 * 做任务    
 */
async function do_task(name) {

	if (name == '摇晃手机 舞力全开') {
		await dance()
	}
	else if (name == '预约视频号直播') {
		await video()
	}
	else if (name == '浏览好物 10秒') {
		await browse()
	}
	else if (name == '分享活动页面1次') {
		await share()
	}

}




/**
 * 摇晃手机   httpPost
 */
async function dance() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/finishDance`,
		headers: klyx_headers,
		body: `xcx_openid=${ck[0]}&activeId=${ck[1]}&city=${ck[2]}`
	};
	let result = await httpPost(Option, `摇晃手机`);

	if (result.errcode == 0) {
		DoubleLog(`摇晃手机:${result.msg}`);
		await wait(20);
		await dance_award();
	} else {
		DoubleLog(`摇晃手机: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 摇晃手机奖励   httpPost
 */
async function dance_award() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/receiveAward`,
		headers: {
			'Host': host,
			'Content-Length': '104',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'xcx_openid=' + ck[0] + '&activeId=' + ck[1] + '&task_no=dance_page' + '&city=' + ck[2]
	};
	let result = await httpPost(Option, `摇晃手机奖励`);

	if (result.errcode == 0) {
		DoubleLog(`摇晃手机奖励:${result.msg}`);
		await wait(5);
	} else {
		DoubleLog(`摇晃手机奖励: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 预约直播   httpPost
 */
async function video() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/finishVideo`,
		headers: klyx_headers,
		body: `xcx_openid=${ck[0]}&activeId=${ck[1]}&city=${ck[2]}`
	};
	let result = await httpPost(Option, `预约直播`);

	if (result.errcode == 0) {
		DoubleLog(`预约直播:${result.msg}`);
		await wait(10);
		await video_award();
	} else {
		DoubleLog(`预约直播: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 预约直播奖励   httpPost
 */
async function video_award() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/receiveAward`,
		headers: {
			'Host': host,
			'Content-Length': '104',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'xcx_openid=' + ck[0] + '&activeId=' + ck[1] + '&task_no=video_page' + '&city=' + ck[2]
	};
	let result = await httpPost(Option, `预约直播奖励`);

	if (result.errcode == 0) {
		DoubleLog(`预约直播奖励:${result.msg}`);
		await wait(5);
	} else {
		DoubleLog(`预约直播奖励: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 浏览好物   httpPost
 */
async function browse() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/finishBrowse`,
		headers: klyx_headers,
		body: `xcx_openid=${ck[0]}&activeId=${ck[1]}&city=${ck[2]}`
	};
	let result = await httpPost(Option, `浏览好物`);

	if (result.errcode == 0) {
		DoubleLog(`浏览好物:${result.msg}`);
		await wait(15);
		await browse_award();
	} else {
		DoubleLog(`浏览好物: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 浏览好物奖励   httpPost
 */
async function browse_award() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/receiveAward`,
		headers: {
			'Host': host,
			'Content-Length': '105',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'xcx_openid=' + ck[0] + '&activeId=' + ck[1] + '&task_no=browse_page' + '&city=' + ck[2]
	};
	let result = await httpPost(Option, `浏览好物奖励`);

	if (result.errcode == 0) {
		DoubleLog(`浏览好物奖励:${result.msg}`);
		await wait(5);
	} else {
		DoubleLog(`浏览好物奖励: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 分享活动页面   httpPost
 */
async function share() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/finishShare`,
		headers: klyx_headers,
		body: `xcx_openid=${ck[0]}&activeId=${ck[1]}&city=${ck[2]}`
	};
	let result = await httpPost(Option, `分享活动页面`);

	if (result.errcode == 0) {
		DoubleLog(`分享活动页面:${result.msg}`);
		await wait(5);
		await share_award();
	} else {
		DoubleLog(`分享活动页面: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 分享活动页面奖励   httpPost
 */
async function share_award() {
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/receiveAward`,
		headers: {
			'Host': host,
			'Content-Length': '104',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'xcx_openid=' + ck[0] + '&activeId=' + ck[1] + '&task_no=share_page' + '&city=' + ck[2]
	};
	let result = await httpPost(Option, `分享活动页面奖励`);

	if (result.errcode == 0) {
		DoubleLog(`分享活动页面奖励:${result.msg}`);
		await wait(5);
	} else {
		DoubleLog(`分享活动页面奖励: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 查询余额   httpPost
 */
async function account(name) {
	DoubleLog(`\n开始 ${name}`)
	let Option = {
		url: `${hostname}/mini.php/fissionCustom/lotteryPage`,
		headers: klyx_headers,
		body: `xcx_openid=${ck[0]}&activeId=${ck[1]}&city=${ck[2]}`
	};
	let result = await httpPost(Option, name);

	if (result.errcode == 0) {
		DoubleLog(`${name}:${result.msg}：当前${result.data.account}元！`);
		if (result.data.account >= '1.00') {
			DoubleLog(`您的余额充足，开始提现`);
			await cash()
		}
		else {
			DoubleLog(`您的余额不足`);
		}
	} else {
		DoubleLog(`查询余额: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}

/**
 * 提现   httpPost
 */
async function cash() {
	let Option = {
		url: `${hostname}/mini.php/fission/getReawrd`,
		headers: {
			'Host': host,
			'Content-Length': '52',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'xcx_openid=' + ck[0] + '&activeId=' + ck[1]
	};
	let result = await httpPost(Option, `提现`);

	if (result.errcode == 1) {
		DoubleLog(`提现:${result.msg}`);
		await wait(5);
	} else {
		DoubleLog(`提现: 失败 ❌ 了呢,原因未知!`);
		console.log(result);
	}
}















// #region ********************************************************  固定代码  ********************************************************



/**
 * 账号处理
 */
!(async () => {
	let ckArr = await checkEnv(ckStr, alias_name);
	await tips(ckArr);
	for (let index = 0; index < ckArr.length; index++) {
		let num = index + 1;
		DoubleLog(`\n-------- 开始【第 ${num} 个账号】--------`);
		ck = ckArr[index].split("&");
		debugLog(`【debug】 这是你第 ${num} 账号信息:\n ${ck}`);
		await start();
	}
	await SendMsg(msg);
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done());





/**
 * 变量检查
 */
async function checkEnv(ck, Variables) {
	return new Promise((resolve) => {
		let ckArr = []
		if (ck) {
			if (ck.indexOf("@") !== -1) {

				ck.split("@").forEach((item) => {
					ckArr.push(item);
				});
			} else if (ck.indexOf("\n") !== -1) {

				ck.split("\n").forEach((item) => {
					ckArr.push(item);
				});
			} else {
				ckArr.push(ck);
			}
			resolve(ckArr)
		} else {
			console.log();
			console.log(` ${$.neme}:未填写变量 ${Variables} ,请仔细阅读脚本说明!`)
		}
	}
	)
}


/**
 * 获取远程版本
 * http://yml-gitea.ml:2233/yml/JavaScript-yml/raw/branch/master/${name}.js
 * https://raw.gh.fakev.cn/yml2213/javascript/master/${name}/${name}.js
 */
function Version_Check(name, type) {
	return new Promise((resolve) => {
		if (type == 1) {
			data = `https://raw.gh.fakev.cn/yml2213/javascript/master/${name}/${name}.js`
		} else if (type == 2) {
			data = `http://yml-gitea.ml:2233/yml/JavaScript-yml/raw/branch/master/${name}.js`
		}
		let url = {
			url: data,
		}
		$.get(url, async (err, resp, data) => {
			try {
				VersionCheck = resp.body.match(/VersionCheck = "([\d\.]+)"/)[1]
			} catch (e) {
				$.logErr(e, resp);
			} finally {
				resolve(VersionCheck)
			}
		}, timeout = 3)
	})
}

/**
 * 发送消息
 */
async function SendMsg(message) {
	if (!message) return;
	if (Notify > 0) {
		if ($.isNode()) {
			var notify = require("./sendNotify");
			await notify.sendNotify($.name, message);
		} else {
			// $.msg(message);
			$.msg($.name, '', message)
		}
	} else {
		console.log(message);
	}
}

/**
 * 双平台log输出
 */
function DoubleLog(data) {
	if ($.isNode()) {
		if (data) {
			console.log(`    ${data}`);
			msg += `\n    ${data}`;
		}
	} else {
		console.log(`    ${data}`);
		msg += `\n    ${data}`;
	}

}

/**
 * 随机 数字 + 大写字母 生成
 */
function randomszdx(e) {
	e = e || 32;
	var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		a = t.length,
		n = "";

	for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	return n;
}


/**
 * 随机 数字 + 小写字母 生成
 */
function randomszxx(e) {
	e = e || 32;
	var t = "qwertyuioplkjhgfdsazxcvbnm1234567890",
		a = t.length,
		n = "";

	for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	return n;
}




/**
 * 随机整数生成
 */
function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}


/**
 * 时间戳 13位
 */
function ts13() {
	return Math.round(new Date().getTime()).toString();
}

/**
 * 时间戳 10位
 */
function ts10() {
	return Math.round(new Date().getTime() / 1000).toString();
}


/**
 * 时间戳 转 日期
 */
function tmtoDate(time = +new Date()) {
	if (time.toString().length == 13) {
		var date = new Date(time + 8 * 3600 * 1000);
		return date.toJSON().substr(0, 19).replace('T', ' ');
	} else if (time.toString().length == 10) {
		time = time * 1000;
		var date = new Date(time + 8 * 3600 * 1000);
		return date.toJSON().substr(0, 19).replace('T', ' ');
	}
}

/**
 * 获取当前小时数
 */
function local_hours() {
	let myDate = new Date();
	let h = myDate.getHours();
	return h;
}

/**
 * 获取当前分钟数
 */
function local_minutes() {
	let myDate = new Date();
	let m = myDate.getMinutes();
	return m;
}


/**
 * 获取当前年份 2022
 */
function local_year() {
	let myDate = new Date();
	y = myDate.getFullYear();
	return y;
}

/**
 * 获取当前月份(数字)  5月
 */
function local_month() {
	let myDate = new Date();
	let m = myDate.getMonth();
	return m;
}


/**
* 获取当前月份(数字)  05月 补零
*/
function local_month_two() {
	let myDate = new Date();
	let m = myDate.getMonth();
	if (m.toString().length == 1) {
		m = `0${m}`
	}
	return m;
}

/**
* 获取当前天数(数字)  5日  
*/
function local_day() {
	let myDate = new Date();
	let d = myDate.getDate();
	return d;
}


/**
* 获取当前天数  05日 补零
*/
function local_day_two() {
	let myDate = new Date();
	let d = myDate.getDate();
	if (d.toString().length == 1) {
		d = `0${d}`
	}
	return d;
}



/**
 * 等待 X 秒
 */
function wait(n) {
	return new Promise(function (resolve) {
		setTimeout(resolve, n * 1000);
	});
}


/**
 * 每日网抑云
 */
function wyy() {
	return new Promise((resolve) => {
		let url = {
			url: `https://api.qqsuu.cn/api/comment?format=json`,
		}
		$.get(url, async (err, resp, data) => {
			try {
				data = JSON.parse(data);
				content = data.data[0].content
				source = data.data[0].source
				msg = `[网抑云时间]: ${content}  by--${source}`
				DoubleLog(msg);
			} catch (e) {
				$.logErr(e, resp);
			} finally {
				resolve()
			}
		}, timeout = 3)
	})
}

/**
 * get请求
 */
async function httpGet(getUrlObject, tip, timeout = 3) {
	return new Promise((resolve) => {
		let url = getUrlObject;
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
			console.log(url);
		}

		$.get(
			url,
			async (err, resp, data) => {
				try {
					if (debug) {
						console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
						console.log(data);
						console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
						console.log(JSON.parse(data));
					}
					let result = JSON.parse(data);
					if (result == undefined) {
						return;
					} else {
						resolve(result);
					}

				} catch (e) {
					console.log(err, resp);
					console.log(`\n ${tip} 失败了!请稍后尝试!!`);
					msg = `\n ${tip} 失败了!请稍后尝试!!`
				} finally {
					resolve();
				}
			},
			timeout
		);
	});
}

/**
 * post请求
 */
async function httpPost(postUrlObject, tip, timeout = 3) {
	return new Promise((resolve) => {
		let url = postUrlObject;
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
			console.log(url);
		}

		$.post(
			url,
			async (err, resp, data) => {
				try {
					if (debug) {
						console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
						console.log(data);
						console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
						console.log(JSON.parse(data));
					}
					let result = JSON.parse(data);
					if (result == undefined) {
						return;
					} else {
						resolve(result);
					}

				} catch (e) {
					console.log(err, resp);
					console.log(`\n ${tip} 失败了!请稍后尝试!!`);
					msg = `\n ${tip} 失败了!请稍后尝试!!`
				} finally {
					resolve();
				}
			},
			timeout
		);
	});
}

/**
 * 网络请求 (get, post等)
 */
async function httpRequest(postOptionsObject, tip, timeout = 3) {
	return new Promise((resolve) => {

		let Options = postOptionsObject;
		let request = require('request');
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${tip} 请求 信息 ===============`);
			console.log(Options);
		}

		request(Options, async (err, resp, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 ${tip} 返回数据==============`);
					console.log(data);
					console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
					console.log(JSON.parse(data));
				}
				let result = JSON.parse(data);
				if (!result) return;
				resolve(result);
			} catch (e) {
				console.log(err, resp);
				console.log(`\n ${tip} 失败了!请稍后尝试!!`);
				msg = `\n ${tip} 失败了!请稍后尝试!!`
			} finally {
				resolve();
			}
		}), timeout

	});
}


/**
 * debug调试
 */
function debugLog(...args) {
	if (debug) {
		console.log(...args);
	}
}








// 完整 Env
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

    //#endregion
