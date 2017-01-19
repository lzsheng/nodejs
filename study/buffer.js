//test-1
const buf = new Buffer(256);

const len = buf.write("lzsheng");

console.log(`写入的字节数:${len}`);

//test-2
const buf2 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf2[i] = i + 97;
}

console.log( buf2.toJSON(buf2));

console.log( buf2.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf2.toString('ascii',0,5));   // 输出: abcde
console.log( buf2.toString('utf8',0,5));    // 输出: abcde
console.log( buf2.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


//缓冲区合并:test-3
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

//缓冲区比较:test-4
var buffer41 = new Buffer('ABC');
var buffer42 = new Buffer('ABCD');
var result = buffer41.compare(buffer42);

if(result < 0) {
   console.log(buffer41 + " 在 " + buffer42 + "之前");
}else if(result == 0){
   console.log(buffer41 + " 与 " + buffer42 + "相同");
}else {
   console.log(buffer41 + " 在 " + buffer42 + "之后");
}