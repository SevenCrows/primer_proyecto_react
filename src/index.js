import React from 'react'
import ReactDOM from 'react-dom'

/** PRIMER EJEMPLO **/
// const App = <h1>Hola, esta es mi primera prueba de creación</h1>
// const root = document.getElementById('root')

// ReactDOM.render(App, root);


/** INYECTAR  EXPRESIONES **/
// const expresion = 'Soy una expresión'
// const App = <h1>Hola, {expresion}</h1>

// ReactDOM.render(App, document.getElementById('root'));

/** INYECTAR  PROPIEDES DE UN OBJETO**/
// const user = {
//   name: 'Alex Torres',
//   age: 28,
//   country: 'Colombia'
// }

// const App = <h1>Hola, Soy {user.name} tengo {user.age} años y trabajo en {user.country}</h1>

// ReactDOM.render(App, document.getElementById('root'));


/** OPERACION MATEMATICA**/
// const user = {
//   name: 'Alex Torres',
//   age: 28,
//   country: 'Colombia'
// }

// const App = <h1>Hola, Soy {user.name} tengo {user.age} años y el doble de mi edad es {user.age * 2}</h1>

// ReactDOM.render(App, document.getElementById('root'));


/** LLAMADA DE UNA FUNCIÓN**/
const user = {
  name: 'Alex Torres',
  age: 28,
  country: 'Colombia'
}

function getInfoUser(usuario){
  return `Hola, Soy ${user.name} tengo ${user.age} años y el doble de mi edad es ${user.age * 2}`
}

const App = <h1>{ getInfoUser(user) }</h1>

ReactDOM.render(App, document.getElementById('root'));