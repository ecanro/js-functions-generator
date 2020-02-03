/*

//object  literal
const persona = {
    nombre: 'Edgar',
    profesion: 'Developer',
    edad: 42
}
console.log(persona);

//object constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}


const tarea2 = new Tarea('Practicar mucho', 'urgente!');
const tarea3 = new Tarea('Hacer bootcamp', 'urgente!');

console.log(tarea2);
console.log(tarea3);

//protoype a Tarea:

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea ('Aprender JavaScript y React', 'Urgente!');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());


//Destructuring forma nueva: extraer valores
const aprendiendoJS = {
    version: {
        nueva : 'ES6',
        anterior : 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

let {anterior} = aprendiendoJS.version;
console.log(anterior);
let {frameworks} = aprendiendoJS;
console.log(frameworks[0]);

//Object literal enhancement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Unforgetable'];

//forma anterior

const metallica1 = {
    banda : banda,
    genero : genero,
    canciones : canciones
}
console.log(metallica1);

//forma nueva

const metallica = {banda, genero, canciones};
console.log(metallica);

//metodos funciones en objetos,

const  persona1 = {
    nombre : 'Edgar',//recordar los dos : puntos
    trabajo : 'Developer',
    edad : 42,
    musica : 'Vallenato',
    mostrarInformacion() {
        console.log(`${this.nombre} es un ${this.trabajo} y su edad es ${this.edad} y le gusta el ${this.musica}`)
    }
}
persona1.mostrarInformacion();


//Arreglos y metodo .map
//forma comun
const carrito = ['Producto1', 'Producto2', 'Producto3'];
console.log(carrito);
const appContenedor = document.querySelector('#app');
appContenedor.innerHTML = carrito;
let html = '';
//aqui quema el codigo para mostrarlo en el html como lista
carrito.forEach(producto =>{
    html += `<li>${producto}</li>`;
})
appContenedor.innerHTML = html;


//ahora con map
carrito1 = ['Producto1', 'Producto2', 'Producto3'];
carrito1.map(producto =>{
    return `El producto es ${producto}` ;
});
//) [ "El producto es Producto1", "El producto es Producto2", "El producto es Producto3" ]

//Object.keys, solo para comprobar llaves del lado izq

const alquien = {
    nombre : 'Edgar',
    profesion : 'Developer',
    edad : 42
}
console.log(Object.keys(alquien));


//spread operator ...
let framework = ['React', 'Laravel', 'Django'];
let lenguajes = ['JavaScript', 'PHP', 'Python'];


//unir con ... concatentar
let nuevoArr = [...lenguajes,...framework];
console.log(nuevoArr);


//copiarlo
let newArray = [...lenguajes];
console.log(newArray);

//para que entonces copiamos, por si queremos modificarlos
let [ultimo] = lenguajes.reverse();
console.log(ultimo);
console.log(lenguajes);
//queda volteado
[ultimo] = lenguajes.reverse();


//ahora con ... no queda volteado
let [ultimoSpreak] = [...lenguajes].reverse();
console.log(ultimoSpreak);


//Metodos para array

const personas = [
    {nombre: 'Saed', edad: 15, aprendiendo: 'Vue'},
    {nombre: 'Lenin', edad: 42, aprendiendo: 'React'},
    {nombre: 'Andres', edad: 14, aprendiendo: 'C#'},
    {nombre: 'Noe', edad: 15, aprendiendo: 'Angular'},
    {nombre: 'Sarami', edad: 38, aprendiendo: 'BD'},
]
console.log(personas);

//mayores de edad
const mayores = personas.filter(personas => {
    return personas.edad > 18;
});
console.log(mayores);

//que aprende x usuario y su edad
const sarami = personas.find(personas => {
    return personas.nombre === 'Sarami';
})
console.log(sarami);

//reduce
let total = personas.reduce((edadTotal, personas) => {
    return edadTotal + personas.edad;
}, 0);
 console.log('la edad total es ' + total);


//promises

const donwloadUsers = cantidad => new Promise((resolve, reject)  => {

    //pasar api, practicandon con la api de randomuser
    const api = `https://randomuser.me/api/?results=${cantidad}$nat=us`;

    //llamar ajax
    const xyz = new XMLHttpRequest();

    //abrir conex
    xyz.open('GET', api, true);

    //on load

    xyz.onload = () => {
        if(xyz.status === 200) {
            resolve( JSON.parse(xyz.responseText).results );
        }else{
            reject(Error(xyz.statusText));
        }   
    }
        //opcional error
        XPathResult.oneror = (error) => reject(error);

        //send
        xyz.send()
});

donwloadUsers(5)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error ' + error)
        )
    )
    //imprimir html ._.
    function imprimirHTML(usuarios) {
        let html = ''
        usuarios.forEach(usuario => {
            html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen:
                        <img scr = "${usuario.picture.medium}">
            </li>
            `;

        });
        //y aqui lo mandamos al div "app" en el html
        const contenedorApp = document.querySelector('#app');//id app
        contenedorApp.innerHTML = html;
    }

    //clases

class Tareas {
    //metodo constructor
    constructor(nombres, priority) {
        //propiedades
        this.nombres = nombres;
        this.priority = priority;
     }
        //metodo tipo funcion
    mostrar() {
        return `${this.nombres} tiene una prioridad ${this.priority}`
    }
}
let task1 = new Tareas('Aprender Javascript', 'Alta');
console.log(task1.mostrar());*/


//practica con ciclo for
var numberList = [4, 56, 3, 67, 2, 5, 56]

//print the greatest number of the given list
console.log(findGreatest(numberList));
debugger;

function findGreatest(list) {
    var maxNumber = 0;
        for(i = 0; i < list.length; i++);
            var number = list[i];
                if(number > maxNumber){
                 maxNumber = number;
       }
     return maxNumber;
 }

 var numberList = [4, 56, 3, 67, 2, 5, 56]

//print the greatest number of the given list
console.log(findGreatestEven(numberList));

function findGreatestEven(list) {
    if(!list){
        console.error("nao existe lista!");
        return;
    }
  var evenNumber = 0;
    for(i = 0; i< list.length; i++)
      var number = list[i];
      
        if(number > evenNumber && isEven(number)){
          evenNumber = number;
        }
    return evenNumber;
}
//podemos definir una pequena funcion para verificar pares en base a una variable numero
function isEven(number){
    if(number%2 === 0){
        return true
    }
    return false;
}

function start(people){
    //por cada persona de la lista
    var changePeople = people.concat();
        for(i=0; i<people.length; i++){
            var originalPerson = changePeople[i];//asignar una variable a cada condicion._.
            var changePerson = {
                name:originalPerson.name,
                sex:originalPerson.sex
            };
        //verificar el sex actual
        var actual = changePerson.sex;
        //si actual fuera "m"
        if(actual === "m"){
            changePerson.sex = "f";
        }
        //si actual fuera "f"
        else if(actual === "f"){
            changePerson.sex = "m"
        } else {
            console.log("sexo indefinido")
        }

    }
    console.log(changePeople)
    return changePeople;
}

start([{ name: 'João', sex: 'm'}, {name: 'Francisca', sex: 'f'}]);


function doFactorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * doFactorial(num - 1)
}
var result = doFactorial(40);
console.log(result);

//recursive functions

  