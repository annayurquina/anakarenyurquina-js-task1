function createAcard(myevent) {
  return `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card text-center">
      <figure>
        <img class="img-card img-fluid mt-3" src=${myevent.image} alt=${myevent.name}>
      </figure>
      <div>
        <h3>${myevent.name}</h3>
        <p><span>Date:</span> ${myevent.date}</p>
        <h5><span>Description:</span> ${myevent.description}</h5>
      </div>
      <div class="mycard-footer">
        <p><span>Price:</span> ${myevent.price}</p>
        <a href="./detail.html" class="btn-mas">Ver más...</a>
      </div>
    </div>
  </div>
  `
  //console.log(card)
  //return card
}

function createCards(typeEvent = 0) {
  let cardEvents = []
  for (let event of data.events) {
    switch (typeEvent) {
      case 0: cardEvents.push(createAcard(event))
        break
      case 1: //pasado
        if (event.date < data.currentDate) {
          cardEvents.push(createAcard(event))
        }
        break
      case 2: //futuro
        if (event.date >= data.currentDate) {
          cardEvents.push(createAcard(event))
        }
        break
      default: console.log("********** NO DEBERIA VER ESTO **********")
        break
    }
  }
  return cardEvents
}

function arrayCategoriesStr() {
  let categories = []
  data.events.forEach(event => {
    if (!categories.includes(event.category)) {
      categories.push(event.category)
    }
  })
  return categories;
}

function createAcategory(oneCategory) {
  return `
  <div class="text-center form-check">
    <label class="form-ckeck-label" for="${oneCategory}">${oneCategory}</label>
    <input class="form-check-input category" type="checkbox" value="${oneCategory}" name="category" id="${oneCategory}">
  </div>`
}

function printElements(listElements,myContainerID) {
  let mycontainer = document.querySelector(myContainerID)
  mycontainer.innerHTML=listElements.join('')
}

/*-----------------funciones de filtro-----------------*/

function captureData() {
  let mytext = document.querySelector("#form-search").value
  let mychecks = document.querySelectorAll(".category:checked")
  console.log(mytext)
  console.log(mychecks)

}