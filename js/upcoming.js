index_events = createCards(2,arrayEvents(2))

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  printElements(captureData(2), "#mycontainer-cards")
})