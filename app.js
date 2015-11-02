/*var cookieShop = function (minCustomer, maxCustomer, avgCookiesPer) {
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPer = avgCookiesPer;
  //var hours = [];
  //calcHourlyCustomer: function(){
    //var hours = [];
  //  return
  }
  calcHourlyTotals: function()
  calcDailyTotals: function()


cookieShop.prototype.generateRandom = function(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;

}

cookieShop.prototype.calcHourlyCustomer = function(){
  var hourlyCustomer = this.generateRandom(17, 88);
  console.log(hourlyCustomer);
}

generateRandom();*/
var time = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ","4pm: ", "5pm: "];

var pikePlace = {
  storeLocation: "Pike Place Market",
  domID: document.getElementById('pike'),
  minCustomer: 17,
  maxCustomer: 88,
  avgCookiesPer: 5.2,
  totalCookies: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++){
      this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
      console.log(this.totalCookies);
      var hour = document.createElement('li');

      hour.innerHTML = time[i] + this.totalCookies[i];
      this.domID.appendChild(hour);
    }
  }
};

document.getElementById('pike');

pikePlace.cookiesPerHour();

var seaTacAirport = {
  storeLocation: 'SeaTac Airport',
  domID: document.getElementById('seatac'),
  minCustomer: 6,
  maxCustomer: 44,
  avgCookiesPer: 1.2,
  totalCookies: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
   console.log(this.totalCookies);
      var hour = document.createElement('li');

      hour.innerHTML = time[i] + this.totalCookies[i];
      this.domID.appendChild(hour);
    }
  }
};
document.getElementById('seatac');
seaTacAirport.cookiesPerHour();

var southCenterMall = {
  storeLocation: 'South Center Mall',
  domID: document.getElementById('southcenter'),
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPer: 1.9,
  totalCookies: [],

   customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

 cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
   console.log(this.totalCookies);
      var hour = document.createElement('li');

      hour.innerHTML = time[i] + this.totalCookies[i];
      this.domID.appendChild(hour);
    }
  }
};
document.getElementById('southcenter');
southCenterMall.cookiesPerHour();


var bellevueSquare = {
  storeLocation: 'Bellevue Square',
  domID: document.getElementById('bellevue'),
  minCustomer: 20,
  maxCustomer: 48,
  avgCookiesPer: 3.3,
  totalCookies: [],

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

   cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
   console.log(this.totalCookies);
      var hour = document.createElement('li');

      hour.innerHTML = time[i] + this.totalCookies[i];
      this.domID.appendChild(hour);
    }
  }
};
document.getElementById('bellevue');
bellevueSquare.cookiesPerHour();

var alki = {
  storeLocation: 'Alki Beach',
  domID: document.getElementById('alki'),
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPer: 2.6,
  totalCookies: [],

   customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

   cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++) {
    this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
   console.log(this.totalCookies);
      var hour = document.createElement('li');

      hour.innerHTML = time[i] + this.totalCookies[i];
      this.domID.appendChild(hour);
    }
  }
};
document.getElementById('alki');
alki.cookiesPerHour();

/*function getRandom(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) - minCustomer;
}

//console.log(getRandom(3, 24));
console.log(cookiesPerHour());*/



