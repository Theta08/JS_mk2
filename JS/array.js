'use strict';

//Array

//1.Declaration (배열선언)
const arr1 =new Array();
const arr2=[1,2];

// 2. Index postition
const fruits=['🎈','🧨'];
console.log(fruits);
console.log(fruits.length);             //길이 
console.log(fruits[0]);                 //인덱스 접근 0번지
console.log(fruits[fruits.length-1]);   //배열 마지막 인텍스

//3. Looping over an array
//print all fruits

// 1.for
console.clear();
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//2. for of 배열안에 있는 데이터를 순차적으로 출력
for(const i of fruits){
    console.log(i);
}
//3. forEach  callBack함수를 받아옴
fruits.forEach((arr)=>console.log(arr));

//======================================
/*
//왜 됨??
fruits.forEach(arr1=>console.log(arr1));

//forEach 이해하기
//forEach 들어가서 callBack함수와 forEach함수 값을 보기
fruits.forEach(function(fruit, index,array){
    console.log(fruit,index,array);
});

//이름없는 함수 1.
fruits.forEach((fruit, index,array)=>{
    console.log(fruit,index,array);
});

// 한개면 {} 지우기 가능
//(지역변수라서 변수명 아무거나 해도됨)
fruits.forEach((fruit)=>console.log(fruit));
*/
//======================================

//4. Addtion, deletion,copy
//push:add an item to the end
//배열 맨 뒤에 넣는다.
fruits.push('🎢','👓');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
//unshift: 앞에 item을 넣을때
fruits.unshift('👖','🏑');
console.log(fruits);

//shift :rermove an item from the benigging
//앞 데이터부터 빠짐
fruits.shift();
console.log(fruits);

//note!! shift,unshift are slower than pop,push
//shipt,unshift는 pop,push보다 매우 느림
//pop,push는 넣고 빼면 됨
//shipt,unshift는 데이터를 다음 배열에 넣고나 빼고 넣어서 느림
//되도록이면 pop,push를 쓴다.

//remove an item by index position
//splice: remove an item by index position
//특정 배열을 지고싶을때
fruits.push('🦺','🎃','🎡');
console.log(fruits);
fruits.splice(0,2);       //특정 값을 지우고싶을때 숫자하나만 쓰면 그 인덱스(위치값)빼고 다 지움
console.log(fruits);  
fruits.splice(1,1,'🎯','📓');   //지우고 지운 자리에 배열 넣기
console.log(fruits);

//combine two arrays
//두가지의 배열을 묶는법
const fruits2=['🎐','🎑'];
const newFruit=fruits.concat(fruits2);
console.log(newFruit);


// 5.Serching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🎈'));      //없으면 -1로 리턴
console.log(fruits.indexOf('🧨')); 
console.log(fruits.indexOf('🎡')); 

console.log(fruits.includes('🎈'));      //입력한 값이 (t/f)인지 판별

//lastIndexof
console.clear();
fruits.push('🧨');
console.log(fruits);
console.log(fruits.indexOf('🧨'));      //제일 첫번째로 해당하는 값 만나면 리턴
console.log(fruits.lastIndexOf('🧨'));  //제일 마지막 값 리턴