const findIndexById = (arr, id) => (
  arr.reduce((result, element, index) => (
    (element.id === id) ? index : result
  ), 0)
);

export default { findIndexById };
