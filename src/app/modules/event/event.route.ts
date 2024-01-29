import express from "express";
import { eventControllers } from "./event.controller";

const router = express.Router()

router.post('/', eventControllers.createEvent)
router.get('/', eventControllers.getEvent)
router.get('/single', eventControllers.getEventById)
router.put('/', eventControllers.updateEvent)
router.delete('/', eventControllers.deleteEvent)

export const eventRoutes = router;