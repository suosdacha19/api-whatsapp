const repository = require('../infrastructure/repository/validarNumero.repository')
module.exports = async ({params}) => {
    return repository({params});
}