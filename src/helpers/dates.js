export const dayOfTheWeek = () => {
  let day = new Date();
  const dayNumber = day.getDay();
  let today;

  switch (dayNumber) {
    case 1:
      today = 'Mon';
      break;
    case 2:
      today = 'Tue';
      break;
    case 3:
      today = 'Wed';
      break;
    case 4:
      today = 'Thu';
      break;
    case 5:
      today = 'Fri';
      break;
    case 6:
      today = 'Sat';
      break;
    case 7:
      today = 'Sun';
      break;
    default:
      console.log('hrm');
  }

  return today;
};
