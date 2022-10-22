const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 5;
    case 'wednesday':
    return 7;
    case 'thursday':
    return 8;
    case 'friday':
    return 7;
    case 'saturday':
    return 5;
    case 'sunday':
    return 8;
  }
};

const getActualSleepHours = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  let sum = 0;
  for (let i = 0; i < days.length; i++) {
  sum += getSleepHours(days[i]);
  }
  return sum
};

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours*7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You had perfect amount of sleep!');
  } else  if (actualSleepHours > idealSleepHours) {
    let sleepDebt = actualSleepHours - idealSleepHours;
    console.log(`You had ${sleepDebt} more sleep than needed.`);
  } else {
    let sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`You should get ${sleepDebt} more hours of sleep!`)
  };
};
calculateSleepDebt();
