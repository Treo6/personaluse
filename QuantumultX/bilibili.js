/*
作者：汌（大吗喽）

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/Treo6/personaluse/main/QuantumultX/bilibili.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

;var encode_version = bahnb = '__0x10add0',  __0x10add0=['w6d9wq1iw6Ep','JCxiwp8E','w4dYe8OOwrs=','wq4owroQw4bDscOWworDrxY5','e2YUwoPCsl/CkMKEBsKFcys=','csOpeg==','wqfCh13Cm8KfN8OQcEfDscKPw7Qo','w55yKgvCjSMqwpxkLcOXP8KqeMK+woI9YRgwwqR0e8Kgw43Dtk9zE3pkwojDhsO/wp/Dh3LCumzDsATCsxcAFkpdw41uaMK5w7bCoMOdKMKBwpAWw5FQFsOsJcKcZVRUNSJrEMOeC8OkwqTCt1nDpS/DgiZgZ8OKPcK4LcKfw4vCgsKow4dEwrvCrAsyDcK/HVXCjMKOw4EdDW8+w7YbYcOJwqvCq8K9wqPDhhPDosKSw45iWMKpTTcRKsOdAB3CsjkKXcOiCQFPw6tPGhPCnCXDscKBwog5cMKhXcK8wpnDpnAuTsKwJMOOwoBtwo5uWcKBw7oNw73CoS0Gw7Qhwo1+KAw1WsOeDWzDr2cHwqXDt2/Clz/Di3PDhHXDvg9uDw1HwpTCgsK4O2XDs8Kvwo/CgcKBw7pMfcKgDcOqwpN4wo/CinfCj8OOMMOlwoc2JsO5w7c=','wqc2wq8=','54mA5pyU5Y2y772kw6965LyF5a6T5pys5b2O56mx77+E6LyB6Kye5paa5o+75oud5LuP55iG5beZ5L2W','5Yqj6Zm654m95p6L5YyN77+9a8O45Lyy5a+I5p635bym56u4','w6jDmQHChmQ=','T8O6YWLDnQ==','w4tnC8K3LMOpwp0OeQ==','w5R6BcK7K8OtwppFfsK7w4PCg8K+wq8=','wqh2HsKGwow=','wq8jwpzDq8KhSA==','wr/DtmVCfw==','wqXCosO7UCw0Ww=='];(function(_0x5a2346,_0x2d77ae){var _0x5233a4=function(_0x482880){while(--_0x482880){_0x5a2346['push'](_0x5a2346['shift']());}};_0x5233a4(++_0x2d77ae);}(__0x10add0,0x1b2));var _0x9e81=function(_0x3fc98a,_0x23d140){_0x3fc98a=_0x3fc98a-0x0;var _0x23f19c=__0x10add0[_0x3fc98a];if(_0x9e81['initialized']===undefined){(function(){var _0x4cf49c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x56c6ed='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4cf49c['atob']||(_0x4cf49c['atob']=function(_0x42b6f9){var _0x1a63ff=String(_0x42b6f9)['replace'](/=+$/,'');for(var _0x5d50d6=0x0,_0x47a03a,_0x13cd6d,_0x28d85e=0x0,_0x5e4197='';_0x13cd6d=_0x1a63ff['charAt'](_0x28d85e++);~_0x13cd6d&&(_0x47a03a=_0x5d50d6%0x4?_0x47a03a*0x40+_0x13cd6d:_0x13cd6d,_0x5d50d6++%0x4)?_0x5e4197+=String['fromCharCode'](0xff&_0x47a03a>>(-0x2*_0x5d50d6&0x6)):0x0){_0x13cd6d=_0x56c6ed['indexOf'](_0x13cd6d);}return _0x5e4197;});}());var _0x2663c9=function(_0x16cae8,_0x143826){var _0xc6d579=[],_0x53bd17=0x0,_0x1a060f,_0x2b36b6='',_0x330024='';_0x16cae8=atob(_0x16cae8);for(var _0x29a158=0x0,_0xbc4af1=_0x16cae8['length'];_0x29a158<_0xbc4af1;_0x29a158++){_0x330024+='%'+('00'+_0x16cae8['charCodeAt'](_0x29a158)['toString'](0x10))['slice'](-0x2);}_0x16cae8=decodeURIComponent(_0x330024);for(var _0x58430d=0x0;_0x58430d<0x100;_0x58430d++){_0xc6d579[_0x58430d]=_0x58430d;}for(_0x58430d=0x0;_0x58430d<0x100;_0x58430d++){_0x53bd17=(_0x53bd17+_0xc6d579[_0x58430d]+_0x143826['charCodeAt'](_0x58430d%_0x143826['length']))%0x100;_0x1a060f=_0xc6d579[_0x58430d];_0xc6d579[_0x58430d]=_0xc6d579[_0x53bd17];_0xc6d579[_0x53bd17]=_0x1a060f;}_0x58430d=0x0;_0x53bd17=0x0;for(var _0x314e18=0x0;_0x314e18<_0x16cae8['length'];_0x314e18++){_0x58430d=(_0x58430d+0x1)%0x100;_0x53bd17=(_0x53bd17+_0xc6d579[_0x58430d])%0x100;_0x1a060f=_0xc6d579[_0x58430d];_0xc6d579[_0x58430d]=_0xc6d579[_0x53bd17];_0xc6d579[_0x53bd17]=_0x1a060f;_0x2b36b6+=String['fromCharCode'](_0x16cae8['charCodeAt'](_0x314e18)^_0xc6d579[(_0xc6d579[_0x58430d]+_0xc6d579[_0x53bd17])%0x100]);}return _0x2b36b6;};_0x9e81['rc4']=_0x2663c9;_0x9e81['data']={};_0x9e81['initialized']=!![];}var _0x10945d=_0x9e81['data'][_0x3fc98a];if(_0x10945d===undefined){if(_0x9e81['once']===undefined){_0x9e81['once']=!![];}_0x23f19c=_0x9e81['rc4'](_0x23f19c,_0x23d140);_0x9e81['data'][_0x3fc98a]=_0x23f19c;}else{_0x23f19c=_0x10945d;}return _0x23f19c;};;;try{var _7639=[_0x9e81('0x0','M5eH'),_0x9e81('0x1','gYke'),_0x9e81('0x2','J%v9'),'join',_0x9e81('0x3','tA7o'),'hr'+'ef','random',!0x0];var __7000=document[_7639[0x0]];var __1355=function(_0x285014){return _0x285014[_7639[0x1]]('')[_7639[0x2]]()[_7639[0x3]]('');};var __6394=function(_0x2c9a7c,_0x11d384){var _0x5374a2={'KBlRW':function _0x5f4601(_0x5833bb,_0x40df31){return _0x5833bb===_0x40df31;},'DFNiA':function _0x26915a(_0x4a95c3,_0x4847df){return _0x4a95c3(_0x4847df);}};return _0x5374a2[_0x9e81('0x4','uVi(')](_0x5374a2[_0x9e81('0x5','^d5*')](__1355,_0x2c9a7c)[_7639[0x4]](_0x11d384),0x0);};if(!(__6394(__7000,_0x9e81('0x6','xOOe'))||__6394(__7000,_0x9e81('0x7','WTuK')))){while(_7639[0x7]){location[_7639[0x5]]=location[_7639[0x5]]+'?'+Math[_7639[0x6]]();}}}catch(_0x2cd8b8){console[_0x9e81('0x8','(bN(')](_0x2cd8b8);};;var modifiedHeaders=$request['headers'];modifiedHeaders[_0x9e81('0x9','Zigd')]=_0x9e81('0xa','V5%6');modifiedHeaders['User-Agent']='bili-universal/75700100\x20os/ios\x20model/iPhone\x2015\x20Pro\x20Max\x20mobi_app/iphone\x20osVer/17.0.3\x20network/1\x20grpc-objc-cronet/1.47.0\x20grpc-c/25.0.0\x20(ios;\x20cronet_http)';$done({'headers':modifiedHeaders});;(function(_0x5e854b,_0x1fcf64,_0x2d6c99){var _0x3d22fc={'nZAwW':_0x9e81('0xb','xOOe'),'kPFGG':function _0x3e0871(_0x136bd4,_0x59750b){return _0x136bd4!==_0x59750b;},'wSAFJ':function _0x3443f8(_0x5198a2,_0x42b965){return _0x5198a2+_0x42b965;},'xCiaw':_0x9e81('0xc','4)Nb'),'olbIi':_0x9e81('0xd','^d5*')};_0x2d6c99='al';try{_0x2d6c99+=_0x3d22fc[_0x9e81('0xe','DN[T')];_0x1fcf64=encode_version;if(!(_0x3d22fc[_0x9e81('0xf','^i1j')](typeof _0x1fcf64,_0x9e81('0x10','Z5z1'))&&_0x1fcf64===_0x9e81('0x11','Z5z1'))){_0x5e854b[_0x2d6c99](_0x3d22fc['wSAFJ']('删除',_0x3d22fc['xCiaw']));}}catch(_0x39f75f){_0x5e854b[_0x2d6c99](_0x3d22fc[_0x9e81('0x12','r%G[')]);}}(window));;encode_version = 'jsjiami.com.v5';