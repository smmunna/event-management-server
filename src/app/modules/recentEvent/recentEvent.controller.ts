import { Request, Response } from "express";
import Joi from "joi";
import { recentEventService } from "./recentEvent.service";


const createRecentEvent = async (req: Request, res: Response) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        img: Joi.string().required(),
    })

    const { error, value } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            error: error.details,
        });
    }

    try {
        const result = await recentEventService.createRecentEventToDB(value)
        res.status(200).json({
            success: true,
            message: ' Recent Event created successfully',
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

const getRecentEvent = async (req: Request, res: Response) => {
    try {
        const result = await recentEventService.getRecentEventFromDB()
        res.status(200).json({
            success: true,
            message: 'Recent Event fetched successfully',
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

const getSingleRecentEvent = async (req: Request, res: Response) => {
    const id = req.query.id
    try {
        const result = await recentEventService.getSingleRecentEventFromDB(id)
        res.status(200).json({
            success: true,
            message: 'Recent Event fetched successfully',
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

const updateRecentEvent = async (req: Request, res: Response) => {
    const { title, description, price, img } = req.body
    const id = req.query.id
    try {
        const updatedRecentEventData = {
            title,
            description,
            img
        }
        const result = await recentEventService.updateRecentEventInDB(id, updatedRecentEventData)
        res.status(200).json({
            success: true,
            message: 'Recent Event updated successfully',
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

const deleteRecentEvent = async (req: Request, res: Response) => {
    const id = req.query.id
    try {
        const result = await recentEventService.deleteSingleRecentEventFromDB(id)
        res.status(200).json({
            success: true,
            message: 'Recent Event deleted successfully',
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

export const recentEventController = {
    createRecentEvent,
    getRecentEvent,
    getSingleRecentEvent,
    updateRecentEvent,
    deleteRecentEvent,
}