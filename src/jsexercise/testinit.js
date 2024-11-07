function dealDate() {
  console.log("hhahaha");
  const time = new Date();
  const weekday = acquireDay(time.getDay());
  console.log(`Sample weekday is: ${weekday}`);
  time.getHours() > 12
    ? console.log(
        `Current time is: ${
          time.getHours() - 12
        } PM : ${time.getSeconds()}: ${time.getSeconds()}`
      )
    : console.log(
        `Current time is: ${time.getHours()} PM : ${time.getSeconds()}: ${time.getSeconds()}`
      );

  console.log(
    `Year month day is: ${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()}`
  );

  function acquireDay(dat) {
    switch (dat) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        throw Error("Unknown dat not in (0~6):" + dat);
    }
  }
}

function leapYear(year){
    if (year % 400 === 0)
        return true;
    else if (year % 100  === 0)
        return false;
    else if (year % 4 === 0)
        return true;
    return false;
}

console.log(leapYear(1997));
console.log(leapYear(2000));
console.log(leapYear(1900));