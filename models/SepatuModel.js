import Mongoose from "mongoose";

const dataSepatu = Mongoose.Schema({
    kodeSepatu: {
        type: String,
        require: true
    },
    namaSepatu: {
        type: String,
        require: true
    },
    warnaSepatu: {
        type: String,
        require: true
    },
    ukuranSepatu: {
        type: Number,
        require: true
    },
    hargaSepatu: {
        type: Number,
        require: true
    }
}, {
    timestamp: true
});

export default Mongoose.model("dataSepatu", dataSepatu);