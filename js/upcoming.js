index_events = createCards(arrayEvents(2))

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    filterUpcoming()
  }
})

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  filterUpcoming()
})

function filterUpcoming() {
  printElements(captureData(2), "#mycontainer-cards")
}