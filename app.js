var locations = [];

function CookieStand(storeLocation, minCustomer, maxCustomer, avgCookiesPer) {
  this.storeLocation = storeLocation;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPer = avgCookiesPer;
  this.totalCookies = [];
  this.total = 0;
  locations.push(this);

  this.customersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  }

  this.cookiesPerHour = function() {
    for (var i = 0; i < 8; i++){
      this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
      this.total += this.totalCookies[i];
    }
  }
  this.cookiesPerHour();

  this.display = function() {
      var tbl = document.getElementById("table");
      var storeLocation = document.createElement('tr');
      var th = document.createElement('th');
      th.textContent = this.storeLocation;
      storeLocation.appendChild(th);

      for (var i = 0; i < 9; i++) {
        var td = document.createElement('td');
        td.textContent = this.totalCookies[i];
        storeLocation.appendChild(td);
  }
  var endTotal = document.createElement('td');
  td.textContent = this.total;
  storeLocation.appendChild(td);

  tbl.appendChild(storeLocation);
  document.body.appendChild(tbl);

  }
};

var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("Seatac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand("Bellevue Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);

function displayAllLocations() {
for (var i = 0; i < locations.length; i++) {
  locations[i].display();
  }
}

displayAllLocations();

//Handles submission of new cookie stand

var newStandForm = document.getElementById("new-cookie-stand");


var handleNewStand = function(event) {
  event.preventDefault();

  if (!event.target.standname.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value){
    return alert("You must fill in all the fields!");
  }

var standName = event.target.standname.value;
console.log(standName);
var min = event.target.min.value;
console.log(min);
var max = event.target.max.value;
console.log(max);
var avg = Number(event.target.avg.value);
console.log(avg);

var newStand = new CookieStand(standName, min, max, avg);

event.target.standname.value = null;
event.target.min.value = null;
event.target.max.value = null;
event.target.avg.value = null;

locations.push(newStand);
console.log(locations);

newStand.display();
};

newStandForm.addEventListener('submit', handleNewStand);
