function myUpcoming() {
  fetchApi()
  .then(data => {
    //console.log(data.events)
    upcoming_events = arrayEvents(2, data.events, data.currentDate)
    
    printElements(createCards(upcoming_events, ''), "#mycontainer-cards")
    printElements(arrayCategoriesStr(data.events).map((mycategory) => createCategoryHTML(mycategory)), "#myContainerCategories")
    let textSearch = document.querySelector("#form-search")
    textSearch.addEventListener("keyup", (keyboard) => {
      if (keyboard.which === 13) {
        myFilter(upcoming_events,"#mycontainer-cards")
      }
    })
    let btnsearch = document.querySelector("#label-icon-search")
    btnsearch.addEventListener("click", () => {
      myFilter(upcoming_events,"#mycontainer-cards")
    })
  })

    .catch(error => {
    console.log("🚀 ~ error:", error)
  })
}

myUpcoming()