function createAcard(myevent, disable) {
  let link=""
  if (disable === true) {
    link=``
  } else {
    link=`<a href="./detail.html?_id=${myevent._id}" class="btn-mas">Ver más...</a>`
  }
  return `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card text-center">
      <figure>
        <img class="img-card img-fluid mt-3" src=${myevent.image} alt=${myevent.name}>
      </figure>
      <div class="card-body">
        <h5 class="card-title">${myevent.name}</h5>
        <p class="card-text"><span>Date:</span> ${myevent.date}</p>
        <p class="card-text"><span>Description:</span> ${myevent.description}</p>
      </div>
      <div class="card-footer mycard-footer">
        <p><span>Price:</span> ${myevent.price}</p>
        ${link}
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

function createCards(arrayObjEvents,disable=false) {
  let cardEvents = []
  for (let event of arrayObjEvents) {
    cardEvents.push(createAcard(event,disable))
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
    <label class="form-check-label" for="${oneCategory}">${oneCategory}</label>
    <input class="form-check-input category" type="checkbox" value="${oneCategory}" name="category" id="${oneCategory}">
  </div>`
}

function printElements(listElementsHTML, myContainerID) {
  let mycontainer = document.querySelector(myContainerID)
  mycontainer.innerHTML=listElementsHTML.join('')
}

/*-----------------funciones de filtro-----------------*/
function noFoundEvent() {
  let noFound = [{
    image: "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
    name: "NO MATCHES",
    date: "----/--/--",
    description: "-",
    price:"-"
  }]
  return noFound
}

function captureData(typeEvent) {
  let mytext = document.querySelector("#form-search").value
  mytext=mytext.toLowerCase().trim()
  let mychecks = Array.from(document.querySelectorAll(".category:checked")).map(onecheck => onecheck.value)

  let arrayfilter = arrayEvents(typeEvent).filter(event => {
    return (
      (mychecks.length === 0 || mychecks.includes(event.category))
    ) && (
      event.name.toLowerCase().includes(mytext)
    )
  })
  let myarray = createCards(arrayfilter,'')//array de cards de eventos
  if (myarray.length > 0) {
    return myarray
  } else {
    return createCards(noFoundEvent(),true)
  }
}
