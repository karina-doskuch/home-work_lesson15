var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};
console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

var decimal2 = myNum.toFixed(2);
console.log(decimal2);

var i = 2;
i++;
console.log(i); 
++i;
console.log(i);

var i = 2;
i--;
console.log(i);
--i;
console.log(i);

var myTest = 20;
myTest += myNum;
console.log(myTest);
myTest -= 6;
console.log(myTest);
myTest *= 58;
console.log(myTest);
myTest /= 2;
console.log(myTest);
myTest %= 4;
console.log(myTest);


var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log(myRound);

var myRandom = Math.random() * 10;
console.log(myRandom);

var myPow = Math.pow(3,5);
console.log(myPow);

var strObj = {
    str: "Мама мыла раму, рама мыла маму"
}
strObj.length = strObj.str.length;
console.log(strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log('Some string'.toUpperCase());
console.log('Anything string'.toLowerCase());