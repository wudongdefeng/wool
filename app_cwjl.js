/*
项目名称:宠物精灵

项目地址:https://pocket.igmdns.com/share/?code=uniInvitationCode:7DULAF

邀请码: 7DULAF 在我的  我的邀请码  又上角 绑定邀请人使用

注意:本人不扶持,不扶持,
需要扶持等其他业务自行进qq群:895795769

脚本只有领时段金币和购买和合成

各位大佬,悠着玩,默默的玩就可以了,不要炫

固定变量:
变量名：soy_yyz_data
变量值: TG频道用户ID&激活卡密

注释：TG频道用户ID关注 @getmyid_bot 机器人获取
卡密获取:TG频道 @ls_soy 或 @DGR0076 获取,30一个

账号上限20

脚本需要变量,自行拉取配置文件添加或者自行创建
地址:https://gitlab.com/soytool/script/-/raw/main/variable/soy_kdjl_data.js

脚本地址
https://gitlab.com/soytool/script/-/raw/main/app_cwjl.js

定时大概30或者1个小时分钟一次,不知道对不对

0-59/30 * * * *

*/


const $ = new Env('【宠物精灵22/05/22_0】');
const notify = $.isNode() ? require('./sendNotify') : '';

const author = '作者TG_ID:@ls_soy';



