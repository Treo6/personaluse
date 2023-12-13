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

modifiedHeaders['Authorization'] = 'identify_v1 6fc6e9e482e68baa36529ea5a122a1c1CjCcY16H8fcUBMaBlJcMrw-TJ-YvO8lg6PeVPkP6E8KioHH4RXU2JaxpxYeuHe7Ts98SVmthSXdjb2EzQlJ6Y3VwVkdwd1RGdmJBa0trQVZoZDJXUkhiSG1xdXg3NUFoWmctR2F5OTNHOFREcU5jbmFnTlNvbkhQZnNJRGpUWTJmaDNvTWZzcTVBIIEC';

modifiedHeaders['User-Agent'] = 'bili-universal/75900200 os/ios model/iPhone 15 Pro Max mobi_app/iphone osVer/17.0.3 network/2 grpc-objc-cronet/1.47.0 grpc-c/25.0.0 (ios; cronet_http)';

$done({headers : modifiedHeaders});