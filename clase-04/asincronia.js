
// Promise
// const magicNumber = new Promise(async (resolve, reject) => {
//     console.log('Calculando resultado.....')
//     await setTimeout(() => resolve(3), 10000)
// }).then(result => {
//     console.log(result)         // Vale 3?
//     return result * 5
// }).then(a => {
//     console.log(a)         // Vale 15?  vale 3?
//     return a + 25
// })

const fruits = ['Manzanas', 'Peras', 'Naranjas'] // Suponiendolo una base de datos externa que no sabemos cuando va a responder


// console.log("El resultado final es: ", magicNumber) // Vale 30?  vale error?

const getFruits = async () => {
    const fruitsFound =  await setTimeout(() => { }, 3000);
    return fruitsFound
}




