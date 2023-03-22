function templateTable1(arrayRows) {
  let salida=''
  for (let myrow of arrayRows) {
    let porcentaje_high = (myrow.high_assistance.assistance * 100) / myrow.high_assistance.capacity
    let porcentaje_low = (myrow.low_assistance.assistance * 100) / myrow.low_assistance.capacity 
    salida = salida.concat(`
      <tr>
        <td class="table-light border-secondary">${myrow.high_assistance.name}</td>
        <td class="table-light border-secondary">${porcentaje_high.toFixed(2)}%</td>
        <td class="table-light border-secondary">${myrow.low_assistance.name}</td>
        <td class="table-light border-secondary">${porcentaje_low.toFixed(2)}%</td>
        <td class="table-light border-secondary">${myrow.high_capacity.name}</td>
        <td class="table-light border-secondary">${myrow.high_capacity.capacity}</td>
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
      <tr class="table-light border-secondary">
        <td>${myrow.category_name}</td>
        <td>${myrow.revenue}</td>
        <td>${myrow.percentage}%</td>
      </tr>
    `)
  }
  //console.log(salida);
  return salida
}
