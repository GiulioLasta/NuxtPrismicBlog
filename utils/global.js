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


import { usePrismic } from '@prismicio/vue';
// import * as prismicC from '@prismicio/client'

/**
 * Gets a full category by the name/uid (mainly to get the actual ID, like ZwJJ1BEAACkAa0Xf).
 * @param {string} str - The name of the category
 * @returns {object} - The category
 */
export const getCategoryByName = async (str) => {
  const prismic = usePrismic();
  const runtimeConfig = useRuntimeConfig();
  const categoryDefaultType = runtimeConfig.public.prismicCategoryDefaultType;
  // const client = prismicC.createClient(runtimeConfig.public.prismicRepositoryName);
  // const category = ref(null);
  
  const filters = [
    prismic.filter.at('document.type', categoryDefaultType),
    prismic.filter.at('document.uid', str),
  ];

  const page = await prismic.client.getByUID(categoryDefaultType, str);
  return page;
  // fetch documents of type [blogPostDefaultType] and with a tag F it is passed
  // const result = await client.get({ 
  //   pageSize: 1, // Fetch only one document
  //   filters: filters,
  // });
  // .then(result => {
  //   category.value = result.results;
  //   return category;
  // });
  // return result.results[0];
};