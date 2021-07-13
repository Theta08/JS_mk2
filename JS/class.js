'use strict';
//object-oriendted programming
//class:template
//object: instance of a clss
//JavaScript class
// -introduced in ES6
// -syntactical sugar over protype-based inheritance

class Person{
    //constructor
    //class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드입니다.
    constructor(name,age){
        //fields
        this.name=name;
        this.age=age;
    }
    //메소드
    speak(){
        console.log(`${this.name}: hellow!`);
    }
}

const pm=new Person('pm',20);
console.log(pm.name);
console.log(pm.age);
pm.speak();


// 2.Getter and Setter
class User{
    constructor(firstName,lastName,age){
        this.firetName=firstName;
        this.lastName=lastName;
        this.age=age;   //this.age=get age() 호출  age: set호출
    }

    get age(){
        return this._age;   
    }
    set age(value){
        this._age=value;    //this.age면 무한 반목
        this._age=value<0? 0: value
    }
}
const user1=new User('steve','job',-15);
console.log(user1.age);


//3. Fields (public,private)
//Too soon! 최근
//이런게 있다.
class Experiment{
    publicField=2;
    #privateField=0;
}
 const experiment=new Experiment();
 console.log(experiment.privateField);
 console.log(experiment.publicField);

//  4.Static properties and methods
// Too soon! 최근
//이런게 있다.
class Article{
    static publisher='Dream Coding';
     constructor(articleNumber){
         this.articleNumber=articleNumber;
     }
     static printPublisher(){       //obj에 상관x 클래스자체에 연결
         console.log(Article.publisher);
     }
}
const article1=new Article(1);
const article2=new Article(2);
console.log(article1.publisher);    //obj안에 값에 할당x
console.log(Article.publisher);     //obj는 클래스 자체에 붙어 있기때문에
Article.printPublisher();


//5.상속,다향성
// 5. Inheritance(상속)
//a way for one class to extend another class.
class Shap{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing: ${this.color} color!`)
    }
    getArea(){
        return this.width*this.height;
    }

}

class Rectangle extends Shap{}
class Triangle extends Shap{
    draw(){
        //부모호출
        super.draw();
        console.log('위');
    }
    //다양성
    //오버라이딩 
    getArea(){
        return (this.width*this.height)/2;
    }
}

const rectangle=new Rectangle(20,30,'red');
rectangle.draw();
console.log(rectangle.getArea());

const triangle=new Triangle(5,1.5,'blue');
triangle.draw();
console.log(triangle.getArea());

//6.cClass checkingL instanceOf
//인스턴스
console.log(rectangle instanceof Rectangle);    //t
console.log(triangle instanceof Rectangle);     //f
console.log(triangle instanceof Triangle);      //t
console.log(triangle instanceof Shap);          //t
console.log(triangle instanceof Object);        //t
