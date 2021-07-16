// Q1. make a string out of an array
{   //배열형태
    const fruits = ['apple', 'banana', 'orange'];
    //const a=fruits.join();
    const a=fruits.join(' and ');
    //const a1=fruits.toString();
    console.log(a);
    //console.log(a1);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    //console.log(fruits.toString());
    const result=fruits.split(','); //구분자 꼭전달
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    //reverse: 배열자체를 변환하고 리턴
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 7, 3, 4, 5];
    console.clear();
    console.log(array.splice(2,5));
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    //   find를 썻을경우
      const result=students.find((student)=>student.score===90);
      console.log(result);

      for(let i=0;i<students.length;i++){
          if(students[i].score===90)
          console.log(students[i]);
      }

      for(stu of students){
       if(stu.score===90){
            console.log(stu);
       }
    }

  }
  
  // Q6. make an array of enrolled students
  //등록된 학생들의 배열을 만들다
  {
      //1.students배열의 t,f검사
      //2.if t면 students배열의 0번지를 다른 배열에 담는다.(pop)
      const arr=[];
      for(stu of students){ //true면 실행
          if(stu.enrolled){
              arr.push(stu.score);
          }
      }
      console.log(arr);

      //filter를 써서만듬
      const result=students.filter((student)=>student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  { 
      const arr=new Array();
      for(stu of students){
        arr.push(stu.score);
      }
      console.log(arr);
      
      //maping
      //배열안에 있는 요소를 원하는 함수로 만들고 싶을때 씀
      const result=students.map((student)=>student.score * 2);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      for(stu of students){
          if(stu.score<50){
              console.log(stu);
          }
      }
      console.clear();
      //some 콜백함수가 리턴있는지 없는지 확인
      const result=students.some((student)=>student.score<50);
      console.log(result);
      
      //모두 만족해야 T 하나라도 틀리면 /F
      const result2=students.every((student)=>student.score<50);
      console.log(result2);
  }
  
  // Q9. compute students' average score
  {
      let scoreSum=0;
      for(stu of students){
          scoreSum+=stu.score
      }
      console.log(scoreSum/students.length);

      //reduce: 배열에있는 모든 값을 누적
      //reduceright: 배열 마지막부터 시작
      //return 한값을 prev로 전달
      //0: prev=0부터 시작
      const result=students.reduce((prev,current)=>prev+current.score,0
        //   console.log('=========');
        //   console.log(prev);
        //   console.log(current);
        
      );
      console.log(result);
  }
  
  // Q10. make a string containing all the scores
  // Q10. 모든 점수를 포함하는 문자열 만들기
  // result should be: '45, 80, 90, 66, 88'
  {
    let a='';
    for(let i=0;i<students.length;i++){
        if(i==students.length-1){
            a+=students[i].score.toString();
        }
        else{
            a+=students[i].score.toString()+', ';
        }
        
    }
    console.log(a);
    console.clear();
    const result=students.map((student)=>student.score).join();
    console.log(result);
    const result2=students
        .map((student)=>student.score)  //점수변환
        .filter((score)=>score>=50)     //50점이상
        .join();                        //string형태로 변환

    console.log(result2);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    let a=[];
    for(let i=0;i<students.length;i++){
        if(i==students.length-1){
            a.push(students[i].score);
        }
        else{
            a.push(students[i].score);
        }
        
    }
    console.clear();
    console.log(a.sort((a,b)=>b-a));    //큰수대로 변환
    
    const result=students.map((student)=>student.score)
        .sort((a,b)=>a-b)       //b가 a보다 크다 -1
        .join();
    console.log(result);
  }
