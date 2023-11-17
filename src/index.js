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
  localTime = moment().format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let localDateElement = document.querySelector(
    ".local-date"
  );
  localDate = moment().format("D MMMM YYYY");
  localTimeElement.innerHTML = `${localTime}`;
  localDateElement.innerHTML = `${localDate}`;
}

function changeCity(event) {
  let citiesList = document.querySelector(
    ".cities-list"
  );
  let cityName = event.target.value;
  let cityTime = moment().tz(`${cityName}`);

  citiesList.innerHTML = `
   <div class="city">
          
            <h3>${cityName.split("/")[1]}</h3>
    <div class="date-time">
    <div class="time">${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format(
    "A"
  )}</small></div>
            <div class="date">${cityTime.format(
              "D MMMM YYYY"
            )}</div>
               </div>
  `;
}

let citySelectElement =
  document.querySelector("select");
citySelectElement.addEventListener(
  "change",
  changeCity
);
updateTime();
setInterval(updateTime, 1000);
