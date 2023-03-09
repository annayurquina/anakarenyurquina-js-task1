index_events=createCards(arrayEvents(1))

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    filterPastEvents()
  }
})

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  filterPastEvents()
})

function filterPastEvents() {
  printElements(captureData(1), "#mycontainer-cards")
}