class Hotel {
  constructor(hotelName, numberOfNights, address, image) {
    this.hotelName = hotelName;
    this.numberOfNights = numberOfNights;
    this.address = address;
    this.image = image;
  }
  showAvailability() {
    console.log(this.hotelName);
    // let u = parseInt(document.getElementsByClassName("night-number")[0].value);
    // let k = this.numberOfNights;
    // if (u <= k) {
    //   let z2 = document.getElementsByClassName("hotel-reserve")[0];
    //   z2.style.display = "initial";
    // } else {
    //   console.log("Sorry, no available nights for " + this.hotelName);
    // }
  }
  cardFunction() {
    document.body.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="Hotel Pic">
  <div class="card-body">
    <h5 class="card-title">${this.hotelName}</h5>
    <p class="card-text">${this.address}</p>
    <input class=night-number type="number">
    <button type="button" class="btn btn-primary night-check">Submit</button>
    <button type="button" class="btn btn-success hotel-reserve">I will reserve</button>
  </div>
</div>`;
    let z = document.getElementsByClassName("hotel-reserve")[0];
    z.style.display = "none";
    let a = document.getElementsByClassName("night-check")[0];
    a.addEventListener("click", this.showAvailability);
  }
}
var sunset = new Hotel(
  "BeachIn",
  14,
  "Sunset Drive 108, 1200 California",
  "https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);
sunset.cardFunction();
console.log(typeof sunset);
