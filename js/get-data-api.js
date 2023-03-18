async function getApi(myurl) {
  try {
    //console.log("🚀 ~ getApi ~ myurl:", myurl)
    let fetchResponse = await fetch(myurl)
    let response = await fetchResponse.json()
    //console.log("🚀 ~ getApi ~ response:", response)
    
    return response
  } catch (error) {
    console.log("🚀 ~ file: get-data-api.js:10 ~ getApi ~ error.message:", error.message)
  }
}

async function fetchApi() {
  try {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events"
    let fetchResponse = await fetch(urlApi)
    let response=await fetchResponse.json()
    return response
    
  } catch(error) {
    console.log("ocurrio un error")
    console.log(error.message)
  }
}

async function fetchApiGET(timeEvent) {
  try {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time="+timeEvent
    return await getApi(urlApi)
    
  } catch(error) {
    console.log("ocurrio un error")
    console.log(error)
  }
}

async function busqueda(mycategory, name, timeEvent) {
  let salida = []
  if (timeEvent.length > 1) {
    timeEvent = "?time=" + timeEvent + "&"    
  } else {
    timeEvent = "?"
  }
  let category = "category=" + mycategory
  let urlApi="https://api-amazingevents.onrender.com/api/amazing-events" + timeEvent + category + "&name=" + name
  
  let data = await getApi(urlApi)
  salida = salida.concat(data.events)
  
  return salida
}

async function eventsXcategoryArray(arrayStrCategories,name, timeEvent = "") {

  let salida= []
  
  if (arrayStrCategories.length > 0) {
    for (let mycategory of arrayStrCategories) {
      try {
        let aux = await busqueda(mycategory, name, timeEvent)
        salida=salida.concat(aux)
        if (arrayStrCategories.indexOf(mycategory) == (arrayStrCategories.length - 1)) {
          if (salida.length==0) {
            salida=noFoundEvent()
          }
          return salida
        }
      }
      catch (error) {
        console.log("🚀 ~ file: get-data-api.js:76 ~ eventsXcategoryArray ~ error:", error)
        console.log(error.message)
      }
    }
  } else {
    try {
      salida = await busqueda("", name, timeEvent)
      
      if (salida.length == 0) {
        salida = noFoundEvent()
      }
      return salida
    }
    catch (error) {
      console.log("🚀 ~ file: get-data-api.js:128 ~ eventsXcategoryArray ~ error:", error)
    }
  }
}

