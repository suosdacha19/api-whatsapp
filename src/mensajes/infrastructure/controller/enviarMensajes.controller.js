const usecase = require('../../application/enviarMensajes.usecase');
module.exports = (req,res,next) => {
    usecase(req).then(({ status, mensaje }) => {
        res.status(status).json(mensaje);
    }).catch((err) => {
        next(err);
    });
}