// Not making this a class because that doesn't work well with Redux

export function Chore(props) {
  let parsedDate = props.date.split('-'); // assumes YYYY-MM-DD
  parsedDate[1]--; // Months start at 0 in Date

  return {
    id: props.id,
    name: props.name,
    deletionRequested: false,
    date: new Date(...parsedDate), // assumes YYYY-MM-DD
  };
}
