import Event from "./event.interface";
import eventModel from "./event.model";

const deleteEventInDB = async (id: any) => {
    const result = await eventModel.deleteOne({ _id: id })
    return result
}

const updateEventInDB = async (id: any, updatedEventData: Partial<Event>) => {
    const result = await eventModel.updateOne({ _id: id }, { $set: updatedEventData })
    return result
}

const getEventByIdFromDB = async (id: any) => {
    const result = await eventModel.findOne({ _id: id })
    return result
}

const getEventFromDB = async () => {
    const result = await eventModel.find()
    return result
}

const createEventToDB = async (event: Event) => {
    const result = await eventModel.create(event)
    return result
}

export const eventService = {
    createEventToDB,
    getEventFromDB,
    getEventByIdFromDB,
    updateEventInDB,
    deleteEventInDB
} 