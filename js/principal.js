var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i <= pacientes.length ; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso < 0 || peso > 150) {
        console.log("Peso inválido.");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido !";
        paciente.classList.add("paciente-invalido");
        /* paciente.style.backgroundColor = "lightcoral"; */
    }

    if(altura < 0 || altura >= 3.0) {
        console.log("Altura inválida.");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida !";
        paciente.classList.add("paciente-invalido");
        /* paciente.style.backgroundColor = "lightcoral"; */
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}



console.log(peso);
console.log(altura);
console.log(imc);

