/*
  下载链接：https://autovideo.autohome.com.cn/signnew/register/index.html?uid=105091440&pvareaid=6850761&shareplatform=weixin
[rewrite_local]
#闪辆
https://newvideo.autohome.com.cn/openapi/activity-api url script-request-body https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js
[MITM]
hostname = newvideo.autohome.com.cn
#loon
https://newvideo.autohome.com.cn/openapi/activity-api url script-request-body https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js, requires-body=true, timeout=10, tag=萝卜闪辆
*/
// [task_local]
//#闪辆
// 10 0 * * * https://ghproxy.com/https://github.com/LubooC/Script/blob/main/sl.js, tag=闪辆, enabled=true

// 脚本： 琪琪的果园
// 说明：只支持青龙，需要手动抓包，打开小程序后抓包，www.weiju123.com 的任意post请求的url 中Cookie，和请求数据body中的 aot 参数
// export qqck='PHPSESSID=9oeq2l7njitqbvt..........@PHPSESSID=9oeq2l7njitqbvt..........'
//  export qqaot='.......@........'
//❗️❗️❗️❗️ 脚本挂机后不要再小程序重新授权登录，会导致登录失效，就需要更新ck,❗️❗️❗️❗️
// 收益：自动提现，1元提现，首次 0.3  每日大概收益1块钱

