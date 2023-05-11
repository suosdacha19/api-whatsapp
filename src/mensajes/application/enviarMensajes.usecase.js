const repository = require('../infrastructure/repository/enviarMensajes.repository')
module.exports = async ({body}) => {
    return repository({body});
}