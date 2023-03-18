function myPastEvents() {
  fetchApi()
  .then(data => {
    
    let past_events = arrayEvents(1, data.events,data.currentDate)
    //console.log("🚀 ~ myPastEvents ~ data.currentDate:", data.currentDate)
    
    printElements(createCards(past_events, ''), "#mycontainer-cards")
    printElements(arrayCategoriesStr(data.events).map((mycategory) => createCategoryHTML(mycategory)), "#myContainerCategories")
    let textSearch = document.querySelector("#form-search")
    textSearch.addEventListener("keyup", (keyboard) => {
      if (keyboard.which === 13) {
        myFilter(past_events,"#mycontainer-cards")
      }
    })
    let btnsearch = document.querySelector("#label-icon-search")
    btnsearch.addEventListener("click", () => {
      myFilter(past_events,"#mycontainer-cards")
    })
  })
  
  .catch(error => {
    console.log("🚀 ~ error:", error)
  })
}


getEvents("upcoming")

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  printFilterEvents("upcoming","#mycontainer-cards")
})

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    printFilterEvents("upcoming","#mycontainer-cards")
  }
})