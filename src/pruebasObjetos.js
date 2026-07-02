class Student {
    #name;
    #firstSurname;
    #secondSurname;
    #birthDate;

    constructor(name, firstSurname, secondSurname, birthDate) {
        this.#name = name;
        this.#firstSurname = firstSurname;
        this.#secondSurname = secondSurname;
        this.#birthDate = birthDate;
    }

    get name() {
        return `${this.#name[0].toUpperCase()}${this.#name.slice(1).toLowerCase()}`;
    }

    set name(newName) {
        this.#name = newName;
    }

    get firstSurname() {
        return `${this.#firstSurname[0].toUpperCase()}${this.#firstSurname.slice(1).toLowerCase()}`;
    }

    get secondSurname() {
        return `${this.#secondSurname[0].toUpperCase()}${this.#secondSurname.slice(1).toLowerCase()}`;
    }

    get birthDate() {
        return this.#birthDate;
    }

    getFullName() {
        return `${this.name} ${this.firstSurname} ${this.secondSurname}`;
    }

    toString() {
        return `Nombre: ${this.name}
Primer apellido: ${this.firstSurname}
Segundo apellido: ${this.secondSurname}
Fecha de nacimiento: ${this.birthDate}`;
    }
}

class PhdStudent extends Student {
    #taughtSubjects;
    #weekHoursTaught;

    constructor(name, firstSurname, secondSurname, birthDate, weekHoursTaught, taughtSubjects)
    {
        super(name, firstSurname, secondSurname, birthDate);
        this.#weekHoursTaught = weekHoursTaught;
        this.#taughtSubjects = taughtSubjects;
    }

    get weekHoursTaught()
    {
        return this.#weekHoursTaught;
    }
    set weekHoursTaught(newname)
    {
       this.#weekHoursTaught=newname;
    }
    
    get taughtSubjects()
    {
        return this.#taughtSubjects;
    }
    set taughtSubjects(newvlor)
    {
        this.#taughtSubjects=newvlor;
    }



}

const student1 = new Student("criStina", "Martín", "Fabregat", "04/03/1980");
student1.name = "pAblo";
console.log(student1.name);

const phstudent = new PhdStudent(
    "Emily",
    "García",
    "Pérez",
    "12/08/1995",
    20,
    ["JavaScript", "Bases de Datos"]
);
console.log(phstudent.name);
console.log(phstudent.getFullName());
console.log(phstudent.toString());
console.log(phstudent.name);
console.log(phstudent.getFullName());
console.log(phstudent.toString());

// Probando getters y setters propios
console.log(phstudent.weekHoursTaught);

phstudent.weekHoursTaught = 25;

console.log(phstudent.weekHoursTaught);

console.log(phstudent.taughtSubjects);

phstudent.taughtSubjects = ["Node.js", "Redes"];

console.log(phstudent.taughtSubjects);