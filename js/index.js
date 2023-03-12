index_events = arrayEvents(0, data.events)

printElements(createCards(index_events, ''), "#mycontainer-cards")

printElements(arrayCategoriesStr(data.events).map((mycategory) => createCategoryHTML(mycategory)), "#myContainerCategories")

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    myFilter(index_events,"#mycontainer-cards")
  }
})

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  myFilter(index_events,"#mycontainer-cards")
})
