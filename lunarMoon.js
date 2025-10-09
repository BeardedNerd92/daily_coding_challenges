function moonPhase(dateString) {
 let referenceDate;
 let givenDate;
 let diffDays;
 let diffDate;
 let lunarDay;


  referenceDate = new Date("2000-01-06");
  givenDate = new Date(dateString)
  diffDate = givenDate - referenceDate;
  diffDays = Math.floor(diffDate / (1000 * 60 * 60 * 24))
  lunarDay = ((diffDays % 28) + 28) % 28 + 1;
  


  if (lunarDay >= 1 && lunarDay <= 7) {
    return "New";
  }
  if (lunarDay >= 8 && lunarDay <= 14) {
    return "Waxing";
  }
  if (lunarDay>= 15 && lunarDay <= 21) {
    return "Full";
  }
  if (lunarDay >= 22 && lunarDay <= 28) {
    return "Waning";
  } 
}

const date = "2022-12-14";
const result = moonPhase(date);
console.log(result);
