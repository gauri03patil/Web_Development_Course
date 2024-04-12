//If One promise return failed then it will return all failed promise
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//All Settled Return all failed and pass promise
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Only take success promise and rejected promise will get ignored
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Race -- Take value of fasted response it may be success or rejected
Promise.race([Promise.reject('ERROR'), Promise.resolve('Another success')])
  .then(res => console.log(res))
  .catch(err => console.error(err));

const loadAll = async function () {
  try {
    Promise.allSettled(fetch(``), fetch(``), fetch(``));
  } catch (error) {}
};
