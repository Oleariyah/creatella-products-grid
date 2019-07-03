import React from "react";
import getData from "../services/GetData";

export default () => {
  const [state, setstate] = React.useState({
    products: [],
    loading: true,
    cache: [],
    page: 1,
    endingText: "",
    limit: 20
  });

  const [getMore, setGetMore] = React.useState(false);

  React.useEffect(() => {
    if (state.products.length === 0) {
      getData(`?_page=${state.page}&_limit=${state.limit}`).then(data => {
        let tempProducts = [];
        data.forEach(product => {
          const singleProduct = { ...product };
          tempProducts = [...tempProducts, singleProduct];

          setstate({
            ...state,
            cache: tempProducts,
            totalLoaded: state.totalLoaded + 1,
            loading: true
          });
        });
      });
    }
    window.addEventListener("scroll", scrollReachedBottom);
    return () => window.removeEventListener("scroll", scrollReachedBottom);
  }, []);

  React.useEffect(() => {
    if (state.page > 1) {
      getData(`?_page=${state.page}&_limit=${state.limit}`).then(data => {
        let tempProducts = [];
        data.forEach(product => {
          const singleProduct = { ...product };
          tempProducts = [...tempProducts, singleProduct];

          if (tempProducts.length === 0) {
            setstate({
              ...state,
              cache: [],
              endingText: "~ end of catalogue ~"
            });
          } else {
            setstate({
              ...state,
              cache: tempProducts,
              loading: true
            });
          }
        });
      });
    }
  }, [state.page]);

  React.useEffect(() => {
    fetchInitialDataFromCache();
  }, [state.cache]);

  React.useEffect(() => {
    loadMore();
  }, [getMore]);

  const fetchInitialDataFromCache = () => {
    let displayedProducts = [];
    state.cache.forEach(product => {
      let index = state.cache.indexOf(product);
      const singleProduct = { ...product };
      displayedProducts = [...displayedProducts, singleProduct];
      state.cache.splice(index, 1);
    });

    setstate({
      ...state,
      cache: state.cache,
      products: state.products.concat(displayedProducts),
      loading: false
    });
  };

  const scrollReachedBottom = event => {
    event.preventDefault();

    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable) {
      setGetMore(true);
    } else {
      setGetMore(false);
    }
  };

  const loadMore = () => {
    if (getMore === true && state.cache.length > 0) {
      let remainingCache = [...state.products, ...state.cache];

      setstate({
        ...state,
        products: remainingCache,
        cache: []
      });
    } else if (getMore === true && state.cache.length === 0) {
      setstate({
        ...state,
        page: state.page + 1
      });
    }
  };

  const centToDollar = val => `$${(val / 100).toFixed(2)}`;
  const formatDate = val => {
    const today = new Date();
    const productDate = new Date(val);

    // check month
    if (today.getMonth() === productDate.getMonth()) {
      const dateDiff = today.getDate() - productDate.getDate();
      // if less than a week
      if (dateDiff < 7 && dateDiff !== 1) {
        return `${dateDiff} days ago`;
      } else if (dateDiff === 1) {
        return `${dateDiff} day ago`;
      }
    }
    return productDate.toDateString();
  };

  return (
    <tbody>
      {!state.loading
        ? state.products.map(product => {
            return (
              <tr key={product.id}>
                <td scope="row">{product.face}</td>
                <td>{product.size}</td>
                <td>{centToDollar(product.price)}</td>
                <td>{product.id}</td>
                <td>{formatDate(product.date)}</td>
              </tr>
            );
          })
        : null}
    </tbody>
  );
};
