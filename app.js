var locations = [];

function cookieStand(storeLocation, minCustomer, maxCustomer, avgCookiesPer) {
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

var pikePlace = new cookieStand("Pike Place Market", 17, 88, 5.2);
// pikePlace.display();
var seaTac = new cookieStand("Seatac Airport", 6, 44, 1.2);
var southCenter = new cookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevue = new cookieStand("Bellevue Mall", 20, 48, 3.3);
var alki = new cookieStand("Alki Beach", 3, 24, 2.6);

//takes the locations array and displays them instead of pikePlace.display();
function displayAllLocations() {
for (var i = 0; i < locations.length; i++) {
  locations[i].display();
  }
}

displayAllLocations ();

// function updateLocation() {
//   pikePlace.avgCookiesPer = 0;
//   displayAllLocations();
// }

// updateLocation();
