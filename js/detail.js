let myquery = location.search
//console.log(myquery)

let myparams = new URLSearchParams(myquery)
//console.log("🚀 ~ myparams:", myparams)

let myIDquery = myparams.get('_id')
console.log("🚀 ~ myIDquery:", myIDquery)

/*let objetoEventoEncontrado=data.events.find(event=>event._id==myIDquery)
console.log("🚀 ~ file: detail.js:11 ~ objetoEventoEncontrado:", objetoEventoEncontrado)*/

function createCardDetail(oneEvent) {
  //console.log(oneEvent);
  return `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card text-center">
      <figure>
        <img class="img-card img-fluid mt-3" src=${oneEvent.image} alt=${oneEvent.name}>
      </figure>
      <div class="card-body">
        <h5 class="card-title">${oneEvent.name}</h5>
        <p class="card-text"><span>Date:</span> ${oneEvent.date}</p>
        <p class="card-text"><span>Description:</span> ${oneEvent.description}</p>
      </div>
      <div class="mycard-footer">
        <p><span>Price:</span> ${oneEvent.price}</p>
      </div>
    </div>
  </div>
  `
}

function printDetail(containerID,id_event) {
  let container = document.querySelector(containerID)
  //console.log("🚀 ~ file: detail.js:32 ~ printDatail ~ container:", container)
  
  let eventfound = data.events.find(event => event._id == id_event)
  //console.log("🚀 ~ file: detail.js:35 ~ printDatail ~ eventfound:", eventfound)
  
  let mydetail = createCardDetail(eventfound)
  //console.log("🚀 ~ file: detail.js:38 ~ printDatail ~ mydetail:", mydetail)

  container.innerHTML = mydetail

}

printDetail("#container-detail",myIDquery)