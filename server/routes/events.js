import express from 'express'
import EventsController from '../controllers/events.js'

const router = express.Router()

router.get('/', EventsController.getEvents)
router.get('/location', EventsController.getLocation)
router.get('/events/:eventId', EventsController.getEventById)
router.get('/location/:locationId', EventsController.getEventByLocation)

export default router