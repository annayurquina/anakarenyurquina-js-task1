async function fetchApi() {
  try {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events"
    let fetchResponse = await fetch(urlApi)
    //console.log(fetchResponse)
    let response=await fetchResponse.json()
    //console.log("🚀 ~ file: index.js:26 ~ fetchApi ~ response.events:", response.events)
    return response
    
  } catch(error) {
    console.log("ocurrio un error")
    console.log(error)
  }
}