class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (studentToRegister.name == undefined || studentToRegister.email == undefined) {
            console.log('Invalid name or email')
            return false;
        }
        if (this.students.find(s => s.email == studentToRegister.email)) {
            console.log(`this ${studentToRegister.email} is already registered`);
            return false;
        }
        else {
            this.students.push(studentToRegister);
            console.log(`the ${studentToRegister.name} is successfully registered in ${Bootcamp.name}`);
            return true;
        }
    }

    listStudents() {
        if (this.students.length == 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        }
        else {
            console.log(`The students registered in ${this.name} are:`);
            this.students.forEach(s => console.log(` ${s.name}  ${s.email}`));
            return true;
        }
    }

    getInfoBootcamp() {
        console.log(` ${this.name}  ${this.level}`);
    }

    removeStudent(email) {
        if (this.students.find(s => s.email = email)) {
            for (var i = 0; i < this.students.length; i += 1) {
                if (this.students[i][email] = email) {
                    this.students.splice(i, 1);
                    console.log(`deleted ${email}`);
                }
            }
        }
    }

    getInfoStudents() {
        for (var i = 0; i < this.students.length; i += 1) {
            console.log(`${this.students[i].email} ${this.students[i].name}`);
        }
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
        bootcamp.getInfoStudents();
        bootcamp.removeStudent("babs@bunny.com")

    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
    bootcamp.getInfoBootcamp();
};
runTest(reactBootcamp, testStudent);