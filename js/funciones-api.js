function getEvents(timeEvent = "") {
  //console.log("🚀 ~ file: funciones-api.js:2 ~ getEvents ~ timeEvent:", timeEvent)
  
  fetchApiGET(timeEvent)
    .then(data => {
      //console.log(data)
      printElements(createCards(arrayEvents(0, data.events,''), ''), "#mycontainer-cards")
      printElements(arrayCategoriesStr(data.events).map((mycategory) => createCategoryHTML(mycategory)), "#myContainerCategories")
    })
    .catch(error => {
      console.log("🚀 ~ file: funciones-api.js:8 ~ getPastEvents ~ error:", error)
    })
}

function printFilterEvents(timeEvent="",mycontainerID) {
  let listCheckboxes = categoriesChecked()
  let mytext=document.querySelector("#form-search").value
  mytext = mytext.toLowerCase().trim()//convierte texto de search en minusculas y quita espacios
  eventsXcategoryArray(listCheckboxes, mytext, timeEvent)
  .then(myevents => {
    //console.log("asddfvdfb");
    printElements(createCards(myevents,''),mycontainerID)
    })
    .catch(error=>{
    console.log("printFilterEvents: ocurrió un error")
    console.log(error)
  })
}
