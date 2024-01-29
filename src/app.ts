import express, { Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { eventRoutes } from './app/modules/event/event.route'
import { recentEventRoutes } from './app/modules/recentEvent/recentEvent.route'
import { serviceRouter } from './app/modules/ourservice/service.route'

const app = express()

app.use(express.json())
app.use(cors())

// Route handlings;
app.use('/api/v1/events', eventRoutes)
app.use('/api/v1/events/recents', recentEventRoutes)
app.use('/api/v1/services', serviceRouter)


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Event Management')
})

export default app;