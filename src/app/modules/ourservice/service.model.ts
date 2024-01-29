import { Schema, model } from "mongoose";
import Service from "./service.interface";


const serviceSchema = new Schema<Service>({
    title: { type: String, required: true },
    description: [
        {
            service_name: { type: String, required: true }
        }
    ],
    img: { type: String, required: true }
})

const ServiceModel = model<Service>('services', serviceSchema)

export default ServiceModel