


const productsFound = getFruits() //  ['Manzanas', 'Peras', 'Naranjas']

if (!productsFound) throw new Error('No hay productos')

goToProducts(productsFound)

// code