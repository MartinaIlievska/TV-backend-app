const TV = require("../pkg/tv/tvProgramaSchema")


exports.createTv = async (req, res) => {
    try {
        const newTv = await TV.create(req.body);
        res.status(201).json({
            status:'success',
            data: {
                TV: newTv,
            },
        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

exports.getAllTv = async (req,res) => {
    try {
        const TV = await TV.find();

        res.status(200).json({
            status:'success',
            data: {
                allTV : TV,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.getTVById = async (req,res) => {
    try {
        const id = req.params.id;
        const TV = await TV.findById(id);

        res.status(200).json({
            status:'success',
            data: {
                TV,
            },
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

exports.updateTV = async (req,res) => {
    try {
        const TV = await TV.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
        });
        res.status(200).json({
            status:'success',
            data: {
                TV,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.deleteTV = async(req,res) => {
    try {
        const deletedTV = await TV.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:'success',
            data: deletedTV,
        });  
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};