function updateTime() {
  //Seattle
  let seattleElement =
    document.querySelector("#seattle");
  if (seattleElement) {
    let seattleDateElement =
      seattleElement.querySelector(".date");
    let seattleTimeElement =
      seattleElement.querySelector(".time");
    let seattleTime = moment()
      .tz("America/Vancouver")
      .format("h:mm:ss [<small>]A[</small>]");
    let seattleDate = moment()
      .tz("America/Vancouver")
      .format("D MMMM YYYY");
    seattleDateElement.innerHTML = `${seattleDate}`;
    seattleTimeElement.innerHTML = `${seattleTime}`;
  }
  //Tokyo

  let tokyoElement =
    document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement =
      tokyoElement.querySelector(".date");
    let tokyoTimeElement =
      tokyoElement.querySelector(".time");
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
    let tokyoDate = moment()
      .tz("Asia/Tokyo")
      .format("D MMMM YYYY");
    tokyoDateElement.innerHTML = `${tokyoDate}`;
    tokyoTimeElement.innerHTML = `${tokyoTime}`;
  }
  //Adelaide
  let adelaideElement =
    document.querySelector("#adelaide");
  if (adelaideElement) {
    let adelaideDateElement =
      adelaideElement.querySelector(".date");
    let adelaideTimeElement =
      adelaideElement.querySelector(".time");
    let adelaideTime = moment()
      .tz("Australia/Adelaide")
      .format("h:mm:ss [<small>]A[</small>]");
    let adelaideDate = moment()
      .tz("Australia/Adelaide")
      .format("D MMMM YYYY");
    adelaideDateElement.innerHTML = `${adelaideDate}`;
    adelaideTimeElement.innerHTML = `${adelaideTime}`;
  }
  let localTimeElement = document.querySelector(
    ".local-time"
  );
  let localTimeZoneElement =
    document.querySelector(".local-time-zone");
  let localTimeZone = moment.tz.guess();
  let localTime = moment()
    .tz(`${localTimeZone}`)
    .format("h:mm:ss [<small>]A[</small>]");
  let localDateElement = document.querySelector(
    ".local-date"
  );
  let localDate = moment().format("D MMMM YYYY");
  localTimeZoneElement.innerHTML = `${localTimeZone}`;
  localTimeElement.innerHTML = `${localTime}`;
  localDateElement.innerHTML = `${localDate}`;
}

function changeCity(event) {
  let selectedCityElement =
    document.querySelector("#selected-city.city");
  let cityName = event.target.value;
  if (cityName === "current") {
    cityName = moment.tz.guess();
  }
  let cityTime = moment().tz(`${cityName}`);
  let cityTimeHour = cityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let cityTimeDate = cityTime.format(
    "D MMMM YYYY"
  );

  function changeCityTime() {
    selectedCityElement.innerHTML = `
   
          
            <h3>${cityName.split("/")[1]}</h3>
    <div class="date-time">
    <div class="time">${cityTimeHour}</div>
            <div class="date">${cityTimeDate}</div>
               </div>
  `;
  }

  changeCityTime();
  updateTime();
  setTimeout(() => {
    changeCity(event);
  }, 1000);
}

let citySelectElement =
  document.querySelector("select");
citySelectElement.addEventListener(
  "change",
  changeCity
);

setInterval(updateTime, 1000);
