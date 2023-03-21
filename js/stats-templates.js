function templateTable1(arrayRows) {
  let salida=''
  for (let myrow of arrayRows) {
    salida = salida.concat(`
      <tr>
        <td>${myrow.high_assistance.name}</td>
        <td>${myrow.low_assistance.name}</td>
        <td>${myrow.high_capacity.name}</td>
      </tr>
    `)
  }
  //console.log(salida);
  return salida
}


function templateTable2(arrayRows) {
  let salida=''
  for (let myrow of arrayRows) {
    salida = salida.concat(`
      <tr>
        <td>${myrow.category_name}</td>
        <td>${myrow.revenue}</td>
        <td>${myrow.percentage}%</td>
      </tr>
    `)
  }
  //console.log(salida);
  return salida
}
