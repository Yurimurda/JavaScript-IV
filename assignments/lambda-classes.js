// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}



class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty
        this.favLanguage = instructorAttributes.favLanguage
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Instructor {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground
        this.className = studentAttributes.className
        this.favSubjects = studentAttributes.favSubjects
    }
    listSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Student{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName
        this.favInstructor = pmAttributes.favInstructor
    }
    standUp(channel){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(){
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
}



//--------------------------Classes End----------------------------//
//---------------------------Personnel----------------------------//


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const barney = new Student({
    name: 'Barney',
    location: 'Bedrock',
    age: 35,
    previousBackground: 'bellhop, crane operator',
    className: 'CS132',
    
})








console.log(fred.favLanguage);