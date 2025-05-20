const Vraboteni = require("../pkg/vraboteni/vraboteni")

exports.getAllVraboteni = async(req, res) => {
    try{
        const vraboteni = await Vraboteni.find();
        res.status(201).json({
            status:"Success",
            data: vraboteni,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.getVraboten = async(req, res) => {
    try{
        const vraboten = await Vraboteni.findById(req.params.id);
        res.status(201).json({
            status:"Success",
            data: vraboten,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.addVraboten = async(req, res) => {
    try{
        const vraboten = await Vraboteni.create(req.body);
        res.status(201).json({
            status:"Success",
            data: vraboten,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.deleteVraboten = async(req, res) => {
    try{
        await Vraboteni.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status:"Success",
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.updateVraboten = async(req, res) => {
    try{
        const vraboten = await Vraboteni.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(201).json({
            status:"Success",
            data: vraboten,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};