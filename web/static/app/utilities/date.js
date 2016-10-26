export function addDays(date, days) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}
