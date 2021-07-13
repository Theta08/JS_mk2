'use strict';

// 2.Variable(read/wirte)
// let (added in ES6)
//var let 차이
//var hoisting : 항상 재일 위
//var 블럭 scope가 없음 
//어디서나 아무대서나 쓸수 있음

//es6는 let
//변수 선언 let
let gol='at';
{
    let name='pmw';
    console.log(name);
    name='hellow'
    console.log(name);

    console.log(gol);
}
console.log(name);
console.log(gol);

// 3. Contants(read)
// 데이타 타입 ,변수 변경x
//장점
//1.보안상
//2. thread safety 
//3. reduce human mistakes 

const a=10;

//Mutable :let          변환가능
//Inmutable: const      변환 불가능

// 4.Variable types
//obj, function, 함수도 다른 변수처럼 할당 가능 obj-> ref(레퍼런스에 저장)
//private,string, int preivate-> 값자체가 메모리에 저장함

const infinity=1/0;
const negativeInfinity=-1/0;
const count=17;//integer
const size=17.1;//decimal number
const nAn='not a number'
// let b:number=17;

console.log(`value: ${count},type: ${typeof count}`);
console.log(`value: ${size},type: ${typeof size}`);
console.log(`value: ${infinity},type: ${typeof infinity}`);
console.log(`value: ${negativeInfinity},type: ${typeof negativeInfinity}`);
console.log(`value: ${nAn},type: ${typeof nAn}`);

//string
const char='c';
const brenda='birthbau';
const greeting='hellow '+brenda;
console.log(`value:${greeting},type:${typeof greeting}`);
const helloBob=`hi ${brenda}!`; //template literals(string)  ``를 붙이면 변수의 값이 붙여서 나옴 ${}
console.log(`value:${helloBob},type:${typeof helloBob}`);

//object
const pm={name:'pm', 
            age:26};
console.log(pm);
//console.log(pm.age);
// pm.age=20;
// console.log(pm.age);


//boolean
// false: 0,null,undefined,Nan,''
// true: false뺀 나머지


//undefined: 선언은 했지만 값이 없음

//symbol,create unique idenitfiers ofr objects
//map,자료구조 , 식별자,동시다발적 ,고유식별자가 필요할때
//동일한 string을 작성했어도 고유 식별자
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2);   //true
// console.log(`value:${symbol1},type: ${typeof symbol1}`);                 //에러
console.log(`value: ${symbol1.description},type: ${typeof symbol1}`);        //string 변환후 출력

// 5. Dynamic typing: 변수가 int,string 정해지지 않음 값을 넣으면 그때 타입이 정해짐
let text='hello';
console.log(text.charAt(0));        //hello의 h출력
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));        //err 타입이 변경됬게 떄문에 string->number 해결TS(타입 스크립트)