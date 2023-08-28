import products from '../../db/JSON_product.json'
import images from '../../db/JSON_images_products.json'
import { sleep } from '../../utils/utils.js'

export const getAllProducts = async () => {
    return products
}


export const getImageByID = async (id) => {
    return images.filter((image) => image.pro_id === id)
}