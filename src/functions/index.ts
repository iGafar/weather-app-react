export const getCelsiusTemp = (temp: number) => {
  return Math.round(((temp - 32) * 5) / 9);
};

export const getHour = (hour: string) => {
  return hour.substring(0, 5);
};

export const getDateStandart = (date: string) => {
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };

  const month = date.substring(5, 7);
  return `${date.substring(9)} ${months}`;
};
