//import sql  from 'mssql/msnodesqlv8';
import { getCandidatos } from './sql.js'

window.addEventListener('load', () => {

  var btnCandidatos = document.getElementById('btn_candidatos')
  btnCandidatos.addEventListener('click', getCandidatos)

  getCandidatos(_select)
  NavigateMenu()
//showConnectionString()
})

function NavigateMenu(){
  const menu = document.querySelectorAll('a.nav-group-item')
  for (let i = 0, length1 = menu.length; i < length1; i++) {
    menu[i].addEventListener('click', function(){
      document.querySelector('a.active').classList.remove('active')
      this.classList.add('active')
    })    
  }

}

