/*let cardEvents = []
for (let event of data.events) {
  if (event.date<data.currentDate) {
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
          <p><span>Category:</span> ${event.category}</p>
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
}

printCards()*/
index_events=createCards(1)

printCards(index_events,"#mycontainer-cards")