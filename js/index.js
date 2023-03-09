index_events = createCards(arrayEvents(0),'')

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

function filterIndex() {
  let btnsearch = document.querySelector("#label-icon-search")
  btnsearch.addEventListener("click", () => {
    printElements(captureData(0), "#mycontainer-cards")
  })
}

filterIndex()