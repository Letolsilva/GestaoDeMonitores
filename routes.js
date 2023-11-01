import express from 'express';
import {getAllMonitors } from './monitors/monitorsController.js';
import { getAllStudents } from './students/studentController.js';
import validateStudentRequest from './students/validateStudentRequest.js';
import {getAllGrades } from './grades/gradesController.js';
import validateGradeRequest from './grades/validateGradeRequest.js';
import validateMonitorRequest from './monitors/validateMonitorRequest.js';

const router = express.Router();

router.post('/grades', (request,response) => validateGradeRequest(request,response));
router.get('/grades',(request,response) => getAllGrades(request,response));

router.post('/monitors', (request,response) => validateMonitorRequest(request,response));
router.get('/monitors', (request,response) => getAllMonitors(request,response));

router.post('/students', (request, response) => validateStudentRequest(request, response));
router.get('/students', (request, response) => getAllStudents(request, response));

router.post('/students', (request, response) => validateStudentRequest(request, response));


export default router;
