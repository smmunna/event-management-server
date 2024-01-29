import express from 'express'
import { serviceController } from './service.controller'

const router = express.Router()

router.post('/', serviceController.createService)
router.get('/', serviceController.getService)
router.delete('/', serviceController.deleteService)

export const serviceRouter = router