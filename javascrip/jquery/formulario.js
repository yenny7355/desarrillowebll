/*
todo con jquery
realizar un formulario de registro de estusiandes
con los DATOS
ci-entero
nombre-> string
fecha -> date
dericcion ->string
registrar en el array 
listado
*/



$(document).ready(function(){
    var estudiantes = []; // Array para almacenar los datos de los estudiantes
    
    $('#registroForm').submit(function(event){
        event.preventDefault(); // Evitar que el formulario se envíe
        
        // Obtener los valores del formulario
        var ci = $('#ci').val();
        var nombre = $('#nombre').val();
        var fecha = $('#fecha').val();
        var direccion = $('#direccion').val();
        
        // Crear un objeto con los datos del estudiante
        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };
        
        // Agregar el estudiante al array
        estudiantes.push(estudiante);
        
        // Limpiar el formulario
        $('#registroForm')[0].reset();
    });
    
    $('#listarBtn').click(function(){
        mostrarListado();
    });
    
    $('#imprimirBtn').click(function(){
        window.print(); // Imprimir la página
    });
    
    function mostrarListado() {
        $('#listaEstudiantes').empty(); // Limpiar el contenedor del listado
        
        // Recorrer el array de estudiantes y mostrar cada uno en la tabla
        estudiantes.forEach(function(estudiante){
            var row = '<tr>';
            row += '<td>' + estudiante.ci + '</td>';
            row += '<td>' + estudiante.nombre + '</td>';
            row += '<td>' + estudiante.fecha + '</td>';
            row += '<td>' + estudiante.direccion + '</td>';
            row += '</tr>';
            
            $('#listaEstudiantes').append(row);
        });
        
        // Mostrar la tabla
        $('#listado table').show();
    }
});
