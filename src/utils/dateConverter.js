const dateConverter = d => {
  Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  };
  let date = new Date(d);
  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  let dateYear;
  let day;
  let month;
  for (let i = 0; i < monthNames.length; i += 1) {
    if (date.getMonth() === i + 1) {
      dateYear = [monthNames[i + 1], date.getFullYear()].join(', ');
      month = monthNames[i + 1];
    }
  }
  for (let i = 0; i < weekDays.length; i += 1) {
    if (date.getDay() === i) {
      day = weekDays[i];
    }
  }
  let formattedDate = {
    month: month,
    dateYear: dateYear,
    date: date.getDate(),
    day: day,
    year: date.getFullYear(),
    time: [date.getHours().pad(2), date.getMinutes().pad(2)].join(':')
  };

  return formattedDate;
};
export default dateConverter;
