export const getDateAndTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-EN", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
