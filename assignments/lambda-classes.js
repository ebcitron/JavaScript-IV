// CODE here for your Lambda Classes




class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
      
    }
    
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
} 




class Instructor extends Person{
    constructor(insAttributes){
        super(insAttributes);
        this.specialty = insAttributes.specialty;
        this.favLanguage = insAttributes.favLanguage;
        this.catchPhrase = insAttributes.catchPhrase;
        this.grade = insAttributes.grade;
    }

    demo(){
        console.log(`Today we are learning about ${this.subject}`);
        }
    grade(){
        console.log(`${this.name} receives a perfect score on ${this.subject}`);
    }
    randomPoint(){
        console.log(`${this.name} has a grade of ${this.grade} %`)
        
    }
    
}
// function MakeGrade(){
//     ogGrade=(Math.random*100);
//     console.log(ogGrade);
//      return ogGrade;
// }



class Student extends Person{
    constructor(stuAttributes){
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
        this.grade = stuAttributes.grade;
        }


    listSubjects(){
        const fav = this.favSubjects;
        fav.forEach( function(element){
            console.log(element);
            return element[0];
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallange(subject){
        console.log(`${this.name} has begun sprint challange on ${subject}`);
    }
}




class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChan){
        console.log(`${this.name} announces to ${slackChan}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}




const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
const wilma = new Instructor({
    name: 'wilma',
    location: 'Bedrock',
    age: 30,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the dinosaurs... rip`
  });
  
const freddy = new Student({
    name: 'Freddy',
    location: 'Bedrock',
    age: 15,
    gender: 'male',
    favSubjects: ['html', 'python', 'Scriptin'],
    className: 'Front and Back end',
    previousBackground: "bedrock dealer",
    grade: 95
    
  });
  
const wilmer = new Student({
    name: 'wilmer',
    location: 'South-Bedrock',
    age: 26,
    gender: 'male?',
    favSubjects: ['scripting','css','python', 'Rock-Speak'],
   className: 'CYP2D6',
    previousBackground: `Ran a taxi... literally`
  });
  
  const eli = new ProjectManager({
    name: 'Eli',
    location: 'Chiraq',
    age: 23,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Social Engineering',
    catchPhrase: 'watiyatalkinabeet...',
    gradClassName: 'web17!',
    favInstructor: "Josh"
  });
  
  const ShEli = new ProjectManager({
    name: 'ShEli',
    location: 'Shiraq',
    age: 32,
    gender: '"female"',
    favLanguage: 'Japanese',
    specialty: 'Scripting',
    catchPhrase: 'watiyatalkintome...',
    gradClassName: 'web17!',
    favInstructor: "hsoJ"
  });


  console.log(fred.favLanguage);
console.log(eli.favLanguage);
eli.speak();
 ShEli.speak();

 wilmer.speak();
 fred.speak();

 freddy.listSubjects();

freddy.sprintChallange('math');


eli.debugsCode("freddy","coding");

eli.standUp('666');

fred.grade();