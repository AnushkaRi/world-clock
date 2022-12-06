// Data
const locations = [
  {
    mountain: "Kilimanjaro - Africa",
    timeZone: "Africa/Nairobi",
  },

  {
    mountain: "Mount Elbrus - Europe",
    timeZone: "Asia/Tbilisi",
  },

  {
    mountain: "Denali - North America",
    timeZone: "America/Anchorage",
  },

  {
    mountain: "Mount Aconcagua - South America",
    timeZone: "America/Argentina/Buenos_Aires",
  },

  {
    mountain: "Mount Everest - Asia",
    timeZone: "Asia/Kathmandu",
  },

  {
    mountain: "Vinson Massif - Antartica",
    timeZone: "Pacific/Auckland",
  },

  {
    mountain: "Mount Kosciuszko - Australia",
    timeZone: "Australia/Canberra",
  },
];

// ELements
const labelTimezone = document.querySelector(".timezone");
const labelLocation = document.querySelector(".timezone__location");
const labelDateTime = document.querySelector(".timezone__display");

function clockMaker() {
  locations
    .slice()
    .reverse()
    .forEach(function (location, i) {
      const timeId = `time-${i}`;
      // adding locations array
      const mountains = location.mountain;

      // add date & time by time zones
      let now = new Date();
      let time = now.toLocaleString("en-GB", { timeZone: location.timeZone });

      const html = `<div class="timezone__location">${mountains}</div><div class="timezone__display" id="${timeId}">${time}</div>`;
      labelTimezone.insertAdjacentHTML("afterbegin", html);

      setInterval(() => {
        now.setSeconds(now.getSeconds() + 1);
        let time = now.toLocaleString("en-GB", { timeZone: location.timeZone });
        document.getElementById(timeId).innerText = time;
      }, 1000);
    });
}

clockMaker();
