function renderClientes(clientes){
    const tbody = document.getElementById("clientes-lista");
    tbody.innerHTML = "";

    clientes.forEach((cliente, index) =>{
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.cedula}</td>
            <td>${cliente.correo}</td>
            <td>${cliente.edad}</td>
            <td>${cliente.barrio}</td>
            <td>${cliente.activo ? "Sí" : "No"}</td>
            <td>
                <button onclick="editarCliente(${index})">Editar</button>
                <button onclick="eliminarClienteUI(${index})">Eliminar</button>
            </td>
        `;

        tbody.appendChild(fila);
    });
}

function eliminarClienteUI(index) {
    eliminarCliente(index);
    renderClientes(obtenerClientes());
}

function editarCliente(index) {
    const clientes = obtenerClientes();
    const cliente = clientes[index];

    document.getElementById("nombre").value = cliente.nombre;
    document.getElementById("cedula").value = cliente.cedula;
    document.getElementById("correo").value = cliente.correo;
    document.getElementById("edad").value = cliente.edad;
    document.getElementById("barrio").value = cliente.barrio;
    document.getElementById("activo").checked = cliente.activo;
    document.getElementById("password").value = cliente.password;

    document
        .querySelector(`input[name="sexo"][value="${cliente.sexo}"]`)
        .checked = true;

        indiceEditado = index;

        document.querySelector("button[type='submit']").textContent = "Actualizar Cliente";

        document.getElementById("cedula").disabled = true;
}