function updateTime() {
  //Seattle
  let seattleElement =
    document.querySelector("seattle");
  let seattleDateElement = document.querySelector(
    "#seattle .date"
  );
  let seattleTimeElement = document.querySelector(
    "#seattle .time"
  );
  let seattleTime = moment()
    .tz("America/Vancouver")
    .format("h:mm:ss [<small>]A[</small>]");
  let seattleDate = moment()
    .tz("America/Vancouver")
    .format("D MMMM YYYY");
  seattleDateElement.innerHTML = `${seattleDate}`;
  seattleTimeElement.innerHTML = `${seattleTime}`;

  //Tokyo
  let tokyoElement =
    document.querySelector("tokyo");
  let tokyoDateElement = document.querySelector(
    "#tokyo .date"
  );
  let tokyoTimeElement = document.querySelector(
    "#tokyo .time"
  );
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
  let tokyoDate = moment()
    .tz("Asia/Tokyo")
    .format("D MMMM YYYY");
  tokyoDateElement.innerHTML = `${tokyoDate}`;
  tokyoTimeElement.innerHTML = `${tokyoTime}`;

  //Adelaide
  let adelaideElement =
    document.querySelector("adelaide");
  let adelaideDateElement =
    document.querySelector("#adelaide .date");
  let adelaideTimeElement =
    document.querySelector("#adelaide .time");
  let adelaideTime = moment()
    .tz("Australia/Adelaide")
    .format("h:mm:ss [<small>]A[</small>]");
  let adelaideDate = moment()
    .tz("Australia/Adelaide")
    .format("D MMMM YYYY");
  adelaideDateElement.innerHTML = `${adelaideDate}`;
  adelaideTimeElement.innerHTML = `${adelaideTime}`;

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

updateTime();
setInterval(updateTime, 1000);
