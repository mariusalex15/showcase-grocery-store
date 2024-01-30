export const formateFilter = (filters: any) => {
  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      filters[key] = filters[key];
    } else {
      delete filters[key];
    }
  });
  return filters;
};
