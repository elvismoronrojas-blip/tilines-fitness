// Botón hamburguesa
    const botonDesplegable = document.getElementById('boton-desplegable');
    const nav = document.getElementById('nav');

    botonDesplegable.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Submenú "CATÁLOGO"
    const botonCatalogo = document.getElementById('botonCatalogo');
    const menuCatalogo = document.getElementById('menuCatalogo');

    botonCatalogo.addEventListener('click', (e) => {
      e.stopPropagation();
      menuCatalogo.classList.toggle('open');
    });

    // Cerrar submenú si se hace clic fuera
    document.addEventListener('click', (e) => {
      if (!menuCatalogo.contains(e.target)) {
        menuCatalogo.classList.remove('open');
      }
    });


    //pagar los planes
  function mostrarPago() {
  const contenido = document.getElementById("contenido-pagar");
  contenido.style.display = 
    contenido.style.display === "none" ? "block" : "none";
}