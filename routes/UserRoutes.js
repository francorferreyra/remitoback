import express from 'express';

const router = express.Router();

import userCrud from '../controllers/user/UserCrud.js';

router.post('/', userCrud.createUser);
router.post('/login', userCrud.login);

export default router;