import express from "express"
import { recentEventController } from "./recentEvent.controller"

const router = express.Router()

router.post('/', recentEventController.createRecentEvent)
router.get('/', recentEventController.getRecentEvent)
router.get('/single', recentEventController.getSingleRecentEvent)
router.put('/', recentEventController.updateRecentEvent)
router.delete('/', recentEventController.deleteRecentEvent)


export const recentEventRoutes = router