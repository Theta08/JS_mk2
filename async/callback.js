//비동기프로그램
'user strict';

//JavaScript is synchronous.  by orger => in order
//Execute the code black by orger after hosting.  동기적으로 실행
//코드가 나타나는 순서대로동기적 자동적으로 제일위로 올라기는 것
//hosting: var, function declaration
console.log('1');
// a synchronous : 비동기
//setTimeout: n초후 실행
// 1초후 실행
setTimeout(function(){
    console.log('2');
},1000);

console.log('3');

//Synchronous callback  동기콜백 
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);

//Callback Hell example
class UserStorage{
    //콜백함수
    loginUser(id,passworld,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id==='pm'&& passworld==='1234')||
                (id==='coder'&& passworld==='coder')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='pm'){
                onSuccess({name:'pm', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const uerStorage=new UserStorage();
const id=prompt('enter your id');
const passworld=prompt('enter your passworld');
uerStorage.loginUser(
    id,
    passworld,
    user=>{
        uerStorage.getRoles(
            user,
            userWithRole=>{
                alert(`hello ${userWithRole.name},your have a ${userWithRole.role}`);
            },
            error=>{
                console.log(error)
            }
        );
    },
    error=>{console.log(error)}
);