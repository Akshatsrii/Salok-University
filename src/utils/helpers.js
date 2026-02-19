export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const truncateText = (text, limit = 50) => {
  return text.length > limit
    ? text.substring(0, limit) + "..."
    : text;
};
