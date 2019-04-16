const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./dataBase.db', (err) => {
    if(err) {
        return console.log(err.message);
    }
    console.log('Connected to the in-memory SQLite database');
    console.log('=================================================');
});

const createTable = () => {
    console.log("creando base de datos paara tabla empleado");
    db.run("CREATE TABLE IF NOT EXISTS empleado(id INTEGER PRIMARY KEY AUTOINCREMENT,ci INTEGER,name TEXT,type TEXT)");
};

const deleteTable = () => {
    console.log("Borrando base de datos paara tabla empleado");
    db.run("DROP TABLE empleado", (err) => {
        if(err) {
            console.log(err);
        }
    });
};

const insertEmployee = (empleado) =>{
    console.log("Insertando datos");
    db.run('INSERT INTO empleado (ci, name, type) VALUES (?,?,?)', empleado);
};

const readAllEmployees = () => {
    console.log("Leer datos de empleado");
    db.all("SELECT rowid AS id, name, type FROM empleado", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name + ": " + row.type);
        });
    });
};

const findEmployee = (employeeId) => {
    console.log("Leer datos de empleado");
    db.all("SELECT * FROM empleado WHERE id=?", employeeId, function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.ci + ": " + row.name + ": " + row.type);
        });
    });
};

const updateEmployee = (employee) => {
    console.log("Actualizando datos de empleado");
    db.run('UPDATE empleado SET name = ?, type = ? WHERE ci = ?;', [employee[1], employee[2], employee[0]], (err, rows) => {
        if(err) {
            return console.log(err.message);
        }
        console.log(`Row(s) updated: ${this.changes}`);
    });
};

const deleteEmployee = (employeeId) => {
    console.log("Eliminar datos de empleado");
    db.run(`DELETE FROM empleado WHERE ci=?`, employeeId, function(err) {
        if(err) {
            return console.log(err.message);
        }
        console.log(`Row(s) deleted: ${this.changes}`);
    });
};

//createTable();

//readAllEmployees();

//findEmployee(2);

//insertEmployee(["1","Estanis", "Fijo"]);
//insertEmployee(["2","Jose Luis", "Horas"]);

deleteEmployee(2);

//updateEmployee(["2","Samuel", "Comision"]);

db.close((err) => {
    if(err) {
        return console.log('err.message');
    }
    console.log('=================================================');
    console.log('Close the database connection');
});
