var str="hello nodejs";
var len=str.length;
console.log(len);
var upper=str.toUpperCase();
console.log(upper);
var lower=str.toLowerCase();
console.log(lower)

var strr=`<img src="${"./yellow-billed-hornbill-3774974__340.jpg" }">
`
//repeat
var rep=strr.repeat(50);
console.log(rep);
//repace
var str2=`hello javaScript html css nodejs is for javaScript`;
var ressult=str2.replace(/javaScript/g,"angle");
console.log(ressult); 
//startsWith/endsWith
var str3=`hello javaScript html css nodejs is for javaScript`;
var en=str3.endsWith("javaScript");
var st=str3.startsWith("hai");
console.log(en);
console.log(st);
//charAt/char
var Char=str3.charAt(1);
var char1=str3.charCodeAt(1);
var index=str3.indexOf('h');
var lastindex=str3.lastIndexOf('c');
var includes=str3.includes('java');
console.log(Char,char1,index,lastindex,includes);

//substr//substring
var ss=str3.substr(2,5);
console.log(ss);
var subStr=str3.substr(0,5);
var subString=str3.substring(0,5);
var Slice=str3.slice(0,-5);
console.log(subStr);
console.log(subString);
console.log(Slice);                                                                                                   

//match//search//works with regular expression

var Match=str3.match("javaScript");
var Search=str3.search("javaScript");

console.log(Match);
console.log(Search);

//trim
var str4="              hgsjghjkjjfdsdfghjk fghjkljjhdfghjk             "
var Trim=str4.trim();
console.log(Trim);