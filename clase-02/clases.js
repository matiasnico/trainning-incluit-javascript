
class Persona {

    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

class Student extends Persona {
    constructor( legajo) {
        this.legajo = legajo
        super(name, lastname)
        console.log(this.name)
    }
}

class Teacher extends Persona {
    constructor(name, lastname, title) {
        this.title = title
        super(name, lastname)
    }
}

const student1 = new Student(38539) // Student { name: '', lastname:'', legajo:38539 }

const persona = new Persona("Octavio", "Alvarez")