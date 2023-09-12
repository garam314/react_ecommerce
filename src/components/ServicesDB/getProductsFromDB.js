import {getAllProducts, getProduct} from '../../db/getFireStore.js'


export const getImageByID = async (id) => {
  const img_pro = await getProduct(id)
  return (img_pro[0].img)
};

export const getProductFiltered = async (filters = {}) => {
  const filtersArray = Object.entries(filters);
  const products = await getAllProducts()
  const filter = products.filter((product) =>
  filtersArray.every(([key, value]) => product[key].includes(value) || value === undefined || product.category.some(category => category.includes(value)))
  ) 
  return (filter)
};
