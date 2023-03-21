function templateTable1(arrayRows) {
  let salida=''
  for (let myrow of arrayRows) {
    let porcentaje_high = (myrow.high_assistance.assistance * 100) / myrow.high_assistance.capacity
    let porcentaje_low = (myrow.low_assistance.assistance * 100) / myrow.low_assistance.capacity 
    salida = salida.concat(`
      <tr>
        <td>${myrow.high_assistance.name}</td>
        <td>${porcentaje_high.toFixed(2)}%</td>
        <td>${myrow.low_assistance.name}</td>
        <td>${porcentaje_low.toFixed(2)}%</td>
        <td>${myrow.high_capacity.name}</td>
        <td>${myrow.high_capacity.capacity}</td>
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
