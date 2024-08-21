export const shortenAddress = (address, count = 7) => {
  return address.slice(0, count) + "..." + address.slice(-count);
};
export const formateDate = (date) => {
  console.log("date");
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    hour12: true,
  }).format(dateObj);
};
