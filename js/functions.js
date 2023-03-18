function createAcard(myevent, disable) {//myevent: es un objeto evento...disable es para habilitar o no el link de detalle
  //se deshabilita el detalle para el NOT FOUND
  let link=""
  if (disable === true) {
    link=``
  } else {
    //esto para evento en archivo local.... descomentar
    //link=`<a href="./detail.html?id=${myevent._id}" class="btn-mas">Ver más...</a>`

    //esto para evento en API
    link=`<a href="./detail.html?id=${myevent.id}" class="btn-mas">Ver más...</a>`
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
}

/*function arrayEvents(typeEvent, arrayEvents) {//devuelve array de objetos eventos filtrado
  console.log("🚀 ~ file: functions.js:30 ~ arrayEvents ~ arrayEvents:", arrayEvents)
  //typeEvent: tipo de evento (index,past,upcoming)
  //arrayEvents: array de objetos eventos
  
  let myarray=[]
  for (let event of arrayEvents) {
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
}*/

function arrayEvents(typeEvent, arrayEvents, currentDate=data.currentDate) {//devuelve array de objetos eventos filtrado
  //typeEvent: tipo de evento (index,past,upcoming)
  //arrayEvents: array de objetos eventos
  
  let myarray=[]
  for (let event of arrayEvents) {
    switch (typeEvent) {
      case 0://todos
        myarray.push(event)
        break
      case 1://pasados
        if (event.date < currentDate) {
          myarray.push(event)
        }
        break
      case 2://futuro
        if (event.date >= currentDate) {
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


function createCards(arrayObjEvents, disable = false) {//crea array de eventos en HTML para el DOM
  //arrayObjEvents: array de objetos Eventos
  //disable: es si el link de detalle se muestra o no, por defecto se muestra
  let cardEvents = []
  for (let event of arrayObjEvents) {
    cardEvents.push(createAcard(event,disable))
  }
  return cardEvents
}

function arrayCategoriesStr(arrayObjEvents) {//crea array de string, donde estan las categorías de la lista de eventos
  //arrayObjEvents: es la lista de objetos eventos
  let categories = []
  arrayObjEvents.forEach(event => {
    if (!categories.includes(event.category)) {
      categories.push(event.category)
    }
  })
  return categories;
}

function createCategoryHTML(oneCategory) {//crea una categoría checkbox para incrustar en el DOM
  //oneCategory: es el string, con el nombre de la categoria
  return `
  <div id="check-boxes" class="form-check m-2">
    <label class="form-check-label" for="${oneCategory}">${oneCategory}</label>
    <input class="form-check-input category" type="checkbox" value="${oneCategory}" name="category" id="${oneCategory}">
  </div>`
}

function printElements(listElementsHTML, myContainerID) {//incrusta los html en el DOM
  let mycontainer = document.querySelector(myContainerID)
  mycontainer.innerHTML=listElementsHTML.join('')
}






/*-----------------funciones de filtro-----------------*/


function noFoundEvent() {//objeto para card de evento no encontrado
  let noFound = [{
    image: "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
    name: "NO MATCHES",
    date: "----/--/--",
    description: "-",
    price:"-"
  }]
  return noFound
}

function categoriesChecked() {
  return Array.from(document.querySelectorAll(".category:checked")).map(onecheck => onecheck.value)
}

function captureFilteredEvents(arrayObjEvents) {//devuelve lista de eventos en formato para el html
  
  let mytext = document.querySelector("#form-search").value
  mytext = mytext.toLowerCase().trim()//convierte texto de search en minusculas y quita espacios
  /*let mychecks = Array.from(document.querySelectorAll(".category:checked")).map(onecheck => onecheck.value)//crea array de los check activados*/
  let mychecks = categoriesChecked()//crea array de los check activados

  let arrayfilter = arrayObjEvents.filter(event => {
    return (
      (mychecks.length === 0 || mychecks.includes(event.category))
    ) && (
      event.name.toLowerCase().includes(mytext)
    )
  })//crea array de obj eventos de las categorías elegidas
  let myarray = createCards(arrayfilter,'')//array de cards de eventos
  if (myarray.length > 0) {
    return myarray
  } else {
    return createCards(noFoundEvent(),true)
  }
}

function myFilter(arrayObjEvents,containerID) {
  printElements(captureFilteredEvents(arrayObjEvents), containerID)
}