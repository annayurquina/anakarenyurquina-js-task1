index_events=createCards(1)

printElements(index_events, "#mycontainer-cards")

printElements(arrayCategoriesStr().map((mycategory) => createAcategory(mycategory)), "#myContainerCategories")

let btnsearch = document.querySelector("#icon-search")
btnsearch.addEventListener("click", () => {
  captureData()
})