import  mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: String,
        required: true,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo"
    }]//Array of subtodo

}, {timestamps : true})

export const Todo = mongoose.model("Todo", todoSchema)