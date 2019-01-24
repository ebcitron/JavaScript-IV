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
    }

    demo(){
        console.log(`Today we are learning about ${this.subject}`);
        }
    grade(){
        console.log(`${this.name} receives a perfect score on ${this.subject}`)
    }
}

class Students extends Person{
    constructor(stuAttributes){
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
    }
}