getEvents("upcoming")

let btnsearch = document.querySelector("#label-icon-search")
btnsearch.addEventListener("click", () => {
  printFilterEvents("upcoming","#mycontainer-cards")
})

let textSearch = document.querySelector("#form-search")
textSearch.addEventListener("keyup", (keyboard) => {
  if (keyboard.which === 13) {
    printFilterEvents("upcoming","#mycontainer-cards")
  }
})