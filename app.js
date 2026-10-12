// Lógica principal de la aplicación de gestión de pedidos

function listarPedidos() {
  const lista = document.getElementById("lista-pedidos");
  lista.innerHTML = "";
  pedidos.forEach(function (pedido) {
    const item = document.createElement("li");
    item.textContent = pedido.id + " - " + pedido.cliente + " - " + pedido.producto + " (" + pedido.estado + ")";
    lista.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", listarPedidos);
