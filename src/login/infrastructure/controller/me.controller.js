const usecase = require('../../application/me.usecase');
module.exports = (req,res,next) => {
    usecase().then((data) => {
        res.json(data);
    }).catch((err) => {
        next(err);
    });
}