export const dateThai = (date) => {
  const newDate = new Date(date);

  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    calendar: "gregory",
    era: "short",
  };

  const thaiDate = newDate.toLocaleDateString("th-TH", options);
  console.log(thaiDate);

  return thaiDate;
};
