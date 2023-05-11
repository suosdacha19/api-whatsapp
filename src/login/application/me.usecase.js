const repository = require('../infrastructure/repository/me.repository')
module.exports = async () => {
    return repository();
}