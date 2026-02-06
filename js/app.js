const form = document.getElementById("cliente-form");

document.addEventListener("DOMContentLoaded", () => {
    renderClientes(obtenerClientes()); // Cargar clientes al iniciar la página
});


function validarContraseña(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // Al menos 8 caracteres, una mayúscula y un número, expresion regular para validar la contraseña
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

form.addEventListener("submit", function (e) { // Escuchar el evento submit del formulario
    e.preventDefault(); // Evitar que el formulario se envíe y recargue la página

    limpiarErrores(); // Siempre al iniciar


    const clientes = obtenerClientes(); // Obtener la lista actual de clientes para validar contra ella y luego actualizarla

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
    } // Validar la contraseña usando la función validarContraseña y mostrar un error si no cumple con los requisitos

    const cedulaExiste = clientes.some(
        (c, i) => c.cedula === cedula && i !== indiceEditado
    );// Validar que la cédula sea única entre los clientes, ignorando el cliente que se está editando

    if (cedulaExiste) {
        mostrarError("cedula", "Ya existe un cliente con esta cédula");
        return;
    }

    const correoExiste = clientes.some(
        (c, i) => c.correo.toLowerCase() === correo && i !== indiceEditado
    ); // Validar que el correo sea único entre los clientes, ignorando el cliente que se está editando 

    if (correoExiste) {
        mostrarError("correo", "Ya existe un cliente con este correo");
        return; //
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
    }; // Crear un objeto cliente con los datos del formulario, usando shorthand para asignar las propiedades con el mismo nombre que las variables


    /* crear o editar */

    if (indiceEditado === null){
        clientes.push(cliente);
    } else {
        clientes[indiceEditado] = cliente;
        indiceEditado = null;

        document.getElementById("cedula").disabled = false; // Rehabilitar el campo cédula después de editar
        document.querySelector("button[type='submit']").textContent = "Guardar Cliente";
    }// Si no se está editando, agregar el nuevo cliente a la lista; si se está editando, actualizar el cliente existente


    guardarClientes(clientes);
    renderClientes(obtenerClientes());
    form.reset();
});
