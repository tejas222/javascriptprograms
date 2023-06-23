function serviceWithMaxAverage(paymentString) {
  let paymentList = JSON.parse(paymentString);
  let servicePayment = {};
  paymentList.forEach((payment) => {
    let serviceName = payment[0];
    let amount = payment[1];

    if (!servicePayment.hasOwnProperty(serviceName)) {
      servicePayment[serviceName] = { total: 0, count: 0 };
    }
    servicePayment[serviceName].total += amount;
    servicePayment[serviceName].count++;
  });
  let maxAverage = 0;
  let maxAverageService = "";

  for (let service in servicePayment) {
    let average = servicePayment[service].total / servicePayment[service].count;
    if (average > maxAverage) {
      maxAverage = average;
      maxAverageService = service;
    }
  }
  return maxAverageService;
}
const paymentString =
  '[["Swiggy", 123], ["Swiggy", 227], ["Zomato", 103], ["Zomato", 171], ["Dunzo", 131], ["Zomato", 122], ["Swiggy", 181]]';

console.log(serviceWithMaxAverage(paymentString));
