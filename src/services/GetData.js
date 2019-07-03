export default type => {
  const baseURL = "http://localhost:3000/products/api/products";

  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${type}`)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
