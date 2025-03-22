import { Router } from 'express';
import { userController } from '../controllers/userController';

const routerUser = Router();

routerUser.get('/', userController.findAllUsers);
routerUser.post('/', userController.createUser);

export default routerUser;
