import { useEffect, useState } from "react";
import { getProductFiltered } from "../ServicesDB/getProductsFromDB.js";

const useGetProductProps = (props = {}) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProductFiltered(props).then((e) => {
      setItem(e);
    });

    // TODO: change hack, exists another ways for comparate render props
  }, [JSON.stringify(props)]);

  return {
    item,
  };
};

export default useGetProductProps;
