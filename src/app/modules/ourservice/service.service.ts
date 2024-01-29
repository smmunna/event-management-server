import Service from "./service.interface";
import ServiceModel from "./service.model";


const createService = async (service: Service) => {
    const result = await ServiceModel.create(service)
    return result
}

const getServiceFromDB = async () => {
    const result = await ServiceModel.find()
    return result
}

const deleteServiceInDB = async (id: any) => {
    const result = await ServiceModel.deleteOne({ _id: id })
    return result
}


export const serviceEventService = {
    createService,
    getServiceFromDB,
    deleteServiceInDB,
}