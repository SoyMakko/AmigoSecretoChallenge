document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function() {
        const nombre = inputAmigo.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    };

    window.sortearAmigo = function() {
        if (amigos.length === 0) {
            alert("Agrega al menos un nombre antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }
});