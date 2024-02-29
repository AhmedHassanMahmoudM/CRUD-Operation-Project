
import * as userController from './controller/user.js';
import {Router} from 'express'
const router = Router()


router.get('/' , userController.usersList );
// get userProducts
router.get('/product', userController.userProducts);
// update user  i sent params in this case ? 
router.patch('/:id', userController.updateUser);
// delete user 
router.delete("/:id", userController.deleteUser);
export default router