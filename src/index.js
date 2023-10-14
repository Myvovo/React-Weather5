let currentdate = new Date();

const myElement = document.querySelector(".top .currentday");
myElement.innerHTML = "";

let hours = currentdate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentdate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = currentdate.getDate();

let seconds = currentdate.getSeconds();
let year = currentdate.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentdate.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[currentdate.getMonth()];

myElement.innerHTML = `${days[currentdate.getDay()]} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let p1 = document.querySelector("p1");
  p1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function noClick(event) {
  event.preventDefault();
  let link = document.querySelector("#currentTemp");
  link.innerHTML = response.data.main.name;
}

function showTemp(response) {
  console.log(response);

  let currentTemp = document.querySelector("#currentTempofcity");
  currentTempofcity.innerHTML = Math.round(response.data.main.temp);

  let currentcityName = document.querySelector("#cityName");
  currentcityName.innerHTML = response.data.name;
}

function retrievePosition(position) {
  console.log(position);
  let searchbox = document.querySelector("#search-text-input");
  searchbox.innerHTML = "city";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "8543f1a82410676e3d23debd07622840";
  let city = "Roodeport";

  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}
  `;
  console.log(apiUrl);

  axios.get(apiUrl).then(showTemp);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
