async function tableStatistics(numRows) {//numRows: cantidad de filas MENOS 1 que quiero que tenga la tabla
  //fetchApiGET --->get-data-api.js
  let data = await fetchApiGET("past")

  //sortarrayEvents --->stats-calc.js
  let highest = sortarrayEvents(0, data.events).slice(0,numRows)
  let lowest = sortarrayEvents(1, data.events).slice(0, numRows)
  let capacity=sortarrayEvents(2, data.events).slice(0, numRows)
  let listRows = []
  for (let i = 0; i < numRows; i++){
    let myrow = {
      high_assistance: highest[i],/*columna 1*/
      low_assistance: lowest[i],/*columna 2*/
      high_capacity: capacity[i]/*columna 3*/
    }
    listRows.push(myrow)
  }
  return listRows
}

function eventsUpcomingXcategory(arrayEvents, arrayCategories) {
  //crea un objeto donde cada atributo tiene el nombre de una categoria, y cada categoria tiene un array de eventos
  let pepe = new Object()
  
  for (let i=0; i < arrayCategories.length;  i++) {
    pepe[arrayCategories[i]] = arrayEvents.filter(event => event.category === arrayCategories[i])
  }
  return pepe
}

async function averageTable(timeEvent="") {
  let dataUpcoming = await fetchApiGET(timeEvent)//obtengo los eventos segun pasado o futuro
  
  let mycategories = arrayCategoriesStr(dataUpcoming.events)//creo un array de categorias para saber cuantas y cuales hay por evento pasado o futuro
  
  let objLista = eventsUpcomingXcategory(dataUpcoming.events, mycategories)//creo un objeto, que contiene todas las categorias con sus eventos
  
  let listAvegareTable = []//lista de objetos, donde cada atributo del objeto es una columna de la tabla 2 y 3

  for (let categ of mycategories) {
    let myrow=new Object()
    myrow.category_name=categ//columna 1: nombre de categoria
    myrow.revenue = 0//columna 2 total recaudado
    /*let asistencia = 0
    let capacidad = 0*/
    myrow.percentage = 0//columna 3 porcentaje de asistencia
    let valor=""
    if (timeEvent === "upcoming") {
      valor = "estimate"      
    } else {
      if (timeEvent==="past") {
        valor="assistance"
      }
    }
    

    myrow.revenue = objLista[categ].reduce(
      (acum, event) => {
        let gananciaXevento = event.price * event[valor]
        return acum+gananciaXevento
      }, 0//valor iniciar de acum
    )

    let asistencia = objLista[categ].reduce(
      (acum, event) => {
        return acum + event[valor]
      }, 0
    )

    let capacidad = objLista[categ].reduce(
      (acum, event) => {
        return acum + event.capacity
      },0
    )
    /*for (let listEvent of objLista[categ]) {
      myrow.revenue = myrow.revenue + (listEvent.price * listEvent[valor])//recaudación
      asistencia = asistencia + listEvent[valor]//total de asistencia/estimado x categoria
      capacidad = capacidad + listEvent.capacity//total de capacidad x categoria
    }*/
    
    let porcentaje = (100 * asistencia) / capacidad //porcentaje de asistencia
    myrow.percentage=Math.round(porcentaje)//redondeando y guardo en el atributo
    listAvegareTable.push(myrow)//guardo el objeto en el array
  }
  return listAvegareTable
}

async function stats_event() {
  tableStatistics(4)
    .then((datos) => {
      //console.log("mis datos:", datos)
      let tabla1 = document.querySelector("#table-statistics")
      //let contenido=
      tabla1.innerHTML = templateTable1(datos)
      
    })
    .catch((error) => { 
      console.log("stats_event - tableStatistics ----hay error")
      console.log(error)
    })
  averageTable("upcoming")
    .then((listCategories) => {
      //console.log("🚀 ~ file: stats-api.js:87 ~ .then ~ listCategories:", listCategories)
      
      let tabla2 = document.querySelector("#table-statistics-upcoming")
      tabla2.innerHTML=templateTable2(sortarrayEvents(3,listCategories))
    })
    .catch((error) => {
      console.log("error en averageTable-UPCOMING");
    })
  
  averageTable("past")
    .then((listCategories) => {
      let tabla2 = document.querySelector("#table-statistics-past")
      tabla2.innerHTML=templateTable2(sortarrayEvents(3,listCategories))
    })
    .catch((error) => {
      console.log("error en averageTable-UPCOMING");
    })
}

stats_event()