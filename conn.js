const mysql = require('mysql');

const config = {
	host: 'wm1703.com',
	user: 'c21_wm1703',
	password: '8CJQbkdHOD47C1L',
	database: 'c21_wm1703'
};

//const pool = mysql.createPool(config);

const conexion = mysql.createConnection(config);

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

module.exports = conexion;