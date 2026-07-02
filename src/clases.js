class Student {

    name;
    firstSurname;
    secondSurname;
    birthday;
    constructor(name,firstSurname,secondSurname,birthday) {
      this.name=name;
      this.firstSurname=firstSurname;
      this.secondSurname=secondSurname;
      this.birthday=birthday;  
    }

    toString()
    {
      return(`Nombre: ${this.name}\nCumpleanos: ${this.birthday}`);
    }
}

const student1= new Student("Iralys", 07/11/1987);
console.log(student1.toString());