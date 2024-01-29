import RecentEvent from "./recentEvent.interface";
import recentEventModel from "./recentEvent.model";


const createRecentEventToDB = async (recentEvent: RecentEvent) => {
    const result = await recentEventModel.create(recentEvent)
    return result
}

const getRecentEventFromDB = async () => {
    const result = await recentEventModel.find()
    return result
}

const getSingleRecentEventFromDB = async (id: any) => {
    const result = await recentEventModel.findOne({ _id: id })
    return result
}

const updateRecentEventInDB = async (id: any, updatedRecentEventData: Partial<RecentEvent>) => {
    const result = await recentEventModel.updateOne({ _id: id }, { $set: updatedRecentEventData })
    return result
}

const deleteSingleRecentEventFromDB = async (id: any) => {
    const result = await recentEventModel.deleteOne({ _id: id })
    return result
}

export const recentEventService = {
    createRecentEventToDB,
    getRecentEventFromDB,
    getSingleRecentEventFromDB,
    updateRecentEventInDB,
    deleteSingleRecentEventFromDB
}