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

headers['Cookie'] = 'JSESSIONID-WYYY=3etpJz%2FpiudEich91fbEC%2B%5CCVDcfXqk1Y3n8IRvQNB7qFZerAhM01HJUjZzmX%5CusA7mpqeGpsh2mvDmlYb9JfKie%5C%2FYNb7EtcKzvyKRZpAERE3ek7isx0suOVI0qGhYCZnXXo1isbmN%5CkUxZTNxYTjkioWK0ovFHetdlX0H7OEdCsgxb%3A1701613590115; _iuqxldmzr_=33; ntes_kaola_ad=1; EVNSM=1.0.0; NMCID=sptrev.1699286446000.01.3; NMDI=Q1NKTQcBDACSsXL4IQbmjrlbuoOWAAAApJieInLc2xUH5L5%2BLrOzrMOoc9r10Cy%2Fu5wBkOqnxabBr1KN%2BP5lr6r7ep1aGfdyUhSTagu1IHc2uORZVvQT22HghcR%2F7cf9%2Bz%2FXukHFmL6DqxPEmV0dq3AlzPFW46SGlZt6NIN4zOjpkB1cIWF7JVsTLQNEmIOuHyWCHXAmpg33PkGqovFMgNuYzITyjBXwK1nwH2mn; URS_APPID=B9D0442EC6DC134884A8D2D960C5C0637FCE07CDBC2B786102FB4866A81137F8FFE6C6BFD71E396E78C7602A71EA459C; appkey=IuRPVVmc3WWul9fT; appver=8.20.02; buildver=4554; caid={"lastIyunId":"95bb4f0b587fd9fe1f3a5c2745807d45","iyunId":"089c0e5129d9486afed774f3575069ae","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=44555aaab88e600de0b9c6c643bf2a3f; idfa=00000000-0000-0000-0000-000000000000; idfv=D630A49F-CCBE-4772-8D62-31C67D00FF41; machineid=iPhone16.2; os=iPhone OS; osver=17.0.3; packageType=release; sDeviceId=1c51a7d0d219cc5b9185234d7967e718; __csrf=51dd5e2ec2943433a840346f5560980e; MUSIC_U=00ACAFBAE6AE679D2017BA3A6E5D5CA2B9FBF93F2792370D727FD5C6092F0BC1D82C32BDC2ECA950D12F5ED2883536E98E67E1B3F591485C68D1D21296D0A7310D8F388AA06705D059BA6F6819ADE0D8252AD252773624534CACBE3595E010EDBC330DBCC66CF7DF70018F4A4CDBB22EE931878295B91A9A98FC98EF9D0ED7510C226EDA0C14ABADA9FED513D4FA3AE65C56657CF10492C0A1A548495D3673E214F0B782885C057C8C548E58B69F6FECA2D65EAEF32077D98F7D01AB8774C2FBC7F347E79352184C0763B3B7DAF1F3610273C14103DC48A64588E140F7A8DE7A5BA94CD40960BD759C583F542A294AEAAA798E652E2134225ED9A8B9571411D7F9546EC4A8897789356AA5B9C2ED37377112D4D6B2E4365E5D54BE56C55B4D9ABA; NMTID=00OAe41-cbeMQF0sUPqiBklhEDaUNAAAAGL-mTVXw; _ntes_nnid=0fd3eb6710945340a57258f5377bf620,1699286465587; _ntes_nuid=0fd3eb6710945340a57258f5377bf620';

headers['User-Agent'] = 'NeteaseMusic 8.20.02/4554 (iPhone; iOS 17.0.3; zh_CN)';

headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":1153024,"appver":"8.20.02"},"tPJJnts2H31BZXmp":{"version":2564096,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":26361856,"appver":"8.20.02"}}';

$done({
    headers
});
