'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransaction = function (account, sort = false) {
  containerMovements.innerHTML = '';

  account.movements = sort
    ? movements.slice().sort((a, b) => a > b)
    : movements;

  account.movements.forEach(function (amount, index) {
    let transactionType = amount > 0 ? 'deposit' : 'withdrawal';
    // html literal created
    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${transactionType}">6 ${transactionType}</div>
      <div class="movements__value">${amount.toFixed(2)}€</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayTransaction(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let currentUser, currentAcountArr;
const generateUsername = function (acc) {
  acc.forEach(function (name) {
    //console.log(name);
    const username = createUsername(name.owner);

    name.username = username;
  });
};
const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(mov => mov[0])
    .join('');
  return username;
};

generateUsername(accounts);

const calDepositeSummary = function (account) {
  const totalDespoteIN = account.movements
    .filter(deposite => deposite > 0)
    .reduce((totalAcc, currentValue) => totalAcc + currentValue, 0);

  console.log(totalDespoteIN);
  labelSumIn.textContent = `${totalDespoteIN.toFixed(2)}€`;
};
//calDepositeSummary(account1.movements);

const calWithrawalSummary = function (account) {
  const totalWithdrawOut = account.movements
    .filter(withdraw => withdraw < 0)
    .reduce((totalAcc, currentValue) => totalAcc + currentValue, 0);

  console.log(totalWithdrawOut);
  labelSumOut.textContent = `${totalWithdrawOut.toFixed(2)}€`;
};
//calWithrawalSummary(account1.movements);

const calIntrestSummary = function (account) {
  const totalInterest = account.movements
    .filter(deposite => deposite > 0)
    .map(intrest => (intrest * account.interestRate) / 100)
    .reduce((totalAcc, currentValue) => totalAcc + currentValue, 0);

  console.log(totalInterest);
  labelSumInterest.textContent = `${Math.abs(totalInterest.toFixed(2))}€`;
};
//calIntrestSummary(account1.movements);

// console.log(createUsername(account1.owner));
// console.log(createUsername(account2.owner));
// console.log(createUsername(account3.owner));

const displayCurrentBalance = function (account) {
  const balance = account.movements.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  console.log(balance);
  //Add account balance in array
  account.balance = balance;
  labelBalance.textContent = `${balance.toFixed(2)}€`;
};
//displayCurrentBalance(account1.movements);

const updateUI = function (accountDetaisl) {
  displayTransaction(accountDetaisl);

  //IN
  calDepositeSummary(accountDetaisl);

  //Out
  calWithrawalSummary(accountDetaisl);

  //Interest
  calIntrestSummary(accountDetaisl);

  // Summary deposit
  displayCurrentBalance(accountDetaisl);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // why we use need to search
  const accountDetaisl = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  currentAcountArr = accountDetaisl;
  console.log(accountDetaisl);

  if (
    accountDetaisl?.username === inputLoginUsername.value &&
    accountDetaisl?.pin === Number(inputLoginPin.value)
  ) {
    currentUser = accountDetaisl.username;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    labelWelcome.textContent = 'Welcome, ' + accountDetaisl.owner.split(' ')[0];

    console.log('Login Successfull ');
    containerApp.style.opacity = 100;
    inputTransferTo.value = '';
    inputTransferAmount.value = '';

    updateUI(accountDetaisl);

    //
  } else {
    console.log('Invalid Login ');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferUser = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);

  console.log(transferUser, amount);
  console.log(currentUser);

  const currentAccount = accounts.find(acc => currentUser === acc.username);
  console.log(currentAccount);
  const userExist = accounts.filter(acc => acc.username === transferUser);
  if (
    transferUser != currentUser &&
    amount > 0 &&
    userExist &&
    currentAccount?.balance > amount
  ) {
    const TransferAccount = accounts.find(acc => transferUser === acc.username);
    TransferAccount.movements.push(amount);
    currentAccount.movements.push(-amount);

    inputTransferTo.value = '';
    inputTransferAmount.value = '';
    updateUI(currentAccount);
  } else {
    if (userExist.length == 0) {
      console.log('User Not Exist');
    }
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const deleteuserIndex = accounts.findIndex(
    acc => inputCloseUsername.value === currentAcountArr.username
  );
  //console.log(deleteuserIndex);

  if (
    inputCloseUsername.value === currentUser &&
    currentAcountArr.pin === Number(inputClosePin.value)
  ) {
    console.log('Account Ready to Delete');
    accounts.splice(deleteuserIndex, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const requestloan = Math.floor(inputLoanAmount.value);

  const amout10 = currentAcountArr.movements.some(
    transaction => transaction >= requestloan * 0.1
  );

  if (requestloan > 0 && amout10) {
    currentAcountArr.movements.push(Number(requestloan));
    console.log(currentAcountArr);
    updateUI(currentAcountArr);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayTransaction(currentAcountArr, sorted);
  sorted = !sorted;
});
