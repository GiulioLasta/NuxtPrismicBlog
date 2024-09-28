export const truncateText = (text, max = 30) => {
  if(text == null)
    return "";

  if (text.length > max) {
    return text.slice(0, max) + '...';
  }
  return text;
};

/**
 * Format a date string to a more readable format.
 * @param {string} dateStr - The date string to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

/**
 * Capitalize the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
