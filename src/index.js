module.exports = function getZerosCount(num, base) {
  let primeFactors = [],
      zerosCount   = 0;

  for (let i = 2; i <= base; i++) {
    if (isPrime(i) && base % i === 0) primeFactors.push(i);
  }

  let lastFactor = primeFactors.pop(),
      lastPower  = getPower(base, lastFactor);

  zerosCount = getZeros(num, lastFactor, lastPower);

  if (primeFactors[0] === 2) {
    let firstFactor = 2,
        firstPower  = getPower(base, firstFactor);

    if (firstPower > 1) {
      zerosCount = Math.min(zerosCount, getZeros(num, firstFactor, firstPower));
    }
  } 

  return zerosCount;
}

function getZeros(num, devider, power, zerosCount = 0) {
  for (; num > 0; zerosCount += num = Math.floor(num / devider));

  return Math.floor(zerosCount / power);
}

function getPower(base, number, power = 0) {
  for (; base % number === 0; base /= number, power++);

  return power;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}