import { Request, Response } from "express";
import Joi from "joi";
import { serviceEventService } from "./service.service";


const createService = async (req: Request, res: Response) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.array().items(
            Joi.object({
                service_name: Joi.string().required()
            })
        ).required(),
        img: Joi.string().required()
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
        const result = await serviceEventService.createService(value)
        res.status(200).json({
            success: true,
            message: 'Service created successfully',
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

const getService = async (req: Request, res: Response) => {
    try {
        const result = await serviceEventService.getServiceFromDB()
        res.status(200).json({
            success: true,
            message: 'Service fetched successfully',
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

const deleteService = async (req: Request, res: Response) => {
    const id = req.query.id
    try {
        const result = await serviceEventService.deleteServiceInDB(id)
        res.status(200).json({
            success: true,
            message: 'Service deleted successfully',
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

export const serviceController = {
    createService,
    getService,
    deleteService,
}