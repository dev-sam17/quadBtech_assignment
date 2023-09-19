const sendData = require('../services/service')

async function httpLoadData(req, res, next) {
    try {
        const result = await sendData()
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error)
        res.status(500).json
    }
}

module.exports = httpLoadData;
