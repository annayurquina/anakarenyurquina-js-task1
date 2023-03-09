index_events = createCards(arrayEvents(0),'')

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    filterIndex()
  }
})

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  filterIndex()
})

function filterIndex() {
  printElements(captureData(0), "#mycontainer-cards")
}
