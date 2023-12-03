/*
作者：汌（大吗喽）

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/bilibili.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'identify_v1 a9e10cbcd8bf28273877ac49afe6ebb1CjCnc_CjQHJp-Ryy1AFZ1u35E7PSFpdjQO8zB0jXFfGlMMGiZwpQPUPIzWEyKkLjxQwSVmhjckRoZWxfampQaEx4OTA5LWhOU19zaldKdU5mak9uT21EUjhNa2pnRUhZSzh5ZzdRZ21oMGxmTVF6WkxxcFA0dkFmMUxHajlGTUo5WlVfVzZmbVhnIIEC';

modifiedHeaders['User-Agent'] = 'bili-universal/75700100 os/ios model/iPhone 15 Pro Max mobi_app/iphone osVer/17.0.3 network/2 grpc-objc-cronet/1.47.0 grpc-c/25.0.0 (ios; cronet_http)';

$done({headers : modifiedHeaders});
