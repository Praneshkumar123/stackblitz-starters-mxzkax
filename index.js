
const students = [
  { name: "Alice", chemistry: 75, biology: 80, dob: "15-04-2000" },
  { name: "Bob", chemistry: 85, biology: 85, dob: "17-03-2001" },
  { name: "Charlie", chemistry: 85, biology: 80, dob: "15-04-2000" },
];

function parseDate(dob) {
  const [day, month, year] = dob.split("-").map(Number);
  return new Date(year, month - 1, day);
}

students.sort((a, b) => {
  const totalA = a.chemistry + a.biology;
  const totalB = b.chemistry + b.biology;

  if (totalA !== totalB) {
    return totalB - totalA;
  }

  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  if (a.chemistry !== b.chemistry) {
    return b.chemistry - a.chemistry;
  }

  const dateA = parseDate(a.dob);
  const dateB = parseDate(b.dob);
  return dateA - dateB;
});

console.log("Sorted Students:", students);
