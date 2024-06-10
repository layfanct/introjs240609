const precio = 400000


const total = document.querySelector(".valor-total");
const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");
const cantidad = document.querySelector(".cantidad");
const valor = document.querySelector(".precio-inicial");

let cant = 1
let tot = precio*cant

total.innerHTML = tot
valor.innerHTML = precio
cantidad.innerHTML = cant

btnSuma.addEventListener("click", () => {
    cant = cant + 1;
    tot = precio*cant;
    cantidad.innerHTML = cant
    total.innerHTML = tot
})

btnResta.addEventListener("click", () => {
    if (cant>1) {
    cant = cant - 1;
    tot = precio*cant;
    cantidad.innerHTML = cant
    total.innerHTML = tot
}})
