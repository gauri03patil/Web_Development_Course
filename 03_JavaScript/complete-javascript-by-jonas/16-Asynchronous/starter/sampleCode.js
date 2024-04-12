const todaysDate = new Date();

console.log(todaysDate);
console.log(todaysDate.toISOString());

let userAgent = this.window.navigator.userAgent;

let browserName;

console.log(userAgent, this.window.navigator.userAgent);

if (userAgent.match(/chrome|chromium|crios/i)) {
  browserName = 'Chrome';
} else if (userAgent.match(/firefox|fxios/i)) {
  browserName = 'Firefox';
} else if (userAgent.match(/safari/i)) {
  browserName = 'Safari';
} else if (userAgent.match(/opr\//i)) {
  browserName = 'Opera';
} else if (userAgent.match(/edg/i)) {
  browserName = 'Edge';
} else {
  browserName = 'No browser detection';
}

console.log(browserName);

console.log(userAgent.split(browserName)[1].substring(1, 4));
