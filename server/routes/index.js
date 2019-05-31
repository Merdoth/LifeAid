/* eslint-disable sort-keys */
import express from 'express';
import aidController from '../controllers/aidControllers';
import reportController from '../controllers/reportControllers';
import userController from '../controllers/userControllers';
import imageParser from '../middlewares/ImageParser';
import audioParser from '../middlewares/audioParser';

const router = express.Router();

// aid route
// Create a new Aid
router.post('/aid', imageParser.single('image'), aidController.create);

// Retrieve all Aids
router.get('/aids', aidController.getAll);

// Retrieve a single Aid with id
router.get('/aids/:id', aidController.getOne);

// Update a Aid with id
router.put('/aids/:id', aidController.updateAid);

// Delete a Aid with id
router.delete('/aids/:id', aidController.deleteAid);

// report route
// Create a new Report
router.post('/report', audioParser.single('audio'), reportController.create);

// Retrieve all reports
router.get('/reports', reportController.getAll);

// Retrieve a single Report with id
router.get('/reports/:id', reportController.getOne);

// Delete a Report with id
router.delete('/reports/:id', reportController.deleteReport);

// Create new users
router.post('/user', userController.create);

// Update a user with id
router.put('/user/:id', userController.update);

// Retrieve all users
router.get('/users', userController.getAll);

// Retrieve a user
router.get('/user/:id', userController.getOne);

// Delete a users
router.delete('/user/:id', userController.delete);

export default router;

