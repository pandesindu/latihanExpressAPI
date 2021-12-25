import Mongoose from "mongoose";

const Notification = Mongoose.Schema({
    reqID: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    userID: {
        type: Number,
        require: true
    },

}, {
    timestamps: true
});


export default Mongoose.model("Notification", Notification);