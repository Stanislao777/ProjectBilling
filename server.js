const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./dataBase.db');

const createTable = () => {
    console.log("creando base de datos paara tabla empleado");
    db.run("CREATE TABLE IF NOT EXISTS empleado(id INTEGER PRIMARY KEY AUTOINCREMENT, ci INTEGER,name TEXT, calcularSalario TEXT)",  insertData);
}

const insertData = () =>{
    console.log("Insertar datos")
    db.run('INSERT INTO empleado (ci, name, calcularSalario) VALUES (?,?,?)', ["123","felipe", 1232]);
}

read = () => {
    console.log("Leer datos de empleado");
    db.all("SELECT rowid AS id, name FROM data", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name + ": " + row.calcularSalario);
        });
    });
}

createTable();

db.close();
