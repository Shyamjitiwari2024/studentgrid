import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    id:{type: Number, required: true},
    name:{type: String, required: true},
    totalMarks:{type: Number, required: true}
})

export default mongoose.model('Student', StudentSchema);