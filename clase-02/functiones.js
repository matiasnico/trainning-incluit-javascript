// Función

var visible = 'Soy accedida desde cualquier bloque' 

function sum(a, b) {
  console.log(visible)
  visible = 2
  this.getValues()
  return a + b
}
// sum(5,2)

// Función anónima
function sum(a, b) {
  console.log(visible)
  return a + b
}

// Función anónima asignada a una variable
let sumar = function (a, b) { return a + b }
let result = function (result) {
  console.log(result)
}

// Devolver una función anónima desde otra funcion
function sumaValores(a, b) {
  const result = a + b
  return result(result)
}
console.log (result)

// Invocar directamente una función anómia
// (function (a, b) { return a + b }) (1,5)

// High Order Function
let resultado
// Arrow function
(a, b) => {
  resultado = a + b
}

// Para el mismo caso la arrow function puede ser mucho mas suggar
const suma = (a, b) => a + b // Es igual a suma
suma()

// En caso de recibir un solo parametro la cosa mejora
a => a * a;

// const saludar = () => 'Hola'
saludar()


// Template string
// const message = 'El resultado de la suma es: ' + resultado + ' los parametros recibidos son a = ' + a + 'y b = ' + b (Vieja forma)
const msg = `El resultado de la suma es: ${resultado} los parametros recibidos son a = ${a} y b = ${b}` // ES6


// ES5
const express = require('express')

// ES6
import express from 'express'