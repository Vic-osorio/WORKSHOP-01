//almacenar información de cada producto
const producto = {
    01: { name: "producto 1", descripcion: "Descripción del producto 1", price: 100 },
    02: { name: "producto 2", descripcion: "Descripción del producto 2", price: 150 },
    03: { name: "producto 3", descripcion: "Descripción del producto 3", price: 200 },
    04: { name: "producto 4", descripcion: "Descripción del producto 4", price: 344 },
    05: { name: "producto 5", descripcion: "Descripción del producto 5", price: 123 },

}
//inicia un array vacio, para que añada los productos que el usuario seleccione
const cart = []

document.querySelectorAll('.producto_item').forEach(item => {
    item.addEventListener('click', () => {
        const produtoid = item.getAttribute('data-id');
        con
    })
})