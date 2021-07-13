// 1.Function declaration
// function name(param1,param2){ body..return;}
//하나의 함수는 하가지의 이름
//함수이름: 동사로
//함수는 object in JS

function printHellow(){
    console.log('Hellow');
}

printHellow();
//변수가 int,string..타입을 알수 없음
//TypeScript로 함수의 테이터 타입,리턴타입 등을 설정 가능
function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2.Parameter
//object: parameters: passed by reference
//premitive: parameters: passed by value
function changeName(obj){
    obj.name='coder';
}   //메모리에 ref스가 들어감
const pm={name:'pm'};
changeName(pm);
console.log(pm);    //coder로 변경
 
//3. Default parameters (added in ES6)
//from ='값이없음' : 사용자가 from값 x일 경우 from=(값) 넣기 숫자,문자열 가능
function showMessage(message,from =1){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!!');        //Hi!! by undefined

// 4. Rest parameters (added in ES6)
// 리스트 출력  ...변수
function printAll(...args){
    //방법 1.
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    //방법 3.
    //of: 하나씩 args를 넣어서 전체 실행
    for(const arg of args){
        console.log(arg);
    }
    //방법 2.
    //람다식
    args.forEach((arg)=>console.log(arg));
}
printAll('dream','coding','test');

//5. Local scope
//지역변수
let globalMessage='global'; //global variable
function printMessage(){
    let message='hello';
    console.log(message);   //local variable
}

// 6. Return a value1
function sum(a,b){
    return a+b;
}
const result=sum(1,2);  //3
console.log(result);

// 7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic..
    }
}

//god
//1. 조건이 맞지 않으면 빠져나가고(return) 
//2. 로직 작성
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic..
}

//Fucntion expression
//sum 같은걸 호출되기전에 sum써도 호출가능
//-> 함수는 재일 위에 선언되기 때문
const print=function(){     //할당된 다음 호출가능
    console.log('print');
};
print();
const printAgain=print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1,3));

//2. CallBack function using functio expression
function randomQuiz(answer,printYes,printNo){
    if(answer==='love you'){
        printYes();
    }else{
        printNo();
    }
}
//anoymout function
const printYes=function(){
    console.log('yes!');
};
const printNo=function print(){
    console.log('No!');
};

randomQuiz('love you',printYes,printNo);    //printYes 호출
randomQuiz('love',printYes,printNo);        //printNo 호출

//Arrow function 간결하게 만들어줌
//always anoymous

// const simplePrint=function(){
//     console.log('simplePrint!');   
// };
const simplePrint=()=>console.log('simplePrint!');

//실행시 simplePrint; 하면 출력x
//simplePrint();해야 출력됨
//이유: 함수실행이라서?

// const add=function(a,b){
//     return a*b;
// }
const add=(a,b)=> a*b;
console.log(add(3,4));

//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();