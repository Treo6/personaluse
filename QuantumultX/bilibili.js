/*
作者：汌（大吗喽）

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/bilibili.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

document.write(unescape('var%20modifiedHeaders%20%3D%20%24request.headers%3B%0A%0A//modifiedHeaders%5B%27Cookie%27%5D%20%3D%20%27%27%3B%0A%0AmodifiedHeaders%5B%27Authorization%27%5D%20%3D%20%27identify_v1%20a9e10cbcd8bf28273877ac49afe6ebb1CjCnc_CjQHJp-Ryy1AFZ1u35E7PSFpdjQO8zB0jXFfGlMMGiZwpQPUPIzWEyKkLjxQwSVmhjckRoZWxfampQaEx4OTA5LWhOU19zaldKdU5mak9uT21EUjhNa2pnRUhZSzh5ZzdRZ21oMGxmTVF6WkxxcFA0dkFmMUxHajlGTUo5WlVfVzZmbVhnIIEC%27%3B%0A%0AmodifiedHeaders%5B%27User-Agent%27%5D%20%3D%20%27bili-universal/75700100%20os/ios%20model/iPhone%2015%20Pro%20Max%20mobi_app/iphone%20osVer/17.0.3%20network/2%20grpc-objc-cronet/1.47.0%20grpc-c/25.0.0%20%28ios%3B%20cronet_http%29%27%3B%0A%0A%24done%28%7Bheaders%20%3A%20modifiedHeaders%7D%29%3B'));
