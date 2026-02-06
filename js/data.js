const STORAGE_KEY = "clientes";

function obtenerClientes() {
    const datos = localStorage.getItem(STORAGE_KEY);
    return datos ? JSON.parse(datos) : [];
}

function guardarClientes(clientes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
}

function agregarCliente(cliente) {
    const clientes = obtenerClientes();
    clientes.push(cliente);
    guardarClientes(clientes);
}

function eliminarCliente(index) {
    const clientes = obtenerClientes();
    clientes.splice(index, 1);
    guardarClientes(clientes);
}