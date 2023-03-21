function sortarrayEvents(typeOrder, arrayObjEvents) {
  salida=[]
  switch (typeOrder) {
    case 0://ordena por mayor a menor asistencia
      salida = salida.concat([...arrayObjEvents].sort((event1, event2) => event2.assistance - event1.assistance))
      //console.log("🚀 ~ file: stats-api.js:16 ~ sortarrayEvents ~ salida:", salida)
      break
    case 1://ordena de menor a mayor asistencia
      salida = salida.concat([...arrayObjEvents].sort((event1,event2)=>event1.assistance - event2.assistance))
      //console.log("🚀 ~ file: stats-calc.js:32 ~ sortarrayEvents ~ salida:", salida)
      break
    case 2: //ordena de mayor a menor capacidad
      salida=salida.concat([...arrayObjEvents].sort((event1, event2) => event2.capacity - event1.capacity))
      break
    
    case 3: //ordena de mayor a menor porcentanje
      salida = salida.concat(arrayObjEvents.sort((event1, event2) => event2.percentage - event1.percentage))
      break
    default:
      console.log("stats-calc.js - sortarrayEvents - opcion DEFAULT");
      break
      
  }
  return salida
}

