function sortarrayEvents(typeOrder, arrayObjEvents) {
  salida=[]
  switch (typeOrder) {
    case 0://ordena por mayor a menor porcentaje de asistencia
      salida = salida.concat([...arrayObjEvents].sort((event1, event2) => ((100 * event2.assistance) / event2.capacity) - ((100 * event1.assistance) / event1.capacity)))
      //console.log("🚀 ~ mayor % asistencia:", salida)
      break
    case 1://ordena de menor a mayor porcentaje de asistencia
      salida = salida.concat([...arrayObjEvents].sort((event1, event2) => ((100 * event1.assistance) / event1.capacity) - ((100 * event2.assistance) / event2.capacity)))
      //console.log("🚀 ~ menor % asistencia:", salida)
      
      break
    case 2: //ordena de mayor a menor capacidad
      salida = salida.concat([...arrayObjEvents].sort((event1, event2) => event2.capacity - event1.capacity))
      //console.log("🚀 ~ mayo a menor capacidad", salida)
      break
    
    case 3: //ordena de mayor a menor porcentaje
      salida = salida.concat(arrayObjEvents.sort((event1, event2) => event2.percentage - event1.percentage))
      break
    default:
      console.log("stats-calc.js - sortarrayEvents - opcion DEFAULT");
      break
      
  }
  return salida
}

