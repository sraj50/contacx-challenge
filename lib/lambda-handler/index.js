exports.handler = async (event) => {
  const now = new Date();
  const options = {
    weekday: 'long', // Full weekday name (e.g., "Monday")
    year: 'numeric',
    month: 'long',   // Full month name (e.g., "December")
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,    // Use 12-hour format with AM/PM
    timeZone: 'Australia/Sydney',
  };

  const formatter = new Intl.DateTimeFormat('en-AU', options);
  const response = {
    dateTime: formatter.format(now)
  }

  return response
};
