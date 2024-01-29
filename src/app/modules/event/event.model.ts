import { Schema, model } from "mongoose";
import Event from "./event.interface";

const eventSchema = new Schema<Event>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true }
})

const eventModel = model<Event>('events', eventSchema)

export default eventModel