class Hotel {
  hotelName;
  numberOfNights;
  address;
  image;
  constructor(name, nightNumber, location, src) {
    this.hotelName = name;
    this.numberOfNights = nightNumber;
    this.address = location;
    this.image = src;
  }
  cardFunction() {
    document.body.innerHTML += `<div id=hotel-${this.hotelName} class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="Hotel Pic">
  <div class="card-body">
    <h5 class="card-title">${this.hotelName}</h5>
    <p class="card-text">${this.address}</p>
    <input id=nights-${this.hotelName} type="number">
    <button type="button" id=button-${this.hotelName}-check class="btn btn-primary">Submit</button>
    <button type="button" id=reservation-${this.hotelName} class="btn btn-success">I will reserve</button>
  </div>
</div>`;
    let z = document.getElementById(`reservation-${this.hotelName}`);
    z.style.display = "none";
    let a = document.getElementById(`button-${this.hotelName}-check`);
    a.addEventListener("click", this.showAvailability);
  }
  showAvailability() {
    let u = document.getElementById(`nights-${this.hotelName}`);
    let z = parseInt(u.value);
    if (z <= this.numberOfNights) {
      let z2 = document.getElementById(`reservation-${this.hotelName}`);
      z2.style.display = "initial";
    } else {
      alert(`Sorry, no available nights for ${this.hotelName}`);
    }
  }
}
var sunset = new Hotel(
  "BeachIn",
  14,
  "Sunset Drive 108, 1200 California",
  "https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);
console.log(sunset);
sunset.cardFunction();
