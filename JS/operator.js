// 1.String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals:\t${1+2}`);

// 2.Numeric operators
console.log(1+1);   //add
console.log(1-1);   //sub
console.log(1/1);   //div
console.log(1*1);   //multiply
console.log(1%1);   //remainder          나머지값
console.log(1 ** 1);   //exponentiation  2의3승

// 3.Increment and decrement operators
let counter=2;
const preIncrement=++counter;
//counter=counter+1;
//preIncrement=counter;
console.log(`preIncrement: ${preIncrement},counter: ${counter}`);
const postIncrement=counter++;
//postIncrement=counter;
// counter=counter+1;
console.log(`postIncrement: ${postIncrement},counter: ${counter}`);
const preDecrement=--counter;
console.log(`preDecrement: ${preDecrement},counter: ${counter}`);
const postDecrement=counter--;
console.log(`postDecrement: ${postDecrement},counter: ${counter}`);

// 4.Assignment operators
let x=3;
let y=6;
x+=y; //x=x+y;
x-=y;
x*=y;
x/=y;

// 5.Comparison opertors  비교연산자
console.log(10>6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

// 6.Logical operators: ||(or),&&(and), !(not)
const value1=false;
const value2=4<2;

//||(or), finds the first truthy value          가변운게 앞에 무거운거(함수) 뒤쪽에
console.log(`or: ${value1 || value2 || check()}`);

//&&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for(let i=0;i<10;i++){
        // wasting time
        console.log(i);
    }
    return true;
}

//!(not)
console.log(!value1);

// 7.Equality
const stringFive='5';
const numberFive=5;

//== loose equality, with type conversion
console.log(stringFive== numberFive);       //t
console.log(stringFive!=numberFive);        //f

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference obj는 ref 타입으로 저장
const pm1={name: 'pm'};
const pm2={name: 'pm'};
const pm3=pm1;

console.log(pm1==pm2);      //f
console.log(pm1===pm2);     //f
console.log(pm1===pm3);     //t

//tpye이 같이 않아서 false가 나옴
console.log(0===false);
console.log(''===false);
console.log(null===false);

//8.Conditional operators: if
//if,else if, else

// 9.Ternary operator:?
//condition ? value1 :value2;
console.log(name===pm1?'yes':'no');      //(변수)? (비교값)비교후 true면 'yes'실행  false면 : 뒤 'no'실행

// 10.Switch statement
const browers='IE'
switch(browers){
    case 'IE':
    console.log('go way!');
    break;

    case 'Chreome':
    case 'Firefox':
        console.log('live way!');
        break;

    default:
        console.log('same all')
        break;
}

//11.Loops 반복문
//whiel loop
let i=3;
while(i>0){
    console.log(`while:${i}`);
    i--
}
//do while
// do{먼저 실행} while{조건문}

//for문