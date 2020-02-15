var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length ; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        console.log("Peso inválido.");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido !";
        paciente.classList.add("paciente-invalido");
        /* paciente.style.backgroundColor = "lightcoral"; */
    }

    if(!alturaEhValida) {
        console.log("Altura inválida.");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida !";
        paciente.classList.add("paciente-invalido");
        /* paciente.style.backgroundColor = "lightcoral"; */
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 150) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





