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
    mountain: "Mount Kosciuszko- Australia",
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
    .forEach(function (element, i) {
      // adding locations array
      const mountains = element.mountain;

      // add date & time by time zones
      let now = new Date();
      let time = now.toLocaleString("en-GB", { timeZone: element.timeZone });

      const html = `<div class="timezone__location">${mountains}</div><div class="timezone__display">${time}</div>`;
      labelTimezone.insertAdjacentHTML("afterbegin", html);
    });
}

clockMaker();
