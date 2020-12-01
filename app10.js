const dateFormat = require("dateformat");

console.log("essai int <> b64 encode decode e.g. to generate testId");

const STR64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
  ""
);

const STARTOF2020_TIME = 1580511600000;

function getTestIdFromDate(startDate) {
  const result = to64String(startDate.getTime() - STARTOF2020_TIME);
  console.log(`getTestIdFromDate() startDate:${startDate.getTime()} startDate2020Offset:${startDate.getTime()-STARTOF2020_TIME} result:${result}`);
  getDateFromTestId(result);
  return result;
}

function getDateFromTestId(testId) {
  const dateTime = to64Parse(testId) + STARTOF2020_TIME;
  const result = dateFormat(dateTime, "yyyymmdd_HHMMss.l");
  console.log(`getDateFromTestId() testId:${testId} result:${result}`);
  return result;
}

function to64String(input, current = "") {
  if (input < 0 && current.length == 0) {
    input = input * -1;
  }
  let modify = input % 64;
  let remain = Math.floor(input / 64);
  let result = STR64[modify] + current;
  return remain <= 0 ? result : to64String(remain, result);
}

function to64Parse(input) {
  let result = 0;
  let toProc = input.split("");
  let e;
  for (e in toProc) {
    result = result * 64 + STR64.indexOf(toProc[e]);
  }
  return result;
}

console.log("getDateFromTestId(Ya2Dez) :" + getDateFromTestId("Ya2Dez"));
console.log("getDateFromTestId(YFmM66) :" + getDateFromTestId("YFmM66"));
