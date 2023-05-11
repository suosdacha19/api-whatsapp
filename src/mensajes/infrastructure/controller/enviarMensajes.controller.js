const usecase = require('../../application/enviarMensajes.usecase');
module.exports = (req,res,next) => {
    usecase(req).then((data) => {
        res.send(data);
    }).catch((err) => {
        next(err);
    });
}