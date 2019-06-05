import express from 'express';
import aidController from '../controllers/aidControllers';
import reportController from '../controllers/reportControllers';
import commentController from '../controllers/aidComments';
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

// Comment route
// Create a new Aid Comment
router.post('/aids/:aidId/comments', commentController.create);

// Delete a Aid Comment with id
router.delete('/aids/:aidId/comments/:commentId', commentController.deleteComment);

// Retrieve a single Aid comment with id
router.get('/aids/:aidId/comments/:commentId', commentController.getOne);

// Update a Aid comment with id
router.put('/aids/:aidId/comments/:commentId', commentController.updateComment);

export default router;
