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

var _0x3e611d=_0x3238;function _0x4eb4(){var _0x1a95fd=['headers','EVNSM=1.0.0;\x20NMCID=sptrev.1699286446000.01.3;\x20NMDI=Q1NKTQcBDAB9XQJ5k0yEMBQaVumWAAAAEq3GlfgfquriYokFU3WbyLeYch4IX7JD2y7BuzhvZTOMyytkNtiu2eIyLXNR7NnB3PN%2FJNb86JBsRdco4qBO8BT1ik9T1%2B2rv13AgKXcf2k%2BK%2BJfpinJUTPje8AeKXD9MerImcnQ0TPFDjwQQV4593uP7QrKADe0BC%2FulV%2B7vxL6luU5ZyepCldpG%2Ba2x0OQkFeH%2FewH;\x20URS_APPID=B9D0442EC6DC134884A8D2D960C5C0637FCE07CDBC2B786102FB4866A81137F8FFE6C6BFD71E396E78C7602A71EA459C;\x20appkey=IuRPVVmc3WWul9fT;\x20appver=8.20.05;\x20buildver=4556;\x20caid={\x22lastIyunId\x22:\x2295bb4f0b587fd9fe1f3a5c2745807d45\x22,\x22iyunId\x22:\x22089c0e5129d9486afed774f3575069ae\x22,\x22iyunVersion\x22:\x2220230330\x22,\x22lastIyunVersion\x22:\x2220220111\x22};\x20channel=distribution;\x20deviceId=44555aaab88e600de0b9c6c643bf2a3f;\x20idfa=00000000-0000-0000-0000-000000000000;\x20idfv=D630A49F-CCBE-4772-8D62-31C67D00FF41;\x20machineid=iPhone16.2;\x20os=iPhone\x20OS;\x20osver=17.0.3;\x20packageType=release;\x20sDeviceId=1c51a7d0d219cc5b9185234d7967e718;\x20JSESSIONID-WYYY=bbhspgWjgXcMIGOTu0xbwz%2FBJT5q5ggJR4%2FQqKNFpRZFEohVQiPMDPCJB0q%2BbbsY%5CKqwsY%2FjOD9393xsolV33r28XRa8v2XZGQFupXbjGu1cU2IOPWQRgWKn%2BqcRUle%2F369QcxYejPnCmy79eswQDzCxCa%2BB3e44q9r23fA4iVMt%2FhvC%3A1701663787145;\x20_iuqxldmzr_=33;\x20ntes_kaola_ad=1;\x20__csrf=ca15a03e0b468f0a9346b90023726699;\x20MUSIC_U=00FFAA3FE2B758935C79527C6ABB780615EAC201F8B7D9B7CC062B6448F5355863557F659D7600F51EB7653089C0B3C5DE42998547859A6C61CCCA4BAAB63BB8B8C18B3FD20CFFD1AC5826A6E93BAE39D7E366E2868A98DF8EFE95B6F75E8C9CE15AA8E4119601C2BD9BE553AD31E9B5BAA9F971967590AF51E96BB28CE6D950857C5946AF1C45068AB27AE5018520C6E52010ED97549ADE91DF5C14E41428064260899504CF3091D72787250382B03112B86E468541B6A073700DD11D53C57869BA64B84B67A5CFC8F049C1D7A70EB9F80534D8FFE7DABA045CBD0237586031ED91CF6C6FF0CF4C730E71949E67195CD636ACFB8843A4A849D920D7C3C8997B5C08104C871395325E34842045D66A70ABFF7B9DC9BE2E187E367AEF961C67222D;\x20NMTID=00Os92w5W3v684nLE-iue4Y1fNYfAcAAAGMMNqMxA;\x20__csrf=eddef1d53563d25cf13a306240d54b5e;\x20_ntes_nnid=2c5bd83a3ca80c7a4a86baef0488724c,1701626582595;\x20_ntes_nuid=2c5bd83a3ca80c7a4a86baef0488724c','4499890dKpnUy','1570008ZxVeFf','561747iFvYYn','Cookie','12dGEKFG','14672432LvWkaJ','28XkRRUm','12GyCBDy','316841BdIxYr','MConfig-Info','2446185nVpEVW','13640580oFGIXl'];_0x4eb4=function(){return _0x1a95fd;};return _0x4eb4();}function _0x3238(_0x310271,_0x1f2d4a){var _0x4eb43c=_0x4eb4();return _0x3238=function(_0x323893,_0x474e45){_0x323893=_0x323893-0x1c0;var _0x694618=_0x4eb43c[_0x323893];return _0x694618;},_0x3238(_0x310271,_0x1f2d4a);}(function(_0x359cfc,_0x5c772c){var _0xa20559=_0x3238,_0x2ad783=_0x359cfc();while(!![]){try{var _0xf64d5=-parseInt(_0xa20559(0x1cd))/0x1*(parseInt(_0xa20559(0x1cc))/0x2)+parseInt(_0xa20559(0x1c7))/0x3*(-parseInt(_0xa20559(0x1c9))/0x4)+-parseInt(_0xa20559(0x1c1))/0x5+-parseInt(_0xa20559(0x1c6))/0x6*(-parseInt(_0xa20559(0x1cb))/0x7)+parseInt(_0xa20559(0x1ca))/0x8+parseInt(_0xa20559(0x1c2))/0x9+-parseInt(_0xa20559(0x1c5))/0xa;if(_0xf64d5===_0x5c772c)break;else _0x2ad783['push'](_0x2ad783['shift']());}catch(_0x4687be){_0x2ad783['push'](_0x2ad783['shift']());}}}(_0x4eb4,0xf2c17),headers=$request[_0x3e611d(0x1c3)],headers[_0x3e611d(0x1c8)]=_0x3e611d(0x1c4),headers['User-Agent']='NeteaseMusic\x208.20.05/4556\x20(iPhone;\x20iOS\x2017.0.3;\x20zh_CN)',headers[_0x3e611d(0x1c0)]='{\x22zr4bw6pKFDIZScpo\x22:{\x22version\x22:1153024,\x22appver\x22:\x228.20.05\x22},\x22tPJJnts2H31BZXmp\x22:{\x22version\x22:2564096,\x22appver\x22:\x222.0.30\x22},\x22c0Ve6C0uNl2Am0Rl\x22:{\x22version\x22:595968,\x22appver\x22:\x221.7.50\x22},\x22IuRPVVmc3WWul9fT\x22:{\x22version\x22:26370048,\x22appver\x22:\x228.20.05\x22}}',$done({'headers':headers}));
