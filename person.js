class Person {
    constructor(name, age, gender, designation) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.designation = designation;
    }
    get pName() { return this.name; }
    set pName(p) { this.name = p; }
    get pGender() { return this.gender; }
    set pGender(p) { this.gender = p; }
    get pAge() { return this.age; }
    set pAge(p) { this.age = p; }
    get pDesignation() { return this.designation; }
    set pDesignation(p) { this.designation = p; }
}
let person = new Person('John','Male', 23, 'Developer');
console.log(person);