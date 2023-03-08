let cardEvents = []
for (let event of data.events) {
  let card = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card text-center">
        <figure>
          <img class="img-card img-fluid mt-3" src=${event.image} alt=${event.name}>
        </figure>
        <div>
          <h3>${event.name}</h3>
          <p><span>Date:</span> ${event.date}</p>
          <h5><span>Description:</span> ${event.description}</h5>
        </div>
        <div class="mycard-footer">
          <p><span>Price:</span> ${event.price}</p>
          <a href="./detail.html" class="btn-mas">Ver más...</a>
        </div>
      </div>
    </div>
  `
  console.log(card)
  cardEvents.push(card)
}

function printCards() {
  let mycontainer = document.querySelector("#mycontainer-cards")
  mycontainer.innerHTML=cardEvents.join('')
}

printCards()