/**
 * Crear una clase Usuario con 4 atributos que se reciben por constructor.
 * Crearle metodos a la clase donde se pueda:
 *      Obtener el nombre completo
 *      Obtener la nacionalidad
 *      agregarle un Numero de Documento de Identidad.
 */
/**
 * Crear una clase Usuario con 4 atributos que se reciben por constructor.
 * Crearle metodos a la clase donde se pueda:
 *      Obtener el nombre completo
 *      Obtener la nacionalidad
 *      agregarle un Numero de Documento de Identidad.
 * */
 class Person {

    constructor(name, lastName, country, hair) {
        this.name = name;
        this.lastName = lastName;
        this.country = country;
        this.hair = hair;
    }

    getFullName() { 
        console.log(`El nombre completo de esta persona es ${this.name} ${this.lastName}.`)
    }

    getNationality (){
        console.log(`${this.name} ${this.lastName} proviene de ${this.country}.`)
    }

    addDNI(number){
        this.dni = number;
        console.log(this);
    }
}


const peter = new Person( 'Peter', 'Romanov', 'Rusia', 'Alazan')
peter.getFullName()
peter.getNationality()
peter.addDNI(35585695)

const javier = new Person( 'Javier', 'Romanov', 'Argentina', 'Alazan')

javier.getFullName()
javier.getNationality()
javier.addDNI(35585696)

// function getFullName (person){
//     console.log(`El nombre completo de esta persona es ${person.name} ${person.lastName}.`)
// }

// getFullName(peter);

// function getNationality (person){
//     console.log(`${person.name} ${person.lastName} proviene de ${person.country}.`)
// }

// getNationality(peter);

// function addDNI( person, number ){
//     person.dni = number;
//     console.log(person);
// }

// addDNI(peter, 123456);




/*
 * Crear una clase Note que contenga:
 *      title
 *      description
 *      status ('Pendiente', 'En progreso', 'Finalizada', 'Cancelada')
 *      userId
 */