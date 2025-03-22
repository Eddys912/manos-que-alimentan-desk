import { Router } from 'express';
import routerUser from '../routes/userRoutes';

const router = Router();

router.use('/users', routerUser);

export default router;
