export const truncateText = (text, max = 70) => {
  if(text == null)
    return "";

  if (checkIfString(text) && text.length > max) {
    return text.slice(0, max) + '...';
  }

  if(checkIfObject(text)) {
    if(text.length > 0 && text[0].type == "paragraph") {
      text[0].text = text[0].text.slice(0, max) + '...';
      return text;
    }
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


import { usePrismic } from '@prismicio/vue';
// import * as prismicC from '@prismicio/client'

/**
 * Gets a full category by the name/uid (mainly to get the actual ID, like ZwJJ1BEAACkAa0Xf).
 * @param {string} str - The name of the category
 * @returns {object} - The category
 */
export const getCategoryByName = async (str) => {
  if(str && checkIfString(str)) {
    const prismic = usePrismic();
    const runtimeConfig = useRuntimeConfig();
    const categoryDefaultType = runtimeConfig.public.prismicCategoryDefaultType;
    
    // const filters = [
    //   prismic.filter.at('document.type', categoryDefaultType),
    //   prismic.filter.at('document.uid', str),
    // ];

    return await prismic.client.getByUID(categoryDefaultType, str);
  } else {
    return null;
  }
};



/**
 * Checks if variable is a string.
 * @param {object} thing - The string to capitalize.
 * @returns {boolean} - The capitalized string.
 */
export const checkIfString = (thing) => {
  return typeof thing == "string";
};
/**
 * Checks if variable is an integer.
 * @param {object} thing - The string to capitalize.
 * @returns {boolean} - The capitalized string.
 */
export const checkIfInteger = (thing) => {
  return typeof thing == "number";
};
/**
 * Checks if variable is a boolean.
 * @param {object} thing - The string to capitalize.
 * @returns {boolean} - The capitalized string.
 */
export const checkIfBoolean = (thing) => {
  return typeof thing == "boolean";
};

/**
 * Checks if variable is an array.
 * @param {object} thing - The string to capitalize.
 * @returns {boolean} - The capitalized string.
 */
// export const checkIfArray = (thing) => {
//   return typeof thing == "Array";
// };

/**
 * Checks if variable is an object.
 * @param {object} thing - The string to capitalize.
 * @returns {boolean} - The capitalized string.
 */
export const checkIfObject = (thing) => {
  return typeof thing == "object";
};
