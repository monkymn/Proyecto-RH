import sql from 'mssql/msnodesqlv8'

var config = { 
  server: 'CANTON\\', 
  database: 'RH-Dev', 
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true 
  }
}

module.exports.showConnectionString = function () {
  console.log(config) 
}
 
module.exports.getCandidatos = function(select) {
   /* const config = {
    server: 'CANTON\\', 
    database: 'RH-Dev',
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true 
    }
  } */


  const pool = new sql.ConnectionPool(config)  
  
  pool.connect((err) => {
    if(!err){
      let req = pool.request()
      req.query(select, (err,result) =>{
        if(!err){
          LlenarTabla(result.recordset)
        }
        else console.log(err)
      })
    }
    else console.log(err)
  })
}


//Carga los datos en la tabla 
function LlenarTabla(recordset){
  recordset.forEach(function (item){
    let tr = document.createElement('tr')
    for (let e in item){
      let td = document.createElement('td')
      let text = document.createTextNode(item[e])
      td.appendChild(text)
      tr.appendChild(td)
    }
    document.getElementById('table').appendChild(tr)
  })
}