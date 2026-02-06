const form = document.getElementById("cliente-form");

document.addEventListener("DOMContentLoaded", () => {
    renderClientes(obtenerClientes());
});


function validarContraseña(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

function mostrarError(campo, mensaje) {
    const errorDiv = document.getElementById(`error-${campo}`);
    if (errorDiv) {
        errorDiv.textContent = mensaje;
    }
}

function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

let indiceEditado = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    limpiarErrores(); // Siempre al iniciar


    const clientes = obtenerClientes();

    const nombre = document.getElementById("nombre").value.trim();
    const cedula = document.getElementById("cedula").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const barrio = document.getElementById("barrio").value.trim();
    const activo = document.getElementById("activo").checked;
    const password = document.getElementById("password").value.trim();
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;


    /* Validaciones */

     if (!validarContraseña(password)) {
        mostrarError(
            "password",
            "Debe tener mínimo 8 caracteres, una mayúscula y un número"
        );
        return;
    }

    const cedulaExiste = clientes.some(
        (c, i) => c.cedula === cedula && i !== indiceEditado
    );

    if (cedulaExiste) {
        mostrarError("cedula", "Ya existe un cliente con esta cédula");
        return;
    }

    const correoExiste = clientes.some(
        (c, i) => c.correo.toLowerCase() === correo && i !== indiceEditado
    );

    if (correoExiste) {
        mostrarError("correo", "Ya existe un cliente con este correo");
        return;
    }


    /* Objeto */

    const cliente = {
        nombre,
        cedula,
        correo,
        edad,
        barrio,
        activo,
        password,
        sexo
    };


    /* crear o editar */

    if (indiceEditado === null){
        clientes.push(cliente);
    } else {
        clientes[indiceEditado] = cliente;
        indiceEditado = null;

        document.getElementById("cedula").disabled = false;
        document.querySelector("button[type='submit']").textContent = "Guardar Cliente";
    }


    guardarClientes(clientes);
    renderClientes(obtenerClientes());
    form.reset();
});
