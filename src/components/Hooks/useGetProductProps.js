import { useEffect, useState } from "react";
import { getProductFiltered } from "../ServicesDB/getProductsFromDB.js";

const useGetProductProps = (props = {}) => {
  const [item, setItem] = useState([]);
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    setIsloading(true)
    getProductFiltered(props).then((e) => {
      setItem(e);
    })
      .finally(() => {
        setIsloading(false)
      });

    // TODO: change hack, exists another ways for comparate render props
  }, [props]);

  return {
    isloading, item
  };
};

export default useGetProductProps;
