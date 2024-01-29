import { Request, Response } from "express";
import { eventService } from "./event.service";
import Joi from "joi";


const createEvent = async (req: Request, res: Response) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        img: Joi.string().uri().required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            error: error.details,
        });
    }

    try {
        const result = await eventService.createEventToDB(value)
        res.status(200).json({
            success: true,
            message: 'Event created successfully',
            data: result
        })
    } catch (error) {
        res.status(401).json({
            success: true,
            message: 'Error occured',
            error: error
        })
    }
}

const getEvent = async (req: Request, res: Response) => {
    try {
        const result = await eventService.getEventFromDB()
        res.status(200).json({
            success: true,
            message: 'Event fetched successfully',
            data: result
        })
    } catch (error) {
        res.status(401).json({
            success: true,
            message: 'Error occured',
            error: error
        })
    }
}

const getEventById = async (req: Request, res: Response) => {
    const id = req.query.id;
    try {
        const result = await eventService.getEventByIdFromDB(id)
        res.status(200).json({
            success: true,
            message: 'Event fetched successfully',
            data: result
        })
    } catch (error) {
        res.status(401).json({
            success: true,
            message: 'Error occured',
            error: error
        })
    }
}

const updateEvent = async (req: Request, res: Response) => {
    const { title, description, price, img } = req.body
    const id = req.query.id
    try {
        const updatedEventData = {
            title,
            description,
            price,
            img
        }
        const result = await eventService.updateEventInDB(id, updatedEventData)
        res.status(200).json({
            success: true,
            message: 'Event updated successfully',
            data: result
        })
    } catch (error) {
        res.status(401).json({
            success: true,
            message: 'Error occured',
            error: error
        })
    }
}

const deleteEvent = async (req: Request, res: Response) => {
    const id = req.query.id
    try {
        const result = await eventService.deleteEventInDB(id)
        res.status(200).json({
            success: true,
            message: 'Event deleted successfully',
            data: result
        })
    } catch (error) {
        res.status(401).json({
            success: true,
            message: 'Error occured',
            error: error
        })
    }
}

export const eventControllers = {
    createEvent,
    getEvent,
    getEventById,
    updateEvent,
    deleteEvent
}