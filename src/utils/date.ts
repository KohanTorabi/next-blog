export const standardDate = (publishDate: string) => {
  const dateObj = new Date(publishDate);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
};
