document.addEventListener("DOMContentLoaded", () => {
    const fecha = new Date();
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    document.getElementById("anio").textContent = fecha.getFullYear();
    document.getElementById("dia").textContent = fecha.getDate();
    document.getElementById("mes").textContent = meses[fecha.getMonth()];
});
