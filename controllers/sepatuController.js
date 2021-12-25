import SepatuModel from "../models/SepatuModel.js"

export const getSepatu = async (req, res) => {
    try {
        const dataSepatu = await SepatuModel.find();
        res.status(200).json(dataSepatu);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// store data sepatu 
export const storeSepatu = async (req, res) => {
    const data = new SepatuModel(req.body)
    try {
        const dataSepatuCreate = await data.save();
        res.status(201).json(dataSepatuCreate);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// update data sepatu 
export const updateSepatu = async (req, res) => {
    var getDataSepatu = await SepatuModel.findById(req.params.id);
    if (!getDataSepatu) return res.status(404).json({
        message: "data tidak ditemukan "
    });
    try {
        const dataSepatuUpdate = await SepatuModel.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        res.status(201).json(dataSepatuUpdate);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// delete data sepatu 
export const deleteSepatu = async (req, res) => {
    var getDataSepatu = await SepatuModel.findById(req.params.id);
    if (!getDataSepatu) return res.status(404).json({
        message: "data tidak ditemukan "
    });
    try {
        const dataSepatuaDelete = await SepatuModel.deleteOne({
            _id: req.params.id
        });
        res.status(201).json(dataSepatuaDelete);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}