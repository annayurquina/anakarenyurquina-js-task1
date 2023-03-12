let myquery = location.search
//console.log(myquery)

let myparams = new URLSearchParams(myquery)
//console.log("🚀 ~ myparams:", myparams)

let myIDquery = myparams.get('_id')
//console.log("🚀 ~ myIDquery:", myIDquery)

/*let objetoEventoEncontrado=data.events.find(event=>event._id==myIDquery)
console.log("🚀 ~ file: detail.js:11 ~ objetoEventoEncontrado:", objetoEventoEncontrado)*/

function createCardDetail(oneEvent) {
  //console.log(oneEvent);
  let vble = ``
  if (oneEvent.assistance) {
    vble=`<p class="card-text"><span>Assistance:</span> ${oneEvent.assistance}</p>`
  }
  if (oneEvent.estimate) {
    vble=`<p class="card-text"><span>Estimate:</span> ${oneEvent.estimate}</p>`
  }
  return `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card card-detail">
      <figure>
        <img class="card-img-top img-cover mt-3" src=${oneEvent.image} alt=${oneEvent.name}>
      </figure>
      <div class="card-body">
        <h5 class="card-title text-center">${oneEvent.name}</h5>
        <p class="card-text"><span>Description:</span> ${oneEvent.description}</p>
        <div class="d-flex justify-content-between">
          <p class="card-text"><span>Date:</span> ${oneEvent.date}</p>
          <p class="card-text"><span>Category:</span> ${oneEvent.category}</p>
          <p class="card-text"><span>Place:</span> ${oneEvent.place}</p>
        </div>
        <div class="d-flex justify-content-around">
          <p class="card-text"><span>Capacity:</span> ${oneEvent.capacity}</p>
          ${vble}
        </div>
      </div>
      <div class="card-footer">
        <p class="card-text"><span>Price:</span> ${oneEvent.price}</p>
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