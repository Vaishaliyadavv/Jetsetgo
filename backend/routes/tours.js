import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
} from "./../controllers/tourController.js";
// import { updateTour } from "./../controllers/tourController.js";
// import { deleteTour } from "./../controllers/tourController.js";
// import { getSingleTour } from "./../controllers/tourController.js";
// import { getAllTour } from "./../controllers/tourController.js";
const router = express.Router();

// create new tour
router.post("/", createTour);

// update tour
router.put("/:id", updateTour);

// delete tour
router.delete("/:id", deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// get all tours
router.get("/", getAllTour);

// Get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

export default router;
