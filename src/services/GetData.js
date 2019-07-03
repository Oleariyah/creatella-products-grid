export default (type, sort) => {
  const baseURL = "/products/api/products";

  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${type}${sort}`)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
