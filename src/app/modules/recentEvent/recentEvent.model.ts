import { Schema, model } from "mongoose";
import RecentEvent from "./recentEvent.interface";


const recentEventSchema = new Schema<RecentEvent>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
})

const recentEventModel = model<RecentEvent>('recentevents', recentEventSchema)

export default recentEventModel;