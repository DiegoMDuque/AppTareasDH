const { archivoTareas, crearTarea, filtrarPorEstado } = require("../AppTareas/funcionesDeTareas");

const oden = process.argv[2]
const titulo = process.argv[3]

switch (oden) {
    case "listar":
        let tareas = archivoTareas.leer();

        tareas.forEach((tarea, index) => {
            console.log(index + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;

    case "crear":
        const tarea = {
            titulo: titulo,
            estado: "terminada",
        }
        crearTarea(tarea)
        break;

    case "filtrar":
        let estado = titulo
        let filtrados = filtrarPorEstado(estado)
        filtrados.forEach(element => {
            console.log(element)
        });
        break;

    case undefined:
        console.log('Debe darme una orden -> Listar, Crear o Filtrar');
        break;

    default:
        console.log('Esa no es una orden válida -> Listar, Crear o Filtrar');
        break;
}