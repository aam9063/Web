// IMC
document.getElementById("form-imc").addEventListener("submit", (e) => {
    e.preventDefault();
    const altura = parseFloat(document.getElementById("altura").value) / 100;
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado-imc");

    if (altura > 0 && peso > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let clasificacion = "";

        if (imc < 16) clasificacion = "Infrapeso (Delgadez severa)";
        else if (imc < 17) clasificacion = "Infrapeso (Delgadez moderada)";
        else if (imc < 18.5) clasificacion = "Infrapeso (Aceptable)";
        else if (imc < 25) clasificacion = "Peso normal";
        else if (imc < 30) clasificacion = "Sobrepeso";
        else if (imc < 35) clasificacion = "Obeso (Tipo I)";
        else if (imc < 40) clasificacion = "Obeso (Tipo II)";
        else clasificacion = "Obeso (Tipo III)";

        resultado.innerHTML = `Tu IMC es <strong>${imc}</strong>. Clasificación: <em>${clasificacion}</em>`;
    } else {
        resultado.textContent = "Por favor, introduce valores válidos.";
    }
});

// FCM
document.addEventListener("DOMContentLoaded", () => {
    const formFcm = document.getElementById("form-fcm");

    if (formFcm) {
        formFcm.addEventListener("submit", (e) => {
            e.preventDefault();

            const edad = parseInt(document.getElementById("edad").value);
            const sexo = document.getElementById("sexo").value.toLowerCase();
            const resultadoFcm = document.getElementById("resultado-fcm");

            if (isNaN(edad) || edad <= 0) {
                resultadoFcm.textContent = "Por favor, introduce una edad válida.";
                return;
            }

            // Fórmula para calcular la FCM según el sexo
            let fcm;
            if (sexo === "hombre") {
                fcm = 220 - edad;
            } else if (sexo === "mujer") {
                fcm = 226 - edad;
            } else {
                resultadoFcm.textContent = "Por favor, selecciona un sexo válido.";
                return;
            }

            // Calcular zonas de entrenamiento
            const zonas = {
                "Zona de recuperación (60%-70%)": [(fcm * 0.6).toFixed(0), (fcm * 0.7).toFixed(0)],
                "Zona aeróbica (70%-80%)": [(fcm * 0.7).toFixed(0), (fcm * 0.8).toFixed(0)],
                "Zona anaeróbica (80%-90%)": [(fcm * 0.8).toFixed(0), (fcm * 0.9).toFixed(0)],
                "Línea roja (90%-100%)": [(fcm * 0.9).toFixed(0), fcm.toFixed(0)],
            };

            // Generar el resultado
            let resultadoHTML = `<p>Tu Frecuencia Cardíaca Máxima es: <strong>${fcm}</strong> bpm.</p>`;
            resultadoHTML += "<ul>";
            for (const [zona, rango] of Object.entries(zonas)) {
                resultadoHTML += `<li>${zona}: <strong>${rango[0]} - ${rango[1]} bpm</strong></li>`;
            }
            resultadoHTML += "</ul>";

            resultadoFcm.innerHTML = resultadoHTML;
        });
    }
});