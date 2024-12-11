document.addEventListener("DOMContentLoaded", () => {
    const horariosManana = document.getElementById("horarios-manana");
    const horariosTarde = document.getElementById("horarios-tarde");

    // Horarios de mañana
    for (let hora = 9; hora < 15; hora += 2) {
        const div = document.createElement("div");
        div.textContent = `${hora}:00 - ${hora + 2}:00`;
        horariosManana.appendChild(div);
    }

    // Horarios de tarde
    for (let hora = 16; hora < 21; hora++) {
        const div = document.createElement("div");
        div.textContent = `${hora}:00 - ${hora + 1}:00`;
        horariosTarde.appendChild(div);
    }
});
