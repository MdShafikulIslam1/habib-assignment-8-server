import { Router } from 'express'
import ProductControls from './product.controller'

const router = Router()
router.post('/create-product', ProductControls.createProduct)
router.get('/', ProductControls.getAllProduct)
router.get('/:productId', ProductControls.getSingleProduct)
router.patch('/:productId', ProductControls.updateProduct)
router.delete('/:productId', ProductControls.deleteProduct)
router.patch('/:productId/make-flash', ProductControls.makeFlash)
router.patch('/:productId/remove-flash', ProductControls.removeFlash)
const ProductRoutes = router
export default ProductRoutes
