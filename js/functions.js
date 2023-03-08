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

function arrayEvents(typeEvent) {
  let myarray=[]
  for (let event of data.events) {
    switch (typeEvent) {
      case 0://todos
        myarray.push(event)
        break
      case 1://pasados
        if (event.date < data.currentDate) {
          myarray.push(event)
        }
        break
      case 2://futuro
        if (event.date >= data.currentDate) {
          myarray.push(event)
        }
        break
      default:
        console.log("*********************No deberia ver este mensaje*********************")
        break
    }
  }
  return myarray
}

function createCards(typeEvent,arrayObjEvents) {
  let cardEvents = []
  
  for (let event of arrayObjEvents) {
    cardEvents.push(createAcard(event))
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

function printElements(listElementsHTML, myContainerID) {
  let mycontainer = document.querySelector(myContainerID)
  mycontainer.innerHTML=listElementsHTML.join('')
}

/*-----------------funciones de filtro-----------------*/

function captureData(typeEvent) {
  let mytext = document.querySelector("#form-search").value
  let mychecks = Array.from(document.querySelectorAll(".category:checked")).map(onecheck=>onecheck.value)
  /*console.log(mytext)
  console.log("lista checks: ")
  console.log(mychecks)
  let data_on_filter = {
    text_on_filter: mytext,
    checks_on_filter: mychecks.map(onecheck => onecheck.value)
  }
  console.log(data_on_filter)*/
  /*let arrayofevents=arrayEvents(typeEvent)*/
  let arrayfilter = arrayEvents(typeEvent).filter(event => {
    return (
      (mychecks.length === 0 || mychecks.includes(event.category))
    ) && (
      event.name.includes(mytext)
    )
  })

  let myarray=createCards(typeEvent,arrayfilter)//array de cards de eventos

  return myarray
}