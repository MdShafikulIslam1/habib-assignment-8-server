import randomGenerator from '../../utils/randomGenerator'
import skuGenerator from '../../utils/skuGenerator'
import { TProductCreatePayload, TQueryPayload } from './product.interface'
import Product from './product.model'

const createProduct = async (payload: TProductCreatePayload) => {
  const productData = {
    ...payload,
    id: randomGenerator(),
    code: skuGenerator(),
    price: parseFloat(payload.price.toFixed(2)),
    prevPrice: parseFloat(payload.price.toFixed(2)),
  }
  await Product.create(productData)
  return { message: 'product created' }
}

const getAllProduct = async (payload: TQueryPayload) => {
  const query = { ...(payload || {}) }

  const products = await Product.find(query)
  return products
}

const getSingleProduct = async (productId: string) => {
  const product = await Product.findOne({ id: productId })
  return product
}
const updateProduct = async (productId: string, payload: TQueryPayload) => {
  const updateDoc = { ...payload }
  const product = await Product.findOneAndUpdate({ id: productId }, updateDoc, {
    new: true,
  })
  return product
}
const deleteProduct = async (productId: string) => {
  await Product.findOneAndDelete({ id: productId })
  return { message: 'deleted' }
}
//
const makeFlash = async (productId: string) => {
  await Product.findOneAndUpdate({ id: productId }, { isFlash: true })
  return { message: 'make flash' }
}
const removeFlash = async (productId: string) => {
  await Product.findOneAndUpdate({ id: productId }, { isFlash: false })
  return { message: 'remove flash' }
}
const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  makeFlash,
  removeFlash,
}
export default ProductServices
