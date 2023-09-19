const { fetchData, storedData} = require('../models/mysql');

//send data to api endpoint 
async function sendData() {
    try {
        await fetchData();
        const response = await storedData();
        const result = { data: response };
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendData;
