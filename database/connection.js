import mysql2 from 'mysql2';




const connection = () => {

    let conn = mysql2.createConnection({
        host: 'bq3ha7nmwl5ekedpukvn-mysql.services.clever-cloud.com',
        user: 'ut32y3tgybtgwqey',
        password: 'ufkHkM8OcluNTzsd7fsB',
        database: 'bq3ha7nmwl5ekedpukvn',
    });
    conn.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected to database ');
    });
    return conn
}





export default connection