getEvents("past")

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  printFilterEvents("past","#mycontainer-cards")
})

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    printFilterEvents("past","#mycontainer-cards")
  }
})