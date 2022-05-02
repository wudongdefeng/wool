#!/bin/bash
# -*- coding: utf-8 -*-
###SCRIPT_NAME:weixin.sh###
###send message from weixin for monitoring###
###leo###
content=${@:1}
content=${content//\<font color=\'red\'\>/}
content=${content//\<\/font\>\<\/br\>/}
content=${content//\ /}
time3=$(date "+%Y-%m-%d&nbsp;%H:%M:%S")
content="$time3，$content"

echo "告警信息 : $content"
 
#echo "warn content is : $content" >> ./warn.log
 
 CropID='ww90d81aab66228ba5'
 Secret='hjrGfSXHB-Le_plZ1L25UzX68pnbaY-blPd4wgdwJy8'
 GURL="https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$CropID&corpsecret=$Secret"
 Gtoken=$(/usr/bin/curl -s -G $GURL | awk -F \" '{print $10}')
 PURL="https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$Gtoken"
 function body() {
   local int AppID=1000007           # 企业号中的应用id
   local UserID='PanDeng'            # 部门成员id，微信接收者，多个接收者用竖杠|隔开
   #local PartyID=$2            # 部门id，定义了范围，组内成员都可接收到消息
   
   local Msg="仓库更新于$1""${repo_content}"
   Msg=${Msg//\"/}
   printf '{\n'
   printf '\t"touser": "'$UserID'",\n'
   #printf '\t"toparty": "$PartyID",\n'
   printf '\t"msgtype": "text",\n'
   printf '\t"agentid": "'$AppID'",\n'
   printf '\t"text": {\n'
   printf '\t\t"content": "'$Msg'"\n'
   printf '\t},\n'
   printf '\t"safe":"0"\n'
   printf '}\n'
 }
 #body $content
 curl --data-ascii "$(body $content)" $PURL
 printf '\n'
 echo "over!"
