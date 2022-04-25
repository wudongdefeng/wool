/*

奇瑞小程序
积分换购商品

青龙变量  多账户用@
export qrck='Bearer eyJhbG...... @  Bearer eyJhbG......'

*/


const $ = new Env("奇瑞小程序");
//const notify = $.isNode() ? require('./sendNotify') : '';
message = ""
var qrcks = process.env.qrck ?? ""

qrckarr = qrcks.split('@');

let rwid = ''
let msname = ''
let mszt = ''
let wzid = '1485531287404941312'

let qrck = ''
!(async () => {

  console.log(`=================== 共${qrckarr.length}个账号 ==================\n`)

  console.log('公众号：Luobook科技社'+`\n`);
  for (let i = 0; i < qrckarr.length; i++) {
    if (qrckarr[i]) {
      $.index = i + 1
      console.log(`\n【 正在签到账号${$.index} 】`)
      qrck = qrckarr[i]
      qrhd = {"Host":"cheryclub-api.chery.cn","Connection":"keep-alive","Content-Type":"application/json;charset=UTF-8","Authorization":qrck,"Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001042) NetType/4G Language/zh_CN","Referer":"https://servicewechat.com/wxb9166feb639e35a2/63/page-frame.html"}
      if (typeof $request !== "undefined") {
        console.log('没有CK')
      } else {

        await qd();

        await lb()

      await fb()
      await $.wait(1000)

        await pl()
        await $.wait(1000)

        await sc()
        await $.wait(1000)
        
        await dz()
        await $.wait(1000)

        await fx1()
        await $.wait(1000)

        await fx2()
        await $.wait(1000)

        await rwlb()
        await $.wait(1000)

        await zb()
        await $.wait(1000)

        await ks()
        await $.wait(1000)

      }
    }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())





//签到
function qd(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/score/sign/signIn`,
      headers: qrhd,
      body: `{}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n签到成功`)
        } else {
          console.log('\n无需重复签到')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//点赞
function dz(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/like/likeDynamic`,
      headers: qrhd,
      body: `{"dynamicId":${wzid},"status":1}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n点赞成功`)
          await qxdz()
        } else {
          console.log('\n点赞失败')
         // await qxdz()
         //await dz()
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//发布
function fb(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/publishDynamic/dynamic`,
      headers: {"Host":"cheryclub-api.chery.cn","Connection":"keep-alive","Content-Length":"160","Content-Type":"application/json;charset=UTF-8","Authorization":qrck,"Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001042) NetType/4G Language/zh_CN","Referer":"https://servicewechat.com/wxb9166feb639e35a2/63/page-frame.html"},
      body: `{"boardId":"13","topicId":"","carClubId":"","cover":"","content":"ggggggggg","type":0,"isBaskPicture":0,"eventId":"","eventName":"","resourceList":[],"cityCode":""}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        console.log(`\n发布动态:`)
        if (result.code == 200) {
          console.log(`\n发布动态成功`)
        } else {
          //console.log('\n点赞失败')
          console.log(data);
          await $.wait(2000)
        //  await fb()
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//列表
function lb(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/topic/queryTopicList?pageNum=1&pageSize=5`,
      headers: {"Host":"cheryclub-api.chery.cn","Connection":"keep-alive","Content-Length":"160","Content-Type":"application/json;charset=UTF-8","Authorization":qrck,"Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001042) NetType/4G Language/zh_CN","Referer":"https://servicewechat.com/wxb9166feb639e35a2/63/page-frame.html"},
    }
    $.get(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
        } else {
          //console.log('\n点赞失败')
          wzid = result.data.dataList[0].id
        //  await fb()
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


function qxdz(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/like/likeDynamic`,
      headers: qrhd,
      body: `{"dynamicId":${wzid},"status":0}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n点赞任务完成`)

        } else {
          console.log('\n点赞任务失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//收藏
function sc(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/favorite/favoriteDynamic`,
      headers: qrhd,
      body: `{"dynamicId":${wzid},"status":1}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n收藏完成`)
        } else {
          // console.log('\n收藏失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

function qxsc(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/favorite/favoriteDynamic`,
      headers: qrhd,
      body: `{"dynamicId":${wzid},"status":0}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n收藏任务完成`)

        } else {
          console.log('\n收藏任务失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}





//发表评论

function pl(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/comment/addComment`,
      headers: qrhd,
      body: `{"content":"666","dynamicId":${wzid},"url":""}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n评论任务完成`)

        } else {
          console.log('\n评论任务失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//分享1

function fx1(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/board/dynamic/share/1470301468497084416`,
      headers: qrhd
      // body : `{"content":"666","dynamicId":"1470301468497084416","url":""}`
    }
    $.get(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n分享1完成`)

        } else {
          console.log('\n分享1失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//分享2

function fx2(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/carLife/article/share`,
      headers: qrhd
      // body : `{"content":"666","dynamicId":"1470301468497084416","url":""}`
    }
    $.get(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n分享2完成`)

        } else {
          console.log('\n分享2失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}





//任务列表
function rwlb(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/game/oil/mission`,
      headers: qrhd
    }
    $.get(url, async (err, resp, data) => {
      try {

        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n获取任务列表成功`)
          for (let i = 0; i < result.data.length; i++) {
            await lqjl(i+1)
          }
        } else {
          console.log('\n读取任务列表失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//领取奖励
function lqjl(i) {
  var request = require('request');
  let url = {
    url: `https://cheryclub-api.chery.cn/api/game/oil/missionReward/${i}`,
    headers: qrhd,
    body: `{}`
  }
  var r = request.put(url, function (err, res, body) {

    const result = JSON.parse(body)
    if (result.code == 200) {
      console.log(`\n领取成功：获得${result.data.oil}汽油`)

    } else {
      console.log(`\n${body}`)
    }
  });
}

//开车

function zb(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/game/oil/ready`,
      headers: qrhd
      // body : `{"content":"666","dynamicId":"1470301468497084416","url":""}`
    }
    $.get(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n已准备完毕`)
          await ks()
        } else {
          console.log(`\n${result.message}`)
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}


function ks(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://cheryclub-api.chery.cn/api/game/oil/start`,
      headers: qrhd
      // body : `{"content":"666","dynamicId":"1470301468497084416","url":""}`
    }
    $.get(url, async (err, resp, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 200) {
          console.log(`\n已开车`)

        } else {
          console.log('\n开车失败')
        }
      } catch (e) {
      } finally {
        resolve()
      }
    }, timeout)
  })
}




function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }








