
import * as productController from './controller/product.js'
import {Router} from 'express'
const router = Router()

router.post('/' ,productController.addProduct )
// get products 
router.get('/',productController.products)
// update products 
router.patch('/:id' , productController.updateProduct);
// delete products
router.delete('/:id' , productController.deleteProduct);

export default router