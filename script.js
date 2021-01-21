const submit = document.getElementById("submit"),
  search = document.getElementById("search-ip"),
  ipResults = document.getElementById("ip-results"),
  countryName = document.getElementById("country-name"),
  countryCapital = document.getElementById("country-capital"),
  countryCode = document.getElementById("country-code"),
  cityName = document.getElementById("city-name"),
  latitude = document.getElementById("latitude"),
  longitude = document.getElementById("longitude"),
  time = document.getElementById("time-time"),
  timeZone = document.getElementById("time-timezone"),
  flagEmoji = document.getElementById("flag-emoji"),
  continentName = document.getElementById("continent-name");

const errorMessage = document.getElementById("error-message");

function searchIp(e) {
  e.preventDefault();

  const term = search.value;
  if (term.trim()) {
    fetch(`https://ip-geo-location.p.rapidapi.com/ip/${term}?format=json`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e4fe7bfb7fmsh76996e99c8353abp16e2adjsnee33573ff050",
        "x-rapidapi-host": "ip-geo-location.p.rapidapi.com"
      }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        ipResults.innerHTML = response.ip;
        countryName.innerHTML = response.country.name;
        countryCapital.innerHTML = response.country.capital;
        countryCode.innerHTML = response.country.code;
        cityName.innerHTML = response.city.name;
        latitude.innerHTML = response.location.latitude;
        longitude.innerHTML = response.location.longitude;
        time.innerHTML = response.time.time;
        timeZone.innerHTML = response.time.timezone;
        flagEmoji.innerHTML = response.country.flag.emoji;
        continentName.innerHTML = response.continent.name;
        setTimeout(() => {
          window.location.reload();
        }, 50000);
      })
      .catch((err) => {
        console.error(err);
        console.log("whattt");
        errorMessage.innerHTML = `<h4>PLEASE CHECK THAT YOU INPUTED A VALID IP ADDRESS</h4>`;
      });
  }
}

submit.addEventListener("submit", searchIp);
