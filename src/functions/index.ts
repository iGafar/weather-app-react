export const getCelsiusTemp = (temp: number) => {
  return Math.round(((temp - 32) * 5) / 9);
};

export const getHour = (hour: string) => {
  return hour.substring(0, 5);
};
