var openModalBtn = document.getElementById('openModalBtn');
    var modal = document.getElementById('myModal');
    var closeModalBtn = modal.querySelector('.close');
    var locatarioBtn = document.getElementById('locatarioBtn');
    var locadorBtn = document.getElementById('locadorBtn');
    var inmobiliariaBtn = document.getElementById('inmobiliariaBtn');

    openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    });

    locatarioBtn.addEventListener('click', function () {
    window.location.href = 'pagina_de_registro_locatario.html';
    });

    locadorBtn.addEventListener('click', function () {
    window.location.href = 'pagina_de_registro_locador.html';
    });

    inmobiliariaBtn.addEventListener('click', function () {
    window.location.href = 'pagina_de_registro_inmobiliaria.html';
    });