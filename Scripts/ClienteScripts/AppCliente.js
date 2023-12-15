async function GetAllProducts(){
    try {
        const response = await fetch('http://localhost:5157/api/Producto');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw 'error al obtener los datos';
    }
}

const contenedorProductos = document.querySelector(".info-data");

export async function MostrarProductos(){
    try {
        contenedorProductos.innerHTML = "";
        const productos = await GetAllProducts();
        console.log(productos);

        productos.forEach(producto =>{
            const listarProductos = `
            <div class="personaje">
                <div class="imagen_personaje"></div>
                <div class="detalle">
                    <h2>${producto.titulo}</h2>
                    <h3>${producto.precio}</h3>
                    <div class="btn"><i class='bx bxs-cart-add icon'></i></div>
                </div>
            </div>
            `
            contenedorProductos.innerHTML += listarProductos;
        })
    } catch (error) {
        alert("hubo un error al obtener todos los productos");
    }
}