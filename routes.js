import express from 'express';
import { create, getAll } from './monitorsController.js';

const router = express.Router();

router.post('/monitors', create);
router.get('/monitors', getAll);

export default router;




//http://localhost:3000/api/monitors
