import { Router } from 'express'
import ProductRoutes from '../modules/Product/product.route'

const router = Router()
const routes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
]

routes.map(route => router.use(route.path, route.route))

export default router
