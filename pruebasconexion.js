const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const config = {
    server: 'ANALISTATECFORC',
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


function executeStatement(prdw){
    var valor = 0;
    const connection = new Connection(config);

    connection.connect();
    connection.on('connect', (err)=>{
        if(err){ 
            console.log("Error al conectarse a la base de datos");
            throw err; 
        }
        else{ 
            const request = new Request("Select * from Compras where Productos = " + prdw, (err, rowCont)=>{
                if(err){ 
                    throw err;
                }
                connection.close();
            });
            request.on('row', (columns)=>{
                valor = Number(columns[1].value);
                console.log(valor);
            });
            connection.execSql(request);
        };
    });
};

                
var prd = "'Bolsa Ref Tocino Koba'";
var valor2 = executeStatement(prd)
console.log(valor2);