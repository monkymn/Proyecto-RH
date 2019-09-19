'use strict'
import { config } from './sql'
import sql from 'mssql/msnodesqlv8'


let selectCandidatos = 'SELECT Nombre, ApellidoPaterno, ApellidoMaterno, FechaAlta, IdVacante, Estatus FROM Candidatos'

const pool = new sql.ConnectionPool(config)

module.exports.GetCandidatos = function () {
  pool.connect((err) => {
    if (!err) {
      let req = pool.request()
      req.query(selectCandidatos, (err, result) => {
        if(err) {
          console.log(err);
        }
        else {
          return result.recordset
        }
      })
    }

  })
}
