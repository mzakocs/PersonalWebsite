// Formats dates into a readable format
const months = [
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
  'December',
];

// Formats dates into a display format for blog posts
export const formatDate = (str) => {
  const d = new Date(str);
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// Returns the number of years since the input year
export const getYearsSince = (year) => {
  return (new Date().getFullYear() - year);
}