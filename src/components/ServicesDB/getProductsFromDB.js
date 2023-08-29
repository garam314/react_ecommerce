import products from "../../db/JSON_product.json";
import images from "../../db/JSON_images_products.json";

export const getAllProducts = async () => {
  return products;
};

export const getProduct = async (trademark) => {
  return products;
};

export const getImageByID = async (id) => {
  return images.filter((image) => image.pro_id === id);
};

export const getProductFiltered = async (filters = {}) => {
  const filtersArray = Object.entries(filters);

  return products.filter((product) =>
    filtersArray.every(
      ([key, value]) => product[key] === value || value === undefined
    )
  );
};