const $ = new Env('琪琪的果园');
let status;
status = (status = ($.getval("fhxzstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let ckArr = [],aotArr = []
let time = Math.round(Date.now() / 1000)
let ck = $.isNode() ? (process.env.qqck ? process.env.qqck : "") : ($.getdata('qqck') ? $.getdata('qqck') : "")
let aot = $.isNode() ? (process.env.qqaot ? process.env.qqaot : "") : ($.getdata('qqaot') ? $.getdata('qqaot') : "")
let cks = "",aots = ""
let uid = '', taskId = '', sp_list, i
let deviceid = ''
let num = rand(10, 99)
//
!(async () => {
    if (typeof $request !== "undefined") {
        fhxzck()
    } else {
        if (!$.isNode()) {
            slckArr.push($.getdata('slurl'))
            let slcount = ($.getval('slcount') || '1');
            for (let i = 2; i <= slcount; i++) {
                slckArr.push($.getdata(`slurl${i}`))
            }
            console.log(`-------------共${slckArr.length}个账号-------------\n`)
            for (let i = 0; i < slckArr.length; i++) {
                if (slckArr[i]) {
                    slurl = slckArr[i];
                    $.index = i + 1;
                    console.log(`\n开始【闪辆账户 ${$.index}】`)
                    uid = slurl.match(/uid=(\S*)&/)[1]
                    deviceid = slurl.match(/deviceid=(\S*)&ver/)[1]
                    uticket = slurl.match(/uticket=(\S*)/)[1]
                    await rw();
                    $.log(`------------------任务结束------------------`)

                }
            }
        } else {
            if (process.env.qqck && process.env.qqck.indexOf('@') > -1) {
                ckArr = process.env.qqck.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                cks = [process.env.qqck]
            };
            Object.keys(cks).forEach((item) => {
                if (cks[item]) {
                    ckArr.push(cks[item])
                }
            })
            if (process.env.qqaot && process.env.qqaot.indexOf('@') > -1) {
                aotArr = process.env.qqaot.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                aots = [process.env.qqaot]
            };
            Object.keys(aots).forEach((item) => {
                if (aots[item]) {
                    aotArr.push(aots[item])
                }
            })
           


            console.log(`共${ckArr.length}个账号`)
            for (let k = 0; k < ckArr.length; k++) {
                $.message = ""
                ck = ckArr[k]
                aot = aotArr[k]
                $.index = k + 1;
                console.log(`\n开始【琪琪的果园 ${$.index}】`)
                console.log('资产');
                await money();
                console.log('任务：住宅');
                let accout = 0
                do{
                    accout++
                    await getBuild1CoinMoney()
                }while(accout <10)
                console.log('任务：转盘');
                await video();
                console.log('任务：视频红包');
                await getRedMoney()
                console.log('资产');
                await money();
                console.log('去提现');
                await  updateRedMoney();
                await $.wait(1000)
                await myIndex();

                await $.wait(1000)
                await getWxCash1();
                await cashRecord();
                await getWxCash();
                $.log(`------------------任务结束------------------`)
            }
        }
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())



//获取cookie 
function fhxzck() {
    if ($request.url.indexOf("checkin") > -1 && $request.url.indexOf("query_list") > -1 && $request.url.indexOf("appid=") > -1) {
        const slurl = $request.url
        if (slurl) $.setdata(slurl, `slurl${status}`)
        $.log(slurl)
        $.msg($.name, "", `闪辆${status}数据获取成功`)
    }
}

//任务
async function rw() {
    return new Promise((resolve) => {
        let url = {
            url: `https://newvideo.autohome.com.cn/openapi/activity-api/task/query_list?uid=${uid}&deviceid=${deviceid}&taskType=0`,
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data);
                let taskDetailDtoList = result.result.taskDetailDtoList
                await daka()
                for (let i = 0; i < taskDetailDtoList.length; i++) {
                    console.log(`任务：` + taskDetailDtoList[i].taskName);
                    if (taskDetailDtoList[i].completeNum < taskDetailDtoList[i].totalNum) {
                        console.log('当前进度：' + taskDetailDtoList[i].completeNum + '/' + taskDetailDtoList[i].totalNum);
                        console.log('去完成');
                        await kqrw(taskDetailDtoList[i].taskId, taskDetailDtoList[i].totalNum - taskDetailDtoList[i].completeNum)
                        await $.wait(1000)
                    } else {
                        console.log('当前进度：' + taskDetailDtoList[i].completeNum + '/' + taskDetailDtoList[i].totalNum);
                    }
                }

            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}
//红包
function red() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Money/setCoinMoney',
            body: '{ "num" : 5999236900, "aot" : "' + aot + '", "hv" : "1.02"  }',
            headers: {
                'Cookie': ck,
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                console.log(data);
                result = JSON.parse(data);
                await video()
                // console.log('签到：' + result.message);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}

//视频红包
function getRedMoney() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Money/getRedMoney',
            body: '{"aot":"' + aot + '","hv":"1.02"}',
            headers: {
                // "Host":"www.weiju123.com",
                // "Content-Length":"54",
                "Cookie": ck,
                "Content-Type": "application/json;charset=UTF-8",
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                console.log(data);
                result = JSON.parse(data);
                if (result.code == 0) {
                    console.log('获得红包券' + result.red);
                    await $.wait(1000)
                    await getRedMoney()
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}


//打卡video
function video() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Turn/TurnIndex',
            body: '{ "aot" : "' + aot + '", "hv" : "1.02" }',
            headers: {
                'Cookie': ck,
                "Content-Type": "application/json;charset=UTF-8",
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                console.log(data);
                result = JSON.parse(data);
                if (result.code == 0) {
                    await $.wait(1000)
                    await red()
                }
                // console.log('签到：' + result.message);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}

//打卡video
function money() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Money/updateRedMoney',
            body: '{ "aot" : "' + aot + '", "hv" : "1.02" }',
            headers: {
                'Cookie': ck,
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                // console.log(data);
                result = JSON.parse(data);

                console.log('当前可提现金额：' + parseInt(result.money.money) / 1000000);
                // console.log('签到：' + result.message);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}


//打卡
function getBuild1CoinMoney() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Money/getBuild1CoinMoney',
            body: '{ "num":3, "hv" : "1.02","aot" : "' + aot + '"}',
            headers: {
                'Cookie': ck,
                "Content-Type": "application/json;charset=UTF-8",
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                console.log(data);
                result = JSON.parse(data);
                if(result.code == 0){
                    await $.wait(1000)
                }
                // console.log('签到：' + result.message);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}


//提现前
function myIndex() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/User/myIndex',
            body: `{"user_id":${uid},"hv":"1.02","aot":"${aot}"}{"hv":"1.02","aot":"${aot}"}`,
            headers: {
                "Host":"www.weiju123.com",
                "Connection":"keep-alive",
                "Cookie": `${ck}`,
                "content-type":"application/json;charset=UTF-8",
                "Accept-Encoding":"gzip,compress,br,deflate",
                "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/4G Language/zh_CN",
                "Referer":"https://servicewechat.com/wx7c324f577ffa698d/8/page-frame.html"
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                // console.log(data);
                // result = JSON.parse(data);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}

function updateRedMoney() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Money/updateRedMoney',
            body: `{"hv":"1.02","aot":"${aot}"}`,
            headers: {
                "Host":"www.weiju123.com",
                "Connection":"keep-alive",
                "Cookie": `${ck}`,
                "content-type":"application/json;charset=UTF-8",
                "Accept-Encoding":"gzip,compress,br,deflate",
                "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/4G Language/zh_CN",
                "Referer":"https://servicewechat.com/wx7c324f577ffa698d/8/page-frame.html"
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                // console.log(data);
                result = JSON.parse(data);

                let uid = result.money.uid

            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}


//打卡video
function getWxCash() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Cash/getWxCash',
            body: '{ "index":1, "aot" : "' + aot + '", "hv" : "1.02" }',
            headers: {
                'Cookie': ck,
                "Content-Type": "application/json;charset=UTF-8",
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                console.log(data);
                result = JSON.parse(data);

                // console.log('签到：' + result.message);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}


function getWxCash1() {
        return new Promise((resolve) => {
            let url = {
                url: 'https://www.weiju123.com/wxqqgy/public/index.php/Cash/getWxCash',
                body: `{"index":1,"hv":"1.02","aot":"${aot}"}`,
                headers: {
                    "Host":"www.weiju123.com",
                    "Connection":"keep-alive",
                    "Cookie": `${ck}`,
                    "content-type":"application/json;charset=UTF-8",
                    "Accept-Encoding":"gzip,compress,br,deflate",
                    "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/4G Language/zh_CN",
                    "Referer":"https://servicewechat.com/wx7c324f577ffa698d/8/page-frame.html"
                }
            }
            $.post(url, async (err, resp, data) => {
                try {
                    console.log(data);
                    result = JSON.parse(data);
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            }, 0)
        })
    }
    


//提现记录
function cashRecord() {
    return new Promise((resolve) => {
        let url = {
            url: 'https://www.weiju123.com/wxqqgy/public/index.php/Cash/cashRecord',
            body: '{ "aot" : "' + aot + '", "hv" : "1.02" }',
            headers: {
                'Cookie': ck,
                "Content-Type": "application/json;charset=UTF-8",
            }
        }
        $.post(url, async (err, resp, data) => {
            try {
                // console.log(data);
                result = JSON.parse(data);
                let dd = result.data
                console.log(`\n提现记录`);
                for (let i = 0; i < dd.length; i++) {
                    var date = new Date(dd[i].addtime * 1000);//.转换成毫秒
                    var time = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
                    console.log(time +' 提现金额：'+dd[i].money);
                }
                // console.log('签到：' + result.message);
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, 0)
    })
}

function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: i, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: i, statusCode: r, headers: o, rawBody: h }, s.decode(h, this.encoding)) }, t => { const { message: i, response: r } = t; e(i, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let i = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...o } = t; this.got[s](r, o).then(t => { const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: s, statusCode: r, headers: o, rawBody: h }, i.decode(h, this.encoding)) }, t => { const { message: s, response: r } = t; e(s, r, r && i.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
