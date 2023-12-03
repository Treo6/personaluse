/*
作者:汌（大吗喽）

[rewrite_local]
# > 网易云解锁VIP
^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js

# 播放器会员皮肤
^https:\/\/interface3\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js

# 搜索结果会员歌曲
^https:\/\/interface3\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js

# 播放器会员歌曲
^https:\/\/interface3\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js
^https:\/\/interface3\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js

# 侧边栏会员等级
^https:\/\/interface3\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js

# 首页歌单会员歌曲
^https?:\/\/interface3\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js

# 会员认证
^https?:\/\/interface3\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/wyy.js
 

[mitm] 
hostname = *.music.163.com

*/

headers = $request.headers;

headers['Cookie'] = 'appkey=c0Ve6C0uNl2Am0Rl; NMDI=Q1NKTQcBDAD4WjBRni%2BmCiSolxyWAAAAjpMMxKxo2ZRR13Lut3vjc4mwanSlM6C4pDfXdVrzj%2Bl1irkstqT20ZNMDUC1WIjDPJMLi3uBXnb7ME05vpgf8o%2Fwt8J1G57TZGomJb0vm6mx%2BZrdjhIgMIOpcB5UclbvocA%2FSbA9cejA93KpT2X7unZ8U65MYNjw%2FxPZXtbiff%2BkvLrepNt6Ko6mc5T%2F6TeUBq%2B4lQNG; MUSIC_U=003684ED6FB4B85BD34315D56837A8D72F8CDF11DE5020A353B89EC4A3C15E5535C2D2BAA54117A29B64032EA24546FEA7A76639136DDF1E2E896E6D197BB98BB1B7F88AF830E8C3ED80C647F36F8F0AADD6FC119023C7CF7BBF7F4058351DF136383102B893091A372CFC02FC14FC329DCEE9BEAF5166E6FAF5FA72CC99B9E1C995459460CC5BA49EE66EC4DC8347D1078454445F00844BD93A699FDCB45B75DA26AF572F651C22CD1C1AA539F6384C6FBE20C7E8F0CBDA9A929B94459787641F01C1AFF453F9519E3ADDF5F688E5A3B3A87045DC2C9AFC3A1305164DAB1193B41A73C5C6E63C2BB973EA5444AE0447E7C6477913199A67DA1A1EFA9DC4D116F29A5424AE4661A551D6CB1AE63BEC13E1450F489A46767F84ABF126891D85ECD8; NMTID=00Os92w5W3v684nLE-iue4Y1fNYfAcAAAGMMNqMxA; EVNSM=1.0.0; NMCID=sptrev.1699286446000.01.3; URS_APPID=B9D0442EC6DC134884A8D2D960C5C0637FCE07CDBC2B786102FB4866A81137F8FFE6C6BFD71E396E78C7602A71EA459C; apphost=IuRPVVmc3WWul9fT; appver=8.20.02; buildver=4554; caid={"lastIyunId":"95bb4f0b587fd9fe1f3a5c2745807d45","iyunId":"089c0e5129d9486afed774f3575069ae","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=44555aaab88e600de0b9c6c643bf2a3f; idfa=00000000-0000-0000-0000-000000000000; idfv=D630A49F-CCBE-4772-8D62-31C67D00FF41; machineid=iPhone16.2; os=iPhone OS; osver=17.0.3; packageType=release; sDeviceId=1c51a7d0d219cc5b9185234d7967e718; _ntes_nnid=2c5bd83a3ca80c7a4a86baef0488724c,1701626582595; _ntes_nuid=2c5bd83a3ca80c7a4a86baef0488724c';

headers['User-Agent'] = 'NeteaseKaraoke/8.20.02_4554 (iPhone; iOS 17.0.3; zh_CN) CloudMusic/0.1.1';

headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":1153024,"appver":"8.20.02"},"tPJJnts2H31BZXmp":{"version":2564096,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":26361856,"appver":"8.20.02"}}';

$done({
    headers
});
