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

headers['Cookie'] = 'EVNSM=1.0.0; NMCID=sptrev.1699286446000.01.3; NMDI=Q1NKTQcBDAB9XQJ5k0yEMBQaVumWAAAAEq3GlfgfquriYokFU3WbyLeYch4IX7JD2y7BuzhvZTOMyytkNtiu2eIyLXNR7NnB3PN%2FJNb86JBsRdco4qBO8BT1ik9T1%2B2rv13AgKXcf2k%2BK%2BJfpinJUTPje8AeKXD9MerImcnQ0TPFDjwQQV4593uP7QrKADe0BC%2FulV%2B7vxL6luU5ZyepCldpG%2Ba2x0OQkFeH%2FewH; URS_APPID=B9D0442EC6DC134884A8D2D960C5C0637FCE07CDBC2B786102FB4866A81137F8FFE6C6BFD71E396E78C7602A71EA459C; appkey=IuRPVVmc3WWul9fT; appver=8.20.05; buildver=4556; caid={"lastIyunId":"95bb4f0b587fd9fe1f3a5c2745807d45","iyunId":"089c0e5129d9486afed774f3575069ae","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=44555aaab88e600de0b9c6c643bf2a3f; idfa=00000000-0000-0000-0000-000000000000; idfv=D630A49F-CCBE-4772-8D62-31C67D00FF41; machineid=iPhone16.2; os=iPhone OS; osver=17.0.3; packageType=release; sDeviceId=1c51a7d0d219cc5b9185234d7967e718; JSESSIONID-WYYY=bbhspgWjgXcMIGOTu0xbwz%2FBJT5q5ggJR4%2FQqKNFpRZFEohVQiPMDPCJB0q%2BbbsY%5CKqwsY%2FjOD9393xsolV33r28XRa8v2XZGQFupXbjGu1cU2IOPWQRgWKn%2BqcRUle%2F369QcxYejPnCmy79eswQDzCxCa%2BB3e44q9r23fA4iVMt%2FhvC%3A1701663787145; _iuqxldmzr_=33; ntes_kaola_ad=1; __csrf=ca15a03e0b468f0a9346b90023726699; MUSIC_U=00FFAA3FE2B758935C79527C6ABB780615EAC201F8B7D9B7CC062B6448F5355863557F659D7600F51EB7653089C0B3C5DE42998547859A6C61CCCA4BAAB63BB8B8C18B3FD20CFFD1AC5826A6E93BAE39D7E366E2868A98DF8EFE95B6F75E8C9CE15AA8E4119601C2BD9BE553AD31E9B5BAA9F971967590AF51E96BB28CE6D950857C5946AF1C45068AB27AE5018520C6E52010ED97549ADE91DF5C14E41428064260899504CF3091D72787250382B03112B86E468541B6A073700DD11D53C57869BA64B84B67A5CFC8F049C1D7A70EB9F80534D8FFE7DABA045CBD0237586031ED91CF6C6FF0CF4C730E71949E67195CD636ACFB8843A4A849D920D7C3C8997B5C08104C871395325E34842045D66A70ABFF7B9DC9BE2E187E367AEF961C67222D; NMTID=00Os92w5W3v684nLE-iue4Y1fNYfAcAAAGMMNqMxA; __csrf=eddef1d53563d25cf13a306240d54b5e; _ntes_nnid=2c5bd83a3ca80c7a4a86baef0488724c,1701626582595; _ntes_nuid=2c5bd83a3ca80c7a4a86baef0488724c';

headers['User-Agent'] = 'NeteaseMusic 8.20.05/4556 (iPhone; iOS 17.0.3; zh_CN)';

headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":1153024,"appver":"8.20.05"},"tPJJnts2H31BZXmp":{"version":2564096,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":26370048,"appver":"8.20.05"}}';

$done({
    headers
});
