import { MostrarProductos } from "./AppCliente.js";
const todos = document.querySelector(".todos");

todos.addEventListener("click", function(){
    MostrarProductos();
})