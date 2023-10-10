const sql = require('mssql');
const fs = require('fs');

// Configuración de conexión a la base de datos
const config = {
    server: 'Analistatecforce97',
    authentication: {
        type: 'default',
        options: {
            userName: "usuariot",
            password: "1234"
        }
    },
    options: {
        port: 1433,
        database: 'TecForces',
        trustServerCertificate: true
    }
}

// Consulta SQL para obtener los registros de la tabla 'Productos'
const query = 'SELECT * FROM Productos';

(async () => {
  try {
    // Establecer la conexión a la base de datos
    await sql.connect(config);

    // Ejecutar la consulta SQL
    const result = await sql.query(query);

    // Cerrar la conexión a la base de datos
    await sql.close();

    // Guardar los resultados en un archivo JSON
    const productosJSON = JSON.stringify(result.recordset, null, 2);
    
    fs.writeFileSync('database/productos.json', productosJSON);

    const contenidoJSON = fs.readFileSync('database/productos.json', 'utf8');
    const registros = JSON.parse(contenidoJSON);
    const cantidadRegistros = registros.length;

    console.log('Registros de Productos exportados correctamente a productos.json');
    console.log(`Cantidad de registros en 'productos.json' ${cantidadRegistros}`);
  } catch (error) {
    console.error('Error al exportar los registros:', error);
  }
})();


