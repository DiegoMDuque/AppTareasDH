const fs = require('fs')
const tareas = require('./tareas.json')

function crearTarea(tarea) {
    let tareas = leerJSON()
    tareas.push(tarea)
    escribirJSON(tareas)
}

function filtrarPorEstado(estado) {
    const tareas = leerJSON()
    const tareasPorEstado = tareas.filter(tarea => tarea.estado === estado)
    return tareasPorEstado
}

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}

function leerJSON() {
    return tareas
}

function escribirJSON(tareas) {
    const tareasJSON = JSON.stringify(tareas, null, 4)
    fs.writeFileSync('./tareas.json', tareasJSON)
}

module.exports = { archivoTareas, crearTarea, filtrarPorEstado }