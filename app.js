var time = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ","4pm: ", "5pm: "];
// var pike = document.getElementById("pike");
// var seatac = document.getElementById("seatac");
// var southcenter = document.getElementById("southcenter");
// var bellevue = document.getElementById("bellevue");
// var alki = document.getElementById("alki");
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
pikePlace.display();
var seaTac = new cookieStand("Seatac Airport", 6, 44, 1.2);
seaTac.display();
var southCenter = new cookieStand("Southcenter Mall", 11, 38, 1.9);
southCenter.display();
var bellevue = new cookieStand("Bellevue Mall", 20, 48, 3.3);
bellevue.display();
var alki = new cookieStand("Alki Beach", 3, 24, 2.6);
alki.display();




// var seaTacAirport = {
//   storeLocation: 'SeaTac Airport',
//   domID: document.getElementById('seatac'),
//   minCustomer: 6,
//   maxCustomer: 44,
//   avgCookiesPer: 1.2,
//   totalCookies: [],
//   total: 0,

//   customersPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },

//   cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++){
//       this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
//         //console.log(this.totalCookies);
//       this.total += this.totalCookies[i];
//         //console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);
//       var hour = document.createElement('li');
//       hour.innerHTML = time[i] + this.totalCookies[i];
//       this.domID.appendChild(hour);
//     }
//     var hour = document.createElement('li');
//     hour.innerHTML = 'Total: ' + this.total;
//     this.domID.appendChild(hour);
//   }
// };
// document.getElementById('seatac');
// seaTacAirport.cookiesPerHour();

// var southCenterMall = {
//   storeLocation: 'South Center Mall',
//   domID: document.getElementById('southcenter'),
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookiesPer: 1.9,
//   totalCookies: [],
//   total: 0,

//    customersPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },

//  cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++){
//       this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
//       //console.log(this.totalCookies);
//       var hour = document.createElement('li');
//       this.total += this.totalCookies[i];
//       console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);
//       hour.innerHTML = time[i] + this.totalCookies[i];
//       this.domID.appendChild(hour);
//     }
//     var hour = document.createElement('li');
//     hour.innerHTML = 'Total: ' + this.total;
//     this.domID.appendChild(hour);
//   }
// };
// document.getElementById('southcenter');
// southCenterMall.cookiesPerHour();


// var bellevueSquare = {
//   storeLocation: 'Bellevue Square',
//   domID: document.getElementById('bellevue'),
//   minCustomer: 20,
//   maxCustomer: 48,
//   avgCookiesPer: 3.3,
//   totalCookies: [],
//   total: 0,

//   customersPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },

//    cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++){
//       this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
//       //console.log(this.totalCookies);
//       var hour = document.createElement('li');
//       this.total += this.totalCookies[i];
//       console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);
//       hour.innerHTML = time[i] + this.totalCookies[i];
//       this.domID.appendChild(hour);
//     }
//     var hour = document.createElement('li');
//     hour.innerHTML = 'Total: ' + this.total;
//     this.domID.appendChild(hour);
//   }
// };
// document.getElementById('bellevue');
// bellevueSquare.cookiesPerHour();

// var alki = {
//   storeLocation: 'Alki Beach',
//   domID: document.getElementById('alki'),
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookiesPer: 2.6,
//   totalCookies: [],
//   total: 0,

//    customersPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
//   },

//    cookiesPerHour: function() {
//     for (var i = 0; i < time.length; i++){
//       this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
//       //console.log(this.totalCookies);
//       var hour = document.createElement('li');
//       this.total += this.totalCookies[i];
//       console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);
//       hour.innerHTML = time[i] + this.totalCookies[i];
//       this.domID.appendChild(hour);
//     }
//     var hour = document.createElement('li');
//     hour.innerHTML = 'Total: ' + this.total;
//     this.domID.appendChild(hour);
//   }
// };
// document.getElementById('alki');
// alki.cookiesPerHour();
