'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  console.log(data);
  const cardHtml = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${[data.languages[0].name]}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', cardHtml);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  setTimeout(() => {
    countriesContainer.insertAdjacentHTML('beforeend', msg);
  }, 100);

  countriesContainer.style.opacity = 1;
};

const countryFun = function (country) {
  const request = new XMLHttpRequest();

  request.open('Get', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);

    renderCountry(data);

    const nebhiour = data.borders?.[0];
    request.open('Get', `https://restcountries.com/v2/alpha/${nebhiour}`);

    request.send();
    request.addEventListener('load', function () {
      const data2 = JSON.parse(request.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// countryFun('India');
// countryFun('lanka');
// countryFun('USA');

// countryFun('pakistan');

// Promises

// const getJSon = function () {
//   if (!response.ok) throw new error('No ');
// };
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error(' Country not found');
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour Found');

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(' Country not found');

      return response.json();
      // flagCheck(data);
    })
    .then(data => {
      return renderCountry(data);
    })
    .catch(err => {
      // console.log(`${err}`);
      renderError(`Something Went Wrong ${err.message}`);
    });
};

// getCountryData('Lanka');
// getCountryData('india');
// getCountryData('pak');
// getCountryData('us');
// getCountryData('ind');

// btn.addEventListener('click', function () {
//   getCountryData('uk');
//   getCountryData('Pak');
// });

// getCountryData('hjukkojihu');

const whereAmI = function () {
  getPosition
    .then(pos => {
      console.log(pos);
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok)
        throw new Error('Wrong Lat or Lan and May be Response delay');

      return res.json();
    })
    .then(data => {
      console.log(
        `The Country Name is ${data.country} and City is ${data.opacity}`
      );
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country Record Not Found 😒`);

      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(error => {
      console.log(`${error.msg}`);
    });
};

// btn.addEventListener('click', function () {
//   whereAmI(`52.508`, `13.381`);
//   //whereAmI(`19.037`, `72.873`);
// });

// Event Loop Test

console.log('Test Start');
setTimeout(() => console.log('Just log in Zero second'), 0);
Promise.resolve('The First Resolved Promise').then(res => {
  for (let i = 0; i <= 100000000; i++) {}

  // for (let i = 0; i <= 10000000000; i++) {}
  console.log(res);
});
console.log('Test End');

const lottery = new Promise(function (resolve, reject) {
  console.log(' Lottery Draw Running On 🔮');
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('You Win 🥂');
    } else {
      reject(new Error('You lose the game👵'));
    }
  }, 2000);
});

lottery
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

const getPosition = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

//Above Code Different Way
const getPositionDiff = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition.then(pos => {
//   console.log(pos);
//   const { latitude: lat, longitude: lng } = pos.coords;
//   console.log(lat, lng);
// });

// getPositionDiff().then(pos => {
//   console.log(pos);
// });

// btn.addEventListener('click', whereAmI);

const whereAMI_withAsync = async function () {
  try {
    const pos = await getPositionDiff();

    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error('Problem with Geo location');

    const geoJson = await resGeo.json();
    console.log(
      `The Country Name is ${geoJson.country} and City is ${geoJson.opacity}`
    );

    const resCountryData = await fetch(
      `https://restcountries.com/v2/name/${geoJson.country}`
    );

    if (!resCountryData.ok) throw new Error('Problem with Geo location');

    const countryJsonData = await resCountryData.json();
    renderCountry(countryJsonData[0]);

    return `The Country Name is ${geoJson.country} and City is ${geoJson.opacity}`;
  } catch (err) {
    renderError(`${err.message}`);
    throw err;
  }
};

// btn.addEventListener('click', whereAMI_withAsync);

console.log(`1: The Calling Where AM I method`);

(async function () {
  try {
    const city = await whereAMI_withAsync();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log(`3: End Of execution `);
})();

const getCountryData_InParaller = async function (
  country1,
  country2,
  country3
) {
  try {
    const data = await Promise.all([
      await getJSON(`https://restcountries.com/v2/name/${country1}`),
      await getJSON(`https://restcountries.com/v2/name/${country2}`),
      // await getJSON(`https://restcountries.com/v2/name/${country3}`),
    ]);

    console.log(data);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

getCountryData_InParaller('uk', 'pak');
