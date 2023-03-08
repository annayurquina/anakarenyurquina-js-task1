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

function printCards(cardEvents,myContainerID) {
  let mycontainer = document.querySelector(myContainerID)
  mycontainer.innerHTML=cardEvents.join('')
}

let categories = []
data.events.forEach(event => {
  if (!categories.includes(event.category)) {
    categories.push(event.category)
  }
})

function createAcategory(oneCategory) {
  return `
  <div class="text-center form-check flex-fill">
    <label for="${oneCategory}" class="form-ckeck-label">${oneCategory}</label>
    <input type="checkbox" class="form-checkinput" value="category" id="${oneCategory}">
  </div>`
}


function printCategories(myContainerID) {
  let templateCategories = categories.map((mycategory) => createAcategory(mycategory))
  let mycontainer = document.querySelector(myContainerID)
  mycontainer.innerHTML=templateCategories.join('')
}
