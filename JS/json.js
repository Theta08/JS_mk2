//JSON

// 1.Object to JSON
// stringfy(obj)
//obj를 json으로 변환
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

//obj
const rabbit={
    name:'tori',
    color:'white',
    size: null,
    birthDate: new Date(),
    //JSON에 포함x
    //symbol:Symbol('id'),
    jump:()=>{  
        console.log(`${name} can jump`);
    },
}

json=JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit,['name','color']);
console.log(json);

json=JSON.stringify(rabbit, (key,value)=>{
    console.log(`key: ${key}, value:${value}`);
    return key==='name'?'pm':value; //키가 name이름이 pm이면 pm출력 아니면 value;
})
console.log(json);

//2,JSON to Object
//parse(json)
console.clear();
json=JSON.stringify(rabbit);
//json으로부터 obj변환
const obj=JSON.parse(json, (key,value)=>{
    console.log(`key: ${key}, value:${value}`);
    return key ==='birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

// json으로 변환라때 obj는 변환x
//obj.json();

console.log(rabbit.birthDate.getDate());
 //obj.birthDate.getDate() 오류
 // bithDate는 string형태라서 오류
// console.log(obj.birthDate);
console.log(obj.birthDate.getDate());