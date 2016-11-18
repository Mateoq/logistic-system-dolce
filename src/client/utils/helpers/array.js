const findIndexById = (arr, id) => (
  arr.reduce((result, element) => (
    (element.id === id) ? element : result
  ))
);

export default { findIndexById };
