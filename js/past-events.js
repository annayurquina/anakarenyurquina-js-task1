index_events=createCards(arrayEvents(1))

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

function filterIndex() {
  let btnsearch = document.querySelector("#label-icon-search")
  btnsearch.addEventListener("click", () => {
    printElements(captureData(1), "#mycontainer-cards")
  })
}

filterIndex()