var _0xodR='jsjiami.com.v6',_0xodR_=['‮_0xodR'],_0x31a3=[_0xodR,'W0IP','eRZP','w4HnsILng6/li63oo4jjgpIUw6M=','Ul8awpfCrgk=','w7cZwqJmwr4=','Ll1b','wo/DjjQ=','XMKkwrQtwo9Gw7oHwqbDtMO8woUDaw==','w7FDw4g=','wqVhwr9pNg==','S8KyD8K+Yw==','wonDk8OUI8KF','wrzmiZXkuZzliYTkv5Hot78iw7LCrE/CgntG6K6O6IeP6KCN5a2/6KO0wpU=','w5InZ3hb','AXlmw4zDvA==','wr3DgGJXwqLDjHTCrAvDh8OAKMKWZRE=','w51ONARhw4huw6vCu14=','JUhVwrTDvAc4wrLCvjzDj37Cqg==','YcOIRxbDtMOPccKmQMOwCw==','w7wywrVJwr7DkQ==','woYqWBjCuA==','w5EMMW7Cnw==','w5pOPxM4w4E=','w5E6CV4Q','wrfDtR5tw7o=','wpsIQjrCmg==','w5UlPXnCmA==','KcOdw6A/LlDCrklBw75w','TSJw','w7hBw4w=','wo3DisO2','w4VbOAYlw51dw67CpEjCng==','ZwxR','w44UDg==','woptwp1NJA==','w4okKl4X','wqXDiDl8w54=','wq05wqFxGyTDqHfDmX8y','AcORwprChQNXD0odesOr','dz9dHcK1wqooEMKGw7PDmw==','w7hdUA==','RXNO','w60bwrJ3Y8KGwqwqwoLDicKq','AcORwp/CnglG','wojDgjY4w6LDoGPDljFWwqw=','wqcOwrxsM8KlYMK3KAll','wpjDpwjDjMOr','w5pZNB8D','w7tCSmkac33CoMKhwovDrg==','wpLDjMO2wpPDg8Om','w5FFOxgp','5o2t56e+dMK3KOi1rOWPlsOJ','w7zCuMKM','5o6K56aXwqRgaui0guWMhgU=','w5jCtivDt3Yt','Q2pLwps=','wprDljs4w67Dp08=','bglbBMKz','wpNvwoDCssOgUQ==','wqDCkhF3wow=','w7sTwrJ2fsKBwqA/woXDmQ==','w6h5fGFeS8KAOG7DnHEb','wqomwpt3ADnDmXw=','wpfDkzp3','wpzDlysew6LDuVk=','wrA0K2fCpW4V','w6tQc8KpWQ==','E0dQw7jDvA==','VsO6XmwBwq9lA0zDpjk+GzM=','wqjDnCLDscO0','w4IgdG5o','wppyw4/CgsOaD0EfwpQCwrsSFFbDgWPDuFB4L3xkG8OdNMOPwqbDtw1HVsOEwonCkE4=','wqdVc8KoPQ==','wojCu8KB','dcOZXQbDhw==','woZTwpBGDg==','w4NFbXkB','EmBPwozCqQ==','5ZKS5oiMJyU=','wojCisKmw4jCrg==','ZTZYwq3DpA==','Ul8awpnCsgrCvA==','wo3Dk8O9','MuWSieaLsuOAtcOXw4nkvKLnvrk=','5ZOZ5ouP5omj5Yqh','ZBNLwrnDuU09w4LDmcKjw6s=','wp13acKFHQ==','Sn/DocKVw40=','Wz7Dt8Ocdg==','w60vN8KAJcKf77yA','w7gxKQ==','S+WSieaIm+OBqA3CkA==','RMKeEcKf','wrImwq8=','wrHDlMOowojDqQ==','wobDmcOuwrzDlcOvQsKaBxfDrQ==','UsOwRwYBwqtw','w4rChsKIKsO1','wrPDo0Fzw64=','wrsdwo1AMA==','w7dFw5lIwqICw6vCgkE=','ZEFVwqPCvho=','wpMmwrJqHjzDljTChSJ2wrjClirCs8O9NMKCH8OjWsO0wqgJCcO1RVXDkcKqeG3CoVfDojjDswNBw4gtwonCpsOXw5XDrMOKYxDDpMKTw6IdSMK1VCLCkmjDnTg7A0jDscOQw7DCrMKGwpEeHcKlNMOcwpRzwojDo8OgwpMaw73DisKww7c1Y8KNwpYifcKFw50QZsKkw5Ndw6jCmsKCIAvDtsK+asO4OCEnLiTDoUYFSsOZwptsE8Kcwq/DnlrCkVZ6w5pZH8KXw4AULcOIwrV3wpl8QT3Ct8OIwo/CpcOxMFRowqdAN3jDmsKZwrFFFMKHK8O/w4wAw5jCpsOxPWdpw5QsbxJXTAcnwobDrMK7w7PCicKKBxQeDGHDl8O1McOLw4bDl2EILxnCr8Opw5vCpH1tVD3CrsOHwosDccKeJsOkcXMIccKYwoUi','NMOCw74=','w7M/SA==','wrlKScK5FsK1dMKS','IjsJ','w4fCiBPDiEw=','wpXDk8OJwo7DksOqQMKk','wrrDnMObEcKS','fcKpHMKcaA==','bCNkDMKI','McOmw7wVEQ==','wrXCjMKHw47Clw==','w7gnClrCmQ==','w78TKHoN','w7zCrAzDslA=','A1ppwqzChQ==','wrNtwq/CiMOm','YMKINcKiew==','wq7Dsh3Dl8Oz','w6Akwo9jwpM=','wr5xYFXCrA==','eMK5DMKKWA==','esOzfRMY','KsOCw7o5','M1Bqw7nDlQ==','fAx+BMKM','wrIuwpZ/Dw==','wpzDh8OdIMKH','w7NIwqPnmoHlvILlpaPotpnCiMOY6L2o5ZqMwrs=','w6NBXeeZqeW8jeWnvui3vsOKw6PovqXlmpRm','ZC1vw5NQ','w50UGXc=','IsKywrsKw6o=','E8OTRwpC','NGsVYMKmDyE5LsOiw4TChcKA','wqYdTnoQ','wpbDviwLw6c=','w4ccw6XClQ==','wrdJwqc=','wqDCv3Dnm6Xlv5Tmi67liYvDu8OuOAM95Yq05p+m5paj6ZSJEw==','HcKTwqosw5A=','f8OywoU=','w7cYwpVqbsKX','wqNMw5gGJg==','worDiEVQw78=','wrLCrcO9w5dv','X8O3Qzgp','w783CnvCtWQ=','w7N3cWJa','H8K4wqo=','RHZF','w7YiVw==','w5FKZ3kC','KsKvwok8w5E=','wr3CsBQ=','wpXDli4Gw5o=','woh2wrLCosOA','CsOLwpLCug4=','w4YTwq1UwpM=','wod/wpbCh8OhT1cuw4oSw7Q=','wpl8w5omDw==','wr8bSTfCuw==','wpRXwonCqsOh','w5rCoS3Dl2okVcKB','UEgcwr7CvBrCvA==','woYPSsOhw5U3wpg2','w4zCjA3DrUg=','w7NSw5R1wr8DwrPCnFfDnA==','wobDmcOuwrfDicOtW8K3BwU=','JEZKw7nDpQnDhSg1FA==','JHwIR8KmKic7L8OC','wr9EcGXCrw==','wpjDlj/DusOD','w4Zvw4lgwoE=','woJCwojCh8Ow','McKgwoQXw5A=','wroRwrFKBg==','woJSwq7CiMOb','N8OFw7AjIA==','w5dzZ2x0TsKNcgjCiy9Yw63Ch8Kgw7oUwp4Uw6ZneEc0wr5Mw7okFcKBOT7Dm3UUwpsgUELDocKkACvDhsO8w5EtFhV8wrgfaVzCgSYEZsKnw5nDmMOzwrhVd25uw6HDrMOKT1A7wosrw7zDqcKiw418worCqU8Kw7AeQXYzwo4yw7rDtXTDkzLDs1d2w4t8QsKAw6rDvcKew4PCq8OHw5fDg8OzKMKrWcKqPjTDscOmwqsxwoJnw6/CrEMBY3BOw7jDm1xmT0fCtwjCvsK4wrJww6HDvMOlwq7DlQnDkjoTBsKjw4JVZcOKYcKmRXTCnT1vJHjDtMOhCDJtw7PCoMO4wr8uwr3CnMOENCZUPsOIw6ZfAMK3JsOsN23DnjZyCcK4w7XDg8OmeC/CnDlcwqrCgsOuw4wyF8K2w4/Dig94NlU7UMO5','w7lfw5lWwrE=','wo5Twr1mDw==','wpNnw6ETKEA=','bQxNw5vDtTjDmzg6C8OKw7hiw47CvifCvlk=','w7dYw45ewr8K','QibDgsO6dsO1','HsOybgtow5Q1w67CrQ==','wpHDoD7DucO1wpY=','Blo6DGXDhDnDhgI=','woHDpmtIw6M=','w5HCqz4=','wqTjgaLkv5/og7/mjofnpajjgq3vvqjpqbTorb3ohYjmnrdodMK35ae26LWawrPorqLliZ7kvojml7HohY3mn7/kuYvkuqzmhKLlh5vlrLU=','w4gew6zClSU=','wr1+Q1zChA==','wrDDgWU=','wo/DnQw+w7nDvVLDnQ==','Ij9VHMKvwqkYDsKLwr3CnsOFcMKHVxY2woTDtHRww6PDkl3CqMK9wo3DpcOPwoNfw7YPw79dwpUg','ZVcD','Dl1J','w5tyBAEv','H8OuWA1Fw5k6w70=','wpbDqwo/w6g=','wq5BSnwdOg==','w4NYNAYTw5tnw6U=','BHMGZsKq','GMOrw4QrLQ==','Jk8bDF0=','w6EUB3rCkA==','YDNhwqXDkQ==','G8OueA0=','wpAfOuawpeWHqOWnrei0v8OPwqLovq7lmro+','A0gtDV8=','IExaw5E=','w79fCREn','dD8C5rCd5YWz5aek6LW4w4ol','aTxT','w5JES30m','TTNIw7ZX','bTx6AMK4wrs=','w504JlEG','w48fw5DCkAM=','QsOiwq9+wrU=','MsOEZxR8','FMONwpzCmBg=','woTDhTJww4U=','ZABQwqLDoE1fw4XDlMK6w7PCnlPDthdW','wpgKEW0GwojDnA==','DmcL','wqxkX1jCoQ==','E8O1RTV/','w6YHwr5Ebg==','wqHDqHhrw5s=','PsOTQCxn','w5omNG4r','ZcOdSxHDqA==','w48UKn8g','LsOXw6wuJg==','SMOvwpJVwoU=','ZMK5McKNRg==','wpJmL+mrgeiskOi1rOWMozUQ6LyZ5ZuLYQ==','wozDm8Kz6ais6K+s6Len5YyrwohZ6L6U5Zi3wrQ=','fMO2RSch','wpHDncOowonDhQ==','wpAHdsORw58=','CMOubxw=','wrzCksO0','WcO6VA==','bsOFWOmpp+iviOi0kOWPtFoS','BsOybA==','Hwgc6amI6KyR6LSB5Y6rw63DuA==','w4Q8wrZ1Tg==','w48VHEfCgg==','w7NhAzAZ','wo7CkMKQ5LyP55e15Yyw5a2Ww7zCnOaxjOackeWMieWuoeWNj+S+sOeUsg==','fG485L+b55S75Y6C5a+MXcOe5rKt5pyZ5Y+x5a285Yyx5L6S55W5','wq3DkMORwpjDow==','w6skQ0U=','wroowrxi','T2fDj8K3','exVO','wp/Dkysr','wpB1wpE=','wpvCtzDDvWt3','wq11wpjCqMO4T1pYwppdwrYCEiPChGjDowUWXAZ7QsKfdcKew67CsltSFsOCwpnDrjjDiQlaScKLE1nCiXxiN0xWw6TCrMOtw5/CvsKXZMKxwqXDqStmw6V7dcKKwqfCqUHDuMOoQsOHGBLDjHh6w4rCsgoJb8KhRnFEwrfCosKOw48twrJ1Skhjw6jDrQsbSMOYwrzDtXUJQhrDl1DDpxocw5/CpAsKFMOaKMKZQRHDiggSwr3CqMOVw7fCqcK7bAzDpRfDq8OTw5LCscOSBQLDm8KqdMKyMsKIdXwZYkPDvMKEeMOqWA3CmQjCtBUAbsKxw5nCsW7CisOfw6rCj8OJwrLCmlwYw5LDkMOZGsK7VsKXJRTDqWDCvyvDs8OQH8OOw5PDlMKtL8KuwoA5cMO4wr3CkkPCvMOlEMOqw70uKcOWw4cDQ8KdA8O+Pg==','DcOtZBZF','wqXCjsO4w4VDw7w=','w53DmT4nw6LCqQ==','ZW1B','wpMNw70=','dxxiFsKQ','w5odw5DCjiU7w5LDlQ==','eWTDl8Kpw54=','w6tTUX8=','wq1BY33Chw==','UgdKw51f','wr/DhcOX','SlkC5L6055a45Y2Y5a6kwpTCkOi8hOWZgcKY','wokqMeS9q+eXgeWMoeWvrSrCiui/huWYu24=','UcOkwqBWwpg=','w74wwoJgwrg=','w6LCuMKSAQ==','w6RbV2gA','cSZQ','wrnClcOWw5B8','w5kawpxpWw==','wooIScOqw5g=','wpZ7w4g=','wpJmL+S8sueXueWMq+WskjUQ','wq1PwrA=','w4MBw6Q=','w4Idw6Q=','MsOAw6YKFw==','Tns/wq/Ckg==','UEgcwrfCsgDCrTw=','dcOkwpZgwozCnQo=','w5YXOHQ8','dcOkwpZswoLCnB3CpA==','wqpAbsKADcKyb8KBw6cJ','wrbChMOnw61Ewq/CqcOGHDM=','w7EhMEfCtGJHwqwnRg==','wrQhRsOhw6s=','NsKfwoMYw7o=','woLDvWJRw78=','w4vmiZ7ku5rliI7kv77ot7pmNX3CunRfIsOhP8K6w4DCneitgOiHreiikeWtieiivVM=','wrrDmcO+H8K5NA==','fMOXSgHCsMOJXcKr','w5vmip/kup7lipDkvrDotpfDvMOcFiTCjMK5wqd0wrwYA+ivqOiHhuijjOWupuiipsKL','w7fmi7vkuZ3liq7kvJzotqjDtMKnwr1OZuiumuiFruiiteWvnOiguDk=','wp/Cv8KBw6o=','QXFWwoXDhcO6csKJfMOtw6rCnMK4fMOpwrBxTGzCghZEwr7DiTdDOwt4Q8KOwoDDp8OHBsOlwoNlw686w514wrfCig==','P8OOwonCngZPMQlBJ8Kvw5nCtWQfw6XDkAskw7bDszR3w5/DucK6w6xjwojDoMOMw6nDlMKsw71kPg7CiXpnw6bDtsK3WFtVw7DDssO2wotRw6TCvMOKaMKPfnV7wrHCiSnDuHPCuELCvDbCl1xyGMOywo1yw7E7w4MxScKYw5QTTU7Dl8O0wpXDscOoOcOdMicsfi1Uw6vDmcKYwqjCsWbChcK7w4TDr18tEzxSwq/DmsOMcVXCjsKpO8Kkwp5OJsOyw7vDlsOHwq8=','QMOdQi84','HUY7GxfDkivDkw==','HsOzeSBd','YsOgwpZM','wpt1wpofeUZYw5TCgmLDvExYw5EVIA==','woZ/fUbCoA==','SidgB8K3','A8OVwp/CvwM=','w74Awr1Awo0=','aRdOAcKJ','wrg4wrZuKA==','w5PChQ/Dn1U=','w4fmiZvkuJfli73ljrzphJPphZfnvpvmlIXkuoxEMuaJqOmEl+e9veaUn+S7jeWFseWtu+adn+isiMOy','w5/CrsKVAcOD','woHCsyd8wrI=','H0Y4','wpzjgZQ3e8Ko6ISb5pyE5pWF5Lq15YW46LeX5aCk5puT44OO77+awqPjgKvmnrPkuqHluoDlj6XluornmonohavmnInmlZPkuLHlj7zlhqbkuIbmt77ljarnmaPkuazkvJDoh5HmnrHvvYTku7Xnlrvku67mtK3orJPlkKHlrbjkuJLnoq/nq4Pvv5HnpK/mrL7nlY/kuLXllajkuZPmi6TpnaTmsLDnmbrnmKLvvIzvv7Tlkpfli4TlkaHmnIfohJrot7XjgawJ44Ku5Lii6IGm5L2D6K6v5YWG5ZOW5rGC5oKy44Cn5YSQ56Op5oKs44CW5a295pWd5oOW5ZKp5p6t5pai5oKf77yZ6Kyy5qOb5o2k5oOL5Yax6IaQ6KG65Yu+5peR44GEROOBruaeluiFieafnuaWmOS4gu+/p+elo+asreS7oOS/uOWGkeS/veWOkeOCoeisvOWfreOBt+e/peS8h+S4k+WNk+S4veS9iuW9puW9ueeauei/sei8ieOBh+WOleW7tCLlk57lipnlkrbmnpDohrvot6vjg7wd44OU5p285LuA5a6V5Lqj5L2+6ISS5p2S6ZS66aCr5qWI5LqL6Lal6LWo772q5Y6Z5oqe5L6h5Lmf6ZuO5LiT55aH5Lm55L2P6ISn5p+96ZaV6KyW5a696IWD55iO5Lq65L+Z5oyb5aeH5oqi5o2V5a2A44GQQeODieebtOaMr+aKrOmWruaMquS8keeXoOiGmuact+ebruS7ouS/s+eXoOaLnu++ueWPv+aJheS8teS7pOmZn+S6hOS4o+aOq+aKq+WEveS5tuafl+S7oeiih+S7nOi/jeWNsOWbh+WvjWLln5DljqLmsoblvpzmi47nmanlhpjmsqLopaznmabmgYnlhr7kurzov73ooaDkvJHmkZrvv7PmnbnkuJ7lrbjku57nlr7mrZHlvqTotLrnmYLkuLrkv6rpm4nnpaDmsrzmv5/miJPlhZ3kuoHlkIXmn5Tmp7rkuKnotLPot63jgKnDvOOAruWmnuadjOS4tOS8o+WPleS/u+aIuOS5r+S6ieitjuS4s+iskeiHtuach+WPrOiBuea3vOWrjeS/keeLp+WHteaduuWLv++9qeWJmuW4muWMlOaXlOmCqOeeqOW7m+aPjOS9hOi7nOS5nuivneaZjOOBquaKheafi+adguisjOaZne++n+aIgOS4suWwheWdmOaUr+WLnuitt+isj+aWvuS4j+WSoOWKs+mapueYlOWHl+iEnOaeq+OAlsKF44Co5Lqp5L+E5Lmz5LuI5L+Z5paS5b+P5p+855225q2T6aKJ55up55uI5Lmw5oqM55mp5o+C5oqD6ZaG5o6u5L6355aB6K6O5Lqd5bq/55iU5LmE5L+R6IWR5p6k55qz5Lyb55eX6IOD6YOD5bq+5LuN57qq6ZuG6K6Y5q2d5aGs5pmP44GI5p2p5LiZ5L6Z55au6ZuR5peO5pu35paH5oqX6KOy5YeT5q6a5YWu6LaI5aCe5pio55u45p+25Yi344Oi5LiD5peP5L2F55SG5bmx5aWs5YuA5Lqv5LmC5Ly455iG5YW86IW45p+v5ouT5LqY5bu55pau5LqJ77225YqD6KeC5LiN5oOx5bez5oy05Y+O5q6Z5YaB6LaH5aOb5pqf44Kc','KlBww5vDqAI=','wonDhw0bw64=','wp/Dhzomw48=','wrhQw4A1GA==','bFBHw4fCowTDnD0jFMK6w7Jmw47DsA==','FUYtO1vDgzA=','woobajTCoQ==','woXCpTd1wp0=','w4Qdw6rClA==','TVZQwpzCqA==','wofDtzFvw7c=','w6dCw4JLwqIf','wp7Dhjc=','woQSV8Oaw44xwrk8Big=','BsOTwprCmg==','w5MNGQ==','wo3ClTHkvZznlqTlj4Tlr5XDu08=','YzRUwoHDpw==','YkEgwozCtw==','w68jWUA=','UMO7UA==','wq9gw4lE','w44fDHUG','w6sKGD4=','MlNOwrfCtQ==','w5MGIG3Cvw==','d8OvwpQ=','Ujtlw7tqwppwOMKabWTDsQ==','w68dCkIq','wrjCmMOyw5ZP','wp/Cv8KHw7HCnQ==','w6cXL34x','wozCscKRw6c=','wox1woU=','Wl4P','77+26ISO5p6D5baO5qyv5bid5Lye55eNwp3phpfmlb3otqjohKfmn47ljZHlj7k=','X8KQHw==','w6sRceS8i+eVpOWPiOWvhMK4w60=','wo0FWQ==','44G6776b5pyh5aCS5Yau55mI5buA5Y2C6YSDwpZFEsKiwq8ZLHHCvyUhw7/Cow==','wo17wpbCosO8','MUJQwq3CpA==','w7MKwq9mYg==','HsK2wrk9w4g=','w7pXU3cSZEc=','wpDjgIzkvYHogIDmj4jnpJjjg73vvYfpqrHoraTohIXmnZTClsKDwojlpqXotYTDiuivmOWIueS/iOaUr+iEueadquS7vOS7nuaGkeWGgeWulMKl','GsKkwoMxw4RA','w5DCicKOIMOH','w77CgGNCw7vDumXCoB3DgMOSZMKZbyPDnsONwr4rwo5cfmvDsX1Lwr1xcU9s','EEYxGFPDhw==','wo/Dk8OuwpPDg8Om','wpQZW8Obw6UmwosxCQ==','w5IeE3Uswqc=','RsKMHcKZVlJiFFM=','wr3Cs8O8w6Jf','M1ZNw5w=','wr8/SSHClw==','woLDp0tOw54=','F0JIwqfCig==','TTt7','wrc6woZsFjU=','wrjDgDvDtcOj','woBdw7DClS4Nw5fDlsKSw5ANw79aSMKXw6kVw6w=','TybDmMO1fMO3','wpR7w5sVL0A=','B8OSwpbChTVHMVIV','w5IbEGEXwo4=','N0FZwrbCj0M9wqPCuQ==','C1guf8K3','H8O7w4wIFA==','wr3CjsO0','YeOCkeiEkeadleaPp+emiuOBhe++gOmpgOitt+S4u+mBp+WGqMOc5Ym65YSQ5YC355mk6K625Z2o6LWa5LuC5q+h5Yyj5Y+6aOS5uuabouWJnuWOn+iDueadoeWIteWbh+W/ieW5rQ==','UWfDhw==','w6vlv6/li5fkvJvmg4/vvpkkw642McOAf3vvvoc=','w68gL2Dku5vmravCmU5z77+X5pe1','ZCzDjg==','AXgPccO1fQ==','MG0OfcKtLiEzMg==','w5obHXQawpbClQ==','f8OXSgE=','woQVwrZtbQ==','w4nCqwrDrncjT8KO','cg1B','PsO1bUE=','fsOuwoU=','w6Xlvo3lirjkvaPmgpfvvqo8BEHCvxHDtnLvvZE=','DEPCm8OeVMOT77y3','wqTDgEJXw77DjH3Cpg==','HV4fw7bCsOiEo+adjuaLieijvMOwwrLCmOWMquS4r+aWjOmWn+++mg==','wq/DkcOtwrfDmQ==','FcOEwofCowNONVwbZ8O6wrbDu1UFw67DgA==','wovDthATw4A=','NWwlecKA','H8OuRxZUw5E4w7/Cn8OCRBTCtcKX','MsK8w58Z','wpVVVXXCng==','w7hYw4c=','w6tXA8KU44Kq5YSzw4o=','w7TkuZTot7Plj6njgYvDrALDpg==','IlM+N34=','w7NvU2p8Rw==','wonDocOIIsKz','wqnCjz9wwrE=','wrkHccO6w6o=','w5TjgZnoh5LmnK/mjqLnparjgqbvvIHmr5TohJbmnarljbLogYPpnLTpvYPnjLzlo4LotKs=','VDVMw5d+','wqcbwrt6FMK+S8KyJwM=','wqE9Yig=','VHvDrsK1w4ov','w70EwrVjY8KV','wr/CsAdXwro6','wrh1f3PCnSg=','wqFKfcKIFsKu','W2HDjsK7w4ImBw==','U0IGwp8=','fWUYwpXCsQ==','w64EwpdvZg==','PsOuw6EAPQ==','w5ojFVke','w5UUOkMZ','w4MIw4LCkS4=','w5vmip/kup7lipDkvrDotpfDvMOUCmDDheito+iEv+ihi+WtlOijvSU=','woQzRSDCng==','w4gSwoF1bQ==','HsOOwpQ=','6L6m5Zm/w4nDlw==','dDpHBw==','wrRJwrM=','PMOCw7sIJkfCmQ==','aiNlG8KF','wqlIwq/Cg8OG','Cnk+JlY=','MGkVZsKqPRc5IsOCw4k=','w71Zw4Rdwq4iwqA=','RF0BwojCtBrChjjCoSfDlw==','wpNqwovCs8O9V2Qbw4YAw7I=','wqLCkcO/w4lOwqQ=','UTp1wpPDqA==','wqRlYnw=','wrXCnBtzwqM=','wqo7wqFu','w5RNWXFP','w7IEwrw=','WXUU5rKH5YWQ5aev6LWSRsOP','QTrDkQ==','bsOFWOawg+WGheWkh+i0ploS','wpbDgTg=','w7/CrMKR','wrcgwoV6NA==','dsOZWzHDqA==','QCbDkQ==','Hhke5L+L55ak5YyG5a22ZnA=','L0Fb','776x6Iee5p215bWo5q2m5bmy5L2e55eBw6Hph4bmlZnotIvoh7XmnoXljpnlj4g=','w50Xw63Cnhk9w4jDm8Kew4U=','wq9Bwrpb','wpHDqjc=','woLjgKLohLnmnLfmjqPnpL3jgLPvv5bmsanmn7HojK3ljKvliYzotbDljL3mlLjmjoc=','w4wyLlUu','d3rDisKCw4Q=','AUwyElQ=','w704wqhaw6TDkDTCrWXDr8KCw70nSMKC','w6NXRmteZk7CpcK+wp0=','w7U2K2fCoixbwqs3UA==','wp7DqiLDrQ==','esO1wpZUwp7Dk0DDuMKrd8KRwqTDhMKhODTCpRDDhMKYw7nDgXLCulZlRMKEwq5Pw60UUWPDozd0QE7Cp2fDkHvCnGkcNsK9Xw7Cuw0BwqY=','L8OEw60=','Ci3Dn8O3KMKhCz9XPg==','TCBuGMK6','woLDj8OaFcKE','wrfCmBBqwpQ=','w6d1VE0S','J19MwrDCqQ==','wo7DuBgHw44=','GMOXw68YDw==','RGZmwqPCug==','CcOKw7soIA==','6LWv5LmC57KC54Kx6LyE5Zu5ZsO3','Ekg9dcKE','wrLDtClJw6M=','wo3DlA8Pw70=','w7bCosKEIcOm','w6p/ZVVr','w61cQA==','C0ZG','J1xf','dztGBsKywrkeGsKW','G8Oow5o=','woUPXcObw4Mywp4=','woHCtBBNw64=','YMOhVXo=','HeW8sOWJr+S8quaDv++8o2jCg8OkwpfDgMOxee++mQ==','YxNRWcKCCu+9kg==','w7HCo1MT5LuT5q2+wpnDgMKc776a','ZsOXfRDDr8OSQMKt','UEgc','ZMOuwoZKwoE=','woZpd8KfLg==','P2ovFng=','wpfDnTg=','L3Yb','5oyq56SuwoJRYei0g+WOlsOF','w7UkXQ==','Yui0n+S5jOexuueCpeOAtmbDt+i8jOWajsKUKg==','YsOZXBfDuA==','U8Oqwq9jwos=','5o6i56abw57DmkfotIXljqcG','fMO0wo8=','w5votp/kuK/ns7Tng77jgoUGwprmiYjliro=','wrZBwr5K','woNWQsKbJQ==','WHrDksK5w4EuGw==','wrh/dg==','5oyw56Sgw4/DrMK56LSF5Y+MVw==','wqEpYg==','Mui2leS5nuezmueDqOOCqhTDqg==','FlstE0nDhw==','LVZT','bRVjDcKU','wr7DvycBw44=','wrrChMO2w5AAwqDCsMObDyU=','wpRUVw==','wr07wqdwAX3DhHLDhGk=','wqRNwqdKGg==','wqZFwqNqCsOBIw==','VXzDlMKqw51wUUXCncO+w5fDoVpAwoRnw5wnwpbClsK/wrxHw5TDiMKZczRqw4XClXTCqcOQw57DthbClFbCg8Kgw4pJL0zDr8OFGXdod3bDtGAUPkwUwqzDvAFjXcOQNyfCsMOCw4klw7dewrTDl8OTw67DncOeUMKwXBNAw5wRVAwGwqLCkMKJamBowp4fHw9KwoYTasOwwqUJSsKvwrnCuTlqwox5Tk3CuHkcw7rDs14jPHzDlcKwPsKoT8KowpsAU8OMTsKKdsK4XsOlKcKqwoUsMSZeCcOqLcOBwoY5','wpgLF2Jew5DDk8O9NGsTwr7CtiUlwph6QDbCnBkHdBZ9TmfCnTs=','w5MUDmZ2wqbCvMKdwqcfOWgrwr9c','wrVzwpJSBg==','w5gEwr1mwp0=','w5sGC0TChQ==','fcOuRCzDlg==','wprDvmlww6A=','wrUwUcO/w5Q=','w4ERw6TCgDA=','wot/w54rJg==','wpPDqwZSw7c=','wqpAbg==','w5sPL0YA','NsKawrUVw6U=','Al0xLU4=','6L2E5ZqJw6EO','w7tKCTgH','OkU5CVs=','MlsIQsKA','wo4eWSbCow==','w7pmRG45','w5MRDXJNwo/ChsKoaWADwqPCtikr','woRdwqk=','w40Aw6zCiSR/w4/Dm8KMw5k=','IHYOZw==','wqhIasK5HQ==','YypAO8K1wrMS','wpPDhis6w7jCrhPClTVKwqs9YcOiwo9kJ8OAw49QJsK2f1/CrlTDosKLwqPCtMO7UBjChMOKw6TChAs3wrzChR9cw5piGcKuwofDkF/CiRtzwoFtSGHCmsO6a8KfwpDCvQ==','w4oRFWMN','wpvCsTDDvjg=','wqXDhnU=','emkewp7Ctg==','w5g0wp13wqQ=','w7dYw40WwrcdwrbDhlnDihIQbXM=','wp/ClwpdwqE=','w7ctwrJew6bCmTfCpWfDrcKQwqch','dcK9AcKiWg==','wofDlhHDsMO0','wpTjgbvoh4HmnKnmj5rnp4jjg6LvvZzmro/ohqDmn7LljYfog6rpnJrpv5Hnj5floYLotas=','ZsO5Xzgx','KsKOwr8Qw5o=','wrzDgHY=','wrnDoHpCw4Q=','wqdWwonCgsOE','IcOpwrjCgwE=','wpTCscO6w5p9','LXpKw57Djg==','chFQwqjDv10H','wrIidcOdw5E=','wpA+W8Obw50=','w6EDwr5cwq0=','wq05WgfCkA==','W8OzWzUq','wopcwpDCjMO5','wopcwpLCksOR','Q8KKC8KD','AcK4wqIz','wqMqYw==','woR7wpbCoA==','wo/Dqj/Dsw==','RcO6QA==','XznDn8OhfMOkcicDfCM=','jsjiQkaBRmi.coum.PvTFzgr6=='];if(function(_0x3506ca,_0x23d22f,_0x57e473){function _0x4e021f(_0x5c5b9e,_0x4a138c,_0x456a77,_0x4c5331,_0x11e32d,_0x4a0737){_0x4a138c=_0x4a138c>>0x8,_0x11e32d='po';var _0x29a11c='shift',_0x34ed8c='push',_0x4a0737='‮';if(_0x4a138c<_0x5c5b9e){while(--_0x5c5b9e){_0x4c5331=_0x3506ca[_0x29a11c]();if(_0x4a138c===_0x5c5b9e&&_0x4a0737==='‮'&&_0x4a0737['length']===0x1){_0x4a138c=_0x4c5331,_0x456a77=_0x3506ca[_0x11e32d+'p']();}else if(_0x4a138c&&_0x456a77['replace'](/[QkBRuPTFzgr=]/g,'')===_0x4a138c){_0x3506ca[_0x34ed8c](_0x4c5331);}}_0x3506ca[_0x34ed8c](_0x3506ca[_0x29a11c]());}return 0xe890d;};return _0x4e021f(++_0x23d22f,_0x57e473)>>_0x23d22f^_0x57e473;}(_0x31a3,0x131,0x13100),_0x31a3){_0xodR_=_0x31a3['length']^0x131;};function _0x4bac(_0x51ea05,_0x406dc3){_0x51ea05=~~'0x'['concat'](_0x51ea05['slice'](0x1));var _0x25e19b=_0x31a3[_0x51ea05];if(_0x4bac['kSotod']===undefined){(function(){var _0x5f2842=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x191403='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5f2842['atob']||(_0x5f2842['atob']=function(_0x47f141){var _0x13e86f=String(_0x47f141)['replace'](/=+$/,'');for(var _0x582352=0x0,_0x612d18,_0xe00aae,_0xd7fefc=0x0,_0x5281a2='';_0xe00aae=_0x13e86f['charAt'](_0xd7fefc++);~_0xe00aae&&(_0x612d18=_0x582352%0x4?_0x612d18*0x40+_0xe00aae:_0xe00aae,_0x582352++%0x4)?_0x5281a2+=String['fromCharCode'](0xff&_0x612d18>>(-0x2*_0x582352&0x6)):0x0){_0xe00aae=_0x191403['indexOf'](_0xe00aae);}return _0x5281a2;});}());function _0x2d02e0(_0x1937ce,_0x406dc3){var _0x4ca710=[],_0x39c925=0x0,_0x597506,_0x4a6d0c='',_0x1c2ba5='';_0x1937ce=atob(_0x1937ce);for(var _0x24581f=0x0,_0x29c463=_0x1937ce['length'];_0x24581f<_0x29c463;_0x24581f++){_0x1c2ba5+='%'+('00'+_0x1937ce['charCodeAt'](_0x24581f)['toString'](0x10))['slice'](-0x2);}_0x1937ce=decodeURIComponent(_0x1c2ba5);for(var _0x39c37c=0x0;_0x39c37c<0x100;_0x39c37c++){_0x4ca710[_0x39c37c]=_0x39c37c;}for(_0x39c37c=0x0;_0x39c37c<0x100;_0x39c37c++){_0x39c925=(_0x39c925+_0x4ca710[_0x39c37c]+_0x406dc3['charCodeAt'](_0x39c37c%_0x406dc3['length']))%0x100;_0x597506=_0x4ca710[_0x39c37c];_0x4ca710[_0x39c37c]=_0x4ca710[_0x39c925];_0x4ca710[_0x39c925]=_0x597506;}_0x39c37c=0x0;_0x39c925=0x0;for(var _0x504caf=0x0;_0x504caf<_0x1937ce['length'];_0x504caf++){_0x39c37c=(_0x39c37c+0x1)%0x100;_0x39c925=(_0x39c925+_0x4ca710[_0x39c37c])%0x100;_0x597506=_0x4ca710[_0x39c37c];_0x4ca710[_0x39c37c]=_0x4ca710[_0x39c925];_0x4ca710[_0x39c925]=_0x597506;_0x4a6d0c+=String['fromCharCode'](_0x1937ce['charCodeAt'](_0x504caf)^_0x4ca710[(_0x4ca710[_0x39c37c]+_0x4ca710[_0x39c925])%0x100]);}return _0x4a6d0c;}_0x4bac['XZBYYo']=_0x2d02e0;_0x4bac['JPtiDl']={};_0x4bac['kSotod']=!![];}var _0x3552de=_0x4bac['JPtiDl'][_0x51ea05];if(_0x3552de===undefined){if(_0x4bac['ySSOsP']===undefined){_0x4bac['ySSOsP']=!![];}_0x25e19b=_0x4bac['XZBYYo'](_0x25e19b,_0x406dc3);_0x4bac['JPtiDl'][_0x51ea05]=_0x25e19b;}else{_0x25e19b=_0x3552de;}return _0x25e19b;};try{CryptoJs=$['isNode']()?require('crypto-js'):'';}catch(_0x5e8f70){throw new Error(_0x4bac('‮0',']AAc'));}try{os=$['isNode']()?require('os'):'';}catch(_0xde93ad){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}try{crypto=$[_0x4bac('‫1','Hnjb')]()?require('crypto'):'';}catch(_0x5419d0){throw new Error('\x0a找不到依赖\x20crypto\x20,请自行安装\x0a');}try{NodeRSA=$['isNode']()?require(_0x4bac('‮2','(2]I')):'';}catch(_0x3fefb6){throw new Error(_0x4bac('‫3','eta%'));}try{fs=$['isNode']()?require('fs'):'';}catch(_0x3da7a7){throw new Error(_0x4bac('‫4','wII!'));}try{path=$['isNode']()?require(_0x4bac('‫5','UD#k')):'';}catch(_0xa35fbe){throw new Error('\x0a找不到依赖\x20path\x20,请自行安装\x0a');}let mac,TG_ID,yyz_Kami,user_num,script_data,subTitle,user_index,yyz_d=![],state=!![],execAcList=[];let appid='xQrid75fjMxjzFPcP7MdJ2c6EAPdSnar',jq_u=_0x4bac('‫6','J]!t'),yyz_UA=_0x4bac('‫7','KG^Q');!(async()=>{var _0x1fb40d={'EGeyp':_0x4bac('‫8','&p$w'),'TzDKD':'JEzZB','dSriW':'address','dVbuF':function(_0x129c98,_0x21b27a){return _0x129c98==_0x21b27a;},'YiQxR':function(_0x3b90ed,_0x14a06f){return _0x3b90ed==_0x14a06f;},'ZKxRn':function(_0x24f947,_0x48e793){return _0x24f947(_0x48e793);},'kwviY':_0x4bac('‫9','z0HS'),'BDoIT':function(_0x342359,_0x457c0d){return _0x342359(_0x457c0d);},'ruRQe':_0x4bac('‫a','ZAm6'),'oGkfH':_0x4bac('‫b','u&Q#'),'tWvJw':function(_0x1ab639){return _0x1ab639();},'UlHvj':'./mac','VjxyV':_0x4bac('‮c','@V0z'),'EBdyn':'140c1f12feeb2c52dfbeb2da6066a73a','QfwPr':_0x4bac('‫d','r0Kv'),'iyavb':_0x4bac('‫e','njAP'),'rdpFB':function(_0x4078d6,_0x2682b0){return _0x4078d6===_0x2682b0;},'hbWYi':_0x4bac('‮f','KG^Q'),'ZawpP':_0x4bac('‮10','p3lc'),'xPLNh':function(_0x5f040d,_0xbb382b){return _0x5f040d!==_0xbb382b;},'lRoBr':_0x4bac('‫11','njAP'),'pcFlF':function(_0x18d0ed,_0x2da373){return _0x18d0ed===_0x2da373;},'RHZmR':_0x4bac('‫12','1Knx'),'UptcZ':_0x4bac('‫13','rRD2'),'EEkkb':function(_0x579c8a,_0x1eb68f){return _0x579c8a(_0x1eb68f);},'jeTcQ':_0x4bac('‮14','S]GB'),'HARkt':function(_0x371f64,_0x4a750d){return _0x371f64===_0x4a750d;},'daOAF':_0x4bac('‫15','Yf!P'),'NmwMy':function(_0x4d26be,_0x2521fc){return _0x4d26be+_0x2521fc;},'pDOYK':function(_0x2b75a5,_0x4de403){return _0x2b75a5*_0x4de403;},'vuYmC':function(_0x275686,_0x46e489){return _0x275686*_0x46e489;},'AEDaw':function(_0x394a9c){return _0x394a9c();},'QzaID':function(_0x21a4bb){return _0x21a4bb();},'XmOSP':_0x4bac('‮16','%t9G'),'TwDRD':'VQmHh'};console[_0x4bac('‮17','z0HS')](_0x4bac('‫18','BPP]'));if($[_0x4bac('‮19','nU^p')]()){if(_0x1fb40d[_0x4bac('‮1a','*rCZ')]!==_0x4bac('‮1b','*rCZ')){var _0x1753a2=require('fs'),_0x4a7f2a=_0x1fb40d[_0x4bac('‮1c','@V0z')](require,_0x1fb40d['oGkfH']);function _0x3ba360(){var _0x1e2166='';var _0x4de109=_0x1753a2['readdirSync'](_0x4bac('‫1d','nU^p'));_0x4de109[_0x4bac('‫1e','z0HS')](function(_0x1820b5){if(_0x1fb40d[_0x4bac('‫1f','H*6x')]!==_0x1fb40d[_0x4bac('‫20','%t9G')]){var _0x12c45c=_0x4a7f2a[_0x4bac('‫21','kqbq')]('/sys/class/net',_0x1820b5,_0x1fb40d[_0x4bac('‮22','J]!t')]);if(_0x1fb40d[_0x4bac('‮23','Ux[c')](_0x1820b5[_0x4bac('‫24','dFjI')](0x0,0x3),_0x4bac('‫25','*rCZ'))&&_0x1753a2[_0x4bac('‫26','uqgr')](_0x12c45c)){_0x1e2166=_0x1753a2['readFileSync'](_0x12c45c)['toString']()[_0x4bac('‮27','KG^Q')]();};}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20'+result[_0x4bac('‮28','QtY6')]);subTitle+='\x0a['+TG_ID+_0x4bac('‮29','JW!%')+result['msg'];yyz_d=![];return![];}});return _0x1e2166;};mac=_0x1fb40d[_0x4bac('‮2a','Y#09')](_0x3ba360);try{before=_0x1753a2['readFileSync'](_0x1fb40d[_0x4bac('‮2b','$fvN')])['toString']()[_0x4bac('‫2c','ptc1')]();}catch(_0x6588dd){before='无';}mac_e=CryptoJs[_0x4bac('‮2d','&p$w')][_0x4bac('‫2e','@V0z')][_0x4bac('‫2f','QtY6')](_0x1fb40d['VjxyV']);mac_i=CryptoJs['enc'][_0x4bac('‮30','QtY6')][_0x4bac('‫31','wevB')](_0x1fb40d[_0x4bac('‫32','BPP]')]);let _0x2b28a2=$['isNode']()?process[_0x4bac('‮33','u&Q#')][_0x4bac('‫34','dnXF')]:'';if(!_0x2b28a2){if(_0x1fb40d[_0x4bac('‫35','G[e[')]===_0x1fb40d[_0x4bac('‮36','eta%')]){let _0x5ab3a4=JSON[_0x4bac('‫37','UD#k')](data);if(_0x1fb40d[_0x4bac('‫38','QtY6')](_0x5ab3a4[_0x4bac('‮39','UD#k')],0xc8)){console[_0x4bac('‮3a','P(&[')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x5ab3a4[_0x4bac('‫3b','$fvN')]+_0x4bac('‮3c','@V0z'));yyz_d=![];return![];}else{console[_0x4bac('‫3d','p]Ai')]('\x0a['+TG_ID+']:\x20使用卡密:\x20'+_0x5ab3a4['msg']);subTitle+='\x0a['+TG_ID+_0x4bac('‮3e','43U%')+_0x5ab3a4['msg'];yyz_d=![];return![];}}else{console[_0x4bac('‮3f','uqgr')]('\x0a【'+$['name']+_0x4bac('‮40','ZAm6'));return!![];}}else{if(_0x1fb40d['rdpFB'](_0x1fb40d['hbWYi'],_0x1fb40d['ZawpP'])){Tips=author[_0x4bac('‫41','P(&[')](/(\S*)TG_ID:@ls_soy/)[0x1];}else{TG_ID=_0x2b28a2[_0x4bac('‫42','wevB')]('&')[0x0];yyz_Kami=_0x2b28a2['split']('&')[0x1];try{Tips=author[_0x4bac('‫43','d99u')](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x5c3fea){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}try{YZ=author[_0x4bac('‫44','tHxR')](/作者TG_ID:(\S*)/)[0x1][_0x4bac('‮45','j7ck')](/_/g,'><');}catch(_0x13c79c){throw new Error(_0x4bac('‮46','8j8E'));}}};try{variable_data=$[_0x4bac('‫47','tHxR')]()?_0x1fb40d[_0x4bac('‮48','Yf!P')](require,_0x4bac('‮49','JW!%')):'';notice=variable_data[_0x4bac('‮4a','z0HS')][0x0][_0x4bac('‮4b','l7!P')];user_num=variable_data[_0x4bac('‫4c','uqgr')][_0x4bac('‮4d','G[e[')];user_data=variable_data[_0x4bac('‮4e','p]Ai')];}catch(_0x3d08a1){if(_0x1fb40d['xPLNh'](_0x1fb40d[_0x4bac('‮4f','eta%')],_0x1fb40d['lRoBr'])){execAcList[idx][_0x4bac('‮50','nU^p')](o);}else{try{if(_0x1fb40d[_0x4bac('‮51','H*6x')](_0x1fb40d[_0x4bac('‫52','JW!%')],_0x1fb40d[_0x4bac('‮53','wevB')])){console[_0x4bac('‫54','dnXF')]('\x0a【脚本提示】：没有获取到账号数据');}else{variable_data=$[_0x4bac('‫55','3ujG')]()?_0x1fb40d[_0x4bac('‮56','wII!')](require,_0x4bac('‮57','kqbq')):'';notice=variable_data[_0x4bac('‫58','t)dJ')][0x0][_0x4bac('‫59','@V0z')];user_num=variable_data[_0x4bac('‫5a','KG^Q')][_0x4bac('‮5b','QtY6')];user_data=variable_data[_0x4bac('‫5c','wevB')];}}catch(_0x51ebb5){throw new Error(_0x1fb40d['jeTcQ']);}}}if(before=='无'||!before){if(_0x1fb40d[_0x4bac('‫5d','RNs!')](_0x4bac('‫5e','v$[e'),_0x1fb40d['daOAF'])){console[_0x4bac('‮5f','eta%')](_0x4bac('‮60','ZAm6'));}else{console[_0x4bac('‫61','*TYg')](_0x4bac('‫62','l7!P')+TG_ID+'\x20\x0a-MAC：'+mac+_0x4bac('‫63','H*6x'));}}else{let _0xe0ce6f=CryptoJs['enc'][_0x4bac('‫64','t)dJ')]['parse'](before);let _0x3821f6=CryptoJs['enc'][_0x4bac('‫65','RNs!')][_0x4bac('‮66','RNs!')](_0xe0ce6f);let _0x5b0c6f=CryptoJs['AES'][_0x4bac('‮67','QtY6')](_0x3821f6,mac_e,{'iv':mac_i,'mode':CryptoJs[_0x4bac('‫68','(2]I')]['CBC'],'padding':CryptoJs['pad'][_0x4bac('‮69','1Knx')]});let _0x4b1f22=_0x5b0c6f[_0x4bac('‫6a','rRD2')](CryptoJs[_0x4bac('‫6b','Y#09')][_0x4bac('‫6c','ZAm6')]);console[_0x4bac('‫6d','u&Q#')](_0x4bac('‮6e','UD#k')+TG_ID+_0x4bac('‫6f','t)dJ')+mac+'\x20|\x20-上次MAC：'+_0x4b1f22[_0x4bac('‫70','JW!%')]());}console['log'](_0x4bac('‫71','Y#09')+new Date(_0x1fb40d[_0x4bac('‫72','l7!P')](new Date()['getTime']()+new Date()[_0x4bac('‮73','KG^Q')]()*0x3c*0x3e8,_0x1fb40d[_0x4bac('‫74','*rCZ')](_0x1fb40d['vuYmC'](_0x1fb40d[_0x4bac('‫75','RNs!')](0x8,0x3c),0x3c),0x3e8)))[_0x4bac('‮76','ZAm6')]()+_0x4bac('‮77','u&Q#'));await _0x1fb40d[_0x4bac('‮78','r0Kv')](yyz_login);if(yyz_d){console[_0x4bac('‮79','dFjI')](_0x4bac('‮7a','uqgr')+user_num+_0x4bac('‮7b','1Knx'));await _0x1fb40d[_0x4bac('‫7c','z0HS')](get_User_group);}else{console[_0x4bac('‮17','z0HS')]('\x0a【脚本提示】：验证不通关,刚充值的请在跑一次即可,不是则可能服务器异常');}}else{NodeRSA=$[_0x4bac('‫7d','8j8E')]()?_0x1fb40d[_0x4bac('‮7e','Hnjb')](require,_0x1fb40d['kwviY']):'';}}else{if(_0x1fb40d[_0x4bac('‮7f','%t9G')](_0x1fb40d[_0x4bac('‫80','uqgr')],_0x1fb40d['TwDRD'])){console['log'](_0x4bac('‮81','3ujG'));return;}else{UA=user_data[num]['UA'];}}if(notify){if('yXxLN'!==_0x4bac('‮82','dnXF')){if(subTitle){if(notice){await notify[_0x4bac('‮83','1Knx')]($[_0x4bac('‮84','H*6x')],subTitle);}}}else{variable_data=$[_0x4bac('‫85','*TYg')]()?_0x1fb40d['BDoIT'](require,'./soy_kdjl_data.js'):'';notice=variable_data[_0x4bac('‫86','d99u')][0x0][_0x4bac('‮87','%t9G')];user_num=variable_data['user_data'][_0x4bac('‮88','r0Kv')];user_data=variable_data['user_data'];}}})()['catch'](_0x450bda=>$[_0x4bac('‮89','S]GB')](_0x450bda))[_0x4bac('‮8a','*TYg')](()=>$[_0x4bac('‮8b','$fvN')]());async function get_User_group(){var _0x17e4bd={'BpSqL':function(_0x468d42,_0x461af5){return _0x468d42+_0x461af5;},'nlQtY':function(_0x2d3937,_0x3a0ca9){return _0x2d3937>_0x3a0ca9;},'IRMBR':function(_0x4bd163,_0x512544){return _0x4bd163-_0x512544;},'yPaXl':_0x4bac('‮8c','$fvN'),'tYBwV':_0x4bac('‮8d','d99u'),'WdpKn':function(_0x5357d6,_0x227e87){return _0x5357d6===_0x227e87;},'EyNAO':_0x4bac('‮8e','v$[e'),'kjDEz':_0x4bac('‫8f','G[e['),'mzAky':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','KoJmO':function(_0x54cf8b,_0x39e797){return _0x54cf8b!==_0x39e797;},'IKpum':function(_0x244f3c,_0x228999){return _0x244f3c+_0x228999;},'NQDtW':function(_0x2eba9d){return _0x2eba9d();}};let _0x52076b=0x0;let _0xa8e3a6=[];for(let _0xd76bb3=0x0;_0xd76bb3<user_num;_0xd76bb3++){let _0x5b41e4='';if(!user_data[_0xd76bb3]['UA']){if(_0x17e4bd['kjDEz']===_0x17e4bd[_0x4bac('‫90','QtY6')]){_0x5b41e4=_0x17e4bd[_0x4bac('‮91','kqbq')];}else{throw new Error(_0x4bac('‮92','eta%'));}}else{if(_0x17e4bd[_0x4bac('‫93','H*6x')](_0x4bac('‫94','d99u'),'VyZpg')){if(error){console[_0x4bac('‮95','KG^Q')](_0x17e4bd['BpSqL'](_0x4bac('‮96','KG^Q'),error));}else{}}else{_0x5b41e4=user_data[_0xd76bb3]['UA'];}}_0xa8e3a6[_0x4bac('‫97','njAP')]({'num':_0x17e4bd['IKpum'](_0xd76bb3,0x1),'uid':user_data[_0xd76bb3][_0x4bac('‫98',']AAc')],'token':user_data[_0xd76bb3]['token'],'UA':_0x5b41e4});}_0xa8e3a6[_0x4bac('‮99','v$[e')]((_0x1de6ed,_0x925492)=>{var _0x511c89={'wKjRb':function(_0x5e066b,_0x9ec83){return _0x17e4bd[_0x4bac('‮9a','njAP')](_0x5e066b,_0x9ec83);},'FYWXx':function(_0x5c2cc6,_0x5e3c71){return _0x17e4bd[_0x4bac('‫9b','P(&[')](_0x5c2cc6,_0x5e3c71);}};if(execAcList[_0x52076b]){if(_0x17e4bd[_0x4bac('‮9c','z0HS')]===_0x17e4bd['tYBwV']){var _0x15e416=user_list[_0x4bac('‫9d','RNs!')]['splice'](_0x3c9038,0x1);var _0x3c9038=user_list['spirit_list'][_0x4bac('‫9e','dFjI')](user_list[_0x4bac('‮9f','$fvN')][b]);if(_0x511c89['wKjRb'](_0x3c9038,-0x1)){var _0x15e416=user_list[_0x4bac('‮a0','P(&[')][_0x4bac('‫a1','eta%')](_0x511c89[_0x4bac('‫a2','Y#09')](_0x3c9038,0x1),0x1);}}else{execAcList[_0x52076b][_0x4bac('‫a3','r0Kv')](_0x1de6ed);}}else{if(_0x17e4bd['WdpKn'](_0x4bac('‫a4','%t9G'),_0x17e4bd['EyNAO'])){execAcList[_0x52076b]=[_0x1de6ed];}else{macs=fs['readFileSync'](fn)['toString']()[_0x4bac('‮a5','3ujG')]();}}});await _0x17e4bd[_0x4bac('‮a6','8j8E')](implement);}async function implement(){var _0x48111a={'agcXT':function(_0x5545a3,_0x1d9352){return _0x5545a3!==_0x1d9352;},'TTJLO':'mdDMj','uNlhg':function(_0x1ce134,_0xdbef62){return _0x1ce134===_0xdbef62;},'dauUu':'Pjywb'};if(execAcList){for(let _0x1ef35a of execAcList){if(_0x48111a['agcXT'](_0x48111a['TTJLO'],'mdDMj')){console[_0x4bac('‫a7','d99u')]('\x0a['+TG_ID+_0x4bac('‫a8','njAP')+result[_0x4bac('‮a9','t)dJ')]);subTitle+='\x0a['+TG_ID+_0x4bac('‮aa','p]Ai')+result[_0x4bac('‮ab','*rCZ')];yyz_d=![];}else{await Promise['all'](_0x1ef35a['map'](_0x5b1f22=>buycat(_0x5b1f22)));await Promise['all'](_0x1ef35a[_0x4bac('‮ac','Yf!P')](_0x4643d7=>lx_open(_0x4643d7)));}}if(notify){if(_0x48111a['uNlhg'](_0x4bac('‮ad','3ujG'),_0x48111a[_0x4bac('‫ae','(2]I')])){console[_0x4bac('‮af','t)dJ')]('\x0a['+TG_ID+_0x4bac('‮b0','nU^p')+result[_0x4bac('‮b1','wevB')]+_0x4bac('‫b2','rRD2'));yyz_d=![];return![];}else{if(subTitle){if(notice){await notify[_0x4bac('‫b3','kqbq')]($[_0x4bac('‫b4',']AAc')],subTitle);}}}}}else{console[_0x4bac('‮b5','wII!')](_0x4bac('‫b6','j7ck'));}}function buycat(_0x2e2f90){var _0x576421={'BzfUH':function(_0x5ee8ba){return _0x5ee8ba();},'mcDVE':'teqtr','dVbNh':'GTmsC','Sgreg':_0x4bac('‮b7','G[e['),'rtRZi':'zLFme','QUzSR':function(_0x2df208,_0x5c07a9){return _0x2df208==_0x5c07a9;},'vfPEv':function(_0x154b9d,_0xffd252){return _0x154b9d(_0xffd252);},'doeHu':_0x4bac('‮b8','*TYg'),'pcxPs':_0x4bac('‫b9','z0HS'),'HoZwf':_0x4bac('‮ba','p3lc'),'QejeY':_0x4bac('‫bb','j7ck'),'hBcCF':'*/*','fGcTM':'com.app.kedaya','rCrsy':_0x4bac('‫bc','BPP]'),'oGwVa':_0x4bac('‫bd','wII!'),'uJGME':'gzip,\x20deflate','gcmXR':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'};let _0x20d0d1={'url':_0x4bac('‫be','u&Q#')+_0x2e2f90[_0x4bac('‫bf','v$[e')]+_0x4bac('‮c0','t)dJ'),'headers':{'Host':_0x576421[_0x4bac('‮c1','njAP')],'Connection':_0x576421[_0x4bac('‫c2','Hnjb')],'User-Agent':_0x2e2f90['UA'],'Accept':_0x576421['hBcCF'],'X-Requested-With':_0x576421[_0x4bac('‫c3','%t9G')],'Sec-Fetch-Site':_0x576421['rCrsy'],'Sec-Fetch-Mode':_0x576421[_0x4bac('‮c4','j7ck')],'Sec-Fetch-Dest':_0x4bac('‮c5','wevB'),'Accept-Encoding':_0x576421[_0x4bac('‮c6','*rCZ')],'Accept-Language':_0x576421['gcmXR']}};return new Promise((_0x487aa5,_0x19ce70)=>{var _0x2a6fdd={'lybFq':function(_0x2430b8){return _0x576421[_0x4bac('‮c7','v$[e')](_0x2430b8);},'vodnl':function(_0x5869fd,_0x17cbe1){return _0x5869fd===_0x17cbe1;},'KLmRJ':_0x576421[_0x4bac('‮c8','J]!t')],'PLCFj':_0x576421['dVbNh'],'XFPWP':_0x576421[_0x4bac('‮c9','v$[e')],'LCphB':'AWXbb','rcGuf':_0x4bac('‫ca','wevB'),'IVRRf':_0x4bac('‫cb','RNs!'),'sfbhd':_0x576421['rtRZi'],'AkMGf':function(_0x155332,_0x78a0c8){return _0x576421[_0x4bac('‮cc','Ux[c')](_0x155332,_0x78a0c8);},'NsXVA':function(_0x59c1f6,_0x27dd69){return _0x576421[_0x4bac('‮cd','*rCZ')](_0x59c1f6,_0x27dd69);},'UgpJx':function(_0x141f30,_0x560bf6){return _0x141f30(_0x560bf6);},'iZWbH':function(_0xbdecb2,_0x384098){return _0xbdecb2(_0x384098);}};if(_0x576421[_0x4bac('‮ce','Yf!P')]===_0x576421[_0x4bac('‮cf','8j8E')]){let _0x5e2498=CryptoJs[_0x4bac('‮d0','j7ck')][_0x4bac('‫d1','nU^p')]['parse'](before);let _0x457792=CryptoJs[_0x4bac('‫d2','wevB')]['Base64'][_0x4bac('‫d3','njAP')](_0x5e2498);let _0x33dd90=CryptoJs[_0x4bac('‫d4','v$[e')][_0x4bac('‮d5','uqgr')](_0x457792,mac_e,{'iv':mac_i,'mode':CryptoJs['mode']['CBC'],'padding':CryptoJs['pad'][_0x4bac('‮d6','%t9G')]});let _0x44086c=_0x33dd90['toString'](CryptoJs['enc'][_0x4bac('‫d7','&p$w')]);console['log'](_0x4bac('‮d8','Y#09')+TG_ID+_0x4bac('‫d9','RNs!')+mac+_0x4bac('‫da','%t9G')+_0x44086c[_0x4bac('‫db','(2]I')]());}else{$[_0x4bac('‫dc','$fvN')](_0x20d0d1,async(_0x2bc2c6,_0x5a6045,_0x1e87cf)=>{if(_0x2a6fdd[_0x4bac('‫dd','u&Q#')](_0x2a6fdd[_0x4bac('‮de','S]GB')],_0x2a6fdd['PLCFj'])){_0x2a6fdd['lybFq'](_0x487aa5);}else{try{if(_0x2a6fdd['XFPWP']===_0x2a6fdd[_0x4bac('‫df','z0HS')]){console[_0x4bac('‮e0','*rCZ')]('\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x2bc2c6);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x2bc2c6;}else{if(_0x2bc2c6){console[_0x4bac('‫e1','RNs!')](_0x2a6fdd['rcGuf']+_0x2bc2c6);subTitle+='\x0a【'+Tips+_0x4bac('‫e2','@V0z')+_0x2e2f90[_0x4bac('‮e3','ptc1')]+_0x4bac('‫e4','wevB')+_0x2bc2c6;}else{if(_0x2a6fdd['IVRRf']===_0x2a6fdd['sfbhd']){execAcList[idx]=[o];}else{let _0x73036d=JSON[_0x4bac('‫e5','(2]I')](_0x1e87cf);if(_0x2a6fdd[_0x4bac('‮e6','u&Q#')](_0x73036d['errcode'],0x0)){console['log']('\x0a【'+Tips+_0x4bac('‮e7','KG^Q')+_0x2e2f90[_0x4bac('‮e8','u&Q#')]+_0x4bac('‮e9','*rCZ'));await $[_0x4bac('‫ea',']AAc')](0x5dc);await _0x2a6fdd[_0x4bac('‮eb','S]GB')](buycat,_0x2e2f90);}else if(_0x73036d[_0x4bac('‮ec','*TYg')]==0x4e21){await _0x2a6fdd['UgpJx'](loadhall,_0x2e2f90);}else{console[_0x4bac('‫ed','r0Kv')]('\x0a【'+Tips+_0x4bac('‫ee','P(&[')+_0x2e2f90[_0x4bac('‫ef','H*6x')]+_0x4bac('‫f0','(2]I')+_0x73036d[_0x4bac('‮f1','z0HS')]);subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x2e2f90[_0x4bac('‮f2','nU^p')]+'\x20购买精灵】:\x20'+_0x73036d['errmsg'];}}}}}catch(_0x4b085c){console['log'](_0x4b085c,_0x5a6045);}finally{_0x2a6fdd[_0x4bac('‮f3','njAP')](_0x487aa5,_0x2e2f90);}}});}});}function lx_open(){var _0x156e3f={'ocgzg':_0x4bac('‫f4','*rCZ'),'qkqWj':function(_0x513fa5,_0x1751b3){return _0x513fa5+_0x1751b3;},'pJUHF':function(_0x51726c){return _0x51726c();},'tSEle':_0x4bac('‫f5','eta%'),'HSfHW':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20SKW-A0\x20Build/SKYW2103030CN00MQ5;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/81.0.4044.138\x20Mobile\x20Safari/537.36\x20uni-app\x20Html5Plus/1.0\x20(Immersed/27.272728)','MBOPT':_0x4bac('‮f6','G[e['),'oVjHK':_0x4bac('‮f7','3ujG'),'JQxSl':'cors','TkEkO':_0x4bac('‮f8',']AAc'),'TZoVn':'gzip,\x20deflate','mqJDZ':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'};let _0x5e2cee=new Date()[_0x4bac('‮f9',']AAc')]();let _0x361ba8={'url':_0x4bac('‮fa','*TYg')+_0x5e2cee+_0x4bac('‫fb','QtY6'),'headers':{'Host':_0x4bac('‮fc','G[e['),'Connection':_0x156e3f[_0x4bac('‮fd',']AAc')],'User-Agent':_0x156e3f[_0x4bac('‮fe','p3lc')],'Accept':_0x156e3f[_0x4bac('‫ff','BPP]')],'X-Requested-With':'com.app.kedaya','Sec-Fetch-Site':_0x156e3f[_0x4bac('‫100','(2]I')],'Sec-Fetch-Mode':_0x156e3f[_0x4bac('‫101','JW!%')],'Sec-Fetch-Dest':_0x156e3f['TkEkO'],'Accept-Encoding':_0x156e3f[_0x4bac('‮102','uqgr')],'Accept-Language':_0x156e3f['mqJDZ']}};return new Promise((_0x453e20,_0x8f0609)=>{var _0x4c917e={'etRTX':_0x156e3f[_0x4bac('‮103','kqbq')],'qtnSt':function(_0x3a3320,_0x3a4178){return _0x156e3f[_0x4bac('‮104','@V0z')](_0x3a3320,_0x3a4178);},'MaXLK':function(_0x38fbf4){return _0x156e3f[_0x4bac('‫105','Ux[c')](_0x38fbf4);}};$[_0x4bac('‮106','S]GB')](_0x361ba8,async(_0x4480b5,_0x72c1ee,_0x16fef3)=>{try{if(_0x4c917e[_0x4bac('‫107','G[e[')]!==_0x4bac('‮108','tHxR')){before='无';}else{if(_0x4480b5){console['log'](_0x4c917e[_0x4bac('‮109','z0HS')](_0x4bac('‮10a','p3lc'),_0x4480b5));}else{}}}catch(_0x354543){console['log'](_0x354543,_0x72c1ee);}finally{_0x4c917e[_0x4bac('‮10b','43U%')](_0x453e20);}});});}function loadhall(_0xe88f56){var _0xf07b15={'FByIS':function(_0x1995b6,_0x4f55c0){return _0x1995b6!==_0x4f55c0;},'SllzQ':function(_0x2e6c88,_0x240a40){return _0x2e6c88===_0x240a40;},'YYrNz':_0x4bac('‫10c','z0HS'),'iOkaH':function(_0x4f3b0e,_0x5a0eef){return _0x4f3b0e+_0x5a0eef;},'GLkCP':'精灵列表返回:\x20','SHKtk':function(_0x2396a8,_0x5052c7){return _0x2396a8===_0x5052c7;},'udCXE':function(_0x1b8697,_0x4ee44c){return _0x1b8697==_0x4ee44c;},'qTerg':_0x4bac('‫10d','RNs!'),'beUJA':function(_0x536999,_0x385271){return _0x536999<_0x385271;},'nfhwJ':function(_0x232088,_0x559d83){return _0x232088!==_0x559d83;},'jFpSE':_0x4bac('‮10e','H*6x'),'wdbzE':function(_0x43f8ca,_0x1f92ad){return _0x43f8ca(_0x1f92ad);},'VVqYw':_0x4bac('‫10f','j7ck'),'MDvdk':_0x4bac('‫110','QtY6'),'HcFYn':'keep-alive','sXfHj':_0x4bac('‫111','kqbq'),'msQys':_0x4bac('‫112','kqbq'),'NHycx':_0x4bac('‮113','RNs!'),'XjbPg':_0x4bac('‫114','S]GB'),'Ppqbr':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'};let _0x479d0b=new Date()[_0x4bac('‫115','njAP')]();let _0x39e396={'url':_0x4bac('‫116','*rCZ')+_0xe88f56[_0x4bac('‮117','QtY6')]+_0x4bac('‮118','rRD2')+_0xe88f56[_0x4bac('‮119','JW!%')],'headers':{'Host':_0xf07b15[_0x4bac('‮11a','$fvN')],'Connection':_0xf07b15[_0x4bac('‫11b','p3lc')],'User-Agent':_0xe88f56['UA'],'Accept':_0xf07b15['sXfHj'],'X-Requested-With':_0x4bac('‮11c','dFjI'),'Sec-Fetch-Site':_0xf07b15['msQys'],'Sec-Fetch-Mode':_0xf07b15[_0x4bac('‫11d','%t9G')],'Sec-Fetch-Dest':_0xf07b15['XjbPg'],'Accept-Encoding':_0x4bac('‮11e','p3lc'),'Accept-Language':_0xf07b15['Ppqbr']}};return new Promise((_0x18e072,_0x17b50c)=>{var _0x418b42={'nYtjB':function(_0x53c5c1){return _0x53c5c1();}};$['get'](_0x39e396,async(_0x49af68,_0x5bc203,_0x3bef14)=>{try{if(_0xf07b15[_0x4bac('‮11f','p]Ai')]('zSAnu',_0x4bac('‫120','wII!'))){console['log'](_0x4bac('‮121','d99u'));return;}else{if(_0x49af68){if(_0xf07b15[_0x4bac('‫122','&p$w')](_0xf07b15[_0x4bac('‮123','tHxR')],_0xf07b15['YYrNz'])){console[_0x4bac('‫124','JW!%')](_0xf07b15[_0x4bac('‫125','JW!%')](_0xf07b15[_0x4bac('‮126','P(&[')],_0x49af68));}else{console['log']('\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用');subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20没有卡密可使用';yyz_d=![];}}else{if(_0xf07b15[_0x4bac('‫127','KG^Q')](_0x4bac('‫128','eta%'),'ECxlP')){_0x418b42[_0x4bac('‮129','nU^p')](_0x18e072);}else{let _0x49b359=JSON[_0x4bac('‫37','UD#k')](_0x3bef14);if(_0xf07b15['udCXE'](_0x49b359[_0x4bac('‫12a','Y#09')],0x0)){if(_0xf07b15[_0x4bac('‫12b','uqgr')](_0xf07b15[_0x4bac('‮12c','uqgr')],_0xf07b15[_0x4bac('‮12d','p3lc')])){let _0x3a789d=[];for(let _0x2052d3=0x0;_0xf07b15[_0x4bac('‮12e','H*6x')](_0x2052d3,0xc);_0x2052d3++){if(_0xf07b15[_0x4bac('‮12f','&p$w')](_0x4bac('‮130','P(&['),_0xf07b15[_0x4bac('‫131','P(&[')])){_0x3a789d[_0x4bac('‫132','p]Ai')]({'lvl':_0x49b359['data'][_0x4bac('‮133','tHxR')][_0x2052d3][_0x4bac('‮134','H*6x')],'pos':_0x49b359[_0x4bac('‫135','P(&[')][_0x4bac('‮136','wII!')][_0x2052d3][_0x4bac('‫137','&p$w')]});}else{console[_0x4bac('‫a7','d99u')](e);}}_0xe88f56[_0x4bac('‫138','t)dJ')]=_0x3a789d;await _0xf07b15['wdbzE'](hecheng,_0xe88f56);}else{console[_0x4bac('‮139','$fvN')](e,_0x5bc203);}}else{console['log']('\x0a【'+Tips+'提示---账号\x20'+_0xe88f56[_0x4bac('‫13a','Y#09')]+_0x4bac('‫13b','l7!P')+_0x49b359[_0x4bac('‮13c','$fvN')]);}}}}}catch(_0x5036e6){if(_0xf07b15['VVqYw']===_0x4bac('‮13d','p3lc')){console[_0x4bac('‫13e','wevB')](_0x5036e6);}else{console[_0x4bac('‫13f','Ux[c')](_0x5036e6,_0x5bc203);}}finally{_0x18e072(_0xe88f56);}});});}function hecheng(_0x3e2720){var _0x1a82e0={'Fijfo':'\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a','fbiKJ':_0x4bac('‮140','tHxR'),'jFoko':function(_0x3292e3,_0x133ff0){return _0x3292e3==_0x133ff0;},'qMbIU':_0x4bac('‫141','dFjI'),'cHfmw':function(_0x1debe0,_0x48369d){return _0x1debe0(_0x48369d);},'oDwXs':function(_0x3f13ec,_0x58ef54){return _0x3f13ec===_0x58ef54;},'GsGxm':_0x4bac('‫142',']AAc'),'PRsHy':function(_0x30176f,_0x272dae){return _0x30176f+_0x272dae;},'gTSJV':function(_0x5777bf,_0x33626e){return _0x5777bf!==_0x33626e;},'tRaBV':_0x4bac('‮143','p]Ai'),'uJQoj':function(_0x3ee8cc,_0x25759a){return _0x3ee8cc(_0x25759a);},'wwAOc':_0x4bac('‮144','Hnjb'),'PhrrI':function(_0x486064){return _0x486064();},'jpieY':_0x4bac('‮145','43U%'),'iPDbq':_0x4bac('‫146','ptc1'),'GHuzN':function(_0x5284bb,_0x1814ac){return _0x5284bb<_0x1814ac;},'TTMwK':_0x4bac('‫147','nU^p'),'CaymI':function(_0x29a700,_0x599489){return _0x29a700!=_0x599489;},'SNZmE':function(_0x1f0a4d,_0xdb2457){return _0x1f0a4d!=_0xdb2457;},'tZTXt':'QbkJo','AZpAU':function(_0x1fcda6,_0x235a9a){return _0x1fcda6>_0x235a9a;},'ebXRj':'VoieY','gnjle':function(_0x5c1adb,_0x2de3e1){return _0x5c1adb-_0x2de3e1;},'PdnLp':_0x4bac('‮148','JW!%'),'AAwOx':_0x4bac('‮149','43U%'),'rdAlt':'cross-site','UYrou':'cors','YqDCZ':'empty','ZCoaZ':_0x4bac('‫14a','wevB')};let _0x264bb2=!![];for(let _0x1f07b5=0x0;_0x1f07b5<_0x3e2720[_0x4bac('‫14b','(2]I')][_0x4bac('‫14c','p3lc')]-0x1&&_0x264bb2;_0x1f07b5++){if(_0x1a82e0['oDwXs'](_0x1a82e0['iPDbq'],_0x4bac('‮14d','H*6x'))){for(let _0x2d1cb4=0x1;_0x1a82e0[_0x4bac('‮14e','BPP]')](_0x2d1cb4,_0x3e2720['spirit_list'][_0x4bac('‫14f','43U%')]);_0x2d1cb4++){if(_0x1a82e0[_0x4bac('‫150','QtY6')](_0x1a82e0[_0x4bac('‮151','Ux[c')],_0x1a82e0[_0x4bac('‮152','H*6x')])){if(_0x1a82e0[_0x4bac('‫153','BPP]')](_0x3e2720[_0x4bac('‮154','v$[e')][_0x1f07b5]['lvl'],0x0)||_0x1a82e0['SNZmE'](_0x3e2720['spirit_list'][_0x2d1cb4][_0x4bac('‮155','dnXF')],0x0)){if(_0x3e2720['spirit_list'][_0x1f07b5][_0x4bac('‫156','dFjI')]==_0x3e2720['spirit_list'][_0x2d1cb4][_0x4bac('‫157','l7!P')]){if(_0x1a82e0['SNZmE'](_0x3e2720[_0x4bac('‮158','43U%')][_0x1f07b5][_0x4bac('‫159','Y#09')],_0x3e2720['spirit_list'][_0x2d1cb4][_0x4bac('‫15a','G[e[')])){if(_0x1a82e0['oDwXs'](_0x4bac('‫15b',']AAc'),_0x1a82e0[_0x4bac('‫15c','QtY6')])){throw new Error(_0x1a82e0[_0x4bac('‮15d','Ux[c')]);}else{var _0x3715bc=_0x3e2720[_0x4bac('‫15e','3ujG')]['indexOf'](_0x3e2720['spirit_list'][_0x1f07b5]);posfrom=_0x3e2720[_0x4bac('‮15f','KG^Q')][_0x1f07b5]['pos'];posto=_0x3e2720[_0x4bac('‫160','njAP')][_0x2d1cb4][_0x4bac('‮161','j7ck')];posto_lvl=_0x3e2720['spirit_list'][_0x2d1cb4][_0x4bac('‫162','J]!t')];if(_0x1a82e0['AZpAU'](_0x3715bc,-0x1)){var _0x369b5f=_0x3e2720[_0x4bac('‮163','d99u')][_0x4bac('‮164','KG^Q')](_0x3715bc,0x1);var _0x3715bc=_0x3e2720[_0x4bac('‮165','*rCZ')]['indexOf'](_0x3e2720[_0x4bac('‫166','1Knx')][_0x2d1cb4]);if(_0x3715bc>-0x1){if(_0x1a82e0['gTSJV'](_0x1a82e0[_0x4bac('‮167','wII!')],_0x4bac('‮168','43U%'))){var _0x369b5f=_0x3e2720[_0x4bac('‫169','j7ck')][_0x4bac('‮16a','l7!P')](_0x1a82e0[_0x4bac('‮16b','43U%')](_0x3715bc,0x1),0x1);}else{console['log']('\x0a【'+Tips+_0x4bac('‮16c','rRD2')+_0x3e2720[_0x4bac('‮16d','Yf!P')]+'\x20购买精灵】:\x20'+result['errmsg']);subTitle+='\x0a【'+Tips+_0x4bac('‫16e','v$[e')+_0x3e2720['num']+'\x20购买精灵】:\x20'+result[_0x4bac('‮16f','rRD2')];}}}_0x264bb2=![];break;}}}}}else{var _0x3ab1c5=path[_0x4bac('‫170','J]!t')](_0x1a82e0['fbiKJ'],dev,_0x4bac('‮171','*rCZ'));if(_0x1a82e0[_0x4bac('‮172','njAP')](dev[_0x4bac('‮173','P(&[')](0x0,0x3),_0x1a82e0[_0x4bac('‫174','%t9G')])&&fs[_0x4bac('‫175','d99u')](_0x3ab1c5)){macs=fs[_0x4bac('‫176','8j8E')](_0x3ab1c5)[_0x4bac('‫177','3ujG')]()[_0x4bac('‫178','Ux[c')]();};}}}else{_0x1a82e0['cHfmw'](resolve,_0x3e2720);}}let _0x475b5c=new Date()[_0x4bac('‫179','*rCZ')]();let _0x3596e6={'url':'https://most.igmdns.com/http/hallctrl/hall/hecheng?posfrom='+posfrom+_0x4bac('‫17a','BPP]')+posto+_0x4bac('‫17b','S]GB')+_0x3e2720['uid'],'headers':{'Host':_0x1a82e0[_0x4bac('‫17c','nU^p')],'Connection':_0x1a82e0['AAwOx'],'User-Agent':_0x3e2720['UA'],'Accept':'','X-Requested-With':_0x4bac('‫17d','&p$w'),'Sec-Fetch-Site':_0x1a82e0['rdAlt'],'Sec-Fetch-Mode':_0x1a82e0[_0x4bac('‫17e','wII!')],'Sec-Fetch-Dest':_0x1a82e0[_0x4bac('‫17f','ptc1')],'Accept-Encoding':_0x1a82e0['ZCoaZ'],'Accept-Language':_0x4bac('‫180','P(&[')}};return new Promise((_0x2490d7,_0x148669)=>{var _0x57cc44={'KwNbr':_0x1a82e0[_0x4bac('‮181','S]GB')]};$[_0x4bac('‫182','UD#k')](_0x3596e6,async(_0x5b811f,_0x41c4e8,_0x5eda80)=>{var _0x1f6622={'RmKNC':function(_0x1c488d,_0x3a2745){return _0x1c488d(_0x3a2745);}};if(_0x1a82e0['oDwXs'](_0x4bac('‮183','(2]I'),_0x1a82e0[_0x4bac('‮184',']AAc')])){throw new Error(_0x57cc44[_0x4bac('‫185','j7ck')]);}else{try{if(_0x5b811f){console[_0x4bac('‫124','JW!%')](_0x1a82e0[_0x4bac('‫186','wevB')](_0x4bac('‫187','8j8E'),_0x5b811f));}else{if(_0x1a82e0[_0x4bac('‫188','UD#k')](_0x1a82e0['tRaBV'],_0x4bac('‮189','Y#09'))){let _0x2a4341=JSON['parse'](_0x5eda80);if(_0x2a4341[_0x4bac('‮18a','$fvN')]==0x0){console[_0x4bac('‫18b','l7!P')]('\x0a【'+Tips+'提示---账号\x20'+_0x3e2720['num']+_0x4bac('‮18c','u&Q#')+posfrom+','+posto+_0x4bac('‫18d','%t9G'));_0x3e2720[_0x4bac('‮18e','Y#09')]['push']({'lvl':_0x1a82e0[_0x4bac('‫18f','S]GB')](posto_lvl,0x1),'pos':posto});await $['wait'](0x7d0);await _0x1a82e0['uJQoj'](hecheng,_0x3e2720);}else{if(_0x1a82e0[_0x4bac('‮190','*TYg')]!==_0x1a82e0[_0x4bac('‮191','t)dJ')]){console[_0x4bac('‫6d','u&Q#')]('\x0a当前信息：\x0a-TG_ID：'+TG_ID+_0x4bac('‮192','S]GB')+mac+'\x20|\x20-上次MAC：无');}else{console[_0x4bac('‮79','dFjI')]('\x0a【'+Tips+'提示---账号\x20'+_0x3e2720[_0x4bac('‮193','BPP]')]+_0x4bac('‮194','ZAm6')+_0x2a4341['errmsg']);await $[_0x4bac('‮195','p]Ai')](0x7d0);await _0x1a82e0['uJQoj'](buycat,_0x3e2720);}}}else{_0x1f6622['RmKNC'](_0x2490d7,_0x3e2720);}}}catch(_0x456c5d){console[_0x4bac('‮196','3ujG')](_0x456c5d,_0x41c4e8);}finally{_0x1a82e0[_0x4bac('‮197','l7!P')](_0x2490d7);}}});});}function formatDate(){var _0x45e528={'GfYez':function(_0x36df8b,_0x19fadf){return _0x36df8b+_0x19fadf;},'XKiCf':function(_0x56cccb,_0x23d488){return _0x56cccb<_0x23d488;},'rKGfv':function(_0xa58c0b,_0x407dba){return _0xa58c0b+_0x407dba;}};let _0x23920b=new Date();let _0x1e7f81=_0x23920b[_0x4bac('‫198','l7!P')]();let _0x1da9a0=_0x45e528['GfYez'](_0x23920b['getMonth'](),0x1);let _0x308603=_0x23920b[_0x4bac('‮199','&p$w')]();_0x1da9a0=_0x45e528['XKiCf'](_0x1da9a0,0xa)?'0'+_0x1da9a0:_0x1da9a0;_0x308603=_0x45e528[_0x4bac('‮19a','Yf!P')](_0x308603,0xa)?_0x45e528['rKGfv']('0',_0x308603):_0x308603;return _0x1e7f81+'/'+_0x1da9a0+'/'+_0x308603;};async function yyz_login(){var _0x1be453={'psTMY':function(_0xa547d3,_0x28fbb5){return _0xa547d3===_0x28fbb5;},'cwrJo':function(_0x1ef15e,_0x53152f){return _0x1ef15e!==_0x53152f;},'fPCaU':'EmNbO','EyswC':function(_0x1996d1,_0x3abc3b){return _0x1996d1==_0x3abc3b;},'kOWxi':function(_0x2fa140,_0x1c082e){return _0x2fa140!==_0x1c082e;},'QevTJ':'oraiU','xRLsu':_0x4bac('‫19b','JW!%'),'mLsAl':function(_0x455f26,_0x2b227d){return _0x455f26(_0x2b227d);},'nDgrp':function(_0x2850bc,_0x3bc420){return _0x2850bc(_0x3bc420);},'ZgTss':function(_0x481322,_0x2d20df){return _0x481322==_0x2d20df;},'cLnwB':_0x4bac('‮19c','3ujG'),'wPoNk':function(_0x44e17d){return _0x44e17d();},'ndqLQ':'KyStO','hlPcT':function(_0x39c77b){return _0x39c77b();},'kKuXV':function(_0x5a8b15){return _0x5a8b15();},'ZRrLo':_0x4bac('‫19d','dFjI'),'OYnra':function(_0x23bac6,_0x518e95){return _0x23bac6+_0x518e95;},'ncNNH':function(_0x193e49,_0x337a46){return _0x193e49<_0x337a46;},'AhUhU':function(_0x2ef63d,_0x3172df){return _0x2ef63d+_0x3172df;},'SwMIr':function(_0x3ae2ac,_0x29312d){return _0x3ae2ac+_0x29312d;},'jaqAE':'NCzpp','KFtaQ':'XCydL','Ayplx':function(_0x2bee99,_0x43fe27){return _0x2bee99/_0x43fe27;},'zLJRI':function(_0x419aaf,_0x5ebd97){return _0x419aaf+_0x5ebd97;},'ivkaO':function(_0xe65ddd,_0x48d9f8){return _0xe65ddd+_0x48d9f8;},'wZuGE':function(_0x220789,_0x1002b7){return _0x220789+_0x1002b7;},'NVdwa':_0x4bac('‫19e','wevB'),'qdrOY':_0x4bac('‮19f','3ujG')};var _0xcbb2b1=Math['floor'](_0x1be453['Ayplx'](Date[_0x4bac('‮1a0','v$[e')](),0x3e8));var _0x19e50f=CryptoJs[_0x4bac('‫1a1','G[e[')](''+TG_ID+mac+os['hostname']()+YZ)[_0x4bac('‮1a2','S]GB')]();var _0x898937='account='+TG_ID+'&password=123456&markcode='+_0x19e50f+_0x4bac('‫1a3','njAP')+_0xcbb2b1;var _0x20eed2=CryptoJs['MD5'](_0x1be453[_0x4bac('‮1a4','rRD2')](_0x898937+'&',appid))[_0x4bac('‫1a5','l7!P')]();_0x898937=_0x1be453[_0x4bac('‮1a6','Hnjb')](_0x1be453['wZuGE'](_0x898937,_0x1be453[_0x4bac('‫1a7','p]Ai')]),_0x20eed2);let _0x3312c8={'url':jq_u+'user_logon','headers':{'user-agent':_0x1be453['qdrOY']},'body':_0x898937};return new Promise((_0x6f32f5,_0x152813)=>{var _0x46adcd={'OfNQx':function(_0x5e1497){return _0x1be453[_0x4bac('‫1a8','njAP')](_0x5e1497);},'KGkiQ':function(_0x632a37){return _0x632a37();},'OmmPZ':function(_0x7bda5f){return _0x1be453[_0x4bac('‫1a9','v$[e')](_0x7bda5f);},'YXwzj':_0x1be453[_0x4bac('‮1aa','UD#k')],'xjaMd':function(_0x56f665,_0xbe63aa){return _0x56f665*_0xbe63aa;},'VDvzY':function(_0x2bd347,_0x29929b){return _0x1be453['OYnra'](_0x2bd347,_0x29929b);},'chuZC':function(_0x5007dd,_0x7f60ef){return _0x1be453['OYnra'](_0x5007dd,_0x7f60ef);},'qHTwM':function(_0x4bc2c3,_0x125ad9){return _0x1be453[_0x4bac('‫1ab','BPP]')](_0x4bc2c3,_0x125ad9);},'pGFzj':function(_0x396a76,_0x4398d0){return _0x396a76+_0x4398d0;},'tMkku':function(_0x34c29b,_0xab3143){return _0x34c29b+_0xab3143;},'WlvJv':function(_0x57029d,_0x55d93e){return _0x1be453[_0x4bac('‫1ac','G[e[')](_0x57029d,_0x55d93e);},'WNdDT':function(_0x2c8507,_0x3d0479){return _0x1be453[_0x4bac('‫1ad','rRD2')](_0x2c8507,_0x3d0479);},'kTaqF':function(_0x441531,_0x27045e){return _0x1be453[_0x4bac('‫1ae','wevB')](_0x441531,_0x27045e);},'eSodB':function(_0x36e5ef,_0x651a08){return _0x1be453['AhUhU'](_0x36e5ef,_0x651a08);},'RXiXW':function(_0x180470,_0x936cf3){return _0x1be453[_0x4bac('‫1af','P(&[')](_0x180470,_0x936cf3);},'bXjFd':function(_0x1bb567,_0x3abd78){return _0x1be453[_0x4bac('‫1b0','p]Ai')](_0x1bb567,_0x3abd78);},'BwIIp':function(_0x5673aa,_0x2abd17){return _0x1be453[_0x4bac('‮1b1','wII!')](_0x5673aa,_0x2abd17);}};if(_0x1be453[_0x4bac('‫1b2','p3lc')](_0x1be453[_0x4bac('‫1b3','r0Kv')],_0x1be453[_0x4bac('‫1b4','p]Ai')])){_0x46adcd[_0x4bac('‫1b5','&p$w')](_0x6f32f5);}else{$[_0x4bac('‮1b6','v$[e')](_0x3312c8,async(_0x29f9e2,_0x59fbb7,_0x185190)=>{var _0x1850a5={'iklgB':function(_0xeaf2ff,_0x435695){return _0xeaf2ff(_0x435695);},'ZmcKb':'crypto'};if(_0x1be453[_0x4bac('‫1b7','nU^p')](_0x4bac('‮1b8','njAP'),'mTrrA')){_0x46adcd['KGkiQ'](_0x6f32f5);}else{try{if(_0x1be453['cwrJo'](_0x1be453['fPCaU'],_0x1be453[_0x4bac('‫1b9','1Knx')])){_0x46adcd[_0x4bac('‫1ba','Hnjb')](_0x6f32f5);}else{if(_0x29f9e2){console['log']('\x0a['+TG_ID+_0x4bac('‮1bb','kqbq')+_0x29f9e2);subTitle+='\x0a['+TG_ID+_0x4bac('‮1bc','G[e[')+_0x29f9e2;}else{let _0x3aaf05=JSON['parse'](_0x185190);if(_0x1be453[_0x4bac('‮1bd','dnXF')](_0x3aaf05[_0x4bac('‫1be','G[e[')],0xc8)){if(_0x1be453['kOWxi'](_0x1be453[_0x4bac('‫1bf','tHxR')],_0x1be453[_0x4bac('‫1c0','ZAm6')])){try{fs[_0x4bac('‫1c1','RNs!')](_0x4bac('‮1c2','j7ck'),Now_mac);}catch(_0x142a60){}let _0xf61fc4=_0x1be453[_0x4bac('‫1c3','*rCZ')](Format_time,_0x3aaf05['msg'][_0x4bac('‫1c4','kqbq')][_0x4bac('‮1c5',']AAc')]);console['log']('\x0a['+TG_ID+_0x4bac('‫1c6','wII!')+_0xf61fc4);await _0x1be453[_0x4bac('‮1c7','tHxR')](get_vip,_0x3aaf05[_0x4bac('‮1c8','u&Q#')]['token']);}else{CryptoJs=$[_0x4bac('‮1c9','d99u')]()?require(_0x46adcd[_0x4bac('‫1ca','@V0z')]):'';}}else if(_0x1be453[_0x4bac('‫1cb','JW!%')](_0x3aaf05['code'],0x71)){if(_0x1be453['kOWxi'](_0x1be453[_0x4bac('‫1cc','eta%')],_0x4bac('‫1cd','&p$w'))){await _0x1be453['wPoNk'](yyz_user_reg);}else{crypto=$[_0x4bac('‮1ce','BPP]')]()?_0x1850a5[_0x4bac('‮1cf','8j8E')](require,_0x1850a5['ZmcKb']):'';}}else{console[_0x4bac('‫1d0','tHxR')]('\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x3aaf05[_0x4bac('‮1d1','J]!t')]);subTitle+='\x0a['+TG_ID+']:\x20登录失败:\x20\x20'+_0x3aaf05[_0x4bac('‫1d2','ptc1')];yyz_d=![];}}}}catch(_0x4fea7b){if(_0x4bac('‫1d3','j7ck')===_0x4bac('‫1d4','tHxR')){console[_0x4bac('‮1d5','%t9G')](_0x4fea7b);}else{console['log'](_0x4fea7b);}}finally{if(_0x1be453[_0x4bac('‮1d6','*rCZ')]===_0x1be453['ndqLQ']){_0x1be453[_0x4bac('‫1d7','P(&[')](_0x6f32f5);}else{var _0x4a5794=new Date(_0x46adcd[_0x4bac('‮1d8','KG^Q')](timestamp,0x3e8));var _0xe96462=_0x46adcd[_0x4bac('‮1d9','p3lc')](_0x4a5794[_0x4bac('‫1da','P(&[')](),'-');var _0x5b4218=_0x46adcd[_0x4bac('‫1db','@V0z')](_0x46adcd['qHTwM'](_0x46adcd[_0x4bac('‫1dc','H*6x')](_0x4a5794['getMonth'](),0x1),0xa)?_0x46adcd['pGFzj']('0',_0x46adcd[_0x4bac('‫1dd','P(&[')](_0x4a5794[_0x4bac('‮1de','rRD2')](),0x1)):_0x4a5794['getMonth']()+0x1,'-');var _0x23bdc4=_0x4a5794[_0x4bac('‮1df','$fvN')]()+'\x20';var _0x809950=_0x46adcd['WlvJv'](_0x4a5794[_0x4bac('‮1e0','uqgr')](),':');var _0x37adc4=(_0x46adcd[_0x4bac('‫1e1','rRD2')](_0x4a5794[_0x4bac('‮1e2','dFjI')](),0xa)?_0x46adcd['WNdDT']('0',_0x4a5794[_0x4bac('‮1e3','l7!P')]()):_0x4a5794[_0x4bac('‫1e4','nU^p')]())+':';var _0x108644=_0x4a5794[_0x4bac('‮1e5','RNs!')]();let _0x195733=_0x46adcd[_0x4bac('‫1e6','r0Kv')](_0x46adcd[_0x4bac('‫1e7','wII!')](_0x46adcd['eSodB'](_0x46adcd[_0x4bac('‮1e8','dFjI')](_0xe96462,_0x5b4218),_0x23bdc4),_0x809950),_0x37adc4)+_0x108644;return _0x46adcd['bXjFd'](_0x46adcd['bXjFd'](_0x46adcd[_0x4bac('‮1e9','P(&[')](_0x46adcd[_0x4bac('‮1ea','tHxR')](_0xe96462,_0x5b4218)+_0x23bdc4,_0x809950),_0x37adc4),_0x108644);}}}});}});}async function yyz_user_reg(){var _0x41f259={'QIzko':'\x0a找不到变量配置文件\x20,或配置文件内容有误\x0a','ItXek':function(_0x265523){return _0x265523();},'tIeBU':function(_0x3d6080,_0x1ecc9d){return _0x3d6080===_0x1ecc9d;},'ZvhfU':'ftJfe','lgTRD':_0x4bac('‫1eb','3ujG'),'SNyfZ':function(_0x28f298){return _0x28f298();},'BFMfj':function(_0x12fcf4,_0x4b2ac6){return _0x12fcf4(_0x4b2ac6);},'UfDrg':function(_0xf55ff4,_0x2668d0){return _0xf55ff4!==_0x2668d0;},'wPCnA':_0x4bac('‫1ec','P(&['),'OsjXl':_0x4bac('‫1ed','v$[e'),'inRHm':function(_0x1a44ba,_0x31dbdd){return _0x1a44ba/_0x31dbdd;},'mYUuc':function(_0x40fccd,_0x5e973f){return _0x40fccd+_0x5e973f;},'Gjzri':_0x4bac('‮1ee','8j8E')};if(!Tips&&!YZ){if(_0x41f259['UfDrg'](_0x4bac('‮1ef','dFjI'),_0x41f259[_0x4bac('‫1f0',']AAc')])){try{variable_data=$[_0x4bac('‮1f1','@V0z')]()?require(_0x4bac('‮1f2','nU^p')):'';notice=variable_data[_0x4bac('‫1f3','dFjI')][0x0][_0x4bac('‫1f4','t)dJ')];user_num=variable_data[_0x4bac('‮1f5','ZAm6')][_0x4bac('‫1f6','wII!')];user_data=variable_data[_0x4bac('‫1f7','z0HS')];}catch(_0x1472e6){throw new Error(_0x41f259[_0x4bac('‫1f8','JW!%')]);}}else{console[_0x4bac('‮1f9','rRD2')](_0x4bac('‮1fa','kqbq'));return![];}}var _0x23dafb=Math[_0x4bac('‮1fb','kqbq')](_0x41f259[_0x4bac('‫1fc','r0Kv')](Date['now'](),0x3e8));var _0x2b1772=CryptoJs[_0x4bac('‮1fd','wII!')](''+TG_ID+mac+os['hostname']()+YZ)[_0x4bac('‫1fe','*rCZ')]();var _0x3bea03='user='+TG_ID+_0x4bac('‫1ff','njAP')+_0x2b1772+_0x4bac('‮200','nU^p')+_0x23dafb;var _0x4e0ff6=CryptoJs[_0x4bac('‫201','RNs!')](_0x41f259[_0x4bac('‫202','43U%')](_0x3bea03,'&')+appid)[_0x4bac('‫203','ZAm6')]();_0x3bea03=_0x41f259[_0x4bac('‫204','*rCZ')](_0x41f259['mYUuc'](_0x3bea03,_0x4bac('‫205','j7ck')),_0x4e0ff6);let _0x490da1={'url':jq_u+_0x4bac('‮206','43U%'),'headers':{'user-agent':_0x41f259[_0x4bac('‮207','RNs!')]},'body':_0x3bea03};return new Promise((_0x50dcba,_0x46b385)=>{var _0x187f9d={'hcRuf':function(_0x57819b,_0xc149){return _0x41f259[_0x4bac('‮208','v$[e')](_0x57819b,_0xc149);},'cFXWe':'path'};if(_0x41f259[_0x4bac('‮209','z0HS')](_0x41f259[_0x4bac('‫20a','BPP]')],_0x41f259[_0x4bac('‮20b','Y#09')])){console[_0x4bac('‮17','z0HS')]('\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+error);subTitle+='\x0a['+TG_ID+']:\x20使用卡密:\x20返回\x20'+error;yyz_d=![];}else{$[_0x4bac('‮20c','ZAm6')](_0x490da1,async(_0x23daa5,_0x9f12c1,_0x2b7522)=>{try{if(_0x23daa5){console[_0x4bac('‮af','t)dJ')]('\x0a['+TG_ID+_0x4bac('‫20d','S]GB')+_0x23daa5);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20返回\x20'+_0x23daa5;}else{let _0x32a529=JSON[_0x4bac('‮20e','z0HS')](_0x2b7522);if(_0x32a529[_0x4bac('‫20f','nU^p')]==0xc8){await _0x41f259[_0x4bac('‮210','43U%')](yyz_login);}else if(_0x32a529['code']==0x75){console[_0x4bac('‫61','*TYg')]('\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x32a529['msg']+'，该TG_ID/设备/IP已被注册');yyz_d=![];}else{console[_0x4bac('‫e1','RNs!')]('\x0a['+TG_ID+_0x4bac('‮211','J]!t')+_0x32a529[_0x4bac('‫212','njAP')]);subTitle+='\x0a['+TG_ID+']:\x20注册失败:\x20'+_0x32a529['msg'];yyz_d=![];}}}catch(_0x533641){console[_0x4bac('‮e0','*rCZ')](_0x533641);}finally{if(_0x41f259['tIeBU'](_0x41f259[_0x4bac('‮213','j7ck')],_0x41f259[_0x4bac('‮214','dnXF')])){path=$[_0x4bac('‮215','njAP')]()?_0x187f9d['hcRuf'](require,_0x187f9d[_0x4bac('‫216','QtY6')]):'';}else{_0x41f259['SNyfZ'](_0x50dcba);}}});}});}async function get_vip(_0x581b2b){var _0x2f161e={'qGiHW':_0x4bac('‫217','kqbq'),'URKUP':function(_0x54524c,_0x3fb165){return _0x54524c==_0x3fb165;},'dXJhH':function(_0xdf82df,_0x3b48eb){return _0xdf82df===_0x3b48eb;},'KTWub':_0x4bac('‮218','u&Q#'),'RFRuy':function(_0x281575,_0x40c74b){return _0x281575(_0x40c74b);},'weeuu':_0x4bac('‫219','ZAm6'),'gdajt':function(_0x7e71ef,_0xacfac){return _0x7e71ef/_0xacfac;},'xtNLH':function(_0x59c473,_0x3882df){return _0x59c473+_0x3882df;},'xleAd':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)'};var _0x596ef9=Math[_0x4bac('‮21a','KG^Q')](_0x2f161e[_0x4bac('‮21b','Ux[c')](Date['now'](),0x3e8));var _0x5bd3f7=_0x4bac('‫21c','Y#09')+user_num+_0x4bac('‫21d','QtY6')+_0x581b2b+_0x4bac('‮200','nU^p')+_0x596ef9;var _0x3fefc6=CryptoJs[_0x4bac('‫21e','nU^p')](_0x2f161e['xtNLH'](_0x2f161e[_0x4bac('‫21f','r0Kv')](_0x5bd3f7,'&'),appid))['toString']();_0x5bd3f7=_0x2f161e[_0x4bac('‫220','ZAm6')](_0x5bd3f7,'&sign=')+_0x3fefc6;let _0x385aa5={'url':jq_u+'get_vip','headers':{'user-agent':_0x2f161e[_0x4bac('‮221','d99u')]},'body':_0x5bd3f7};return new Promise((_0x351240,_0x189bcb)=>{var _0x108220={'qoWmx':'精灵列表返回:\x20','tzeca':function(_0x2447e9,_0x176a78){return _0x2447e9!==_0x176a78;},'Znpqh':_0x2f161e[_0x4bac('‫222','JW!%')],'qmHxe':function(_0x42fb67,_0x467e1c){return _0x2f161e[_0x4bac('‮223','ZAm6')](_0x42fb67,_0x467e1c);},'ZWmpD':function(_0x1aded8,_0x28e23b){return _0x2f161e[_0x4bac('‮224','QtY6')](_0x1aded8,_0x28e23b);},'YQXSS':_0x2f161e['KTWub'],'EJRDU':function(_0x8b9fb6,_0x2fb676){return _0x2f161e['RFRuy'](_0x8b9fb6,_0x2fb676);},'LlKbC':_0x2f161e[_0x4bac('‮225','(2]I')]};$['post'](_0x385aa5,async(_0x226ca9,_0xa57c21,_0x662401)=>{var _0x1abed8={'IcveA':function(_0xf60b71,_0x165922){return _0xf60b71+_0x165922;},'PfFMC':_0x108220[_0x4bac('‮226','G[e[')]};try{if(_0x226ca9){if(_0x108220[_0x4bac('‮227','v$[e')](_0x108220[_0x4bac('‮228','u&Q#')],_0x4bac('‮229','p]Ai'))){console['log']('\x0a['+TG_ID+_0x4bac('‫22a','H*6x')+_0x226ca9);subTitle+='\x0a['+TG_ID+_0x4bac('‮22b','eta%')+_0x226ca9;}else{console[_0x4bac('‫e1','RNs!')](_0x1abed8[_0x4bac('‮22c','&p$w')](_0x1abed8['PfFMC'],_0x226ca9));}}else{let _0x4766b4=JSON[_0x4bac('‫22d','l7!P')](_0x662401);if(_0x108220[_0x4bac('‫22e','uqgr')](_0x4766b4[_0x4bac('‮22f','ZAm6')],0xc8)){Ch_H=_0x4766b4[_0x4bac('‮230','eta%')];yyz_d=!![];}else if(_0x4766b4['code']==0xcd){console[_0x4bac('‫231','&p$w')]('\x0a['+TG_ID+_0x4bac('‫232','p]Ai')+_0x4766b4[_0x4bac('‫233','ZAm6')]);subTitle+='\x0a['+TG_ID+_0x4bac('‫234','wevB')+_0x4766b4['msg'];yyz_d=![];}else{if(yyz_Kami){if(_0x108220[_0x4bac('‮235','d99u')](_0x108220[_0x4bac('‮236','BPP]')],'xIRer')){os=$[_0x4bac('‫47','tHxR')]()?require('os'):'';}else{await _0x108220[_0x4bac('‮237','43U%')](card,_0x581b2b);}}else{console[_0x4bac('‫a7','d99u')]('\x0a['+TG_ID+_0x4bac('‮238','Hnjb'));subTitle+='\x0a['+TG_ID+_0x4bac('‫239','dnXF');yyz_d=![];}}}}catch(_0x426d4a){if(_0x108220[_0x4bac('‫23a','l7!P')]!==_0x108220['LlKbC']){spirit_list[_0x4bac('‮23b','ptc1')]({'lvl':result[_0x4bac('‮23c','3ujG')][_0x4bac('‮23d','*TYg')][num][_0x4bac('‮23e','Y#09')],'pos':result[_0x4bac('‮23f','*rCZ')]['room'][num][_0x4bac('‫240','P(&[')]});}else{console['log'](_0x426d4a);}}finally{_0x351240();}});});}async function card(_0x1ecfcc){var _0x22ff5f={'CeBru':function(_0x2c4275,_0x4d4178){return _0x2c4275===_0x4d4178;},'Jmene':function(_0x5c1c1c,_0x2a0501){return _0x5c1c1c==_0x2a0501;},'htEpQ':function(_0x5e41d9,_0x1dddcc){return _0x5e41d9!==_0x1dddcc;},'GqGlQ':'ecHwU','kbwCb':'ojSwe','sSVyL':function(_0x6670df,_0x540f53){return _0x6670df+_0x540f53;},'Dlwsp':function(_0x5d57d2,_0x46d4c9){return _0x5d57d2+_0x46d4c9;},'qXCoC':_0x4bac('‫241','rRD2'),'yQrin':_0x4bac('‮242','P(&[')};var _0x3e3cbd=Math[_0x4bac('‮243','ZAm6')](Date['now']()/0x3e8);var _0x2e6e9a=_0x4bac('‫244','eta%')+_0x1ecfcc+_0x4bac('‮245','*rCZ')+yyz_Kami+_0x4bac('‮246','RNs!')+_0x3e3cbd;var _0x2462ba=CryptoJs[_0x4bac('‮247','3ujG')](_0x22ff5f[_0x4bac('‫248','njAP')](_0x2e6e9a,'&')+appid)[_0x4bac('‮249','kqbq')]();_0x2e6e9a=_0x22ff5f[_0x4bac('‮24a','*TYg')](_0x2e6e9a+_0x22ff5f['qXCoC'],_0x2462ba);let _0x586e4d={'url':jq_u+_0x4bac('‫24b','j7ck'),'headers':{'user-agent':_0x22ff5f[_0x4bac('‮24c','r0Kv')]},'body':_0x2e6e9a};return new Promise((_0x1355fb,_0x2d3b5b)=>{var _0x124437={'XEOWO':'Mozilla/5.0\x20(Linux;\x20Android\x208.1;\x20PAR-AL00\x20Build/HUAWEIPAR-AL00;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/57.0.2987.132\x20MQQBrowser/6.2\x20TBS/044304\x20name\x20Safari/537.36\x20MicroMessenger/6.7.3.1360(0x26070333)','litss':function(_0x51a76a,_0xa28d8c){return _0x22ff5f[_0x4bac('‫24d','dnXF')](_0x51a76a,_0xa28d8c);}};$['post'](_0x586e4d,async(_0x5c1829,_0x169c80,_0x33cf34)=>{try{if(_0x5c1829){console[_0x4bac('‮24e','Hnjb')]('\x0a['+TG_ID+_0x4bac('‫24f','Y#09')+_0x5c1829);subTitle+='\x0a['+TG_ID+_0x4bac('‫250','r0Kv')+_0x5c1829;yyz_d=![];}else{if(_0x22ff5f[_0x4bac('‫251','u&Q#')](_0x4bac('‮252','p3lc'),'ulFOo')){let _0x869ad1='';if(!user_data[num]['UA']){_0x869ad1=_0x124437['XEOWO'];}else{_0x869ad1=user_data[num]['UA'];}acList[_0x4bac('‮253','Yf!P')]({'num':_0x124437[_0x4bac('‮254','j7ck')](num,0x1),'uid':user_data[num][_0x4bac('‫255','njAP')],'token':user_data[num]['token'],'UA':_0x869ad1});}else{let _0x119e95=JSON[_0x4bac('‫31','wevB')](_0x33cf34);if(_0x22ff5f['Jmene'](_0x119e95[_0x4bac('‮39','UD#k')],0xc8)){if(_0x22ff5f[_0x4bac('‫256','eta%')](_0x22ff5f[_0x4bac('‮257','d99u')],_0x22ff5f[_0x4bac('‮258','uqgr')])){console[_0x4bac('‫259','@V0z')]('\x0a['+TG_ID+_0x4bac('‮25a','H*6x')+_0x119e95['msg']+'，脚本已正常使用,重新跑脚本即可');yyz_d=![];return![];}else{console[_0x4bac('‮25b',']AAc')](e);}}else{console[_0x4bac('‮af','t)dJ')]('\x0a['+TG_ID+_0x4bac('‮29','JW!%')+_0x119e95[_0x4bac('‫25c','kqbq')]);subTitle+='\x0a['+TG_ID+_0x4bac('‮25a','H*6x')+_0x119e95[_0x4bac('‮1c8','u&Q#')];yyz_d=![];return![];}}}}catch(_0x40aad7){console[_0x4bac('‫25d','kqbq')](_0x40aad7);}finally{_0x1355fb();}});});}function Format_time(_0x180247){var _0x5b9db6={'hmoGP':function(_0x2665d2,_0x30c0d7){return _0x2665d2+_0x30c0d7;},'nKJDY':function(_0x584da0,_0x4dabb1){return _0x584da0+_0x4dabb1;},'yVWUO':function(_0x3e6db4,_0x4d8ea6){return _0x3e6db4+_0x4d8ea6;},'hlEfd':function(_0x5e901f,_0x509d2e){return _0x5e901f+_0x509d2e;},'UKxHQ':function(_0x261f8d,_0x3c1a3b){return _0x261f8d+_0x3c1a3b;},'EHNFZ':function(_0x2e21d7,_0x4113ba){return _0x2e21d7+_0x4113ba;},'BHxIN':function(_0x42273c,_0x5a71d8){return _0x42273c+_0x5a71d8;},'RRsrs':function(_0x39b49e,_0xdf108a){return _0x39b49e+_0xdf108a;}};var _0x5c1474=new Date(_0x180247*0x3e8);var _0x3cccce=_0x5b9db6[_0x4bac('‮25e','v$[e')](_0x5c1474['getFullYear'](),'-');var _0x857df3=_0x5b9db6['nKJDY'](_0x5b9db6['nKJDY'](_0x5c1474['getMonth'](),0x1)<0xa?_0x5b9db6[_0x4bac('‮25f','$fvN')]('0',_0x5c1474['getMonth']()+0x1):_0x5c1474[_0x4bac('‮260','$fvN')]()+0x1,'-');var _0x106dd9=_0x5c1474[_0x4bac('‮261','u&Q#')]()+'\x20';var _0x1f284e=_0x5b9db6[_0x4bac('‮262','G[e[')](_0x5c1474[_0x4bac('‮263','u&Q#')](),':');var _0xce9705=_0x5b9db6['hlEfd'](_0x5c1474[_0x4bac('‫264','S]GB')]()<0xa?_0x5b9db6['UKxHQ']('0',_0x5c1474[_0x4bac('‮265','eta%')]()):_0x5c1474['getMinutes'](),':');var _0x133c47=_0x5c1474[_0x4bac('‮266','BPP]')]();let _0x5c1808=_0x5b9db6['UKxHQ'](_0x5b9db6[_0x4bac('‫267','uqgr')](_0x5b9db6['UKxHQ'](_0x5b9db6[_0x4bac('‫268','tHxR')](_0x3cccce,_0x857df3),_0x106dd9)+_0x1f284e,_0xce9705),_0x133c47);return _0x5b9db6['BHxIN'](_0x5b9db6['RRsrs'](_0x5b9db6[_0x4bac('‮269','JW!%')](_0x3cccce,_0x857df3),_0x106dd9),_0x1f284e)+_0xce9705+_0x133c47;};_0xodR='jsjiami.com.v6';



function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
