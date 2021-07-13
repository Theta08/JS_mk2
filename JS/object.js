//Object
//JavaScript`s data types.
//object ={key: value}; key와value의 집합체

// 1. Literals and properties(속성)
const obj1={};              //'object literal' syntax
const obj2=new Object();    //'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const pm={name:'pmw',age:4};
print(pm);

//동적으로 런타입때 결정이 됨.
//그래서 뒤늦게 properties 추가 가능
//동적코딩x 이유: 유지보수힘듬

pm.hasJob=true;
console.log(pm.hasJob);

delete pm.hasJob;
console.log(pm.hasJob);

// 2. Computed properties
// key should be always string!!

 //코딩하는 순간 그 키값을 받아오고 싶을떄
console.log(pm.name);                         

//정확한 값이 어떤키인지 모를때 
//실시간 원하는 키를 가져올때
console.log(pm['name']); //[string] 타입만 출력 
// pm['hasJob']=true;
// console.log(pm.hasJob);

function printValue(obj,key){
    //console.log(obj.key);
    console.log(obj[key]);  //동적으로 키값을 받을때
}
printValue(pm,'name');

// 3. Property Value shorthand
// 동일한 키,벨류 작성

const person1={name:'bob1',age:2};
const person2={name:'bob2',age:4};
const person3={name:'bob3',age:10};
// const person4=makePerson('bob4',24);

/*
key와 value가 같으면 생략가능
function makePerson(name,age){
    return{
        name,       //name:name
        age,         //age:age
    };
}
*/

//클래스가 obj만드는 것처럼
const person4=new Person('bob4',24);
console.log(person4);



//4. Constuctor function
//순수하게 obj를 생성하는 함수 앞에 대문자
function Person(name,age){
    this.name=name;
    this.age=age;
}

//5.in operator: property existence check (key in obj)
//키가 있는지 없는지 확인 가능
console.log('name' in pm);
console.log('random' in pm);
console.log(pm.random);     //undefined


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in pm){
    console.log(key);
}

//for (value of iterable)
const array=[1,2,4,6,8];
//array에있는 모든 값이 value에 할당
for(value of array){
    console.log(value);
}

// 7. cloning
//Object.assign(dest, [obj1,obj2,obj3...])
const user={name: 'pm',age:'20'};
const user2=user;                   //메모리에서 user2는 user을 가리킨다.
user2.name='coder';
console.log(user);

//old way
const user3={};
for(key in user){
    user3[key]=user[key];
}
console.clear();
console.log(user3);

// 방법
// 1.
const user4={}
Object.assign(user4,user);

// 2.
const user4_=Object.assign({},user);
console.log(user4_);

//another example
const fruit1={color:'red'};
const fruit2={color:'blue', size: 'big'}
//뒤에 나온 값이 있으면 앞에 값을 덮어 씌운다.
const mixed=Object.assign({},fruit1,fruit2);
console.clear();
console.log(mixed);
console.log(mixed.color);   //blue  A
console.log(mixed.size);    //big