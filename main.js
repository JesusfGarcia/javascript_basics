/* const bebio_cafe = false;
const hay_cafe = true;

if (bebio_cafe) {
  console.log("el usuario bebió cafe");
} else if (hay_cafe) {
  console.log("el usuario se preparará un cafe");
} else {
  console.log("el usuario no bebió café");
} */

/* const miEdad = 18;
const tuEdad = 15;

const edadMayoritaria = 18;

if(miEdad >= edadMayoritaria || tuEdad >= edadMayoritaria){
    console.log("somos mayores de edad")
}else{
    console.log("somos menores de edad")
}
 */

/* let myArray = ['leon', 'jirafa', 'lagartija', 'perro']; */

/* const nuevoArray = myArray.map(animal => {
    return animal + ' bonito';
})

console.log("myArray =>", myArray)

console.log("nuevo array =>", nuevoArray) */

/* for(let i = 0; i < myArray.length; i++){
    console.log("jaime está con su" + " " + myArray[i])
} */

/* myArray.forEach(animal => {
    console.log("javier está con su " + animal)
}); */

/* const arrayNumerico = [1, 2, 3, 4, 5, 6];


console.log(arrayNumerico)

arrayNumerico.splice(3,3, 40);

console.log(arrayNumerico)
 */

/* const array = ["arbol", "cebolla", "triste"]; */

/* const arrayFiltrado = array.filter((palabra) => {
  const myArrayWord = palabra.split("");
  let haveR = false;
  myArrayWord.forEach((letter) => {
    if (letter === "r") {
      haveR = true;
    }
  });
  return haveR;
});

console.log(arrayFiltrado);
 */

/* const getDateInSpanish = (arrayDeFecha) => {
  const año = arrayDeFecha[0];
  let mes = parseInt(arrayDeFecha[1]);
  const dia = arrayDeFecha[2];

  switch (mes) {
    case 1:
     mes = "Enero";
    break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    default:
      mes = 'algún mes';
      break;
  }

  return `la fecha introducida es ${dia} de ${mes} de ${año}`

};

const fecha = "1999-1-04";

const array = fecha.split("-");

const mi_fecha = getDateInSpanish(array);

console.log(mi_fecha) */

/* let suma = 2 + 2;
let resta = 2 - 2;
let division = 2/ 2;
let mult = 2 * 2;
let potencia = 2 ** 3;

console.log("suma", suma);
console.log("resta", resta);
console.log("division", division);
console.log("mult", mult);
console.log("potencia",potencia);

const name = 'Jesús'

console.log("hola como estas" + " " + name);
console.log(`hola como estas ${name}`)

const hola = `${}` */

/* let user = {
    name: 'Jesús',
    age: 21,
    gender: 'Masculino'
} */

/* const user = [
  {
    name: "Jesús",
    age: 21,
    gender: "Masculino",
  },
  {
    name: "María",
    age: 15,
    gender: "Femenino",
  },
  {
    name: "Rafael",
    age: 39,
    gender: "Masculino",
  },
  {
    name: "Cristian",
    age: 12,
    gender: "Masculino",
  },
  {
    name: "Fer",
    age: 28,
    gender: "Masculino",
  },
];


user.forEach(user => {
    console.log(`Mi nombre es ${user.name} tengo una edad de ${user.age} y soy de genero ${user.gender}`)
}) */

/* const sayHello = () => {
    console.log("hola amigos como estan?")
}

*/
let usuario = {
    name: 'Jesús',
} 


if(''){
    console.log("tiene edad")
}else{
    console.log("no tiene")
}

/* usuario.forEach(element => {
    console.log(element)
}) */


/* class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saludar() {
        console.log(`hola a todos mi nombre es ${this.name}`)
    }
}

const usuario1 = new Users('Jesús', 21);
const usuario2 = new Users('María', 22);

usuario2.saludar();
console.log(usuario1); */


/* class Square {
    constructor(lado){
        this.lado = lado;
        this.perimetro = lado * 4;
        this.area = lado * lado;
    }

    getPerimetro() {
        return this.perimetro
    }

    getArea() {
        return this.area;
    }
}

const miCuadradito = new Square(5);

console.log(miCuadradito.getPerimetro());

console.log(miCuadradito.getArea()) */
/* 
const myArray = [1,100,200,4]

const haveLargestNumbers = myArray.every(number => number > 100);

console.log(haveLargestNumbers) */